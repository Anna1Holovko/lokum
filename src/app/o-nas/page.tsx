import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Building2, Users, Award, TrendingUp, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Lat doświadczenia" },
    { value: "5000+", label: "Zadowolonych klientów" },
    { value: "15000+", label: "Sprzedanych nieruchomości" },
    { value: "50+", label: "Agentów w całej Polsce" },
  ];

  const values = [
    {
      icon: Users,
      title: "Klient na pierwszym miejscu",
      description: "Każda transakcja to dla nas indywidualna historia. Słuchamy potrzeb i dopasowujemy ofertę.",
    },
    {
      icon: Award,
      title: "Profesjonalizm",
      description: "Nasz zespół to doświadczeni specjaliści z wieloletnim doświadczeniem na rynku nieruchomości.",
    },
    {
      icon: TrendingUp,
      title: "Transparentność",
      description: "Jasne zasady współpracy, uczciwe ceny i pełna dokumentacja każdej transakcji.",
    },
    {
      icon: Building2,
      title: "Lokalna wiedza",
      description: "Znamy rynek jak własną kieszeń. Doradzamy w kwestii lokalizacji, cen i trendów.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] page-transition">
      {/* Hero */}
      <div className="bg-[#0D1B2A] pt-28 pb-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">O nas</span>
          </nav>

          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
            O nas
          </span>
          <h1 className="headline-1 text-white mb-4">
            Pomagamy znaleźć<br />idealny dom
          </h1>
          <p className="text-[18px] text-white/60 max-w-2xl">
            Lokum to platforma łącząca osoby szukające nieruchomości z najlepszymi ofertami na rynku.
            Działamy na terenie całej Polski.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[42px] font-heading text-[var(--color-accent)] mb-2">
                  {stat.value}
                </div>
                <p className="text-[14px] text-[var(--color-text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
              Nasze wartości
            </span>
            <h2 className="headline-2 text-[var(--color-text-primary)] mb-4">
              Co nas wyróżnia
            </h2>
            <p className="text-[16px] text-[var(--color-text-muted)]">
              Budujemy relacje oparte na zaufaniu i profesjonalizmie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--color-accent-light)] flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-heading text-[20px] text-[var(--color-text-primary)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[15px] text-[var(--color-text-muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="container-custom text-center">
          <h2 className="headline-2 text-white mb-4">Szukasz nieruchomości?</h2>
          <p className="text-[16px] text-white/60 mb-8 max-w-lg mx-auto">
            Skontaktuj się z nami lub przeglądaj dostępne oferty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kupno/mieszkania">
              <Button variant="primary" size="lg">
                Przeglądaj oferty
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
      </section>
    </div>
  );
}
