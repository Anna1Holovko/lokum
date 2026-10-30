"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { SearchFilters, FilterValues } from "@/components/search/SearchFilters";
import { sampleProperties, sortProperties } from "@/data/properties";
import { SEARCH_SORT_OPTIONS } from "@/types/property";
import { Map, LayoutGrid, List } from "lucide-react";

function BuyApartmentsContent() {
  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get("city");

  const [filters, setFilters] = useState<FilterValues>({});
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");

  // Apply city from URL only on first load
  useEffect(() => {
    if (cityFromUrl) {
      setFilters(prev => ({ ...prev, city: cityFromUrl }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityFromUrl]);

  const filteredProperties = useMemo(() => {
    let results = sampleProperties.filter(
      (p) => p.transactionType === "sale" && p.propertyType === "apartment"
    );

    if (filters.city) {
      results = results.filter(
        (p) => p.location.city.toLowerCase() === String(filters.city).toLowerCase()
      );
    }
    if (filters.priceMin) {
      results = results.filter((p) => p.price >= Number(filters.priceMin));
    }
    if (filters.priceMax) {
      results = results.filter((p) => p.price <= Number(filters.priceMax));
    }
    if (filters.roomsMin) {
      results = results.filter((p) => p.rooms >= Number(filters.roomsMin));
    }
    if (filters.areaMin) {
      results = results.filter((p) => p.area >= Number(filters.areaMin));
    }
    if (filters.areaMax) {
      results = results.filter((p) => p.area <= Number(filters.areaMax));
    }

    return sortProperties(results, sortBy);
  }, [filters, sortBy]);

  // Get display name for city
  const getCityDisplayName = (citySlug: string): string => {
    const cityNames: Record<string, string> = {
      'warszawa': 'Warszawa',
      'kraków': 'Kraków',
      'krakow': 'Kraków',
      'wrocław': 'Wrocław',
      'wroclaw': 'Wrocław',
      'poznań': 'Poznań',
      'poznan': 'Poznań',
      'gdańsk': 'Gdańsk',
      'gdansk': 'Gdańsk',
      'łódź': 'Łódź',
      'lodz': 'Łódź',
      'katowice': 'Katowice',
      'szczecin': 'Szczecin',
      'lublin': 'Lublin',
      'bydgoszcz': 'Bydgoszcz',
    };
    return cityNames[citySlug.toLowerCase()] || citySlug;
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] page-transition">
      {/* Hero Header */}
      <div className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[13px] text-white/40 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/60 transition-colors">
              Strona główna
            </Link>
            <span aria-hidden="true">/</span>
            <span className="hover:text-white/60 cursor-pointer">Kupno</span>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">
              Mieszkania
            </span>
            {filters.city && (
              <>
                <span aria-hidden="true">/</span>
                <span className="text-white">{getCityDisplayName(filters.city)}</span>
              </>
            )}
          </nav>

          {/* Title */}
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
            Na sprzedaż
          </span>
          <h1 className="headline-1 text-white mb-4">
            Mieszkania na sprzedaż
            {filters.city && (
              <span className="text-white/70"> w {getCityDisplayName(filters.city)}</span>
            )}
          </h1>
          <p className="text-[18px] text-white/50 max-w-2xl">
            {filters.city
              ? `Przeglądaj aktualne oferty mieszkań w mieście ${getCityDisplayName(filters.city)}.`
              : "Przeglądaj aktualne oferty mieszkań w całej Polsce. Filtruj według lokalizacji, ceny i metrażu."
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Filters */}
        <div className="mb-8">
          <SearchFilters
            transactionType="sale"
            initialValues={filters}
            onFilterChange={(newFilters) => setFilters(newFilters)}
          />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <p className="text-[15px] text-[var(--color-text-muted)]">
            Znaleziono{" "}
            <span className="font-medium text-[var(--color-text-primary)]">
              {filteredProperties.length}
            </span>{" "}
            {filteredProperties.length === 1 ? "nieruchomość" :
             filteredProperties.length < 5 ? "nieruchomości" : "nieruchomości"}
          </p>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div>
              <label htmlFor="sort-select" className="sr-only">
                Sortowanie
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-11 px-4 pr-10 bg-white border border-[var(--color-border)] text-[14px] appearance-none focus:outline-none focus:border-[var(--color-accent)] transition-all"
              >
                {SEARCH_SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div
              className="flex border border-[var(--color-border)] bg-white"
              role="group"
              aria-label="Widok wyników"
            >
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-all ${
                  viewMode === "grid"
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                }`}
                aria-label="Widok siatki"
                aria-pressed={viewMode === "grid"}
              >
                <LayoutGrid className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 border-l border-r border-[var(--color-border)] transition-all ${
                  viewMode === "list"
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                }`}
                aria-label="Widok listy"
                aria-pressed={viewMode === "list"}
              >
                <List className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2.5 transition-all ${
                  viewMode === "map"
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                }`}
                aria-label="Widok mapy"
                aria-pressed={viewMode === "map"}
              >
                <Map className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {viewMode === "map" ? (
          <div className="bg-white border border-[var(--color-border)] p-16 text-center">
            <div className="w-16 h-16 bg-[var(--color-background)] flex items-center justify-center mx-auto mb-6">
              <Map className="w-8 h-8 text-[var(--color-text-muted)]" />
            </div>
            <h3 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-3">
              Widok mapy
            </h3>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              Interaktywna mapa z nieruchomościami będzie dostępna wkrótce.
            </p>
          </div>
        ) : filteredProperties.length > 0 ? (
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="bg-white border border-[var(--color-border)] p-16 text-center">
            <h3 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-3">
              Brak wyników
            </h3>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              Nie znaleziono nieruchomości spełniających wybrane kryteria.
              Spróbuj zmienić filtry.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="container-custom">
          <div className="h-4 w-32 bg-white/10 mb-8"></div>
          <div className="h-6 w-24 bg-[var(--color-accent)]/30 mb-3"></div>
          <div className="h-12 w-80 bg-white/20 mb-4"></div>
          <div className="h-6 w-96 bg-white/10"></div>
        </div>
      </div>
      <div className="container-custom py-12">
        <div className="h-48 bg-white border border-[var(--color-border)] mb-8 skeleton-luxury"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-80 bg-white border border-[var(--color-border)] skeleton-luxury"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BuyApartmentsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BuyApartmentsContent />
    </Suspense>
  );
}
