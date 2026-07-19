import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

// Shared service hierarchy for submenu
const serviceCategories = [
  {
    id: 'offline-sessions',
    title: 'Offline Sessions',
    accent: '#4C1D95',
    accentBg: 'rgba(76,29,149,0.08)',
    items: ['Yoga', 'Dance (Classical)', 'Zumba', 'Music', 'Gymnastics'],
  },
  {
    id: 'online-sessions',
    title: 'Online Sessions',
    accent: '#059669',
    accentBg: 'rgba(5,150,105,0.08)',
    items: ['Yoga', 'Dance (Classical)'],
  },
  {
    id: 'workshops',
    title: 'Workshops',
    accent: '#D97706',
    accentBg: 'rgba(217,119,6,0.08)',
    items: ['Yoga', 'Dance (Classical)'],
  },
  {
    id: 'certification-courses',
    title: 'Certification Courses',
    accent: '#E11D48',
    accentBg: 'rgba(225,29,72,0.08)',
    items: ['Yoga', 'Music', 'Dance (Classical)'],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    accent: '#2563EB',
    accentBg: 'rgba(37,99,235,0.08)',
    items: ['Yoga', 'Dance (Classical)'],
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Wellness',
    accent: '#475569',
    accentBg: 'rgba(71,85,105,0.08)',
    items: ['Yoga', 'Dance (Classical)', 'Healing Programs'],
  },
  {
    id: 'sangeethu',
    title: 'Sangeethu',
    accent: '#0D9488',
    accentBg: 'rgba(13,148,136,0.08)',
    items: ['Carnatic Music', 'Bhajans & Devotional', 'Music Ensemble'],
  },
  {
    id: 'events',
    title: 'Events',
    accent: '#EA580C',
    accentBg: 'rgba(234,88,12,0.08)',
    items: ['Dance (Classical)'],
  },
  {
    id: 'retreats',
    title: 'Retreats',
    accent: '#7C3AED',
    accentBg: 'rgba(124,58,237,0.08)',
    items: ['Yoga', 'Dance (Classical)'],
  },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', hasSubmenu: true },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ toggleDarkMode, isDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleServicesMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setDesktopServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDesktopServicesOpen(false), 150);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

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
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors" />
              <img src="/SamviStudios.jpg" alt="Samvi Studios" className="h-11 w-auto object-contain rounded-full relative z-10" />
            </div>
            <span className={clsx(
              'text-xl font-bold tracking-tight hidden sm:block font-heading transition-colors',
              isScrolled ? 'text-neutral-900 dark:text-white' : 'text-white drop-shadow-md'
            )}>
              Samvi Studios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/40 dark:bg-black/20 p-1.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/5">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                /* Services with mega-menu trigger */
                <div
                  key={link.name}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        'text-sm font-semibold transition-all px-5 py-2 rounded-full flex items-center gap-1',
                        isActive || desktopServicesOpen
                          ? 'text-white bg-primary shadow-md shadow-primary/30'
                          : isScrolled
                          ? 'text-neutral-700 dark:text-neutral-300 hover:bg-white/50 dark:hover:bg-white/10'
                          : 'text-white/90 hover:text-white hover:bg-white/20'
                      )
                    }
                  >
                    {link.name}
                    <ChevronDown
                      size={13}
                      className={clsx('transition-transform duration-200', desktopServicesOpen ? 'rotate-180' : '')}
                    />
                  </NavLink>

                  {/* Mega-menu dropdown */}
                  <AnimatePresence>
                    {desktopServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden"
                        style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
                      >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-primary uppercase tracking-widest">Our Services</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">All categories &amp; sub-programs</p>
                          </div>
                          <Link
                            to="/services"
                            onClick={() => setDesktopServicesOpen(false)}
                            className="text-xs font-bold text-primary dark:text-primary-light flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            View All <ArrowRight size={12} />
                          </Link>
                        </div>

                        {/* Grid of categories */}
                        <div className="grid grid-cols-3 gap-px bg-neutral-100 dark:bg-neutral-800">
                          {serviceCategories.map((svc) => (
                            <div
                              key={svc.id}
                              className="bg-white dark:bg-neutral-900 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-colors group/cat"
                            >
                              {/* Category header */}
                              <Link
                                to={`/services#${svc.id}`}
                                onClick={() => setDesktopServicesOpen(false)}
                                className="flex items-center gap-2 mb-2.5"
                              >
                                <span
                                  className="w-2 h-2 rounded-full shrink-0"
                                  style={{ backgroundColor: svc.accent }}
                                />
                                <span
                                  className="text-xs font-bold tracking-wide leading-tight group-hover/cat:underline"
                                  style={{ color: svc.accent }}
                                >
                                  {svc.title}
                                </span>
                              </Link>

                              {/* Sub-items */}
                              <ul className="space-y-1">
                                {svc.items.map((item) => (
                                  <li key={item}>
                                    <Link
                                      to={`/contact?service=${encodeURIComponent(`${svc.title} — ${item}`)}`}
                                      onClick={() => setDesktopServicesOpen(false)}
                                      className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1.5 py-0.5 transition-colors"
                                    >
                                      <span
                                        className="w-1 h-1 rounded-full shrink-0 opacity-60"
                                        style={{ backgroundColor: svc.accent }}
                                      />
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="px-6 py-3 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                          <p className="text-xs text-neutral-400">Click any sub-item to enquire directly via the contact form</p>
                          <Link
                            to="/contact"
                            onClick={() => setDesktopServicesOpen(false)}
                            className="text-xs font-bold bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary-light transition-colors"
                          >
                            General Enquiry
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
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
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={clsx(
                'p-2.5 rounded-full backdrop-blur-md transition-all hover:scale-110',
                isScrolled
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/10'
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

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 lg:hidden z-50">
            <button
              onClick={toggleDarkMode}
              className={clsx(
                'p-2 rounded-full transition-colors',
                isScrolled ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300' : 'bg-white/20 text-white'
              )}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                'p-2 rounded-full transition-colors',
                isScrolled ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800' : 'text-white bg-white/20'
              )}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 bg-white/97 dark:bg-neutral-900/97 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/20 dark:border-white/10 lg:hidden overflow-hidden mt-4 mx-2"
              style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) =>
                  link.hasSubmenu ? (
                    <div key={link.name}>
                      {/* Services accordion trigger */}
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={clsx(
                          'w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-lg font-bold transition-all',
                          mobileServicesOpen
                            ? 'bg-primary text-white'
                            : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={clsx('transition-transform duration-200', mobileServicesOpen ? 'rotate-180' : '')}
                        />
                      </button>

                      {/* Mobile services accordion */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 ml-3 space-y-2 pb-2">
                              {serviceCategories.map((svc) => (
                                <div
                                  key={svc.id}
                                  className="rounded-2xl overflow-hidden border dark:border-neutral-800"
                                  style={{ borderColor: `${svc.accent}25` }}
                                >
                                  {/* Category name */}
                                  <Link
                                    to={`/services#${svc.id}`}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 px-4 py-3"
                                    style={{ backgroundColor: svc.accentBg }}
                                  >
                                    <span
                                      className="w-2 h-2 rounded-full shrink-0"
                                      style={{ backgroundColor: svc.accent }}
                                    />
                                    <span className="font-bold text-sm" style={{ color: svc.accent }}>
                                      {svc.title}
                                    </span>
                                  </Link>

                                  {/* Sub-items */}
                                  <div className="bg-white dark:bg-neutral-900 divide-y divide-neutral-50 dark:divide-neutral-800">
                                    {svc.items.map((item) => (
                                      <Link
                                        key={item}
                                        to={`/contact?service=${encodeURIComponent(`${svc.title} — ${item}`)}`}
                                        onClick={closeMobileMenu}
                                        className="flex items-center justify-between px-5 py-2.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                      >
                                        <span className="flex items-center gap-2">
                                          <span
                                            className="w-1.5 h-1.5 rounded-full opacity-60"
                                            style={{ backgroundColor: svc.accent }}
                                          />
                                          {item}
                                        </span>
                                        <ArrowRight size={12} className="opacity-40" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={closeMobileMenu}
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
                  )
                )}

                <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800 px-2 pb-2">
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
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
