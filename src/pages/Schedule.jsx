import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const scheduleData = [
  { time: '06:00 AM', mon: 'Hatha Yoga', tue: 'Power Yoga', wed: 'Meditation', thu: 'Hatha Yoga', fri: 'Power Yoga', sat: 'Rest', category: 'Yoga' },
  { time: '07:30 AM', mon: 'Classical Dance', tue: 'Bharatanatyam', wed: 'Classical Dance', thu: 'Kuchipudi', fri: 'Classical Dance', sat: 'Choreography', category: 'Dance' },
  { time: '09:00 AM', mon: 'Zumba', tue: 'Gymnastics', wed: 'Zumba', thu: 'Gymnastics', fri: 'Zumba', sat: 'Zumba', category: 'Offline' },
  { time: '10:30 AM', mon: 'Music', tue: 'Carnatic', wed: 'Music', thu: 'Carnatic', fri: 'Sangeethu', sat: 'Bhajans', category: 'Music' },
  { time: '05:00 PM', mon: 'Kids Dance', tue: 'Kids Yoga', wed: 'Kids Dance', thu: 'Kids Music', fri: 'Kids Dance', sat: 'Workshop', category: 'Offline' },
  { time: '06:30 PM', mon: 'Online Yoga', tue: 'Online Dance', wed: 'Online Yoga', thu: 'Online Dance', fri: 'Online Yoga', sat: 'Rest', category: 'Online' },
  { time: '08:00 PM', mon: 'Power Yoga', tue: 'Zumba', wed: 'Meditation', thu: 'Classical Dance', fri: 'Power Yoga', sat: 'Rest', category: 'Yoga' },
];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Schedule() {
  const [filter, setFilter] = useState('All');

  const getBadgeColor = (className) => {
    if (className.includes('Yoga') || className.includes('Meditation')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    if (className.includes('Dance') || className.includes('Bharatanatyam') || className.includes('Kuchipudi') || className.includes('Choreography')) return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800';
    if (className.includes('Music') || className.includes('Carnatic') || className.includes('Sangeethu') || className.includes('Bhajans')) return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    if (className.includes('Online')) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    if (className.includes('Zumba') || className.includes('Gymnastics')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
    if (className.includes('Workshop')) return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800';
    if (className === 'Rest') return 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500 border-gray-200 dark:border-gray-700';
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
  };

  const filters = [
    { label: 'All', value: 'All' },
    { label: '🧘 Yoga', value: 'Yoga' },
    { label: '💃 Dance', value: 'Dance' },
    { label: '🎵 Music', value: 'Music' },
    { label: '🌐 Online', value: 'Online' },
    { label: '🏋️ Offline', value: 'Offline' },
  ];

  const isVisible = (row) => {
    if (filter === 'All') return true;
    if (filter === 'Yoga' && row.category === 'Yoga') return true;
    if (filter === 'Dance' && row.category === 'Dance') return true;
    if (filter === 'Music' && row.category === 'Music') return true;
    if (filter === 'Online' && row.category === 'Online') return true;
    if (filter === 'Offline' && row.category === 'Offline') return true;
    return false;
  };

  return (
    <div className="pb-24 min-h-screen">
      <SEO
        title="Class Schedule — Yoga, Dance, Music & Online Sessions"
        description="View Samvi Studios' weekly class schedule for Yoga, Classical Dance (Bharatanatyam/Kuchipudi), Music (Carnatic), Zumba, Online Sessions & Workshops. Monday to Saturday in Kompally, Hyderabad."
        canonical="/schedule"
      />
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-heading"
          >
            Class <span className="text-secondary">Schedule</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Flexible timings across Yoga, Dance, Music, and Online sessions — Monday to Saturday.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Schedule Grid - Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl">
          <div className="grid grid-cols-7 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50">
            <div className="p-4 font-bold text-neutral-500 text-center flex items-center justify-center">Time</div>
            {dayNames.map(day => (
              <div key={day} className="p-4 font-bold text-center text-neutral-900 dark:text-white border-l border-neutral-200 dark:border-neutral-800">
                {day}
              </div>
            ))}
          </div>

          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {scheduleData.map((row, idx) => {
              const visible = isVisible(row);
              if (!visible) return null;
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx}
                  className="grid grid-cols-7"
                >
                  <div className="p-4 font-semibold text-neutral-900 dark:text-white text-center flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/50 text-sm">
                    {row.time}
                  </div>
                  {days.map(day => {
                    const cn = row[day];
                    const showClass = cn !== 'Rest';
                    return (
                      <div key={`${idx}-${day}`} className="p-3 border-l border-neutral-200 dark:border-neutral-800 flex items-center justify-center min-h-[100px]">
                        {showClass ? (
                          <div className={`w-full h-full p-3 flex flex-col items-center justify-center text-center rounded-xl border ${getBadgeColor(cn)} transition-transform hover:scale-105 cursor-pointer`}>
                            <span className="font-bold text-xs">{cn}</span>
                          </div>
                        ) : (
                          <span className="text-neutral-400 dark:text-neutral-600 text-sm italic">Rest</span>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Schedule List - Mobile */}
        <div className="lg:hidden space-y-8">
          {dayNames.map((day, dayIndex) => (
            <div key={day} className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-xl font-bold text-white">{day}</h3>
              </div>
              <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {scheduleData.map((row, idx) => {
                  const dayKey = days[dayIndex];
                  const cn = row[dayKey];
                  if (!isVisible(row) || cn === 'Rest') return null;
                  return (
                    <div key={idx} className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-neutral-900 dark:text-white w-24 text-sm">{row.time}</span>
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${getBadgeColor(cn)}`}>
                        {cn}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
