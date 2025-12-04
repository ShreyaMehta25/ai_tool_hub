import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'AI Tools Hub - Discover the Best AI Tools',
    template: '%s | AI Tools Hub',
  },
  description:
    'Discover and explore the best AI tools for every need. From chatbots to image generation, find the perfect AI solution for your workflow.',
  keywords: [
    'AI tools',
    'artificial intelligence',
    'AI directory',
    'machine learning',
    'AI software',
    'productivity tools',
  ],
  authors: [{ name: 'AI Tools Hub' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aitoolshub.com',
    title: 'AI Tools Hub - Discover the Best AI Tools',
    description:
      'Discover and explore the best AI tools for every need. From chatbots to image generation, find the perfect AI solution for your workflow.',
    siteName: 'AI Tools Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Hub - Discover the Best AI Tools',
    description:
      'Discover and explore the best AI tools for every need. From chatbots to image generation, find the perfect AI solution for your workflow.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}