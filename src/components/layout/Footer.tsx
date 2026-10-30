"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Main footer content */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-6"
              aria-label="Lokum - Strona główna"
            >
              <span className="text-2xl font-heading tracking-[0.15em] uppercase text-white">
                Lokum
              </span>
            </Link>
            <p className="text-[15px] text-white/50 leading-relaxed mb-8 max-w-sm">
              Ekskluzywne nieruchomości w najlepszych lokalizacjach Polski.
              Starannie wyselekcjonowane rezydencje dla wymagających klientów.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+48221234567"
                className="block text-[15px] text-white/70 hover:text-[var(--color-accent)] transition-colors"
              >
                +48 22 123 45 67
              </a>
              <a
                href="mailto:kontakt@lokum.pl"
                className="block text-[15px] text-white/70 hover:text-[var(--color-accent)] transition-colors"
              >
                kontakt@lokum.pl
              </a>
            </div>
          </div>

          {/* Spacer on large screens */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Kupno */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium text-[var(--color-accent)] uppercase tracking-[0.15em] mb-6">
              Kupno
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/kupno/mieszkania"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Apartamenty
                </Link>
              </li>
              <li>
                <Link
                  href="/kupno/domy"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Domy i rezydencje
                </Link>
              </li>
              <li>
                <Link
                  href="/kupno/dzialki"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Działki
                </Link>
              </li>
            </ul>
          </div>

          {/* Wynajem */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium text-[var(--color-accent)] uppercase tracking-[0.15em] mb-6">
              Wynajem
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/wynajem/mieszkania"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Apartamenty
                </Link>
              </li>
              <li>
                <Link
                  href="/wynajem/domy"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Domy
                </Link>
              </li>
              <li>
                <Link
                  href="/wynajem/pokoje"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Pokoje
                </Link>
              </li>
            </ul>
          </div>

          {/* O nas */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium text-[var(--color-accent)] uppercase tracking-[0.15em] mb-6">
              Informacje
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/o-nas"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/kalkulator-kredytowy"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Kalkulator kredytu
                </Link>
              </li>
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                >
                  Prywatność
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-white/40">
              © {year} Lokum. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/regulamin"
                className="text-[13px] text-white/40 hover:text-white/70 transition-colors"
              >
                Regulamin
              </Link>
              <Link
                href="/polityka-prywatnosci"
                className="text-[13px] text-white/40 hover:text-white/70 transition-colors"
              >
                Polityka prywatności
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
