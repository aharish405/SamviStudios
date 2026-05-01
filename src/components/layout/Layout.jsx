import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle dark mode setup
  useEffect(() => {
    // Check system preference or local storage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919700605652"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
