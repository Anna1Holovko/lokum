"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Search, MapPin } from "lucide-react";
import { MAJOR_CITIES } from "@/types/property";

interface SearchBarProps {
  variant?: "hero" | "compact";
  initialValues?: {
    transactionType?: string;
    location?: string;
    propertyType?: string;
  };
}

export function SearchBar({ variant = "hero", initialValues }: SearchBarProps) {
  const router = useRouter();
  const [transactionType, setTransactionType] = useState(
    initialValues?.transactionType || "rent"
  );
  const [location, setLocation] = useState(initialValues?.location || "");
  const [propertyType, setPropertyType] = useState(
    initialValues?.propertyType || "apartment"
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const type = transactionType === "rent" ? "wynajem" : "kupno";
    const prop = propertyType === "apartment" ? "mieszkania" : propertyType === "house" ? "domy" : "wszystkie";
    router.push(`/${type}/${prop}`);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSearch} role="search" aria-label="Wyszukiwarka nieruchomości">
      <div className={`flex flex-col sm:flex-row gap-3 ${isHero ? "" : "gap-2"}`}>
        {/* Transaction Type */}
        <div className="relative">
          <label htmlFor="transaction-type" className="sr-only">
            Typ transakcji
          </label>
          <select
            id="transaction-type"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="h-12 px-4 bg-[#F2F2F7] rounded-xl text-[15px] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 sm:w-36 cursor-pointer"
          >
            <option value="rent">Wynajem</option>
            <option value="sale">Kupno</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex-1 relative">
          <label htmlFor="location-input" className="sr-only">
            Lokalizacja - miasto lub dzielnica
          </label>
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" aria-hidden="true" />
          <input
            id="location-input"
            type="text"
            placeholder="Miasto lub dzielnica"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-[#F2F2F7] rounded-xl text-[15px] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 transition-all"
            list="cities"
            autoComplete="off"
          />
          <datalist id="cities">
            {MAJOR_CITIES.map((city) => (
              <option key={city.name} value={city.name} />
            ))}
          </datalist>
        </div>

        {/* Property Type */}
        <div className="relative">
          <label htmlFor="property-type" className="sr-only">
            Typ nieruchomości
          </label>
          <select
            id="property-type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="h-12 px-4 bg-[#F2F2F7] rounded-xl text-[15px] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 sm:w-40 cursor-pointer"
          >
            <option value="apartment">Mieszkanie</option>
            <option value="house">Dom</option>
            <option value="room">Pokój</option>
            <option value="plot">Działka</option>
          </select>
        </div>

        {/* Search Button */}
        <Button type="submit" variant="primary" className="h-12 px-6 press-effect">
          <Search className="w-5 h-5" aria-hidden="true" />
          <span>Szukaj</span>
        </Button>
      </div>
    </form>
  );
}
