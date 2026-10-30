"use client";

import Link from "next/link";
import { MAJOR_CITIES } from "@/types/property";
import { sampleProperties } from "@/data/properties";
import { MapPin, ArrowRight } from "lucide-react";

// Count sale apartments per city (matching /kupno/mieszkania filter)
function getSaleApartmentCount(cityName: string): number {
  return sampleProperties.filter(
    p => p.location.city === cityName &&
         p.transactionType === "sale" &&
         p.propertyType === "apartment"
  ).length;
}

export function CitiesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {MAJOR_CITIES.slice(0, 10).map((city) => {
        const offerCount = getSaleApartmentCount(city.name);
        return (
          <Link
            key={city.name}
            href={`/kupno/mieszkania?city=${city.name.toLowerCase()}`}
            className="group relative p-5 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300"
          >
            {/* City name */}
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
              <h3 className="font-heading text-[17px] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {city.name}
              </h3>
            </div>

            {/* Offer count */}
            <p className="text-[13px] text-[var(--color-text-muted)]">
              {offerCount} {offerCount === 1 ? "oferta" : offerCount < 5 ? "oferty" : "ofert"}
            </p>

            {/* Arrow on hover */}
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        );
      })}
    </div>
  );
}
