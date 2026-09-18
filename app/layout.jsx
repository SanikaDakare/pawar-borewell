import './globals.css';
import './directions.css';
import './contact.css';

export const metadata = {
  title: "Pawar Borewell's & Trader's | Borewell Service in Kolhapur",
  description: "Borewell drilling, pumps, pipes and borewell materials for homes, farms and commercial sites across Kolhapur city and district.",
  keywords: ['borewell service Kolhapur', 'borewell drilling Kolhapur', 'submersible pumps Kolhapur', 'borewell materials Kolhapur'],
};

export default function RootLayout({ children }) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
