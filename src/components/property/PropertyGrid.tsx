"use client";

import { Property } from "@/types/property";
import { PropertyCard } from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  onFavoriteClick?: (id: string) => void;
  columns?: 2 | 3 | 4;
}

export function PropertyGrid({
  properties,
  onFavoriteClick,
  columns = 3,
}: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div
        className="text-center py-20 animate-fade-in"
        role="status"
        aria-live="polite"
      >
        <p className="text-[18px] font-heading text-[var(--color-text-primary)] mb-2">
          Nie znaleziono nieruchomości
        </p>
        <p className="text-[15px] text-[var(--color-text-muted)]">
          Spróbuj zmienić kryteria wyszukiwania lub rozszerzyć obszar.
        </p>
      </div>
    );
  }

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div
      className={`grid ${gridCols[columns]} gap-8 animate-stagger`}
      role="list"
      aria-label={`Lista ${properties.length} nieruchomości`}
    >
      {properties.map((property) => (
        <div key={property.id} role="listitem">
          <PropertyCard property={property} onFavoriteClick={onFavoriteClick} />
        </div>
      ))}
    </div>
  );
}
