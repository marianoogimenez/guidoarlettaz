import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Martín Delgado | Odontología Integral en CABA",
  description:
    "Consultorio odontológico en Av. Corrientes, CABA. Implantes, ortodoncia, blanqueamiento y más. +18 años de experiencia. Turnos online.",
  keywords: [
    "dentista CABA",
    "odontólogo Buenos Aires",
    "implantes dentales",
    "ortodoncia",
    "blanqueamiento dental",
    "Dr. Martín Delgado",
    "odontología integral",
  ],
  openGraph: {
    title: "Dr. Martín Delgado | Odontología Integral",
    description:
      "Consultorio odontológico en Av. Corrientes, CABA. Implantes, ortodoncia, blanqueamiento y más.",
    url: "https://www.drdelgado.com.ar",
    siteName: "Odontología Integral Delgado",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.drdelgado.com.ar" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Odontología Integral Delgado",
  description:
    "Consultorio odontológico en CABA. Implantes, ortodoncia, blanqueamiento y odontología general.",
  url: "https://www.drdelgado.com.ar",
  telephone: "+5491155551234",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Corrientes 1234, Piso 3",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "CABA",
    postalCode: "C1043",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  medicalSpecialty: [
    "Implantology",
    "Orthodontics",
    "CosmeticDentistry",
    "Endodontics",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
