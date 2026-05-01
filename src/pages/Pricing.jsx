import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly Pass',
    desc: 'Perfect for beginners trying out the studio.',
    price: '2,999',
    period: '/month',
    features: [
      'Access to Gym Equipment',
      '2 Yoga Classes/week',
      '1 Dance Class/week',
      'Locker Facility',
      'Free Diet Consultation'
    ],
    recommended: false
  },
  {
    name: 'Quarterly Elite',
    desc: 'Best value for committed fitness enthusiasts.',
    price: '7,499',
    period: '/3 months',
    features: [
      'Unlimited Gym Access',
      'Unlimited Yoga & Dance',
      'Locker & Shower Facility',
      'Personalized Diet Plan',
      '1 Free PT Session'
    ],
    recommended: true
  },
  {
    name: 'Personal Training',
    desc: '1-on-1 coaching for guaranteed fast results.',
    price: '12,000',
    period: '/month',
    features: [
      'Dedicated Personal Trainer',
      'Customized Workout Plan',
      'Advanced Nutrition Plan',
      'Priority Equipment Access',
      'Flexible Session Timings'
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <div className="pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-heading"
          >
            Memberships that fit your <span className="text-primary-light">goals.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            No hidden joining fees or complicated contracts. Just pick what works for you.
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
              className={`rounded-3xl p-8 shadow-xl bg-white dark:bg-neutral-900 flex flex-col border ${plan.recommended ? 'border-primary ring-4 ring-primary/20 dark:ring-primary/10 relative transform lg:-translate-y-4' : 'border-neutral-200 dark:border-neutral-800'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                  Most Popular
                </div>
              )}
              
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
                    <div className="bg-primary/10 p-1.5 rounded-full text-primary dark:text-primary-light shrink-0">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${
                  plan.recommended 
                    ? 'bg-primary text-white hover:bg-primary-light shadow-[0_0_15px_rgba(109,40,217,0.4)] hover:shadow-[0_0_25px_rgba(109,40,217,0.6)] hover:-translate-y-1' 
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:-translate-y-1'
                }`}
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
