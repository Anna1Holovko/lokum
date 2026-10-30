"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Dziękujemy za wiadomość! Odpowiemy w ciągu 24 godzin.");
  };

  const contactInfo = [
    { icon: MapPin, label: "Adres", value: "ul. Marszałkowska 100\n00-001 Warszawa" },
    { icon: Phone, label: "Telefon", value: "+48 22 123 45 67" },
    { icon: Mail, label: "Email", value: "kontakt@lokum.pl" },
    { icon: Clock, label: "Godziny pracy", value: "Pon-Pt: 9:00 - 18:00\nSob: 10:00 - 14:00" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] page-transition">
      {/* Hero */}
      <div className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">Kontakt</span>
          </nav>

          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3 block">
            Kontakt
          </span>
          <h1 className="headline-1 text-white mb-4">Skontaktuj się z nami</h1>
          <p className="text-[18px] text-white/60 max-w-2xl">
            Masz pytania? Chętnie odpowiemy na każde z nich. Napisz do nas lub zadzwoń.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-6">
                Dane kontaktowe
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-[13px] text-[var(--color-text-muted)] mb-1">{item.label}</p>
                      <p className="text-[15px] text-[var(--color-text-primary)] whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[var(--color-border)] p-8">
                <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-6">
                  Wyślij wiadomość
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                        Temat *
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all appearance-none"
                        required
                      >
                        <option value="">Wybierz temat</option>
                        <option value="buy">Kupno nieruchomości</option>
                        <option value="sell">Sprzedaż nieruchomości</option>
                        <option value="rent">Wynajem</option>
                        <option value="other">Inne</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-[var(--color-text-secondary)] mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] text-[15px] focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Wyślij wiadomość
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
