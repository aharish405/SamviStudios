import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, BookOpen, Award, User, Building2, Music2, CalendarDays, Tent, Dumbbell } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
  {
    id: 'offline-sessions',
    number: '01',
    title: 'Offline Sessions',
    subtitle: 'In-Studio Training',
    icon: Dumbbell,
    color: 'indigo',
    accent: '#4C1D95',
    accentLight: '#7C3AED',
    accentBg: 'rgba(76,29,149,0.08)',
    accentBorder: 'rgba(76,29,149,0.25)',
    description: 'Immerse yourself in our state-of-the-art studio with expert instructors guiding you through world-class in-person sessions.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'Hatha, Power Yoga, Yin & Meditation sessions for all levels.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Bharatanatyam, Kuchipudi & other classical forms taught by masters.' },
      { name: 'Zumba', emoji: '🕺', desc: 'High-energy Latin dance workout that burns calories while having fun.' },
      { name: 'Music', emoji: '🎵', desc: 'Vocal training, instrument coaching & music theory foundations.' },
      { name: 'Gymnastics', emoji: '🤸', desc: 'Flexibility, acrobatics & strength-based gymnastics for all ages.' },
    ],
  },
  {
    id: 'online-sessions',
    number: '02',
    title: 'Online Sessions',
    subtitle: 'Learn from Anywhere',
    icon: Wifi,
    color: 'emerald',
    accent: '#059669',
    accentLight: '#10B981',
    accentBg: 'rgba(5,150,105,0.08)',
    accentBorder: 'rgba(5,150,105,0.25)',
    description: 'Participate live from the comfort of your home. Our virtual classrooms bring the studio experience right to your screen.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'Live-streamed yoga sessions with real-time instructor feedback.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Classical dance lessons via high-quality video with recording access.' },
    ],
  },
  {
    id: 'workshops',
    number: '03',
    title: 'Workshops',
    subtitle: 'Intensive Deep-Dives',
    icon: BookOpen,
    color: 'amber',
    accent: '#D97706',
    accentLight: '#F59E0B',
    accentBg: 'rgba(217,119,6,0.08)',
    accentBorder: 'rgba(217,119,6,0.25)',
    description: 'Weekend and holiday workshops designed to fast-track your skills with focused, immersive learning experiences.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'Intensive yoga workshops covering philosophy, asana & pranayama.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Choreography-focused workshops with guest master instructors.' },
    ],
  },
  {
    id: 'certification-courses',
    number: '04',
    title: 'Certification Courses',
    subtitle: 'Earn Credentials',
    icon: Award,
    color: 'rose',
    accent: '#E11D48',
    accentLight: '#FB7185',
    accentBg: 'rgba(225,29,72,0.08)',
    accentBorder: 'rgba(225,29,72,0.25)',
    description: 'Industry-recognized certifications to turn your passion into a profession. Graduate as a qualified instructor or practitioner.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'RYT-200 & RYT-500 certified yoga teacher training programs.' },
      { name: 'Music', emoji: '🎵', desc: 'Graded music certification aligned with international boards.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Arangetram preparation & classical dance diploma programs.' },
    ],
  },
  {
    id: 'personal-training',
    number: '05',
    title: 'Personal Training',
    subtitle: 'One-on-One Coaching',
    icon: User,
    color: 'blue',
    accent: '#2563EB',
    accentLight: '#60A5FA',
    accentBg: 'rgba(37,99,235,0.08)',
    accentBorder: 'rgba(37,99,235,0.25)',
    description: 'Dedicated 1-on-1 coaching tailored to your body, goals, and schedule. Personalized plans that evolve with you.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'Private yoga sessions customized to your body and health goals.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Individual classical dance coaching for rapid skill progression.' },
    ],
  },
  {
    id: 'corporate-wellness',
    number: '06',
    title: 'Corporate Wellness Programs',
    subtitle: 'Wellness for Teams',
    icon: Building2,
    color: 'slate',
    accent: '#475569',
    accentLight: '#94A3B8',
    accentBg: 'rgba(71,85,105,0.08)',
    accentBorder: 'rgba(71,85,105,0.25)',
    description: 'Bring wellness to your workplace. Curated programs for corporate teams to reduce stress, boost productivity and morale.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'Desk yoga, mindfulness & stress-relief sessions for corporate teams.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Team-building classical dance programs & cultural events.' },
      { name: 'Healing Programs', emoji: '💚', desc: 'Sound healing, guided meditation & holistic wellness sessions.' },
    ],
  },
  {
    id: 'sangeethu',
    number: '07',
    title: 'Sangeethu',
    subtitle: 'Music & Cultural Arts',
    icon: Music2,
    color: 'teal',
    accent: '#0D9488',
    accentLight: '#2DD4BF',
    accentBg: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.25)',
    description: 'A unique program celebrating the confluence of music, voice, and cultural arts. Sangeethu is where melody meets movement.',
    offerings: [
      { name: 'Carnatic Music', emoji: '🎶', desc: 'Classical South Indian vocal & instrumental Carnatic training.' },
      { name: 'Bhajans & Devotional', emoji: '🙏', desc: 'Devotional singing, keertans & spiritual music sessions.' },
      { name: 'Music Ensemble', emoji: '🎼', desc: 'Group music sessions for community learning and performance.' },
    ],
  },
  {
    id: 'events',
    number: '08',
    title: 'Events',
    subtitle: 'Performances & Celebrations',
    icon: CalendarDays,
    color: 'orange',
    accent: '#EA580C',
    accentLight: '#FB923C',
    accentBg: 'rgba(234,88,12,0.08)',
    accentBorder: 'rgba(234,88,12,0.25)',
    description: 'Spectacular cultural events, annual day celebrations, and performance showcases that spotlight our students\' talents.',
    offerings: [
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Arangetram ceremonies, annual day shows & cultural fests.' },
    ],
  },
  {
    id: 'retreats',
    number: '09',
    title: 'Retreats',
    subtitle: 'Rejuvenate & Recharge',
    icon: Tent,
    color: 'violet',
    accent: '#7C3AED',
    accentLight: '#A78BFA',
    accentBg: 'rgba(124,58,237,0.08)',
    accentBorder: 'rgba(124,58,237,0.25)',
    description: 'Curated retreat experiences in serene locations. Disconnect from the noise and reconnect with your inner self.',
    offerings: [
      { name: 'Yoga', emoji: '🧘', desc: 'Immersive yoga retreats combining asana, meditation & nature.' },
      { name: 'Dance (Classical)', emoji: '💃', desc: 'Classical dance retreat programs in scenic surroundings.' },
    ],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(null);
  const sectionRefs = useRef({});

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Samvi Studios Service Categories',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      description: s.description,
    })),
  };

  const scrollTo = (id) => {
    setActiveId(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pb-24 min-h-screen">
      <SEO
        title="Our Services — Yoga, Dance, Music, Workshops & More"
        description="Explore Samvi Studios' full range of services: Offline & Online Sessions, Workshops, Certification Courses, Personal Training, Corporate Wellness, Sangeethu, Events, and Retreats in Kompally, Hyderabad."
        canonical="/services"
        structuredData={servicesSchema}
      />

      {/* Page Header */}
      <div className="bg-neutral-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Fusion of Arts
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-heading"
          >
            Our <span className="text-primary-light">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Explore our diverse pathways in the arts — from in-studio sessions to international retreats.
          </motion.p>
        </div>
      </div>

      {/* Sticky Category Nav */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide no-scrollbar">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => scrollTo(svc.id)}
                style={activeId === svc.id ? { backgroundColor: svc.accent, borderColor: svc.accent } : {}}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${
                  activeId === svc.id
                    ? 'text-white shadow-md'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400'
                }`}
              >
                {svc.number}. {svc.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="container mx-auto px-4 mt-16 space-y-20">
        {services.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <section
              key={svc.id}
              id={svc.id}
              ref={(el) => (sectionRefs.current[svc.id] = el)}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Section Header */}
                <div
                  className="rounded-3xl p-8 mb-8 relative overflow-hidden"
                  style={{ backgroundColor: svc.accentBg, border: `1px solid ${svc.accentBorder}` }}
                >
                  <div className="absolute -right-8 -top-8 opacity-5">
                    <Icon size={160} />
                  </div>
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{ backgroundColor: svc.accent }}
                    >
                      <Icon size={30} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: svc.accent }}
                        >
                          {svc.number}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">•</span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{svc.subtitle}</span>
                      </div>
                      <h2
                        className="text-2xl md:text-3xl font-bold font-heading"
                        style={{ color: svc.accent }}
                      >
                        {svc.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
                        {svc.description}
                      </p>
                    </div>
                    <Link
                      to={`/contact?service=${encodeURIComponent(svc.title)}`}
                      className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ backgroundColor: svc.accent }}
                    >
                      Enquire <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Offering Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {svc.offerings.map((offering, oIdx) => (
                    <motion.div
                      key={oIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: oIdx * 0.08 }}
                      className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md border border-neutral-100 dark:border-neutral-800 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      style={{
                        borderLeftWidth: '3px',
                        borderLeftColor: svc.accentLight,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                          style={{ backgroundColor: svc.accentBg }}
                        >
                          {offering.emoji}
                        </div>
                        <h3
                          className="font-bold text-lg font-heading"
                          style={{ color: svc.accent }}
                        >
                          {offering.name}
                        </h3>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {offering.desc}
                      </p>
                      <Link
                        to={`/contact?service=${encodeURIComponent(svc.title + ' — ' + offering.name)}`}
                        className="mt-auto text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                        style={{ color: svc.accent }}
                      >
                        Book Now <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
