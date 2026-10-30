"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { SearchFilters, FilterValues } from "@/components/search/SearchFilters";
import { sampleProperties, sortProperties } from "@/data/properties";
import { SEARCH_SORT_OPTIONS } from "@/types/property";
import { Map, LayoutGrid, List, Search, Building2, Home, Trees, DoorOpen } from "lucide-react";

export default function SearchPage() {
  const [filters, setFilters] = useState<FilterValues>({});
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");
  const [transactionType, setTransactionType] = useState<"all" | "rent" | "sale">("all");
  const [propertyType, setPropertyType] = useState<"all" | "apartment" | "house" | "room" | "plot">("all");

  const filteredProperties = useMemo(() => {
    let results = [...sampleProperties];

    // Filter by transaction type
    if (transactionType !== "all") {
      results = results.filter((p) => p.transactionType === transactionType);
    }

    // Filter by property type
    if (propertyType !== "all") {
      results = results.filter((p) => p.propertyType === propertyType);
    }

    // Apply other filters
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
  }, [filters, sortBy, transactionType, propertyType]);

  const propertyTypes = [
    { value: "all", label: "Wszystkie", icon: Search },
    { value: "apartment", label: "Mieszkania", icon: Building2 },
    { value: "house", label: "Domy", icon: Home },
    { value: "room", label: "Pokoje", icon: DoorOpen },
    { value: "plot", label: "Działki", icon: Trees },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F7] page-transition">
      <div className="bg-white">
        <div className="container-custom py-6">
          <nav className="flex items-center gap-2 text-[13px] text-black/40 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-black/60">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-black font-medium" aria-current="page">Wyszukiwarka</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
              <Search className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <h1 className="text-[28px] md:text-[34px] font-bold text-black tracking-tight">
                Wyszukiwarka
              </h1>
              <p className="text-[15px] text-black/50">
                Znajdź idealną nieruchomość
              </p>
            </div>
          </div>

          {/* Transaction Type Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTransactionType("all")}
              className={`px-4 py-2 rounded-xl text-[14px] font-medium transition-all ${
                transactionType === "all"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[#F2F2F7] text-black/60 hover:bg-black/5"
              }`}
            >
              Wszystkie
            </button>
            <button
              onClick={() => setTransactionType("rent")}
              className={`px-4 py-2 rounded-xl text-[14px] font-medium transition-all ${
                transactionType === "rent"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[#F2F2F7] text-black/60 hover:bg-black/5"
              }`}
            >
              Wynajem
            </button>
            <button
              onClick={() => setTransactionType("sale")}
              className={`px-4 py-2 rounded-xl text-[14px] font-medium transition-all ${
                transactionType === "sale"
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-[#F2F2F7] text-black/60 hover:bg-black/5"
              }`}
            >
              Kupno
            </button>
          </div>

          {/* Property Type Pills */}
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.value}
                  onClick={() => setPropertyType(type.value as typeof propertyType)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-medium transition-all ${
                    propertyType === type.value
                      ? "bg-black text-white"
                      : "bg-[#F2F2F7] text-black/60 hover:bg-black/5"
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-custom py-5">
        <div className="mb-5">
          <SearchFilters
            transactionType={transactionType === "all" ? "rent" : transactionType}
            onFilterChange={(newFilters) => setFilters(newFilters)}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <p className="text-[15px] text-black/50">
            Znaleziono <span className="font-semibold text-black">{filteredProperties.length}</span> ofert
          </p>

          <div className="flex items-center gap-3">
            <label htmlFor="sort-select" className="sr-only">Sortowanie</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-4 pr-8 bg-white rounded-xl text-[14px] font-medium appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              {SEARCH_SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="flex bg-white rounded-xl p-1 shadow-sm" role="group" aria-label="Widok wyników">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-black/40 hover:text-black/60"
                }`}
                aria-label="Widok siatki"
                aria-pressed={viewMode === "grid"}
              >
                <LayoutGrid className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-black/40 hover:text-black/60"
                }`}
                aria-label="Widok listy"
                aria-pressed={viewMode === "list"}
              >
                <List className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "map"
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-black/40 hover:text-black/60"
                }`}
                aria-label="Widok mapy"
                aria-pressed={viewMode === "map"}
              >
                <Map className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {viewMode === "map" ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-[#F2F2F7] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Map className="w-8 h-8 text-black/30" />
            </div>
            <h3 className="text-[17px] font-semibold text-black mb-2">
              Widok mapy
            </h3>
            <p className="text-[15px] text-black/40">
              Integracja z mapą będzie dostępna wkrótce.
            </p>
          </div>
        ) : (
          <PropertyGrid properties={filteredProperties} />
        )}
      </div>
    </div>
  );
}
