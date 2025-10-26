import "../styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata = {
  title: "Foxline — Secure Contract Uploads & Client Portal",
  description:
    "Foxline helps agencies and freelancers manage contracts, clients, and payments securely in one simple dashboard.",
  openGraph: {
    title: "Foxline — Contract Management Platform",
    description:
      "Upload contracts, manage clients, and track progress securely with Foxline.",
    url: "https://foxline.vercel.app",
    siteName: "Foxline",
    images: ["/og-image.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxline — Contract Management Platform",
    description:
      "Smart, secure contract uploads and client workflow management.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga-setup" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Plausible Analytics */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            async
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Foxline",
              url: "https://foxline.vercel.app",
              logo: "/favicon.ico",
            }),
          }}
        />
      </head>

      <body className="bg-white text-gray-800 :bg-darkbg :text-gray-200 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
