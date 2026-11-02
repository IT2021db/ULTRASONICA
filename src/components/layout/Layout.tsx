import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#001029] text-on-surface">
      <Header />
      <main className="w-full pt-20 bg-[#FAFAF9] min-h-screen flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
