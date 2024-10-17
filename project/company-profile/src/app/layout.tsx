import { ReactNode } from 'react';
import './globals.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between">
              <a href="/" className="text-lg font-bold">Our Company</a>
              <div className="space-x-4">
                <a href="/" className="hover:text-blue-300">Home</a>
                <a href="/about" className="hover:text-blue-300">About Us</a>
                <a href="/services" className="hover:text-blue-300">Services</a>
                <a href="/team" className="hover:text-blue-300">Team</a>
              </div>
            </nav>
          </header>
          
          <main className="flex-1 container mx-auto p-4">
            {children}
          </main>
          
          <footer className="bg-blue-600 text-white text-center p-4">
            <p>&copy; 2023 Our Company. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;