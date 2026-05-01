import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ toggleDarkMode, isDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed z-50 transition-all duration-500 w-[95%] sm:w-[90%] max-w-6xl left-1/2 -translate-x-1/2',
          isScrolled
            ? 'top-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/50 dark:border-white/10 rounded-[2rem] py-2 px-2'
            : 'top-6 bg-transparent py-4 px-2'
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors"></div>
              <img src="/SamviStudios.jpg" alt="Samvi Studios" className="h-11 w-auto object-contain rounded-full relative z-10" />
            </div>
            <span className={clsx(
              "text-xl font-bold tracking-tight hidden sm:block font-heading transition-colors",
              isScrolled ? "text-neutral-900 dark:text-white" : "text-white drop-shadow-md"
            )}>
              Samvi Studios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/40 dark:bg-black/20 p-1.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'text-sm font-semibold transition-all px-5 py-2 rounded-full relative overflow-hidden',
                    isActive
                      ? 'text-white bg-primary shadow-md shadow-primary/30'
                      : isScrolled
                        ? 'text-neutral-700 dark:text-neutral-300 hover:bg-white/50 dark:hover:bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/20'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={clsx(
                "p-2.5 rounded-full backdrop-blur-md transition-all hover:scale-110",
                isScrolled 
                  ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700" 
                  : "bg-white/20 text-white hover:bg-white/30 border border-white/10"
              )}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:shadow-[0_0_30px_rgba(109,40,217,0.6)] hover:-translate-y-0.5 border border-white/20"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden z-50">
            <button
              onClick={toggleDarkMode}
              className={clsx(
                "p-2 rounded-full transition-colors",
                isScrolled ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300" : "bg-white/20 text-white"
              )}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "p-2 rounded-full transition-colors",
                isScrolled ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800" : "text-white bg-white/20"
              )}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/20 dark:border-white/10 lg:hidden overflow-hidden mt-4 mx-2 p-2"
            >
              <nav className="flex flex-col gap-1 p-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'px-5 py-3.5 rounded-2xl text-lg font-bold transition-all',
                        isActive
                          ? 'bg-primary text-white shadow-md'
                          : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800 px-2 pb-2">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary text-white px-5 py-4 rounded-2xl font-bold transition-all shadow-lg"
                  >
                    Join Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
