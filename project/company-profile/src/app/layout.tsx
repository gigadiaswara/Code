"use client";
import { ReactNode } from 'react';
import './globals.css';

const Layout = ({ children }: { children: ReactNode }) => {
  // Fungsi scroll ke elemen berdasarkan id
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex items-center justify-between">
              <a href="#" onClick={() => scrollToSection("heroSection")} className="hover:text-blue-300">Home</a>
              <a href="#" onClick={() => scrollToSection("aboutUs")} className="hover:text-blue-300">About Us</a>
              <a href="#" onClick={() => scrollToSection("ourServices")} className="hover:text-blue-300">Services</a>
              <a href="#" onClick={() => scrollToSection("ourTeam")} className="hover:text-blue-300">Team</a>
            </nav>
          </header>
          
          <main className="flex-1 container mx-auto p-4">
            {children}
          </main>
          
          <footer className="bg-blue-600 text-white text-center p-4">
            <div>&copy; 2023 Ageka Konstruksi. All rights reserved.</div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;