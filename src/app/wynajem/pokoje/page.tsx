"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { SearchFilters, FilterValues } from "@/components/search/SearchFilters";
import { sampleProperties, sortProperties } from "@/data/properties";
import { SEARCH_SORT_OPTIONS } from "@/types/property";
import { Map, LayoutGrid, List, DoorOpen } from "lucide-react";

export default function RentRoomsPage() {
  const [filters, setFilters] = useState<FilterValues>({});
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");

  const filteredProperties = useMemo(() => {
    let results = sampleProperties.filter(
      (p) => p.transactionType === "rent" && p.propertyType === "room"
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
    if (filters.areaMin) {
      results = results.filter((p) => p.area >= Number(filters.areaMin));
    }
    if (filters.areaMax) {
      results = results.filter((p) => p.area <= Number(filters.areaMax));
    }

    return sortProperties(results, sortBy);
  }, [filters, sortBy]);

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
            <span className="hover:text-white/60 cursor-pointer">Wynajem</span>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">
              Pokoje
            </span>
          </nav>

          {/* Title */}
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
            Do wynajmu
          </span>
          <h1 className="headline-1 text-white mb-4">
            Pokoje do wynajęcia
          </h1>
          <p className="text-[18px] text-white/50 max-w-2xl">
            Komfortowe pokoje w atrakcyjnych lokalizacjach.
            Idealne rozwiązanie dla studentów i młodych profesjonalistów.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Filters */}
        <div className="mb-8">
          <SearchFilters
            transactionType="rent"
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
            nieruchomości
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
        {filteredProperties.length === 0 ? (
          <div className="bg-white border border-[var(--color-border)] p-16 text-center">
            <div className="w-16 h-16 bg-[var(--color-background)] flex items-center justify-center mx-auto mb-6">
              <DoorOpen className="w-8 h-8 text-[var(--color-text-muted)]" />
            </div>
            <h3 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-3">
              Brak pokoi do wynajęcia
            </h3>
            <p className="text-[15px] text-[var(--color-text-muted)] mb-6">
              Aktualnie nie mamy ofert pokoi. Sprawdź apartamenty lub zmień kryteria wyszukiwania.
            </p>
            <Link
              href="/wynajem/mieszkania"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white text-[14px] font-medium tracking-wide hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Zobacz apartamenty
            </Link>
          </div>
        ) : viewMode === "map" ? (
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
        ) : (
          <PropertyGrid properties={filteredProperties} />
        )}
      </div>
    </div>
  );
}
