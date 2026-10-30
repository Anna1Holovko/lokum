"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import {
  Heart,
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export function Header({ variant: variantProp }: HeaderProps) {
  const pathname = usePathname();

  // Auto-detect variant based on pathname
  // Only homepage has transparent header over dark hero
  // All other pages (including offer details) have solid white header
  const variant = variantProp ?? (
    pathname === "/" ? "transparent" : "solid"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(variant === "solid");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      // For solid variant, always stay solid; for transparent, change on scroll
      if (variant === "solid") {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation
  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent, dropdownName: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
      } else if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    },
    [activeDropdown]
  );

  const navLinks = [
    {
      name: "Kupno",
      href: "/kupno/mieszkania",
      dropdown: [
        { name: "Apartamenty", href: "/kupno/mieszkania" },
        { name: "Domy i rezydencje", href: "/kupno/domy" },
        { name: "Działki", href: "/kupno/dzialki" },
      ],
    },
    {
      name: "Wynajem",
      href: "/wynajem/mieszkania",
      dropdown: [
        { name: "Apartamenty", href: "/wynajem/mieszkania" },
        { name: "Domy", href: "/wynajem/domy" },
        { name: "Pokoje", href: "/wynajem/pokoje" },
      ],
    },
    { name: "O nas", href: "/o-nas" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  // Header should be solid when mobile menu is open
  const shouldBeSolid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldBeSolid
          ? "bg-white/95 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      {/* Skip to main content */}
      <a href="#main-content" className="skip-link">
        Przejdź do głównej treści
      </a>

      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Serif */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Lokum - Strona główna"
          >
            <span
              className={`text-2xl font-heading tracking-[0.15em] uppercase transition-colors duration-300 ${
                shouldBeSolid ? "text-[var(--color-text-primary)]" : "text-white"
              }`}
            >
              Lokum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-1"
            aria-label="Menu główne"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    className={`flex items-center gap-1.5 px-4 py-3 text-[15px] font-normal transition-all duration-300 relative group ${
                      shouldBeSolid
                        ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                        : "text-white/80 hover:text-white"
                    }`}
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="true"
                    onKeyDown={(e) => handleDropdownKeyDown(e, link.name)}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    }
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 opacity-60 transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                    {/* Underline on hover */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-[2px] bg-[var(--color-accent)] transition-transform duration-300 origin-left ${
                        activeDropdown === link.name ? "scale-x-100" : "scale-x-0"
                      } group-hover:scale-x-100`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 text-[15px] font-normal transition-all duration-300 relative group ${
                      shouldBeSolid
                        ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Underline on hover */}
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[var(--color-accent)] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                  </Link>
                )}

                {/* Dropdown Menu - seamless hover with invisible bridge */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 min-w-[220px]">
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="h-2" />
                    <div className="bg-white border border-[var(--color-border)] shadow-lg animate-fade-in-down">
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-5 py-3 text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-background)] transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/szukaj"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                shouldBeSolid
                  ? "text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-light)]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Szukaj nieruchomości"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/ulubione"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                shouldBeSolid
                  ? "text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-light)]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Ulubione nieruchomości"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/logowanie" className="ml-3">
              <Button
                variant={shouldBeSolid ? "outline" : "primary"}
                size="sm"
                className={
                  shouldBeSolid
                    ? ""
                    : "bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                }
              >
                Zaloguj się
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              shouldBeSolid
                ? "text-[var(--color-text-primary)] hover:bg-[var(--color-background)]"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-[60] animate-slide-down overflow-y-auto"
        >
          <nav className="container-custom py-8" aria-label="Menu mobilne">
            <div className="space-y-1">
              {/* Kupno Section */}
              <div className="mb-8">
                <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-4">
                  Kupno
                </p>
                <div className="space-y-1">
                  <Link
                    href="/kupno/mieszkania"
                    className="block py-3 text-[18px] font-heading text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Apartamenty
                  </Link>
                  <Link
                    href="/kupno/domy"
                    className="block py-3 text-[18px] font-heading text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Domy i rezydencje
                  </Link>
                  <Link
                    href="/kupno/dzialki"
                    className="block py-3 text-[18px] font-heading text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Działki
                  </Link>
                </div>
              </div>

              {/* Wynajem Section */}
              <div className="mb-8">
                <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-4">
                  Wynajem
                </p>
                <div className="space-y-1">
                  <Link
                    href="/wynajem/mieszkania"
                    className="block py-3 text-[18px] font-heading text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Apartamenty
                  </Link>
                  <Link
                    href="/wynajem/domy"
                    className="block py-3 text-[18px] font-heading text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Domy
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[var(--color-border)] my-6" />

              {/* Other Links */}
              <Link
                href="/ulubione"
                className="flex items-center gap-3 py-4 text-[16px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                Ulubione
              </Link>
              <Link
                href="/o-nas"
                className="block py-4 text-[16px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                O nas
              </Link>
              <Link
                href="/kontakt"
                className="block py-4 text-[16px] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border)]">
              <Link
                href="/logowanie"
                className="block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="primary" className="w-full h-14 text-[16px]">
                  Zaloguj się
                </Button>
              </Link>
              <p className="mt-4 text-center text-[13px] text-[var(--color-text-muted)]">
                lub zadzwoń:{" "}
                <a
                  href="tel:+48221234567"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  +48 22 123 45 67
                </a>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
