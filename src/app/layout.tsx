import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import QueryWrapper from "@/wrappers/queryProvider";
import { TmdbProvider } from "@/contexts/tmdbContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koala",
  description: "Website for watching Movies and TV Shows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>
          <TmdbProvider>
            <Header />
            {children}
            <Footer />
          </TmdbProvider>
        </QueryWrapper>
      </body>
    </html>
  );
}
