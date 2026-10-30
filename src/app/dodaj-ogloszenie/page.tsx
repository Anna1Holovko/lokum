"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MAJOR_CITIES, PROPERTY_TYPE_OPTIONS, AMENITIES_OPTIONS } from "@/types/property";
import { Upload, MapPin, Home, DollarSign, Ruler, BedDouble, Bath, Car, Plus, X, Send, Info } from "lucide-react";

export default function AddListingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    transactionType: "sale",
    propertyType: "apartment",
    title: "",
    description: "",
    price: "",
    area: "",
    rooms: "",
    bathrooms: "",
    floor: "",
    totalFloors: "",
    yearBuilt: "",
    city: "",
    district: "",
    street: "",
    amenities: [] as string[],
    images: [] as File[],
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleAmenityToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(value)
        ? prev.amenities.filter((a) => a !== value)
        : [...prev.amenities, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Dziękujemy! Twoje ogłoszenie zostało przesłane do weryfikacji.");
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] page-transition">
      {/* Hero */}
      <div className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">Dodaj ogłoszenie</span>
          </nav>

          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
            Dodaj ofertę
          </span>
          <h1 className="headline-1 text-white mb-4">Dodaj nieruchomość</h1>
          <p className="text-[18px] text-white/60 max-w-2xl">
            Wypełnij formularz, aby dodać swoją nieruchomość do naszego serwisu. Ogłoszenie pojawi się po weryfikacji.
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="border-b border-[var(--color-border)] bg-white">
        <div className="container-custom py-4">
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${
                  step === s
                    ? "text-[var(--color-accent)]"
                    : step > s
                    ? "text-[var(--color-text-secondary)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                <span className={`w-8 h-8 flex items-center justify-center border-2 ${
                  step === s
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                    : step > s
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-text-muted)]"
                }`}>
                  {s}
                </span>
                <span className="hidden sm:inline">
                  {s === 1 && "Typ oferty"}
                  {s === 2 && "Szczegóły"}
                  {s === 3 && "Lokalizacja"}
                  {s === 4 && "Kontakt"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSubmit}>
            <div className="bg-white border border-[var(--color-border)] p-8">
              {/* Step 1: Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-6">
                    Typ oferty
                  </h2>

                  <div>
                    <label className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-3">
                      Rodzaj transakcji
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "sale", label: "Sprzedaż" },
                        { value: "rent", label: "Wynajem" },
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, transactionType: type.value })}
                          className={`p-4 border text-[15px] font-medium transition-all ${
                            formData.transactionType === type.value
                              ? "border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                              : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-3">
                      Typ nieruchomości
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {PROPERTY_TYPE_OPTIONS.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type.value })}
                          className={`p-4 border text-[14px] font-medium transition-all ${
                            formData.propertyType === type.value
                              ? "border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                              : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-6">
                    Szczegóły nieruchomości
                  </h2>

                  <div>
                    <label htmlFor="title" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Tytuł ogłoszenia *
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="np. Przestronne mieszkanie w centrum"
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="price" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Cena (PLN) *
                      </label>
                      <input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="area" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Powierzchnia (m²) *
                      </label>
                      <input
                        id="area"
                        type="number"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="rooms" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Pokoje *
                      </label>
                      <input
                        id="rooms"
                        type="number"
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Opis *
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Opisz swoją nieruchomość..."
                      className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-3">
                      Udogodnienia
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {AMENITIES_OPTIONS.map((amenity) => (
                        <button
                          key={amenity.value}
                          type="button"
                          onClick={() => handleAmenityToggle(amenity.value)}
                          className={`px-4 py-2 text-[13px] border transition-all ${
                            formData.amenities.includes(amenity.value)
                              ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                              : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]"
                          }`}
                        >
                          {amenity.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-6">
                    Lokalizacja
                  </h2>

                  <div>
                    <label htmlFor="city" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Miasto *
                    </label>
                    <select
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all appearance-none"
                      required
                    >
                      <option value="">Wybierz miasto</option>
                      {MAJOR_CITIES.map((city) => (
                        <option key={city.name} value={city.name}>{city.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Dzielnica
                    </label>
                    <input
                      id="district"
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="np. Śródmieście"
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="street" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Ulica
                    </label>
                    <input
                      id="street"
                      type="text"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      placeholder="np. ul. Marszałkowska"
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Contact */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-6">
                    Dane kontaktowe
                  </h2>

                  <div>
                    <label htmlFor="contactName" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Telefon *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      placeholder="+48 000 000 000"
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Email *
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div className="p-4 bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 flex gap-3">
                    <Info className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <p className="text-[14px] text-[var(--color-text-secondary)]">
                      Twoje dane kontaktowe będą widoczne tylko dla zalogowanych użytkowników zainteresowanych Twoją ofertą.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Wstecz
                  </Button>
                ) : (
                  <div />
                )}
                {step < 4 ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => setStep(step + 1)}
                  >
                    Dalej
                  </Button>
                ) : (
                  <Button type="submit" variant="primary">
                    Dodaj ogłoszenie
                    <Send className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
