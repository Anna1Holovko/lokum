import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "PLN"): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPricePerM2(price: number, area: number): string {
  const pricePerM2 = Math.round(price / area);
  return `${pricePerM2.toLocaleString("pl-PL")} PLN/m²`;
}

export function formatArea(area: number): string {
  return `${area.toLocaleString("pl-PL")} m²`;
}

export function formatRooms(rooms: number): string {
  if (rooms === 1) return "1 pokój";
  if (rooms >= 2 && rooms <= 4) return `${rooms} pokoje`;
  return `${rooms} pokoi`;
}

export function formatFloor(floor: number, totalFloors?: number): string {
  if (floor === 0) return "Parter";
  if (totalFloors) {
    return `${floor}/${totalFloors} piętro`;
  }
  return `${floor} piętro`;
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function formatRelativeDate(date: Date | string): string {
  const d = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - d.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Dzisiaj";
  if (diffDays === 1) return "Wczoraj";
  if (diffDays < 7) return `${diffDays} dni temu`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} tyg. temu`;
  return formatDate(d);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź/g, "z")
    .replace(/ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generatePropertyUrl(
  id: string,
  title: string,
  transactionType: "rent" | "sale"
): string {
  // Direct link to property detail page
  return `/oferta/${id}`;
}

export function calculateMortgage(
  principal: number,
  annualRate: number,
  years: number
): {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
} {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / numberOfPayments;
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
    };
  }

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
  };
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function getTransactionTypeLabel(type: "rent" | "sale"): string {
  return type === "rent" ? "Wynajem" : "Sprzedaż";
}

export function getPropertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    apartment: "Mieszkanie",
    house: "Dom",
    plot: "Działka",
    commercial: "Lokal użytkowy",
    garage: "Garaż",
    room: "Pokój",
  };
  return labels[type] || type;
}
