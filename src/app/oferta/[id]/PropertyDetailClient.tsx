"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/Button";
import {
  formatPrice,
  formatPricePerM2,
  formatArea,
  formatRooms,
  formatFloor,
  formatDate,
} from "@/lib/utils";
import {
  Heart,
  Share2,
  Phone,
  Mail,
  MapPin,
  Building2,
  ChevronLeft,
  ChevronRight,
  X,
  User,
  Clock,
  Eye,
} from "lucide-react";

interface PropertyDetailClientProps {
  property: Property;
  similarProperties: Property[];
}

export function PropertyDetailClient({
  property,
  similarProperties,
}: PropertyDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Dzień dobry,\n\nJestem zainteresowany/a tą nieruchomością. Proszę o kontakt w celu umówienia prezentacji.\n\nPozdrawiam`,
  });

  const isRent = property.transactionType === "rent";

  const amenityLabels: Record<string, string> = {
    balcony: "Balkon",
    terrace: "Taras",
    garden: "Ogród",
    basement: "Piwnica",
    garage: "Garaż",
    parkingSpot: "Parking",
    elevator: "Winda",
    airConditioning: "Klimatyzacja",
    furnished: "Umeblowane",
    separateKitchen: "Oddzielna kuchnia",
    utilityRoom: "Pomieszczenie gospodarcze",
    securitySystem: "System alarmowy",
    intercom: "Domofon",
    gatedCommunity: "Osiedle strzeżone",
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  }, [property.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  }, [property.images.length]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGalleryOpen) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          prevImage();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          nextImage();
        } else if (e.key === "Escape") {
          setIsGalleryOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, nextImage, prevImage]);

  // Property name
  const propertyName = property.title.split(",")[0].trim();

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Image Gallery - starts below main header */}
      <div className="pt-20">
        {/* Breadcrumb Bar - matching other inner pages */}
        <div className="bg-white border-b border-[var(--color-border)]">
          <div className="container-custom py-4 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
                Strona główna
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={isRent ? "/wynajem/mieszkania" : "/kupno/mieszkania"}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {isRent ? "Wynajem" : "Kupno"}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[var(--color-text-primary)]" aria-current="page">
                {propertyName}
              </span>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isFavorite
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-background)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                }`}
                aria-label={isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                aria-pressed={isFavorite}
              >
                <Heart
                  className={`w-4 h-4 ${isFavorite ? "fill-white" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <button
                className="w-9 h-9 bg-[var(--color-background)] hover:bg-[var(--color-accent-light)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Udostępnij ofertę"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[55vh] md:h-[65vh] bg-[#0D1B2A]">
          {property.images.length > 0 ? (
            <>
              <Image
                src={property.images[currentImageIndex].url}
                alt={property.images[currentImageIndex].alt || property.title}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Navigation arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                    aria-label="Poprzednie zdjęcie"
                  >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                    aria-label="Następne zdjęcie"
                  >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div
                className="absolute bottom-6 left-6 text-white/80 text-[14px] font-medium"
                role="status"
                aria-live="polite"
              >
                {currentImageIndex + 1} / {property.images.length}
              </div>

              {/* View all button */}
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="absolute bottom-6 right-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-[14px] font-medium transition-all duration-300"
              >
                Zobacz wszystkie zdjęcia
              </button>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Building2 className="w-20 h-20 text-white/20" />
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-10">
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
                {isRent ? "Wynajem" : "Na sprzedaż"}
              </span>
              <h1 className="headline-1 text-[var(--color-text-primary)] mb-4">
                {propertyName}
              </h1>
              <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[16px]">
                  {property.location.street && `${property.location.street}, `}
                  {property.location.district && `${property.location.district}, `}
                  {property.location.city}
                </span>
              </div>
            </div>

            {/* Price - Large */}
            <div className="mb-12 pb-12 border-b border-[var(--color-border)]">
              <div className="text-[42px] font-semibold text-[var(--color-text-primary)] tracking-[-0.02em]">
                {formatPrice(property.price)}
                {isRent && (
                  <span className="text-[20px] font-normal text-[var(--color-text-muted)]">
                    {" "}
                    /mies.
                  </span>
                )}
              </div>
              <div className="text-[16px] text-[var(--color-text-muted)] mt-2">
                {formatPricePerM2(property.price, property.area)}
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-white border border-[var(--color-border)]">
                <div className="text-[28px] font-heading text-[var(--color-text-primary)] mb-1">
                  {formatArea(property.area)}
                </div>
                <div className="text-[13px] text-[var(--color-text-muted)] uppercase tracking-wide">
                  Powierzchnia
                </div>
              </div>
              <div className="text-center p-6 bg-white border border-[var(--color-border)]">
                <div className="text-[28px] font-heading text-[var(--color-text-primary)] mb-1">
                  {property.rooms}
                </div>
                <div className="text-[13px] text-[var(--color-text-muted)] uppercase tracking-wide">
                  {property.rooms === 1 ? "Pokój" : property.rooms < 5 ? "Pokoje" : "Pokoi"}
                </div>
              </div>
              <div className="text-center p-6 bg-white border border-[var(--color-border)]">
                <div className="text-[28px] font-heading text-[var(--color-text-primary)] mb-1">
                  {property.floor !== undefined
                    ? formatFloor(property.floor, property.totalFloors)
                    : "-"}
                </div>
                <div className="text-[13px] text-[var(--color-text-muted)] uppercase tracking-wide">
                  Piętro
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="headline-3 text-[var(--color-text-primary)] mb-6">
                O nieruchomości
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.8] whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <div className="mb-12">
                <h2 className="headline-3 text-[var(--color-text-primary)] mb-6">
                  Udogodnienia
                </h2>
                <div className="gold-line mb-6" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 p-4 bg-white border border-[var(--color-border)]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                      <span className="text-[14px] text-[var(--color-text-secondary)]">
                        {amenityLabels[amenity] || amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Thumbnail Gallery */}
            {property.images.length > 1 && (
              <div className="mb-12">
                <h2 className="headline-3 text-[var(--color-text-primary)] mb-6">
                  Galeria
                </h2>
                <div className="gold-line mb-6" />
                <div className="grid grid-cols-4 gap-3">
                  {property.images.slice(0, 8).map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsGalleryOpen(true);
                      }}
                      className={`relative aspect-[4/3] overflow-hidden group ${
                        index === currentImageIndex
                          ? "ring-2 ring-[var(--color-accent)]"
                          : ""
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt=""
                        fill
                        sizes="150px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {index === 7 && property.images.length > 8 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white text-[16px] font-medium">
                            +{property.images.length - 8}
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Cost breakdown for rentals */}
              {isRent && (
                <div className="bg-white border border-[var(--color-border)] p-6">
                  <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">
                    Koszty miesięczne
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[15px]">
                      <span className="text-[var(--color-text-muted)]">Czynsz</span>
                      <span className="font-medium">{formatPrice(property.price)}</span>
                    </div>
                    {property.adminFee && (
                      <div className="flex justify-between text-[15px]">
                        <span className="text-[var(--color-text-muted)]">
                          Opłaty administracyjne
                        </span>
                        <span className="font-medium">
                          ~{formatPrice(property.adminFee)}
                        </span>
                      </div>
                    )}
                    <div className="h-[1px] bg-[var(--color-border)] my-3" />
                    <div className="flex justify-between text-[16px]">
                      <span className="font-medium">Razem miesięcznie</span>
                      <span className="font-semibold text-[var(--color-accent)]">
                        ~{formatPrice(property.price + (property.adminFee || 0))}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Agent Card */}
              <div className="bg-white border border-[var(--color-border)] p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                  <div className="w-14 h-14 bg-[var(--color-accent-light)] rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-text-primary)]">
                      {property.advertiser.name}
                    </div>
                    <div className="text-[13px] text-[var(--color-text-muted)]">
                      {property.advertiser.type === "agency"
                        ? "Agencja nieruchomości"
                        : property.advertiser.type === "developer"
                        ? "Deweloper"
                        : "Właściciel prywatny"}
                    </div>
                  </div>
                </div>

                {/* Contact buttons */}
                <div className="space-y-3">
                  {property.advertiser.phone && (
                    <Button
                      variant="primary"
                      className="w-full h-12"
                      onClick={() => setShowPhone(!showPhone)}
                    >
                      <Phone className="w-5 h-5" />
                      {showPhone ? property.advertiser.phone : "Pokaż numer"}
                    </Button>
                  )}
                  <Button variant="outline" className="w-full h-12">
                    <Mail className="w-5 h-5" />
                    Napisz wiadomość
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-heading text-[20px] text-[var(--color-text-primary)] mb-2">
                  Umów prezentację
                </h3>
                <p className="text-[14px] text-[var(--color-text-muted)] mb-6">
                  Nasz doradca skontaktuje się z Państwem.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Imię i nazwisko
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Imię i nazwisko"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Adres email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">
                      Telefon
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Telefon"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Wiadomość
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Wiadomość"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="form-input form-textarea"
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full h-12">
                    Wyślij zapytanie
                  </Button>
                </form>
              </div>

              {/* Meta info */}
              <div className="text-[13px] text-[var(--color-text-muted)] space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Dodano: {formatDate(property.publishedAt)}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Wyświetlenia: {property.viewCount || 0}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[var(--color-border)]">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
                  Podobne oferty
                </span>
                <h2 className="headline-2 text-[var(--color-text-primary)]">
                  Może Cię zainteresować
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full Screen Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0C10] flex items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Pełnoekranowa galeria zdjęć"
        >
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Zamknij galerię (Escape)"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft className="w-8 h-8" aria-hidden="true" />
          </button>

          <div className="relative w-full max-w-6xl h-[85vh] mx-6">
            <Image
              src={property.images[currentImageIndex].url}
              alt={`${property.title} - zdjęcie ${currentImageIndex + 1} z ${
                property.images.length
              }`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Następne zdjęcie"
          >
            <ChevronRight className="w-8 h-8" aria-hidden="true" />
          </button>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[15px] font-medium"
            role="status"
            aria-live="polite"
          >
            {currentImageIndex + 1} / {property.images.length}
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-6 right-6 text-white/40 text-[13px] hidden md:block">
            ← → nawigacja · Esc zamknij
          </div>
        </div>
      )}
    </div>
  );
}
