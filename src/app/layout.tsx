import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import ThemeContextProvider from "../context/ThemeContext";
import AuthProvider from "@/components/authProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robbie BlogApp",
  description: "blog homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <AuthProvider>
            <div className="w-full min-h-screen max-w-[1200px] flex flex-col justify-between px-4 mx-auto">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
