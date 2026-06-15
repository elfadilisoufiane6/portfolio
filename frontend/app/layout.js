import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://soufweb.site';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Souf Web | Agence Web Premium Maroc',
    template: '%s | Souf Web',
  },
  description:
    "Nous ne créons pas que des sites — nous créons des clients pour votre business. Sites web haute conversion, e-commerce, design premium au Maroc.",
  keywords: ['web design Maroc', 'agence web', 'e-commerce', 'landing page', 'SEO', 'Souf Web'],
  authors: [{ name: 'Souf Web' }],
  creator: 'Souf Web',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    title: 'Souf Web — Sites web haute conversion au Maroc',
    description:
      "Sites web premium qui transforment vos visiteurs en clients. Hôtellerie, e-commerce, tourisme — design moderne, livraison rapide.",
    siteName: 'Souf Web',
    images: [
      {
        url: '/logo.png',
        width: 1254,
        height: 1254,
        alt: 'Souf Web',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Souf Web — Sites web haute conversion au Maroc',
    description:
      "Sites web premium qui transforment vos visiteurs en clients.",
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
};

// avoid theme/lang flash on first paint
const initScript = `
  try {
    var t = localStorage.getItem('soufweb_theme');
    var l = localStorage.getItem('soufweb_lang');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.setAttribute('data-theme', 'light');
    if (l === 'fr' || l === 'en' || l === 'ar') {
      document.documentElement.lang = l;
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    } else {
      document.documentElement.lang = 'fr';
      document.documentElement.dir = 'ltr';
    }
  } catch(e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
