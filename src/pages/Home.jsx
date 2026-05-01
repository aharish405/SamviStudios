import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Star, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Certified Trainers', value: '15+' },
  { label: 'Happy Clients', value: '1000+' },
  { label: 'Classes Weekly', value: '50+' },
  { label: 'Years Experience', value: '10+' },
];

const testimonials = [
  {
    name: 'Swathi Reddy',
    text: "I've tried a few gyms around Kompally, but Samvi has a completely different vibe. The instructors actually pay attention to your form, which I really appreciate.",
    rating: 5,
    role: 'Member since 2023'
  },
  {
    name: 'Vikram A.',
    text: "Honestly, the equipment is top-notch and it never feels too crowded, even during peak evening hours. Highly recommend the functional training sessions.",
    rating: 5,
    role: 'Fitness Member'
  },
  {
    name: 'Nithya S.',
    text: "I was super nervous to start Zumba because I have two left feet, but the community here is so welcoming. It feels more like a party than a workout!",
    rating: 5,
    role: 'Dance Student'
  }
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
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Fitness Tools</h2>
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
                Target Heart Rate
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 relative z-10 text-lg">
                For optimal fat burning, aim for 60-70% of your max heart rate during cardio sessions.
              </p>
              <Link to="/contact" className="text-secondary hover:text-secondary-light font-bold flex items-center gap-2 relative z-10 transition-colors w-fit">
                Consult a trainer <ArrowRight size={18} />
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
            alt="Yoga class"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-heading tracking-tight"
          >
            Find your flow, <br className="hidden md:block" />
            build your <span className="text-secondary">strength.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto font-light"
          >
            A community-driven space right here in Kompally for people who love to move, lift, and breathe.
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
            <Link to="/schedule" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center">
              Book a Trial Class
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Our Core Offerings</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover the perfect balance of strength, flexibility, and rhythm with our diverse range of classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Yoga', icon: Heart, desc: 'Find inner peace and flexibility through our diverse yoga styles.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop' },
              { title: 'Fitness', icon: Activity, desc: 'Build strength and endurance with state-of-the-art equipment.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Dance', icon: Star, desc: 'Express yourself and stay active with Zumba and Bollywood dance.', img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop' }
            ].map((item, idx) => (
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
                  <item.icon className="w-10 h-10 text-primary-light mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{item.desc}</p>
                  <Link to="/services" className="text-secondary hover:text-secondary-light font-medium inline-flex items-center gap-1">
                    Explore <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
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

      {/* Interactive Fitness Tools */}
      <FitnessTools />

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">What Our Members Say</h2>
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
