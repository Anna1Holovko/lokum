import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] page-transition">
      {/* Hero */}
      <div className="bg-[#0D1B2A] pt-28 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-accent)]" aria-current="page">Polityka prywatności</span>
          </nav>

          <h1 className="headline-1 text-white mb-4">Polityka prywatności</h1>
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
                1. Administrator danych
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Administratorem danych osobowych jest Lokum Sp. z o.o. z siedzibą w Warszawie,
                ul. Marszałkowska 100, 00-001 Warszawa, wpisana do rejestru przedsiębiorców KRS
                pod numerem 0000000000.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                2. Cele przetwarzania danych
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                Przetwarzamy dane osobowe w następujących celach:
              </p>
              <ul className="list-disc pl-6 text-[15px] text-[var(--color-text-secondary)] space-y-2 mb-6">
                <li>Świadczenie usług pośrednictwa w obrocie nieruchomościami</li>
                <li>Obsługa zapytań i komunikacja z użytkownikami</li>
                <li>Wysyłka newslettera (za zgodą użytkownika)</li>
                <li>Cele analityczne i statystyczne</li>
                <li>Zapewnienie bezpieczeństwa usług</li>
              </ul>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                3. Podstawa prawna przetwarzania
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Dane osobowe przetwarzamy na podstawie: zgody użytkownika, konieczności wykonania umowy,
                wypełnienia obowiązku prawnego ciążącego na administratorze, oraz prawnie uzasadnionego
                interesu administratora.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                4. Prawa użytkownika
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                Każdy użytkownik ma prawo do:
              </p>
              <ul className="list-disc pl-6 text-[15px] text-[var(--color-text-secondary)] space-y-2 mb-6">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
              </ul>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                5. Pliki cookies
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania strony,
                personalizacji treści, analizy ruchu oraz celów marketingowych. Użytkownik może
                zarządzać ustawieniami plików cookies w swojej przeglądarce.
              </p>

              <h2 className="font-heading text-[24px] text-[var(--color-text-primary)] mb-4 mt-8">
                6. Kontakt
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                W sprawach związanych z ochroną danych osobowych można kontaktować się pod adresem
                e-mail: <a href="mailto:rodo@lokum.pl" className="text-[var(--color-accent)] hover:underline">rodo@lokum.pl</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
