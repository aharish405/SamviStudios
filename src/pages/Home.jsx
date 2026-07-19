import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Star, Wifi, BookOpen, Award, User, Building2, Music2, CalendarDays, Tent, Dumbbell, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const stats = [
  { label: 'Expert Instructors', value: '15+' },
  { label: 'Happy Students', value: '1000+' },
  { label: 'Classes Weekly', value: '50+' },
  { label: 'Years of Legacy', value: '10+' },
];

const testimonials = [
  {
    name: 'Swathi Reddy',
    text: "I've tried a few studios around Kompally, but Samvi has a completely different vibe. The instructors actually pay attention to your form, which I really appreciate.",
    rating: 5,
    role: 'Yoga Member since 2023'
  },
  {
    name: 'Vikram A.',
    text: "The certification course here is world-class. I completed my yoga teacher training and now run my own classes. Samvi gave me the foundation I needed.",
    rating: 5,
    role: 'Certified Instructor'
  },
  {
    name: 'Nithya S.',
    text: "My daughter started classical dance here two years ago and has grown so beautifully. The teachers are patient, knowledgeable, and truly passionate.",
    rating: 5,
    role: 'Dance Parent'
  }
];

const highlights = [
  {
    title: 'Offline Sessions',
    icon: Dumbbell,
    desc: 'In-studio Yoga, Classical Dance, Zumba, Music & Gymnastics with expert guidance.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop',
    accent: '#4C1D95',
    link: '/services#offline-sessions'
  },
  {
    title: 'Online Sessions',
    icon: Wifi,
    desc: 'Live virtual Yoga & Classical Dance classes from the comfort of your home.',
    img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop',
    accent: '#059669',
    link: '/services#online-sessions'
  },
  {
    title: 'Certification Courses',
    icon: Award,
    desc: 'Earn industry-recognized credentials in Yoga, Music & Classical Dance.',
    img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop',
    accent: '#E11D48',
    link: '/services#certification-courses'
  },
];

const allOfferings = [
  {
    id: 'offline-sessions', number: '01', title: 'Offline Sessions', icon: Dumbbell,
    accent: '#4C1D95', accentBg: 'rgba(76,29,149,0.08)',
    offerings: ['Yoga', 'Dance (Classical)', 'Zumba', 'Music', 'Gymnastics']
  },
  {
    id: 'online-sessions', number: '02', title: 'Online Sessions', icon: Wifi,
    accent: '#059669', accentBg: 'rgba(5,150,105,0.08)',
    offerings: ['Yoga', 'Dance (Classical)']
  },
  {
    id: 'workshops', number: '03', title: 'Workshops', icon: BookOpen,
    accent: '#D97706', accentBg: 'rgba(217,119,6,0.08)',
    offerings: ['Yoga', 'Dance (Classical)']
  },
  {
    id: 'certification-courses', number: '04', title: 'Certification Courses', icon: Award,
    accent: '#E11D48', accentBg: 'rgba(225,29,72,0.08)',
    offerings: ['Yoga', 'Music', 'Dance (Classical)']
  },
  {
    id: 'personal-training', number: '05', title: 'Personal Training', icon: User,
    accent: '#2563EB', accentBg: 'rgba(37,99,235,0.08)',
    offerings: ['Yoga', 'Dance (Classical)']
  },
  {
    id: 'corporate-wellness', number: '06', title: 'Corporate Wellness', icon: Building2,
    accent: '#475569', accentBg: 'rgba(71,85,105,0.08)',
    offerings: ['Yoga', 'Dance (Classical)', 'Healing Programs']
  },
  {
    id: 'sangeethu', number: '07', title: 'Sangeethu', icon: Music2,
    accent: '#0D9488', accentBg: 'rgba(13,148,136,0.08)',
    offerings: ['Carnatic Music', 'Bhajans & Devotional', 'Music Ensemble']
  },
  {
    id: 'events', number: '08', title: 'Events', icon: CalendarDays,
    accent: '#EA580C', accentBg: 'rgba(234,88,12,0.08)',
    offerings: ['Dance (Classical)']
  },
  {
    id: 'retreats', number: '09', title: 'Retreats', icon: Tent,
    accent: '#7C3AED', accentBg: 'rgba(124,58,237,0.08)',
    offerings: ['Yoga', 'Dance (Classical)']
  },
];

function FitnessTools() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let status = 'Normal';
  let color = 'text-green-500';
  if (bmi < 18.5) { status = 'Underweight'; color = 'text-blue-500'; }
  else if (bmi >= 25 && bmi < 29.9) { status = 'Overweight'; color = 'text-orange-500'; }
  else if (bmi >= 30) { status = 'Obese'; color = 'text-red-500'; }

  const waterIntake = (weight * 0.033).toFixed(1);

  const totalInches = height / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  return (
    <section className="py-20 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Wellness Tools</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate your BMI and daily water intake needs to stay on track with your health goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BMI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-800"
          >
            <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white flex items-center gap-2">
              <Activity className="text-primary" /> BMI Calculator
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium text-neutral-700 dark:text-neutral-300">Weight (kg)</label>
                  <span className="font-bold text-primary dark:text-primary-light bg-primary/10 px-3 py-1 rounded-full">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="30" max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700 accent-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-medium text-neutral-700 dark:text-neutral-300">Height</label>
                  <span className="font-bold text-primary dark:text-primary-light bg-primary/10 px-3 py-1 rounded-full">{height} cm ({feet}'{inches}")</span>
                </div>
                <input
                  type="range"
                  min="120" max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700 accent-primary"
                />
              </div>

              <div className="mt-8 p-6 bg-white dark:bg-neutral-900 rounded-2xl text-center shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Your BMI Result</div>
                <div className="text-6xl font-bold text-neutral-900 dark:text-white mb-2">{bmi}</div>
                <div className={`text-xl font-bold ${color}`}>{status}</div>
              </div>
            </div>
          </motion.div>

          {/* Water Intake & Other Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-primary/10 dark:bg-primary/5 p-8 rounded-3xl shadow-lg border border-primary/20 flex-grow flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-[100px] opacity-10">💧</div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white flex items-center gap-2 relative z-10">
                Daily Water Target
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 relative z-10 text-lg">
                Based on your current weight, you should drink approximately this much water daily:
              </p>
              <div className="text-5xl font-bold text-primary dark:text-primary-light relative z-10">
                {waterIntake} <span className="text-2xl text-neutral-600 dark:text-neutral-400">Liters</span>
              </div>
            </div>

            <div className="bg-secondary/10 dark:bg-secondary/5 p-8 rounded-3xl shadow-lg border border-secondary/20 flex-grow flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 text-[100px] opacity-10">🎯</div>
              <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white flex items-center gap-2 relative z-10">
                Start Your Journey
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 relative z-10 text-lg">
                Explore our 9 service categories and find the perfect program for your goals.
              </p>
              <Link to="/services" className="text-secondary hover:text-secondary-light font-bold flex items-center gap-2 relative z-10 transition-colors w-fit">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Samvi Studios — Fusion of Arts | Yoga, Dance, Music & More"
        description="Samvi Studios in Kompally, Hyderabad offers Yoga, Classical Dance, Zumba, Music, Gymnastics, Certification Courses, Workshops, Personal Training, Corporate Wellness, Retreats & Events."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Layered bg: photo + gradient atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
            alt="Samvi Studios in-studio session"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Rich overlay: dark + purple tint at top, warm gold at bottom */}
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(170deg, rgba(10,0,30,0.75) 0%, rgba(30,10,60,0.65) 40%, rgba(60,20,10,0.55) 100%)' }} />
        {/* Subtle purple glow top-left */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-10" />
        {/* Subtle gold glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl z-10" />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold mb-8 backdrop-blur-md"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 0 20px rgba(217,119,6,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/90 tracking-widest uppercase text-xs font-bold">Samvi Studios · Fusion of Arts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl mb-6 text-white"
          >
            Where Art meets <br className="hidden md:block" />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 50%, #D97706 100%)' }}
            >
              Passion.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto font-light"
          >
            Multiple pathways — Offline, Online, Workshops, Certifications, Personal Training, Corporate Wellness, Sangeethu, Events & Retreats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(109,40,217,0.5)] hover:shadow-[0_0_30px_rgba(109,40,217,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2">
              Join Now <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Featured Programs</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Explore some of our most sought-after programs, crafted to help you grow at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group rounded-3xl overflow-hidden relative shadow-xl h-96"
                >
                  <div className="absolute inset-0 z-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: item.accent }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{item.desc}</p>
                    <Link to={item.link} className="text-secondary hover:text-secondary-light font-medium inline-flex items-center gap-1">
                      Explore <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Offerings Overview */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-pill mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Our Complete Offerings
            </motion.div>
            <h2 className="heading-display text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">All Our Service Categories</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Samvi Studios offers a complete ecosystem of arts education — from beginner classes to professional certifications and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allOfferings.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md border border-neutral-100 dark:border-neutral-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: svc.accentBg, border: `1.5px solid ${svc.accent}30` }}
                    >
                      <Icon size={22} style={{ color: svc.accent }} />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-bold tracking-widest uppercase"
                        style={{ color: svc.accent }}
                      >
                        {svc.number}
                      </span>
                      <h3 className="font-bold text-neutral-900 dark:text-white text-base leading-tight">{svc.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {svc.offerings.map((o, oi) => (
                      <li key={oi} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: svc.accent }}
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services#${svc.id}`}
                    className="mt-5 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: svc.accent }}
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] hover:-translate-y-1"
            >
              Explore All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary dark:bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Wellness Tools */}
      <FitnessTools />

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">What Our Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary dark:text-primary-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
