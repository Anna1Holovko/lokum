"use client";

import { useState } from "react";
import Link from "next/link";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { Button } from "@/components/ui/Button";
import { sampleProperties } from "@/data/properties";
import { Heart, Search, Bell, Trash2 } from "lucide-react";

export default function FavoritesPage() {
  // In a real app, this would come from user state/database
  // For demo, we'll show some sample favorites
  const [favorites, setFavorites] = useState(sampleProperties.slice(0, 3));
  const [savedSearches, setSavedSearches] = useState([
    {
      id: "1",
      name: "Mieszkania w Warszawie do 4000 zł",
      filters: { city: "Warszawa", priceMax: 4000, transactionType: "rent" },
      alertEnabled: true,
      matchCount: 12,
    },
    {
      id: "2",
      name: "2-pokojowe na Mokotowie",
      filters: { city: "Warszawa", district: "Mokotów", rooms: 2, transactionType: "rent" },
      alertEnabled: false,
      matchCount: 5,
    },
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  const toggleAlert = (id: string) => {
    setSavedSearches(
      savedSearches.map((s) =>
        s.id === id ? { ...s, alertEnabled: !s.alertEnabled } : s
      )
    );
  };

  const removeSearch = (id: string) => {
    setSavedSearches(savedSearches.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            Ulubione
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Twoje zapisane oferty i wyszukiwania
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[var(--color-border)]">
          <button className="px-4 py-3 text-[var(--color-primary)] font-medium border-b-2 border-[var(--color-primary)] -mb-px">
            Ulubione oferty ({favorites.length})
          </button>
          <button className="px-4 py-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
            Zapisane wyszukiwania ({savedSearches.length})
          </button>
        </div>

        {/* Favorites Section */}
        <section className="mb-12">
          {favorites.length > 0 ? (
            <PropertyGrid
              properties={favorites}
              onFavoriteClick={removeFavorite}
            />
          ) : (
            <div className="bg-white rounded-xl border border-[var(--color-border)] p-12 text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Brak ulubionych ofert
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                Dodawaj oferty do ulubionych, klikając ikonę serca. Znajdziesz je
                tutaj, aby łatwo do nich wrócić.
              </p>
              <Link href="/wynajem/mieszkania">
                <Button variant="primary">
                  <Search className="w-5 h-5" />
                  Szukaj nieruchomości
                </Button>
              </Link>
            </div>
          )}
        </section>

        {/* Saved Searches Section */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            Zapisane wyszukiwania
          </h2>

          {savedSearches.length > 0 ? (
            <div className="space-y-4">
              {savedSearches.map((search) => (
                <div
                  key={search.id}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--color-text-primary)]">
                      {search.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {search.matchCount} pasujących ofert
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAlert(search.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        search.alertEnabled
                          ? "bg-[var(--color-primary-lighter)] text-[var(--color-primary)]"
                          : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
                      }`}
                    >
                      <Bell className="w-4 h-4" />
                      {search.alertEnabled ? "Powiadomienia włączone" : "Włącz powiadomienia"}
                    </button>

                    <Link
                      href="/wynajem/mieszkania"
                      className="px-3 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm hover:bg-[var(--color-primary-hover)] transition-colors"
                    >
                      Zobacz oferty
                    </Link>

                    <button
                      onClick={() => removeSearch(search.id)}
                      className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors"
                      aria-label="Usuń wyszukiwanie"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-[var(--color-border)] p-8 text-center">
              <div className="w-12 h-12 bg-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-[var(--color-text-muted)]" />
              </div>
              <h3 className="font-medium text-[var(--color-text-primary)] mb-1">
                Brak zapisanych wyszukiwań
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Zapisuj wyszukiwania, aby szybko do nich wracać i otrzymywać
                powiadomienia o nowych ofertach.
              </p>
            </div>
          )}
        </section>

        {/* Info Box */}
        <div className="mt-8 bg-[var(--color-primary-surface)] rounded-xl p-6">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
            Jak działają powiadomienia?
          </h3>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Włącz powiadomienia dla zapisanego wyszukiwania, a my wyślemy Ci email,
            gdy pojawią się nowe oferty spełniające Twoje kryteria. Możesz wybrać
            częstotliwość powiadomień: natychmiast, codziennie lub raz w tygodniu.
          </p>
        </div>
      </div>
    </div>
  );
}
