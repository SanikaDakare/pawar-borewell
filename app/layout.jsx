import './globals.css';
import './directions.css';
import './contact.css';
import './quality.css';
import { contactPhones, siteUrl } from './site-config';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pawar Borewell's & Trader's | Pumps, Drilling & Borewell Supplies in Kolhapur",
  description: "Borewell drilling, submersible and openwell pumps, pump guards, cable, HDPE pipe and fittings for homes, farms and commercial sites in Kolhapur.",
  keywords: ['borewell service Kolhapur', 'borewell drilling Kolhapur', 'submersible pumps Kolhapur', 'openwell pumps Kolhapur', 'borewell materials Kolhapur'],
  alternates: { canonical: '/' },
  openGraph: {
    title: "Pawar Borewell's & Trader's | Borewell Drilling & Pumps",
    description: 'Borewell drilling, pumps and materials for homes, farms and businesses across Maharashtra.',
    url: siteUrl,
    siteName: "Pawar Borewell's & Trader's",
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/assets/drilling-site.jpeg', alt: 'Borewell drilling at a Pawar Borewell site' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/assets/pawar-borewell-official-emblem.jpeg' },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Pawar Borewell's & Trader's",
  url: siteUrl,
  image: `${siteUrl}/assets/pawar-borewell-official-emblem.jpeg`,
  telephone: contactPhones.map((phone) => `+91${phone}`),
  address: { '@type': 'PostalAddress', addressLocality: 'Gad-Mudshingi, Kolhapur', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Maharashtra' },
};

export default function RootLayout({ children }) {
  return <html lang="en-IN"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /></body></html>;
}
