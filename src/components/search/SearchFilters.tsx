"use client";

import { useState, useEffect, useRef } from "react";
import { AMENITIES_OPTIONS, MAJOR_CITIES } from "@/types/property";
import { X, SlidersHorizontal, ChevronDown, ChevronUp, Check } from "lucide-react";

export interface FilterValues {
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  roomsMin?: number;
  roomsMax?: number;
  city?: string;
  amenities?: string[];
}

interface SearchFiltersProps {
  transactionType: "rent" | "sale";
  initialValues?: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
}

// Custom Dropdown Component matching header style
interface DropdownOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  options: DropdownOption[];
  value?: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
}

function FilterDropdown({ label, options, value, onChange, placeholder = "Wybierz..." }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2 block">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-12 px-4 bg-[var(--color-background)] border text-left flex items-center justify-between transition-all group ${
          isOpen
            ? "border-[var(--color-accent)] bg-white"
            : "border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
        }`}
      >
        <span className={`text-[15px] truncate ${selectedOption ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"}`}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu - matching header style */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 pt-1">
          <div className="bg-white border border-[var(--color-border)] shadow-lg animate-fade-in-down max-h-60 overflow-auto">
            <div className="py-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value === value ? undefined : option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-5 py-3 text-left text-[14px] flex items-center justify-between transition-colors duration-200 ${
                    option.value === value
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-light)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-background)]"
                  }`}
                >
                  {option.label}
                  {option.value === value && (
                    <Check className="w-4 h-4 text-[var(--color-accent)]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchFilters({
  transactionType,
  initialValues = {},
  onFilterChange,
}: SearchFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterValues>(initialValues);

  // Sync filters with initialValues when they change (e.g., from URL)
  useEffect(() => {
    setFilters(initialValues);
  }, [initialValues.city]); // Re-sync when city from URL changes

  const isRent = transactionType === "rent";

  const updateFilter = (key: keyof FilterValues, value: unknown) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilter = (key: keyof FilterValues) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const activeFiltersCount = Object.keys(filters).filter(
    (key) => filters[key as keyof FilterValues] !== undefined
  ).length;

  // City options
  const cityOptions: DropdownOption[] = [
    { value: "", label: "Wszystkie miasta" },
    ...MAJOR_CITIES.map((city) => ({
      value: city.name.toLowerCase(),
      label: city.name,
    })),
  ];

  // Rooms options
  const roomsOptions: DropdownOption[] = [
    { value: "", label: "Dowolna liczba" },
    { value: "1", label: "1 pokój" },
    { value: "2", label: "2 pokoje" },
    { value: "3", label: "3 pokoje" },
    { value: "4", label: "4 pokoje" },
    { value: "5", label: "5+ pokoi" },
  ];

  return (
    <div className="bg-white border border-[var(--color-border)]">
      {/* Main Filters Row */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* City */}
          <FilterDropdown
            label="Lokalizacja"
            options={cityOptions}
            value={filters.city || ""}
            onChange={(val) => updateFilter("city", val || undefined)}
            placeholder="Wszystkie miasta"
          />

          {/* Price Range */}
          <div>
            <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2 block">
              Cena {isRent ? "(miesięcznie)" : ""}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="od"
                value={filters.priceMin || ""}
                onChange={(e) =>
                  updateFilter(
                    "priceMin",
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                className="flex-1 min-w-0 h-12 px-3 sm:px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
              />
              <input
                type="number"
                placeholder="do"
                value={filters.priceMax || ""}
                onChange={(e) =>
                  updateFilter(
                    "priceMax",
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                className="flex-1 min-w-0 h-12 px-3 sm:px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Rooms */}
          <FilterDropdown
            label="Pokoje"
            options={roomsOptions}
            value={filters.roomsMin?.toString() || ""}
            onChange={(val) => updateFilter("roomsMin", val ? Number(val) : undefined)}
            placeholder="Dowolna liczba"
          />

          {/* Area */}
          <div>
            <label className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2 block">
              Powierzchnia (m²)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="od"
                value={filters.areaMin || ""}
                onChange={(e) =>
                  updateFilter(
                    "areaMin",
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                className="flex-1 min-w-0 h-12 px-3 sm:px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
              />
              <input
                type="number"
                placeholder="do"
                value={filters.areaMax || ""}
                onChange={(e) =>
                  updateFilter(
                    "areaMax",
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                className="flex-1 min-w-0 h-12 px-3 sm:px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Expand Button */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Więcej filtrów
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors"
            >
              Wyczyść filtry ({activeFiltersCount})
            </button>
          )}
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="px-4 sm:px-6 pb-6">
          <div className="pt-6 border-t border-[var(--color-border)]">
            <h4 className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-4">
              Udogodnienia
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {AMENITIES_OPTIONS.map((amenity) => {
                const isSelected = filters.amenities?.includes(amenity.value);
                return (
                  <button
                    key={amenity.value}
                    onClick={() => {
                      const current = filters.amenities || [];
                      const newAmenities = isSelected
                        ? current.filter((a) => a !== amenity.value)
                        : [...current, amenity.value];
                      updateFilter(
                        "amenities",
                        newAmenities.length > 0 ? newAmenities : undefined
                      );
                    }}
                    className={`px-3 sm:px-4 py-2 text-[13px] sm:text-[14px] border transition-all duration-300 ${
                      isSelected
                        ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                        : "bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {amenity.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="px-4 sm:px-6 pb-6 flex flex-wrap gap-2">
          {filters.city && (
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--color-accent-light)] text-[var(--color-text-primary)] text-[12px] sm:text-[13px] font-medium">
              {filters.city}
              <button
                onClick={() => clearFilter("city")}
                className="hover:text-[var(--color-accent)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          {(filters.priceMin || filters.priceMax) && (
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--color-accent-light)] text-[var(--color-text-primary)] text-[12px] sm:text-[13px] font-medium">
              {filters.priceMin || 0} - {filters.priceMax || "∞"} zł
              <button
                onClick={() => {
                  clearFilter("priceMin");
                  clearFilter("priceMax");
                }}
                className="hover:text-[var(--color-accent)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          {filters.roomsMin && (
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--color-accent-light)] text-[var(--color-text-primary)] text-[12px] sm:text-[13px] font-medium">
              {filters.roomsMin}+ pokoi
              <button
                onClick={() => clearFilter("roomsMin")}
                className="hover:text-[var(--color-accent)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
          {(filters.areaMin || filters.areaMax) && (
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--color-accent-light)] text-[var(--color-text-primary)] text-[12px] sm:text-[13px] font-medium">
              {filters.areaMin || 0} - {filters.areaMax || "∞"} m²
              <button
                onClick={() => {
                  clearFilter("areaMin");
                  clearFilter("areaMax");
                }}
                className="hover:text-[var(--color-accent)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
