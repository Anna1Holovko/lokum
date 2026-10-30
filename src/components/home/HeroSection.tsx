"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MAJOR_CITIES } from "@/types/property";
import { Search, MapPin, ArrowDown, ChevronDown, Check } from "lucide-react";

// Custom Dropdown for Hero Section
interface DropdownOption {
  value: string;
  label: string;
}

interface HeroDropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}

function HeroDropdown({ label, options, value, onChange, name }: HeroDropdownProps) {
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
      <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
        {label}
      </label>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-13 px-4 bg-[var(--color-background)] border text-left flex items-center justify-between transition-all duration-300 ${
          isOpen
            ? "border-[var(--color-accent)] bg-white"
            : "border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
        }`}
      >
        <span className="text-[15px] text-[var(--color-text-primary)]">
          {selectedOption?.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 pt-1">
          <div className="bg-white border border-[var(--color-border)] shadow-lg animate-fade-in-down">
            <div className="py-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-[14px] flex items-center justify-between transition-colors duration-200 ${
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

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactionType, setTransactionType] = useState("sale");
  const [rooms, setRooms] = useState("");

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Trigger animations on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1B2A]"
    >
      {/* Animated background with parallax */}
      <div
        className="absolute inset-0 transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20 + scrollY * 0.3}px, 0) scale(1.1)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/70 to-[#0D1B2A]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-[#0D1B2A]/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container-custom py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left content - spans 7 columns */}
          <div className="lg:col-span-7">
            {/* Animated label */}
            <div
              className={`overflow-hidden mb-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className={`flex items-center gap-3 transition-transform duration-1000 delay-300 ${
                  isLoaded ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="text-[11px] md:text-[12px] font-medium tracking-[0.25em] uppercase text-[var(--color-accent)]">
                  Nieruchomości w Polsce
                </span>
              </div>
            </div>

            {/* Main headline with staggered reveal */}
            <h1 className="mb-8">
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <span
                  className={`block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-heading font-light text-white leading-[0.95] tracking-[-0.03em] transition-all duration-1000 delay-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  Znajdź swoje
                </span>
              </span>

              {/* Line 2 with accent */}
              <span className="block overflow-hidden">
                <span
                  className={`block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-heading font-light leading-[0.95] tracking-[-0.03em] transition-all duration-1000 delay-700 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <span className="text-white">nowe </span>
                  <span className="relative">
                    <span className="text-[var(--color-accent)]">miejsce</span>
                    {/* Underline animation */}
                    <span
                      className={`absolute -bottom-2 left-0 h-[3px] bg-[var(--color-accent)] transition-all duration-1000 delay-1200 ${
                        isLoaded ? 'w-full' : 'w-0'
                      }`}
                    />
                  </span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-[15px] md:text-[17px] text-white/60 max-w-lg mb-10 leading-relaxed transition-all duration-1000 delay-900 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Przeglądaj tysiące ofert mieszkań, domów i apartamentów.
              Porównuj ceny, lokalizacje i znajdź to, czego szukasz.
            </p>

            {/* Stats row */}
            <div
              className={`flex gap-12 transition-all duration-1000 delay-1100 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {[
                { value: "2,500+", label: "Ofert" },
                { value: "50+", label: "Miast" },
                { value: "0 zł", label: "Prowizji" },
              ].map((stat, i) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="text-[28px] md:text-[36px] font-heading text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/40 uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Search form - spans 5 columns */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="bg-white p-6 md:p-8 shadow-2xl relative group">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-accent)] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

              <h2 className="text-[18px] md:text-[20px] font-heading text-[var(--color-text-primary)] mb-6">
                Szukaj nieruchomości
              </h2>

              <form action="/szukaj" method="GET" className="space-y-4">
                {/* Location */}
                <div className="group/input">
                  <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                    Lokalizacja
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] group-focus-within/input:text-[var(--color-accent)] transition-colors" />
                    <input
                      type="text"
                      name="location"
                      placeholder="np. Warszawa, Mokotów"
                      className="w-full h-13 pl-12 pr-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Type & Rooms */}
                <div className="grid grid-cols-2 gap-3">
                  <HeroDropdown
                    label="Transakcja"
                    name="type"
                    options={[
                      { value: "sale", label: "Kupno" },
                      { value: "rent", label: "Wynajem" },
                    ]}
                    value={transactionType}
                    onChange={setTransactionType}
                  />
                  <HeroDropdown
                    label="Pokoje"
                    name="rooms"
                    options={[
                      { value: "", label: "Wszystkie" },
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4+" },
                    ]}
                    value={rooms}
                    onChange={setRooms}
                  />
                </div>

                {/* Search Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full h-13 text-[14px] group/btn"
                >
                  <Search className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Szukaj
                </Button>
              </form>

              {/* Quick links */}
              <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-3">
                  Popularne miasta
                </p>
                <div className="flex flex-wrap gap-2">
                  {MAJOR_CITIES.slice(0, 4).map((city) => (
                    <Link
                      key={city.name}
                      href={`/kupno/mieszkania?city=${city.name.toLowerCase()}`}
                      className="px-3 py-1.5 text-[12px] bg-[var(--color-background)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
          Przewiń
        </span>
        <ArrowDown className="w-4 h-4 text-white/30 animate-bounce" />
      </div>

      {/* Side text */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2">
        <div
          className="text-[11px] tracking-[0.3em] uppercase text-white/20 writing-mode-vertical"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Lokum — Nieruchomości
        </div>
      </div>
    </section>
  );
}
