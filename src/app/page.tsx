import Link from "next/link";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { PropertyCardFeatured } from "@/components/property/PropertyCard";
import { HeroSection } from "@/components/home/HeroSection";
import { CitiesGrid } from "@/components/home/CitiesGrid";
import { sampleProperties } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProperties = sampleProperties
    .filter((p) => p.isPromoted || p.price > 1000000)
    .slice(0, 2);

  const latestSales = sampleProperties
    .filter((p) => p.transactionType === "sale")
    .slice(0, 6);

  const latestRentals = sampleProperties
    .filter((p) => p.transactionType === "rent")
    .slice(0, 6);

  return (
    <div className="page-transition">
      {/* Hero Section with Parallax */}
      <HeroSection />

      {/* ==========================================
          FEATURED PROPERTIES
          ========================================== */}
      {featuredProperties.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container-custom">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
                  Wyróżnione
                </span>
                <h2 className="headline-2 text-[var(--color-text-primary)]">
                  Polecane oferty
                </h2>
              </div>
              <Link href="/kupno/mieszkania">
                <Button variant="ghost" className="group">
                  Zobacz wszystkie
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Featured grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCardFeatured key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          SALES SECTION
          ========================================== */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container-custom">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
                Na sprzedaż
              </span>
              <h2 className="headline-2 text-[var(--color-text-primary)]">
                Mieszkania i domy
              </h2>
              <p className="text-[16px] text-[var(--color-text-muted)] mt-3 max-w-lg">
                Najnowsze oferty sprzedaży nieruchomości w całej Polsce.
              </p>
            </div>
            <Link href="/kupno/mieszkania">
              <Button variant="outline" className="group">
                Przeglądaj oferty
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Properties grid */}
          <PropertyGrid properties={latestSales} />
        </div>
      </section>

      {/* ==========================================
          RENTALS SECTION
          ========================================== */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
                Wynajem
              </span>
              <h2 className="headline-2 text-[var(--color-text-primary)]">
                Mieszkania do wynajęcia
              </h2>
              <p className="text-[16px] text-[var(--color-text-muted)] mt-3 max-w-lg">
                Sprawdzone oferty wynajmu w atrakcyjnych lokalizacjach.
              </p>
            </div>
            <Link href="/wynajem/mieszkania">
              <Button variant="outline" className="group">
                Przeglądaj oferty
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Properties grid */}
          <PropertyGrid properties={latestRentals} />
        </div>
      </section>

      {/* ==========================================
          CTA SECTION - Simple Banner
          ========================================== */}
      <section className="bg-[#0D1B2A]">
        <div className="container-custom py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-[28px] md:text-[36px] font-heading text-white mb-3">
                Masz nieruchomość na sprzedaż?
              </h2>
              <p className="text-[16px] text-white/50">
                Dodaj ogłoszenie za darmo i dotrzyj do tysięcy klientów.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dodaj-ogloszenie">
                <Button variant="primary" size="lg">
                  Dodaj ogłoszenie
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Kontakt
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          LOCATIONS SECTION
          ========================================== */}
      <section className="py-20 bg-white border-t border-[var(--color-border)]">
        <div className="container-custom">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-[24px] font-heading text-[var(--color-text-primary)]">
                Szukaj według lokalizacji
              </h2>
              <p className="text-[15px] text-[var(--color-text-muted)] mt-1">
                Wybierz miasto i przeglądaj dostępne oferty
              </p>
            </div>
            <Link href="/kupno/mieszkania" className="text-[14px] text-[var(--color-accent)] hover:underline flex items-center gap-1">
              Wszystkie lokalizacje
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cities grid */}
          <CitiesGrid />
        </div>
      </section>
    </div>
  );
}
