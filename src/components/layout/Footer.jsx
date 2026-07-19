import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/SamviStudios.jpg" alt="Samvi Studios" className="h-16 w-auto object-contain rounded-xl mb-4" />
            <p className="text-sm leading-relaxed text-neutral-400">
              Samvi Studios — Fusion of Arts. A community space in Kompally offering Yoga, Classical Dance, Music, and more across our diverse range of service categories.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/samvi_studios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5.96 12.1 6 8c-2.9 0-4.1-1.3-4.1-1.3 1.3-3.6 4-6 9-6 3 0 4.1 1.7 5.1 3.5 1.1-.3 2.1-.8 3-1.4-.3 1.1-1 2-1.8 2.7 1-.1 1.9-.4 2.8-.8z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Schedule', 'Pricing', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 9 categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Offline Sessions', color: '#7C3AED' },
                { label: 'Online Sessions', color: '#059669' },
                { label: 'Workshops', color: '#D97706' },
                { label: 'Certification Courses', color: '#E11D48' },
                { label: 'Personal Training', color: '#2563EB' },
                { label: 'Corporate Wellness', color: '#475569' },
                { label: 'Sangeethu', color: '#0D9488' },
                { label: 'Events', color: '#EA580C' },
                { label: 'Retreats', color: '#7C3AED' },
              ].map((svc) => (
                <li key={svc.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: svc.color }} />
                  <Link
                    to={`/services#${svc.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-light shrink-0 mt-1" size={20} />
                <span className="text-sm">Samvi Studios, Kompally, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-light shrink-0" size={20} />
                <span className="text-sm">+91 97006 05652<br />+91 95158 24491</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-light shrink-0" size={20} />
                <span className="text-sm">hello@samvistudios.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Samvi Studios — Fusion of Arts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
