"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { calculateMortgage, formatPrice } from "@/lib/utils";
import { Calculator, TrendingUp, Calendar, Percent, Home, Info } from "lucide-react";

export default function MortgageCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTermYears, setLoanTermYears] = useState(25);

  const downPaymentPercent = useMemo(() => {
    return Math.round((downPayment / propertyPrice) * 100);
  }, [downPayment, propertyPrice]);

  const loanAmount = useMemo(() => {
    return Math.max(0, propertyPrice - downPayment);
  }, [propertyPrice, downPayment]);

  const mortgageResults = useMemo(() => {
    if (loanAmount <= 0 || interestRate < 0 || loanTermYears <= 0) {
      return null;
    }
    return calculateMortgage(loanAmount, interestRate, loanTermYears);
  }, [loanAmount, interestRate, loanTermYears]);

  const handleDownPaymentPercentChange = (percent: number) => {
    setDownPayment(Math.round((percent / 100) * propertyPrice));
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-2">
            Kalkulator kredytu hipotecznego
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Oblicz swoją miesięczną ratę kredytu hipotecznego. Wpisz cenę nieruchomości,
            wkład własny i parametry kredytu, aby zobaczyć szacunkowe koszty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-6">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
              Parametry kredytu
            </h2>

            <div className="space-y-6">
              {/* Property Price */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Cena nieruchomości
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                  <input
                    type="number"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full h-12 pl-10 pr-12 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-lighter)]"
                    min={0}
                    step={10000}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    PLN
                  </span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-[var(--color-text-primary)]">
                    Wkład własny
                  </label>
                  <span className="text-sm text-[var(--color-primary)] font-medium">
                    {downPaymentPercent}%
                  </span>
                </div>
                <div className="relative mb-3">
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-12 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-lighter)]"
                    min={0}
                    max={propertyPrice}
                    step={10000}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    PLN
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={downPaymentPercent}
                  onChange={(e) =>
                    handleDownPaymentPercentChange(Number(e.target.value))
                  }
                  className="w-full h-2 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-1">
                  <span>0%</span>
                  <span>20%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Oprocentowanie roczne
                </label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-12 pl-10 pr-12 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-lighter)]"
                    min={0}
                    max={20}
                    step={0.1}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    %
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Średnie oprocentowanie kredytów hipotecznych w Polsce: 7-9%
                </p>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Okres kredytowania
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                  <select
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="w-full h-12 pl-10 pr-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-lighter)] appearance-none bg-white"
                  >
                    <option value={10}>10 lat</option>
                    <option value={15}>15 lat</option>
                    <option value={20}>20 lat</option>
                    <option value={25}>25 lat</option>
                    <option value={30}>30 lat</option>
                    <option value={35}>35 lat</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment Card */}
            <div className="bg-[var(--color-primary)] rounded-xl p-6 text-white">
              <h3 className="text-lg font-medium mb-2 opacity-90">
                Szacunkowa rata miesięczna
              </h3>
              <div className="text-4xl md:text-5xl font-bold mb-4">
                {mortgageResults
                  ? formatPrice(mortgageResults.monthlyPayment)
                  : "—"}
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div>
                  <div className="text-sm opacity-70">Kwota kredytu</div>
                  <div className="text-lg font-semibold">
                    {formatPrice(loanAmount)}
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-70">Okres</div>
                  <div className="text-lg font-semibold">{loanTermYears} lat</div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            {mortgageResults && (
              <div className="bg-white rounded-xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                  Podsumowanie
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Cena nieruchomości
                    </span>
                    <span className="font-semibold">
                      {formatPrice(propertyPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Wkład własny ({downPaymentPercent}%)
                    </span>
                    <span className="font-semibold">
                      {formatPrice(downPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Kwota kredytu
                    </span>
                    <span className="font-semibold">{formatPrice(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Całkowity koszt odsetek
                    </span>
                    <span className="font-semibold text-[var(--color-accent)]">
                      {formatPrice(mortgageResults.totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-[var(--color-text-primary)] font-medium">
                      Łączna kwota do spłaty
                    </span>
                    <span className="font-bold text-lg">
                      {formatPrice(mortgageResults.totalPayment)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="bg-[var(--color-primary-surface)] rounded-xl p-4 flex gap-3">
              <Info className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--color-text-secondary)]">
                <p className="font-medium text-[var(--color-text-primary)] mb-1">
                  Pamiętaj
                </p>
                <p>
                  To jest tylko szacunkowa kalkulacja. Rzeczywiste warunki kredytu
                  zależą od banku, Twojej zdolności kredytowej i aktualnych ofert.
                  Skontaktuj się z doradcą kredytowym, aby uzyskać dokładną ofertę.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-xl border border-[var(--color-border)] p-6 text-center">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Szukasz mieszkania w tej cenie?
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Znajdź nieruchomości pasujące do Twojego budżetu
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  window.location.href = `/kupno/mieszkania?priceMax=${propertyPrice}`;
                }}
              >
                Szukaj nieruchomości
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
