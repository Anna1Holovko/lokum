import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] page-transition">
      {/* Hero */}
      <div className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">Regulamin</span>
          </nav>

          <h1 className="headline-1 text-white mb-4">Regulamin serwisu</h1>
          <p className="text-[18px] text-white/60 max-w-2xl">
            Ostatnia aktualizacja: Październik 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="bg-white border border-[var(--color-border)] p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4">
                1. Postanowienia ogólne
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Niniejszy regulamin określa zasady korzystania z serwisu internetowego Lokum,
                dostępnego pod adresem lokum.pl. Właścicielem serwisu jest Lokum Sp. z o.o.
                z siedzibą w Warszawie.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                2. Definicje
              </h2>
              <ul className="list-disc pl-6 text-[15px] text-[var(--color-text-secondary)] space-y-2 mb-6">
                <li><strong>Serwis</strong> - strona internetowa lokum.pl wraz ze wszystkimi podstronami</li>
                <li><strong>Użytkownik</strong> - osoba korzystająca z serwisu</li>
                <li><strong>Ogłoszenie</strong> - oferta nieruchomości zamieszczona w serwisie</li>
                <li><strong>Konto</strong> - indywidualne konto użytkownika w serwisie</li>
              </ul>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                3. Zasady korzystania z serwisu
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                Użytkownik zobowiązuje się do:
              </p>
              <ul className="list-disc pl-6 text-[15px] text-[var(--color-text-secondary)] space-y-2 mb-6">
                <li>Podawania prawdziwych i aktualnych danych</li>
                <li>Przestrzegania praw autorskich i własności intelektualnej</li>
                <li>Nieumieszczania treści niezgodnych z prawem</li>
                <li>Niedziałania na szkodę serwisu lub innych użytkowników</li>
              </ul>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                4. Ogłoszenia
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Ogłoszenia zamieszczane w serwisie muszą dotyczyć rzeczywistych nieruchomości
                dostępnych do sprzedaży lub wynajmu. Administrator zastrzega sobie prawo do
                usunięcia ogłoszeń naruszających regulamin bez podania przyczyny.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                5. Odpowiedzialność
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Administrator nie ponosi odpowiedzialności za treść ogłoszeń zamieszczanych
                przez użytkowników. Transakcje między użytkownikami odbywają się na ich
                własną odpowiedzialność.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                6. Reklamacje
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Reklamacje dotyczące funkcjonowania serwisu należy zgłaszać na adres e-mail:
                <a href="mailto:reklamacje@lokum.pl" className="text-[var(--color-accent)] hover:underline ml-1">reklamacje@lokum.pl</a>.
                Reklamacje rozpatrywane są w terminie 14 dni roboczych.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                7. Postanowienia końcowe
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Administrator zastrzega sobie prawo do zmiany regulaminu. O zmianach użytkownicy
                zostaną poinformowani poprzez ogłoszenie w serwisie. W sprawach nieuregulowanych
                regulaminem zastosowanie mają przepisy prawa polskiego.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
