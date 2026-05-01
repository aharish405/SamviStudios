import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    category: 'Yoga',
    items: [
      {
        title: 'Hatha Yoga',
        desc: 'A gentle introduction to basic yoga postures, focusing on alignment and breathing techniques. Perfect for beginners.',
        img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Power Yoga',
        desc: 'A dynamic, fast-paced practice that builds strength, stamina, and flexibility. For those looking for a rigorous workout.',
        img: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Meditation',
        desc: 'Guided sessions to help calm the mind, reduce stress, and improve overall mental clarity and focus.',
        img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2199&auto=format&fit=crop'
      }
    ]
  },
  {
    category: 'Fitness',
    items: [
      {
        title: 'Weight Loss Programs',
        desc: 'Tailored cardio and strength routines designed to burn fat effectively and improve cardiovascular health.',
        img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Strength Training',
        desc: 'Build muscle mass and increase bone density using free weights, machines, and bodyweight exercises.',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Personal Training',
        desc: '1-on-1 sessions with our certified trainers to achieve your specific fitness goals faster and safer.',
        img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    category: 'Dance',
    items: [
      {
        title: 'Zumba',
        desc: 'A fun, high-energy dance workout combining Latin and international music with dance moves.',
        img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Bollywood',
        desc: 'Energetic and expressive dance routines set to popular Bollywood tracks. Great for cardio!',
        img: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop'
      },
      {
        title: 'Kids Dance Classes',
        desc: 'Fun and engaging dance sessions designed specially for kids to improve coordination and rhythm.',
        img: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2015&auto=format&fit=crop'
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
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
            Discover a comprehensive range of fitness, yoga, and dance programs designed to help you achieve your goals.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 space-y-24">
        {services.map((section, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white font-heading">{section.category}</h2>
              <div className="h-1 flex-grow bg-gradient-to-r from-primary to-transparent opacity-20 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, itemIdx) => (
                <motion.div 
                  key={itemIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIdx * 0.1 }}
                  className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 flex-grow mb-6">{item.desc}</p>
                    <Link 
                      to={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-xl font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                    >
                      Book Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
