import type { Metadata } from "next";
import { DM_Sans, Gilda_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ThemeSwitcher } from "../components/theme-switcher";
import Image from "next/image";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Catequese PNSL",
  description: "Sistema de Gestão de Catequese",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  display: "swap",
  subsets: ["latin"],
});

const gildaDisplay = Gilda_Display({
  variable: "--font-gilda-display",
  display: "swap",
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"
          className={`${dmSans.variable} ${gildaDisplay.variable}`} 
          suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <div className="min-h-[100dvh] flex flex-col justify-between items-center">
            
            <div className="flex-1 w-full flex flex-col items-center pb-36">
              {children}
            </div>

            <footer className="fixed bottom-0 left-0 w-full flex flex-col items-center justify-center border-t bg-background/80 backdrop-blur-md text-center text-xs gap-4 py-4 z-50">
              <ThemeSwitcher />
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                priority
                className="w-5 h-auto"
              />
              <p>
                &copy; Catequese Paróquia Nossa Senhora de Lourdes - Taguatinga.<br />
                Todos os direitos reservados.
              </p>
            </footer>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
