export type TransactionType = "rent" | "sale";

export type PropertyType =
  | "apartment"
  | "house"
  | "plot"
  | "commercial"
  | "garage"
  | "room";

export type MarketType = "primary" | "secondary";

export interface Location {
  voivodeship: string;
  city: string;
  district?: string;
  neighborhood?: string;
  street?: string;
  latitude: number;
  longitude: number;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface Advertiser {
  id: string;
  type: "private" | "agency" | "developer";
  name: string;
  phone?: string;
  email?: string;
  companyName?: string;
  logoUrl?: string;
  verified?: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  transactionType: TransactionType;
  propertyType: PropertyType;
  marketType: MarketType;
  price: number;
  pricePerM2: number;
  adminFee?: number; // Czynsz administracyjny
  deposit?: number; // Kaucja
  area: number;
  rooms: number;
  floor?: number;
  totalFloors?: number;
  yearBuilt?: number;
  location: Location;
  images: PropertyImage[];
  advertiser: Advertiser;
  amenities: string[];
  features: PropertyFeatures;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  viewCount?: number;
  isFavorite?: boolean;
  isPromoted?: boolean;
}

export interface PropertyFeatures {
  balcony?: boolean;
  terrace?: boolean;
  garden?: boolean;
  basement?: boolean;
  garage?: boolean;
  parkingSpot?: boolean;
  elevator?: boolean;
  airConditioning?: boolean;
  furnished?: boolean;
  separateKitchen?: boolean;
  utilityRoom?: boolean;
  securitySystem?: boolean;
  intercom?: boolean;
  gatedCommunity?: boolean;
}

export interface SearchFilters {
  transactionType: TransactionType;
  propertyType?: PropertyType[];
  location?: {
    city?: string;
    district?: string;
    voivodeship?: string;
  };
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  roomsMin?: number;
  roomsMax?: number;
  floorMin?: number;
  floorMax?: number;
  yearBuiltMin?: number;
  yearBuiltMax?: number;
  marketType?: MarketType;
  amenities?: string[];
  advertiserType?: ("private" | "agency" | "developer")[];
}

export interface SearchSortOption {
  value: string;
  label: string;
}

export const SEARCH_SORT_OPTIONS: SearchSortOption[] = [
  { value: "newest", label: "Najnowsze" },
  { value: "price_asc", label: "Cena: od najniższej" },
  { value: "price_desc", label: "Cena: od najwyższej" },
  { value: "price_m2_asc", label: "Cena za m²: od najniższej" },
  { value: "price_m2_desc", label: "Cena za m²: od najwyższej" },
  { value: "area_asc", label: "Powierzchnia: od najmniejszej" },
  { value: "area_desc", label: "Powierzchnia: od największej" },
];

export interface SavedSearch {
  id: string;
  name: string;
  filters: SearchFilters;
  alertFrequency: "instant" | "daily" | "weekly" | "none";
  createdAt: string;
  lastAlertedAt?: string;
}

export interface Favorite {
  id: string;
  propertyId: string;
  property: Property;
  notes?: string;
  createdAt: string;
}

// Polish cities and voivodeships
export const VOIVODESHIPS = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
] as const;

export const MAJOR_CITIES = [
  { name: "Warszawa", voivodeship: "mazowieckie" },
  { name: "Kraków", voivodeship: "małopolskie" },
  { name: "Wrocław", voivodeship: "dolnośląskie" },
  { name: "Poznań", voivodeship: "wielkopolskie" },
  { name: "Gdańsk", voivodeship: "pomorskie" },
  { name: "Łódź", voivodeship: "łódzkie" },
  { name: "Katowice", voivodeship: "śląskie" },
  { name: "Szczecin", voivodeship: "zachodniopomorskie" },
  { name: "Lublin", voivodeship: "lubelskie" },
  { name: "Bydgoszcz", voivodeship: "kujawsko-pomorskie" },
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  { value: "apartment", label: "Mieszkanie" },
  { value: "house", label: "Dom" },
  { value: "plot", label: "Działka" },
  { value: "commercial", label: "Lokal użytkowy" },
  { value: "garage", label: "Garaż" },
  { value: "room", label: "Pokój" },
] as const;

export const AMENITIES_OPTIONS = [
  { value: "balcony", label: "Balkon" },
  { value: "terrace", label: "Taras" },
  { value: "garden", label: "Ogród" },
  { value: "basement", label: "Piwnica" },
  { value: "garage", label: "Garaż" },
  { value: "parkingSpot", label: "Miejsce parkingowe" },
  { value: "elevator", label: "Winda" },
  { value: "airConditioning", label: "Klimatyzacja" },
  { value: "furnished", label: "Umeblowane" },
  { value: "separateKitchen", label: "Oddzielna kuchnia" },
  { value: "utilityRoom", label: "Pomieszczenie gospodarcze" },
  { value: "securitySystem", label: "System alarmowy" },
  { value: "intercom", label: "Domofon" },
  { value: "gatedCommunity", label: "Osiedle zamknięte" },
] as const;
