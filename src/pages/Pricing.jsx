import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';

const plans = [
  {
    name: 'Offline Essentials',
    desc: 'Perfect for beginners exploring in-studio classes.',
    price: '2,999',
    period: '/month',
    color: '#4C1D95',
    features: [
      'Offline Sessions (Yoga or Dance)',
      '3 Classes per week',
      'Zumba Access',
      'Locker Facility',
      'Free Trial Class Included',
    ],
    recommended: false
  },
  {
    name: 'All-Access Studio',
    desc: 'Best value — full offline + online + workshop access.',
    price: '7,499',
    period: '/3 months',
    color: '#D97706',
    features: [
      'Unlimited Offline Sessions',
      'Online Sessions (Yoga + Dance)',
      'Workshop Participation (2/month)',
      'Music & Sangeethu Classes',
      '1 Personal Training Session',
    ],
    recommended: true
  },
  {
    name: 'Certification & Pro',
    desc: 'For those pursuing professional credentials & coaching.',
    price: '14,000',
    period: '/month',
    color: '#E11D48',
    features: [
      'Certification Course Enrollment',
      'Unlimited Personal Training',
      'Corporate Wellness Ready',
      'Retreat Early-Bird Access',
      'Priority Booking for Events',
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <div className="pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <SEO
        title="Membership Plans — Flexible Pricing for Every Goal"
        description="Choose from Samvi Studios' flexible membership plans: Offline Essentials, All-Access Studio (offline + online + workshops), and Certification & Pro packages. Kompally, Hyderabad."
        canonical="/pricing"
      />
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-heading"
          >
            Plans that fit your <span className="text-primary-light">journey.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            From your first Yoga class to a full Certification Course — we have a plan for every stage.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className={`rounded-3xl p-8 shadow-xl bg-white dark:bg-neutral-900 flex flex-col border relative ${plan.recommended ? 'ring-4 ring-secondary/30 dark:ring-secondary/20 transform lg:-translate-y-4' : 'border-neutral-200 dark:border-neutral-800'}`}
              style={plan.recommended ? { borderColor: plan.color } : {}}
            >
              {plan.recommended && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md"
                  style={{ background: `linear-gradient(to right, #4C1D95, ${plan.color})` }}
                >
                  Most Popular
                </div>
              )}

              {/* Color accent bar */}
              <div className="h-1.5 rounded-full mb-6" style={{ background: `linear-gradient(to right, ${plan.color}, ${plan.color}80)` }} />

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 h-10 flex items-center justify-center">{plan.desc}</p>
                <div className="flex items-end justify-center gap-1 bg-neutral-50 dark:bg-neutral-950 py-4 rounded-2xl">
                  <span className="text-4xl font-bold text-neutral-900 dark:text-white">₹{plan.price}</span>
                  <span className="text-neutral-500 font-medium mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-medium">
                    <div
                      className="p-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: `${plan.color}18` }}
                    >
                      <Check size={16} strokeWidth={3} style={{ color: plan.color }} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                className="block w-full py-4 text-center rounded-xl font-bold transition-all hover:-translate-y-1"
                style={plan.recommended
                  ? { backgroundColor: plan.color, color: 'white', boxShadow: `0 0 20px ${plan.color}50` }
                  : { backgroundColor: 'transparent', color: plan.color, border: `2px solid ${plan.color}30` }
                }
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-16">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Looking for Corporate Wellness, Retreats, or a Custom Certification package?{' '}
            <Link to="/contact" className="text-primary dark:text-primary-light font-semibold hover:underline">
              Contact us directly →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
