import { Property } from "@/types/property";

/**
 * Real Estate Property Listings
 *
 * Image Sources: All images sourced from Pexels.com
 * License: Pexels License (free for commercial use, no attribution required)
 *
 * Image Selection Criteria:
 * - Professional real estate photography style
 * - Natural lighting preferred
 * - High resolution (800px+ width)
 * - Geographic/architectural relevance where possible
 * - No duplicate images across properties
 */

export const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Nowoczesne mieszkanie w centrum Warszawy",
    description:
      "Piękne, jasne mieszkanie w samym sercu Warszawy. Idealne dla młodej pary lub singla ceniącego miejski styl życia. W pełni wyposażone, gotowe do zamieszkania. Doskonała lokalizacja - blisko metra, restauracji i sklepów. Budynek z windą, całodobowa ochrona.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 4500,
    pricePerM2: 90,
    adminFee: 650,
    deposit: 9000,
    area: 50,
    rooms: 2,
    floor: 5,
    totalFloors: 10,
    yearBuilt: 2018,
    location: {
      voivodeship: "mazowieckie",
      city: "Warszawa",
      district: "Śródmieście",
      neighborhood: "Centrum",
      street: "ul. Marszałkowska",
      latitude: 52.2297,
      longitude: 21.0122,
    },
    images: [
      {
        id: "1-1",
        url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesny salon z białymi ścianami i minimalistycznym wyposażeniem w apartamencie w centrum Warszawy",
        isPrimary: true
      },
      {
        id: "1-2",
        url: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Otwarta kuchnia z wyspą i nowoczesnymi urządzeniami"
      },
      {
        id: "1-3",
        url: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Elegancka sypialnia z dużym łóżkiem i neutralnymi kolorami"
      },
    ],
    advertiser: {
      id: "adv-1",
      type: "agency",
      name: "Anna Kowalska",
      companyName: "Premium Nieruchomości",
      phone: "+48 500 100 200",
      email: "anna@premium.pl",
      verified: true,
    },
    amenities: ["balcony", "elevator", "airConditioning", "furnished", "intercom"],
    features: {
      balcony: true,
      elevator: true,
      airConditioning: true,
      furnished: true,
      intercom: true,
      securitySystem: true,
    },
    createdAt: "2026-10-25T10:00:00Z",
    updatedAt: "2026-10-28T15:30:00Z",
    publishedAt: "2026-10-25T12:00:00Z",
    viewCount: 234,
    isPromoted: true,
  },
  {
    id: "2",
    title: "Przestronne 3-pokojowe mieszkanie na Mokotowie",
    description:
      "Komfortowe mieszkanie w spokojnej okolicy Mokotowa. Duży salon z aneksem kuchennym, dwie sypialnie, łazienka z wanną. Mieszkanie po generalnym remoncie, wysoki standard wykończenia. W pobliżu park, szkoły i przedszkola.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 850000,
    pricePerM2: 11333,
    area: 75,
    rooms: 3,
    floor: 3,
    totalFloors: 5,
    yearBuilt: 2005,
    location: {
      voivodeship: "mazowieckie",
      city: "Warszawa",
      district: "Mokotów",
      neighborhood: "Stary Mokotów",
      latitude: 52.1935,
      longitude: 21.0325,
    },
    images: [
      {
        id: "2-1",
        url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przestronny salon z szarą sofą i dużymi oknami w mieszkaniu na Mokotowie",
        isPrimary: true
      },
      {
        id: "2-2",
        url: "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Jasny salon z roślinami i naturalnym światłem"
      },
      {
        id: "2-3",
        url: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesna łazienka z wanną i szarymi płytkami"
      },
    ],
    advertiser: {
      id: "adv-2",
      type: "private",
      name: "Piotr Nowak",
      phone: "+48 600 300 400",
      email: "piotr.nowak@email.pl",
    },
    amenities: ["balcony", "basement", "parkingSpot", "elevator"],
    features: {
      balcony: true,
      basement: true,
      parkingSpot: true,
      elevator: true,
      separateKitchen: false,
    },
    createdAt: "2026-10-20T08:00:00Z",
    updatedAt: "2026-10-27T11:00:00Z",
    publishedAt: "2026-10-20T10:00:00Z",
    viewCount: 567,
  },
  {
    id: "3",
    title: "Apartament z widokiem na Wisłę",
    description:
      "Apartament z panoramicznym widokiem na Wisłę i Stadion Narodowy. Wysoki standard wykończenia, przestronny salon, dwie sypialnie, dwie łazienki. Budynek z basenem, siłownią i całodobową ochroną.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 1850000,
    pricePerM2: 18500,
    area: 100,
    rooms: 4,
    floor: 15,
    totalFloors: 20,
    yearBuilt: 2024,
    location: {
      voivodeship: "mazowieckie",
      city: "Warszawa",
      district: "Praga-Południe",
      neighborhood: "Saska Kępa",
      latitude: 52.2445,
      longitude: 21.0564,
    },
    images: [
      {
        id: "3-1",
        url: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Luksusowy salon z panoramicznym widokiem przez duże okna",
        isPrimary: true
      },
      {
        id: "3-2",
        url: "https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Ekskluzywna biała kuchnia z marmurowym blatem"
      },
      {
        id: "3-3",
        url: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Elegancka sypialnia główna z widokiem na miasto"
      },
    ],
    advertiser: {
      id: "adv-3",
      type: "developer",
      name: "Rafał Wiśniewski",
      companyName: "Złota44 Development",
      phone: "+48 22 123 45 67",
      email: "sprzedaz@zlota44.pl",
      verified: true,
    },
    amenities: ["terrace", "garage", "elevator", "airConditioning", "securitySystem", "gatedCommunity"],
    features: {
      terrace: true,
      garage: true,
      elevator: true,
      airConditioning: true,
      securitySystem: true,
      gatedCommunity: true,
    },
    createdAt: "2026-10-15T09:00:00Z",
    updatedAt: "2026-10-28T09:00:00Z",
    publishedAt: "2026-10-15T11:00:00Z",
    viewCount: 892,
    isPromoted: true,
  },
  {
    id: "4",
    title: "Przytulna kawalerka na Kazimierzu w Krakowie",
    description:
      "Klimatyczna kawalerka w zabytkowej kamienicy na Kazimierzu. Idealna dla studenta lub osoby pracującej w centrum. Wysokie sufity, drewniane podłogi, duże okna. W pobliżu Plac Nowy, synagogi i najlepsze restauracje.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 2800,
    pricePerM2: 93,
    adminFee: 350,
    deposit: 5600,
    area: 30,
    rooms: 1,
    floor: 2,
    totalFloors: 4,
    yearBuilt: 1920,
    location: {
      voivodeship: "małopolskie",
      city: "Kraków",
      district: "Kazimierz",
      latitude: 50.0512,
      longitude: 19.9461,
    },
    images: [
      {
        id: "4-1",
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przytulna sypialnia z białą pościelą w zabytkowej kamienicy na Kazimierzu",
        isPrimary: true
      },
      {
        id: "4-2",
        url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Klimatyczne wnętrze z wysokimi sufitami i drewnianą podłogą"
      },
    ],
    advertiser: {
      id: "adv-4",
      type: "private",
      name: "Maria Zielińska",
      phone: "+48 501 234 567",
    },
    amenities: ["furnished"],
    features: {
      furnished: true,
    },
    createdAt: "2026-10-26T14:00:00Z",
    updatedAt: "2026-10-28T08:00:00Z",
    publishedAt: "2026-10-26T16:00:00Z",
    viewCount: 123,
  },
  {
    id: "5",
    title: "Nowoczesny dom jednorodzinny pod Wrocławiem",
    description:
      "Piękny dom jednorodzinny w cichej okolicy pod Wrocławiem. Przestronny salon z kominkiem, 4 sypialnie, 2 łazienki, garaż na 2 samochody. Duża działka z ogrodem i tarasem. Idealne miejsce dla rodziny ceniącej spokój i przestrzeń.",
    transactionType: "sale",
    propertyType: "house",
    marketType: "secondary",
    price: 1200000,
    pricePerM2: 6667,
    area: 180,
    rooms: 5,
    yearBuilt: 2015,
    location: {
      voivodeship: "dolnośląskie",
      city: "Wrocław",
      district: "Krzyki",
      neighborhood: "Ołtaszyn",
      latitude: 51.0647,
      longitude: 17.0035,
    },
    images: [
      {
        id: "5-1",
        url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesny dom jednorodzinny z białą elewacją i zadbanym ogrodem",
        isPrimary: true
      },
      {
        id: "5-2",
        url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Dom z garażem i podjazdem z kostki brukowej"
      },
      {
        id: "5-3",
        url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przestronna kuchnia z wyspą i wysokimi stołkami barowymi"
      },
    ],
    advertiser: {
      id: "adv-5",
      type: "agency",
      name: "Tomasz Lewandowski",
      companyName: "Dom Marzeń Nieruchomości",
      phone: "+48 71 999 88 77",
      email: "biuro@dommarzen.pl",
      verified: true,
    },
    amenities: ["garden", "garage", "terrace", "basement", "securitySystem"],
    features: {
      garden: true,
      garage: true,
      terrace: true,
      basement: true,
      securitySystem: true,
    },
    createdAt: "2026-10-18T11:00:00Z",
    updatedAt: "2026-10-25T16:00:00Z",
    publishedAt: "2026-10-18T14:00:00Z",
    viewCount: 445,
  },
  {
    id: "6",
    title: "Mieszkanie 2-pokojowe przy metrze Wilanowska",
    description:
      "Funkcjonalne mieszkanie w doskonałej lokalizacji - 2 minuty piechotą do metra Wilanowska. Dwa pokoje, kuchnia z oknem, łazienka z wanną. Budynek po termomodernizacji, niskie koszty utrzymania.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 3200,
    pricePerM2: 71,
    adminFee: 480,
    deposit: 6400,
    area: 45,
    rooms: 2,
    floor: 4,
    totalFloors: 11,
    yearBuilt: 1985,
    location: {
      voivodeship: "mazowieckie",
      city: "Warszawa",
      district: "Mokotów",
      neighborhood: "Służewiec",
      latitude: 52.1789,
      longitude: 21.0334,
    },
    images: [
      {
        id: "6-1",
        url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Jasne mieszkanie z drewnianą podłogą i dużymi oknami",
        isPrimary: true
      },
      {
        id: "6-2",
        url: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przytulna sypialnia z tekstyliami w naturalnych kolorach"
      },
    ],
    advertiser: {
      id: "adv-6",
      type: "agency",
      name: "Katarzyna Wójcik",
      companyName: "City Living",
      phone: "+48 22 654 32 10",
      email: "kontakt@cityliving.pl",
      verified: true,
    },
    amenities: ["elevator", "basement", "intercom"],
    features: {
      elevator: true,
      basement: true,
      intercom: true,
      separateKitchen: true,
    },
    createdAt: "2026-10-27T09:00:00Z",
    updatedAt: "2026-10-28T12:00:00Z",
    publishedAt: "2026-10-27T11:00:00Z",
    viewCount: 87,
  },
  {
    id: "7",
    title: "Stylowe mieszkanie w kamienicy na Starym Mieście w Poznaniu",
    description:
      "Wyjątkowe mieszkanie w odrestaurowanej kamienicy w samym sercu Poznania. Wysoki standard wykończenia, klimatyczne wnętrza, nowoczesne wyposażenie. Blisko Starego Rynku, kawiarni i galerii.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 3800,
    pricePerM2: 63,
    adminFee: 550,
    deposit: 7600,
    area: 60,
    rooms: 2,
    floor: 1,
    totalFloors: 3,
    yearBuilt: 1890,
    location: {
      voivodeship: "wielkopolskie",
      city: "Poznań",
      district: "Stare Miasto",
      latitude: 52.4064,
      longitude: 16.9252,
    },
    images: [
      {
        id: "7-1",
        url: "https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Eleganckie wnętrze w zabytkowej kamienicy z klasycznym wystrojem",
        isPrimary: true
      },
      {
        id: "7-2",
        url: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Stylowy salon z elementami klasycznymi i nowoczesnymi"
      },
    ],
    advertiser: {
      id: "adv-7",
      type: "private",
      name: "Jakub Michalski",
      phone: "+48 605 111 222",
      email: "jakub.m@email.pl",
    },
    amenities: ["furnished", "airConditioning"],
    features: {
      furnished: true,
      airConditioning: true,
    },
    createdAt: "2026-10-24T13:00:00Z",
    updatedAt: "2026-10-28T10:00:00Z",
    publishedAt: "2026-10-24T15:00:00Z",
    viewCount: 198,
  },
  {
    id: "8",
    title: "Apartament z widokiem na morze w Gdańsku",
    description:
      "Apartament z bezpośrednim widokiem na Zatokę Gdańską. Nowoczesne wykończenie, przestronny salon z tarasem, dwie sypialnie. W budynku basen, spa i siłownia. Idealne miejsce dla miłośników morza.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 1450000,
    pricePerM2: 16111,
    area: 90,
    rooms: 3,
    floor: 8,
    totalFloors: 12,
    yearBuilt: 2025,
    location: {
      voivodeship: "pomorskie",
      city: "Gdańsk",
      district: "Brzeźno",
      latitude: 54.4095,
      longitude: 18.5975,
    },
    images: [
      {
        id: "8-1",
        url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Luksusowa rezydencja z widokiem na morze w Gdańsku Brzeźnie",
        isPrimary: true
      },
      {
        id: "8-2",
        url: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesny salon z panoramicznym widokiem na Zatokę Gdańską"
      },
      {
        id: "8-3",
        url: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Ekskluzywna łazienka z marmurowymi wykończeniami"
      },
    ],
    advertiser: {
      id: "adv-8",
      type: "developer",
      name: "Magdalena Kamińska",
      companyName: "Baltic Residence",
      phone: "+48 58 765 43 21",
      email: "sprzedaz@balticresidence.pl",
      verified: true,
    },
    amenities: ["terrace", "garage", "elevator", "airConditioning", "gatedCommunity"],
    features: {
      terrace: true,
      garage: true,
      elevator: true,
      airConditioning: true,
      gatedCommunity: true,
    },
    createdAt: "2026-10-10T10:00:00Z",
    updatedAt: "2026-10-28T14:00:00Z",
    publishedAt: "2026-10-10T12:00:00Z",
    viewCount: 756,
    isPromoted: true,
  },
  {
    id: "9",
    title: "Kompaktowe mieszkanie dla studenta w Łodzi",
    description:
      "Przytulne mieszkanie idealne dla studenta lub młodej osoby pracującej. W pełni umeblowane i wyposażone. Blisko uczelni, komunikacji miejskiej i centrum handlowego Manufaktura.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 1800,
    pricePerM2: 60,
    adminFee: 280,
    deposit: 3600,
    area: 30,
    rooms: 1,
    floor: 2,
    totalFloors: 5,
    yearBuilt: 1970,
    location: {
      voivodeship: "łódzkie",
      city: "Łódź",
      district: "Śródmieście",
      latitude: 51.7592,
      longitude: 19.4556,
    },
    images: [
      {
        id: "9-1",
        url: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Kompaktowe mieszkanie z nowoczesnym aneksem kuchennym w Łodzi",
        isPrimary: true
      },
      {
        id: "9-2",
        url: "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Funkcjonalna przestrzeń mieszkalna dla studenta"
      },
    ],
    advertiser: {
      id: "adv-9",
      type: "private",
      name: "Ewa Pawlak",
      phone: "+48 502 333 444",
    },
    amenities: ["furnished", "elevator"],
    features: {
      furnished: true,
      elevator: true,
    },
    createdAt: "2026-10-28T07:00:00Z",
    updatedAt: "2026-10-28T07:00:00Z",
    publishedAt: "2026-10-28T08:00:00Z",
    viewCount: 34,
  },
  {
    id: "10",
    title: "Rodzinne mieszkanie 4-pokojowe w Katowicach",
    description:
      "Przestronne mieszkanie dla rodziny w nowoczesnym budynku. Cztery pokoje, dwie łazienki, duży balkon. Doskonała lokalizacja - blisko parku, szkół i komunikacji. Garaż podziemny w cenie.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 680000,
    pricePerM2: 7556,
    area: 90,
    rooms: 4,
    floor: 6,
    totalFloors: 10,
    yearBuilt: 2023,
    location: {
      voivodeship: "śląskie",
      city: "Katowice",
      district: "Brynów",
      latitude: 50.2465,
      longitude: 18.9959,
    },
    images: [
      {
        id: "10-1",
        url: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przestronny salon w nowoczesnym apartamencie rodzinnym w Katowicach",
        isPrimary: true
      },
      {
        id: "10-2",
        url: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Duży pokój dzienny z jadalnią i dostępem do balkonu"
      },
      {
        id: "10-3",
        url: "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesna łazienka z prysznicem i szarymi płytkami"
      },
    ],
    advertiser: {
      id: "adv-10",
      type: "developer",
      name: "Paweł Kaczmarek",
      companyName: "Silesia Home",
      phone: "+48 32 111 22 33",
      email: "biuro@silesiahome.pl",
      verified: true,
    },
    amenities: ["balcony", "garage", "elevator", "intercom", "gatedCommunity"],
    features: {
      balcony: true,
      garage: true,
      elevator: true,
      intercom: true,
      gatedCommunity: true,
    },
    createdAt: "2026-10-22T11:00:00Z",
    updatedAt: "2026-10-27T09:00:00Z",
    publishedAt: "2026-10-22T14:00:00Z",
    viewCount: 312,
  },
  {
    id: "11",
    title: "Słoneczne mieszkanie na Żoliborzu",
    description: "Jasne, przestronne mieszkanie z widokiem na park. Dwa pokoje, kuchnia z oknem, łazienka z prysznicem. Cicha okolica, dobra komunikacja.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 720000,
    pricePerM2: 12000,
    area: 60,
    rooms: 2,
    floor: 3,
    totalFloors: 4,
    yearBuilt: 1960,
    location: {
      voivodeship: "mazowieckie",
      city: "Warszawa",
      district: "Żoliborz",
      latitude: 52.2697,
      longitude: 20.9822,
    },
    images: [
      {
        id: "11-1",
        url: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Słoneczny salon z dużymi oknami i widokiem na zieleń na warszawskim Żoliborzu",
        isPrimary: true
      },
      {
        id: "11-2",
        url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przytulny pokój z drewnianą podłogą i ciepłym oświetleniem"
      },
    ],
    advertiser: { id: "adv-11", type: "private", name: "Jan Kowalski", phone: "+48 601 234 567" },
    amenities: ["balcony", "basement"],
    features: { balcony: true, basement: true },
    createdAt: "2026-10-20T10:00:00Z",
    updatedAt: "2026-10-28T10:00:00Z",
    publishedAt: "2026-10-20T12:00:00Z",
    viewCount: 156,
  },
  {
    id: "12",
    title: "Nowoczesne studio na Woli",
    description: "Kompaktowe studio w nowym budownictwie. Aneks kuchenny, łazienka, miejsce postojowe. Blisko metra i galerii.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 450000,
    pricePerM2: 15000,
    area: 30,
    rooms: 1,
    floor: 8,
    totalFloors: 15,
    yearBuilt: 2024,
    location: {
      voivodeship: "mazowieckie",
      city: "Warszawa",
      district: "Wola",
      latitude: 52.2397,
      longitude: 20.9722,
    },
    images: [
      {
        id: "12-1",
        url: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesne studio z minimalistycznym designem na warszawskiej Woli",
        isPrimary: true
      },
      {
        id: "12-2",
        url: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Kompaktowa przestrzeń mieszkalna w stylu skandynawskim"
      },
    ],
    advertiser: { id: "adv-12", type: "developer", name: "Adam Nowicki", companyName: "Modern Living", phone: "+48 22 111 22 33", verified: true },
    amenities: ["elevator", "parkingSpot", "intercom"],
    features: { elevator: true, parkingSpot: true, intercom: true },
    createdAt: "2026-10-22T09:00:00Z",
    updatedAt: "2026-10-28T09:00:00Z",
    publishedAt: "2026-10-22T11:00:00Z",
    viewCount: 234,
  },
  {
    id: "13",
    title: "Eleganckie mieszkanie przy Rynku w Krakowie",
    description: "Wyjątkowe mieszkanie w zabytkowej kamienicy. Wysoki standard, klimatyczne wnętrza. Idealna lokalizacja przy głównym rynku.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 1100000,
    pricePerM2: 18333,
    area: 60,
    rooms: 2,
    floor: 2,
    totalFloors: 4,
    yearBuilt: 1890,
    location: {
      voivodeship: "małopolskie",
      city: "Kraków",
      district: "Stare Miasto",
      latitude: 50.0614,
      longitude: 19.9372,
    },
    images: [
      {
        id: "13-1",
        url: "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Elegancka sypialnia w zabytkowej kamienicy przy krakowskim Rynku",
        isPrimary: true
      },
      {
        id: "13-2",
        url: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Stylowy salon z elementami klasycznymi"
      },
    ],
    advertiser: { id: "adv-13", type: "agency", name: "Marta Wiśniewska", companyName: "Kraków Estate", phone: "+48 12 345 67 89", verified: true },
    amenities: ["furnished"],
    features: { furnished: true },
    createdAt: "2026-10-19T11:00:00Z",
    updatedAt: "2026-10-27T11:00:00Z",
    publishedAt: "2026-10-19T13:00:00Z",
    viewCount: 478,
  },
  {
    id: "14",
    title: "Mieszkanie z ogrodem na Bronowicach",
    description: "Parter z własnym ogrodem 50m². Trzy pokoje, kuchnia, łazienka. Spokojna okolica, blisko tramwaju.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 650000,
    pricePerM2: 9286,
    area: 70,
    rooms: 3,
    floor: 0,
    totalFloors: 4,
    yearBuilt: 2010,
    location: {
      voivodeship: "małopolskie",
      city: "Kraków",
      district: "Bronowice",
      latitude: 50.0814,
      longitude: 19.8872,
    },
    images: [
      {
        id: "14-1",
        url: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Mieszkanie na parterze z bezpośrednim wyjściem do ogrodu",
        isPrimary: true
      },
      {
        id: "14-2",
        url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Jasny salon z widokiem na prywatny ogródek"
      },
    ],
    advertiser: { id: "adv-14", type: "private", name: "Krzysztof Mazur", phone: "+48 508 765 432" },
    amenities: ["garden", "basement", "parkingSpot"],
    features: { garden: true, basement: true, parkingSpot: true },
    createdAt: "2026-10-21T14:00:00Z",
    updatedAt: "2026-10-26T14:00:00Z",
    publishedAt: "2026-10-21T16:00:00Z",
    viewCount: 267,
  },
  {
    id: "15",
    title: "Apartament w centrum Gdyni",
    description: "Nowoczesny apartament z widokiem na port. Wysoki standard, taras, miejsce w garażu. Blisko plaży i centrum.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 890000,
    pricePerM2: 12714,
    area: 70,
    rooms: 3,
    floor: 5,
    totalFloors: 8,
    yearBuilt: 2025,
    location: {
      voivodeship: "pomorskie",
      city: "Gdańsk",
      district: "Śródmieście",
      latitude: 54.3520,
      longitude: 18.6466,
    },
    images: [
      {
        id: "15-1",
        url: "https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesny apartament z widokiem na port w Gdyni",
        isPrimary: true
      },
      {
        id: "15-2",
        url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Elegancki budynek apartamentowy w nadmorskiej lokalizacji"
      },
    ],
    advertiser: { id: "adv-15", type: "developer", name: "Baltic Development", companyName: "Baltic Development", phone: "+48 58 123 45 67", verified: true },
    amenities: ["terrace", "garage", "elevator"],
    features: { terrace: true, garage: true, elevator: true },
    createdAt: "2026-10-17T10:00:00Z",
    updatedAt: "2026-10-28T10:00:00Z",
    publishedAt: "2026-10-17T12:00:00Z",
    viewCount: 523,
  },
  {
    id: "16",
    title: "Kawalerka do wynajęcia w Gdańsku Wrzeszczu",
    description: "Przytulna kawalerka w dobrze skomunikowanej lokalizacji. Umeblowana, gotowa do zamieszkania.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 2200,
    pricePerM2: 73,
    adminFee: 320,
    deposit: 4400,
    area: 30,
    rooms: 1,
    floor: 3,
    totalFloors: 5,
    yearBuilt: 1975,
    location: {
      voivodeship: "pomorskie",
      city: "Gdańsk",
      district: "Wrzeszcz",
      latitude: 54.3820,
      longitude: 18.6166,
    },
    images: [
      {
        id: "16-1",
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przytulna kawalerka z białymi ścianami w Gdańsku Wrzeszczu",
        isPrimary: true
      },
      {
        id: "16-2",
        url: "https://images.pexels.com/photos/2082088/pexels-photo-2082088.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Funkcjonalna kuchnia z wszystkimi niezbędnymi urządzeniami"
      },
    ],
    advertiser: { id: "adv-16", type: "private", name: "Agnieszka Lewandowska", phone: "+48 502 111 333" },
    amenities: ["furnished", "elevator"],
    features: { furnished: true, elevator: true },
    createdAt: "2026-10-26T08:00:00Z",
    updatedAt: "2026-10-28T08:00:00Z",
    publishedAt: "2026-10-26T10:00:00Z",
    viewCount: 89,
  },
  {
    id: "17",
    title: "3-pokojowe mieszkanie na Jagodnie we Wrocławiu",
    description: "Nowoczesne mieszkanie na nowym osiedlu. Balkon, komórka lokatorska, miejsce postojowe. Blisko tramwaju.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 580000,
    pricePerM2: 9032,
    area: 65,
    rooms: 3,
    floor: 4,
    totalFloors: 6,
    yearBuilt: 2024,
    location: {
      voivodeship: "dolnośląskie",
      city: "Wrocław",
      district: "Jagodno",
      latitude: 51.0547,
      longitude: 17.1035,
    },
    images: [
      {
        id: "17-1",
        url: "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowoczesne mieszkanie w nowym budownictwie na wrocławskim Jagodnie",
        isPrimary: true
      },
      {
        id: "17-2",
        url: "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Jasny salon z dostępem do balkonu"
      },
    ],
    advertiser: { id: "adv-17", type: "developer", name: "Wrocław Invest", companyName: "Wrocław Invest", phone: "+48 71 234 56 78", verified: true },
    amenities: ["balcony", "parkingSpot", "elevator", "basement"],
    features: { balcony: true, parkingSpot: true, elevator: true, basement: true },
    createdAt: "2026-10-23T09:00:00Z",
    updatedAt: "2026-10-27T09:00:00Z",
    publishedAt: "2026-10-23T11:00:00Z",
    viewCount: 345,
  },
  {
    id: "18",
    title: "Mieszkanie do wynajęcia przy Politechnice Wrocławskiej",
    description: "Idealne dla studentów. Dwa pokoje, kuchnia, łazienka. W pełni umeblowane. 5 minut od uczelni.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 2600,
    pricePerM2: 65,
    adminFee: 380,
    deposit: 5200,
    area: 40,
    rooms: 2,
    floor: 2,
    totalFloors: 4,
    yearBuilt: 1985,
    location: {
      voivodeship: "dolnośląskie",
      city: "Wrocław",
      district: "Śródmieście",
      latitude: 51.1097,
      longitude: 17.0385,
    },
    images: [
      {
        id: "18-1",
        url: "https://images.pexels.com/photos/2734485/pexels-photo-2734485.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Funkcjonalne mieszkanie dla studentów przy Politechnice Wrocławskiej",
        isPrimary: true
      },
      {
        id: "18-2",
        url: "https://images.pexels.com/photos/2736497/pexels-photo-2736497.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przytulny pokój z biurkiem do nauki"
      },
    ],
    advertiser: { id: "adv-18", type: "private", name: "Tomasz Adamski", phone: "+48 601 987 654" },
    amenities: ["furnished"],
    features: { furnished: true },
    createdAt: "2026-10-27T11:00:00Z",
    updatedAt: "2026-10-28T11:00:00Z",
    publishedAt: "2026-10-27T13:00:00Z",
    viewCount: 67,
  },
  {
    id: "19",
    title: "Mieszkanie na Jeżycach w Poznaniu",
    description: "Stylowe mieszkanie w modnej dzielnicy. Wysoki standard, dobra komunikacja. Blisko parku i kawiarni.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 520000,
    pricePerM2: 10400,
    area: 50,
    rooms: 2,
    floor: 1,
    totalFloors: 4,
    yearBuilt: 1930,
    location: {
      voivodeship: "wielkopolskie",
      city: "Poznań",
      district: "Jeżyce",
      latitude: 52.4164,
      longitude: 16.8952,
    },
    images: [
      {
        id: "19-1",
        url: "https://images.pexels.com/photos/2988865/pexels-photo-2988865.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Stylowe mieszkanie w modnej dzielnicy Jeżyce w Poznaniu",
        isPrimary: true
      },
      {
        id: "19-2",
        url: "https://images.pexels.com/photos/2988861/pexels-photo-2988861.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Jasny salon z charakterem starego budownictwa"
      },
    ],
    advertiser: { id: "adv-19", type: "agency", name: "Poznań Estate", companyName: "Poznań Estate", phone: "+48 61 222 33 44", verified: true },
    amenities: ["basement"],
    features: { basement: true },
    createdAt: "2026-10-18T14:00:00Z",
    updatedAt: "2026-10-25T14:00:00Z",
    publishedAt: "2026-10-18T16:00:00Z",
    viewCount: 289,
  },
  {
    id: "20",
    title: "Kawalerka w centrum Łodzi",
    description: "Mała, ale funkcjonalna kawalerka przy Piotrkowskiej. Idealna dla singla lub pary.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 220000,
    pricePerM2: 8800,
    area: 25,
    rooms: 1,
    floor: 2,
    totalFloors: 5,
    yearBuilt: 1910,
    location: {
      voivodeship: "łódzkie",
      city: "Łódź",
      district: "Śródmieście",
      latitude: 51.7692,
      longitude: 19.4556,
    },
    images: [
      {
        id: "20-1",
        url: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Kompaktowa kawalerka w zabytkowej kamienicy przy ulicy Piotrkowskiej w Łodzi",
        isPrimary: true
      },
      {
        id: "20-2",
        url: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Funkcjonalne wnętrze z przemyślanym układem"
      },
    ],
    advertiser: { id: "adv-20", type: "private", name: "Barbara Krawczyk", phone: "+48 605 444 555" },
    amenities: [],
    features: {},
    createdAt: "2026-10-24T10:00:00Z",
    updatedAt: "2026-10-28T10:00:00Z",
    publishedAt: "2026-10-24T12:00:00Z",
    viewCount: 134,
  },
  {
    id: "21",
    title: "Mieszkanie 3-pokojowe w Szczecinie",
    description: "Przestronne mieszkanie z balkonem. Dobra lokalizacja, blisko centrum i terenów zielonych.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "secondary",
    price: 380000,
    pricePerM2: 6333,
    area: 60,
    rooms: 3,
    floor: 2,
    totalFloors: 4,
    yearBuilt: 1995,
    location: {
      voivodeship: "zachodniopomorskie",
      city: "Szczecin",
      district: "Centrum",
      latitude: 53.4285,
      longitude: 14.5528,
    },
    images: [
      {
        id: "21-1",
        url: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przestronne mieszkanie w centrum Szczecina z balkonem",
        isPrimary: true
      },
      {
        id: "21-2",
        url: "https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Jasny salon z widokiem na zieleń miejską"
      },
    ],
    advertiser: { id: "adv-21", type: "agency", name: "Szczecin Dom", companyName: "Szczecin Dom", phone: "+48 91 123 45 67", verified: true },
    amenities: ["balcony", "elevator"],
    features: { balcony: true, elevator: true },
    createdAt: "2026-10-19T09:00:00Z",
    updatedAt: "2026-10-26T09:00:00Z",
    publishedAt: "2026-10-19T11:00:00Z",
    viewCount: 178,
  },
  {
    id: "22",
    title: "Mieszkanie na Starym Mieście w Lublinie",
    description: "Klimatyczne mieszkanie w kamienicy. Dwa pokoje, kuchnia, łazienka. Blisko uczelni i starówki.",
    transactionType: "rent",
    propertyType: "apartment",
    marketType: "secondary",
    price: 2000,
    pricePerM2: 50,
    adminFee: 300,
    deposit: 4000,
    area: 40,
    rooms: 2,
    floor: 1,
    totalFloors: 3,
    yearBuilt: 1920,
    location: {
      voivodeship: "lubelskie",
      city: "Lublin",
      district: "Stare Miasto",
      latitude: 51.2465,
      longitude: 22.5684,
    },
    images: [
      {
        id: "22-1",
        url: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Klimatyczne mieszkanie w kamienicy na Starym Mieście w Lublinie",
        isPrimary: true
      },
      {
        id: "22-2",
        url: "https://images.pexels.com/photos/2089699/pexels-photo-2089699.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przytulne wnętrze z charakterem historycznego budownictwa"
      },
    ],
    advertiser: { id: "adv-22", type: "private", name: "Monika Szymańska", phone: "+48 503 666 777" },
    amenities: ["furnished"],
    features: { furnished: true },
    createdAt: "2026-10-25T12:00:00Z",
    updatedAt: "2026-10-28T12:00:00Z",
    publishedAt: "2026-10-25T14:00:00Z",
    viewCount: 92,
  },
  {
    id: "23",
    title: "Nowe mieszkanie w Bydgoszczy",
    description: "Mieszkanie w nowym budynku. Dwa pokoje, balkon, miejsce postojowe. Dobra komunikacja.",
    transactionType: "sale",
    propertyType: "apartment",
    marketType: "primary",
    price: 340000,
    pricePerM2: 7556,
    area: 45,
    rooms: 2,
    floor: 3,
    totalFloors: 5,
    yearBuilt: 2024,
    location: {
      voivodeship: "kujawsko-pomorskie",
      city: "Bydgoszcz",
      district: "Fordon",
      latitude: 53.1235,
      longitude: 18.0084,
    },
    images: [
      {
        id: "23-1",
        url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Nowe mieszkanie w nowoczesnym budynku w Bydgoszczy Fordon",
        isPrimary: true
      },
      {
        id: "23-2",
        url: "https://images.pexels.com/photos/2082089/pexels-photo-2082089.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Przestronny salon z balkonem w nowym apartamencie"
      },
    ],
    advertiser: { id: "adv-23", type: "developer", name: "Bydgoszcz Build", companyName: "Bydgoszcz Build", phone: "+48 52 111 22 33", verified: true },
    amenities: ["balcony", "parkingSpot", "elevator"],
    features: { balcony: true, parkingSpot: true, elevator: true },
    createdAt: "2026-10-20T08:00:00Z",
    updatedAt: "2026-10-27T08:00:00Z",
    publishedAt: "2026-10-20T10:00:00Z",
    viewCount: 145,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return sampleProperties.find((p) => p.id === id);
}

export function filterProperties(filters: Partial<{
  transactionType: string;
  propertyType: string[];
  city: string;
  priceMin: number;
  priceMax: number;
  areaMin: number;
  areaMax: number;
  roomsMin: number;
  roomsMax: number;
}>): Property[] {
  return sampleProperties.filter((property) => {
    if (filters.transactionType && property.transactionType !== filters.transactionType) {
      return false;
    }
    if (filters.propertyType?.length && !filters.propertyType.includes(property.propertyType)) {
      return false;
    }
    if (filters.city && property.location.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
    if (filters.priceMin && property.price < filters.priceMin) {
      return false;
    }
    if (filters.priceMax && property.price > filters.priceMax) {
      return false;
    }
    if (filters.areaMin && property.area < filters.areaMin) {
      return false;
    }
    if (filters.areaMax && property.area > filters.areaMax) {
      return false;
    }
    if (filters.roomsMin && property.rooms < filters.roomsMin) {
      return false;
    }
    if (filters.roomsMax && property.rooms > filters.roomsMax) {
      return false;
    }
    return true;
  });
}

export function sortProperties(
  properties: Property[],
  sortBy: string
): Property[] {
  const sorted = [...properties];

  switch (sortBy) {
    case "price_asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price_desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "price_m2_asc":
      return sorted.sort((a, b) => a.pricePerM2 - b.pricePerM2);
    case "price_m2_desc":
      return sorted.sort((a, b) => b.pricePerM2 - a.pricePerM2);
    case "area_asc":
      return sorted.sort((a, b) => a.area - b.area);
    case "area_desc":
      return sorted.sort((a, b) => b.area - a.area);
    case "newest":
    default:
      return sorted.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }
}
