"use client";

import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import {
  formatPrice,
  formatPricePerM2,
  formatArea,
  formatRooms,
  formatFloor,
  generatePropertyUrl,
} from "@/lib/utils";
import { Heart, Building2 } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  onFavoriteClick?: (id: string) => void;
  variant?: "default" | "featured" | "compact";
}

export function PropertyCard({
  property,
  onFavoriteClick,
  variant = "default",
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);
  const [imageError, setImageError] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onFavoriteClick?.(property.id);
  };

  const propertyUrl = generatePropertyUrl(
    property.id,
    property.title,
    property.transactionType
  );

  const primaryImage =
    property.images.find((img) => img.isPrimary) || property.images[0];
  const isRent = property.transactionType === "rent";

  // Generate a property name (first part of title or location)
  const propertyName = property.title.split(",")[0].trim();

  return (
    <Link href={propertyUrl} className="block group">
      <article className="property-card-luxury bg-white overflow-hidden">
        {/* Image Container - 16:10 aspect ratio */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-background)]">
          {primaryImage && !imageError ? (
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt || `${property.title} - ${property.location.city}`}
              fill
              loading="lazy"
              className="object-cover property-image"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              aria-hidden="true"
            >
              <Building2 className="w-12 h-12 text-[var(--color-text-muted)]" />
            </div>
          )}

          {/* Hover overlay */}
          <div className="property-image-overlay" />

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          {/* Image count - subtle */}
          {property.images.length > 1 && (
            <div
              className="absolute bottom-4 left-4 text-white/90 text-[13px] font-medium"
              aria-hidden="true"
            >
              1/{property.images.length}
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={handleFavoriteClick}
            className={`favorite-btn absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
              isFavorite
                ? "bg-[#EF4444] text-white shadow-[0_4px_12px_rgba(239,68,68,0.4)] favorite-btn-active"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
            aria-label={isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
            aria-pressed={isFavorite}
          >
            <Heart
              className={`favorite-icon w-5 h-5 transition-all ${
                isFavorite ? "fill-white scale-110" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Transaction type - Very subtle, top left */}
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5">
              {isRent ? "Wynajem" : "Sprzedaż"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Property Name - Serif */}
          <h3 className="font-heading text-[20px] font-medium text-[var(--color-text-primary)] mb-1 line-clamp-1 group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {propertyName}
          </h3>

          {/* Location - Subtle */}
          <p className="text-[14px] text-[var(--color-text-muted)] mb-4">
            {property.location.district && `${property.location.district}, `}
            {property.location.city}
          </p>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                {formatPrice(property.price)}
              </span>
              {isRent && (
                <span className="text-[14px] text-[var(--color-text-muted)]">
                  /mies.
                </span>
              )}
            </div>
            <span className="text-[13px] text-[var(--color-text-muted)]">
              {formatPricePerM2(property.price, property.area)}
            </span>
          </div>

          {/* Separator line */}
          <div className="h-[1px] bg-[var(--color-border)] mb-4" />

          {/* Specs - Elegant, minimal */}
          <div className="flex items-center gap-3 text-[14px] text-[var(--color-text-muted)]">
            <span>{formatArea(property.area)}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)]" />
            <span>{formatRooms(property.rooms)}</span>
            {property.floor !== undefined && (
              <>
                <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)]" />
                <span>{formatFloor(property.floor, property.totalFloors)}</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

// Featured variant for homepage highlights
export function PropertyCardFeatured({ property, onFavoriteClick }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);
  const [imageError, setImageError] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onFavoriteClick?.(property.id);
  };

  const propertyUrl = generatePropertyUrl(
    property.id,
    property.title,
    property.transactionType
  );

  const primaryImage =
    property.images.find((img) => img.isPrimary) || property.images[0];
  const isRent = property.transactionType === "rent";
  const propertyName = property.title.split(",")[0].trim();

  return (
    <Link href={propertyUrl} className="block group">
      <article className="relative h-[500px] overflow-hidden">
        {/* Full background image */}
        {primaryImage && !imageError ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt || `${property.title} - ${property.location.city}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--color-background)]">
            <Building2 className="w-16 h-16 text-[var(--color-text-muted)]" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Favorite button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
            isFavorite
              ? "bg-[#EF4444] text-white"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          aria-label={isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        >
          <Heart
            className={`w-6 h-6 ${isFavorite ? "fill-white" : ""}`}
            aria-hidden="true"
          />
        </button>

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
            {isRent ? "Wynajem" : "Sprzedaż"}
          </span>

          <h3 className="font-heading text-[28px] font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
            {propertyName}
          </h3>

          <p className="text-[15px] text-white/70 mb-4">
            {property.location.district && `${property.location.district}, `}
            {property.location.city}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[28px] font-semibold text-white">
              {formatPrice(property.price)}
              {isRent && (
                <span className="text-[16px] font-normal text-white/60">
                  {" "}
                  /mies.
                </span>
              )}
            </span>

            <div className="flex items-center gap-4 text-[14px] text-white/70">
              <span>{formatArea(property.area)}</span>
              <span>{formatRooms(property.rooms)}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
