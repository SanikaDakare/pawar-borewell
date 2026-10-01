import './globals.css';
import './directions.css';
import './contact.css';

export const metadata = {
  title: "Pawar Borewell's & Trader's | Pumps, Drilling & Borewell Supplies in Kolhapur",
  description: "Borewell drilling, submersible and openwell pumps, pump guards, cable, HDPE pipe and fittings for homes, farms and commercial sites in Kolhapur.",
  keywords: ['borewell service Kolhapur', 'borewell drilling Kolhapur', 'submersible pumps Kolhapur', 'openwell pumps Kolhapur', 'borewell materials Kolhapur'],
  icons: { icon: '/assets/pawar-borewell-logo.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
