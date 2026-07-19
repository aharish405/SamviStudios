import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const images = [
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', category: 'Yoga' },
  { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', category: 'Fitness' },
  { url: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop', category: 'Dance' },
  { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', category: 'Yoga' },
  { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop', category: 'Fitness' },
  { url: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=800&auto=format&fit=crop', category: 'Dance' },
  { url: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800&auto=format&fit=crop', category: 'Yoga' },
  { url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop', category: 'Fitness' },
  { url: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=800&auto=format&fit=crop', category: 'Dance' },
];

export default function Gallery() {
  return (
    <div className="pb-24 min-h-screen">
      <SEO
        title="Studio Gallery — Samvi Studios, Kompally"
        description="Explore Samvi Studios in Kompally through our gallery. See our yoga classes, classical dance performances, music sessions, and wellness spaces."
        canonical="/gallery"
      />
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-heading"
          >
            Studio <span className="text-secondary">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Take a look inside our state-of-the-art facilities.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden"
            >
              <img 
                src={img.url} 
                alt={`${img.category} at Samvi Studios`} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-semibold p-6 text-lg tracking-wide">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
