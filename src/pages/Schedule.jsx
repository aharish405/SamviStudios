import { useState } from 'react';
import { motion } from 'framer-motion';

const scheduleData = [
  { time: '06:00 AM', mon: 'Hatha Yoga', tue: 'Power Yoga', wed: 'Meditation', thu: 'Hatha Yoga', fri: 'Power Yoga', sat: 'Rest', category: 'Yoga' },
  { time: '07:30 AM', mon: 'Strength', tue: 'Cardio', wed: 'Strength', thu: 'Cardio', fri: 'Full Body', sat: 'CrossFit', category: 'Fitness' },
  { time: '09:00 AM', mon: 'Zumba', tue: 'Bollywood', wed: 'Zumba', thu: 'Bollywood', fri: 'Freestyle', sat: 'Zumba', category: 'Dance' },
  { time: '05:00 PM', mon: 'Kids Dance', tue: 'Kids Yoga', wed: 'Kids Dance', thu: 'Kids Fitness', fri: 'Kids Dance', sat: 'Events', category: 'Dance' },
  { time: '06:30 PM', mon: 'Power Yoga', tue: 'Hatha Yoga', wed: 'Meditation', thu: 'Power Yoga', fri: 'Yin Yoga', sat: 'Rest', category: 'Yoga' },
  { time: '08:00 PM', mon: 'Strength', tue: 'Zumba', wed: 'Cardio', thu: 'Bollywood', fri: 'Strength', sat: 'Rest', category: 'Mixed' },
];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Schedule() {
  const [filter, setFilter] = useState('All');

  const getBadgeColor = (className) => {
    if (className.includes('Yoga') || className.includes('Meditation')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    if (className.includes('Zumba') || className.includes('Bollywood') || className.includes('Dance')) return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800';
    if (className === 'Rest' || className === 'Events') return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800'; // Fitness
  };

  return (
    <div className="pb-24 min-h-screen">
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
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
            Find the perfect time to join us. Flexible timings from Monday to Saturday.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Yoga', 'Fitness', 'Dance'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {cat}
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
            {scheduleData.map((row, idx) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                key={idx} 
                className="grid grid-cols-7"
              >
                <div className="p-4 font-semibold text-neutral-900 dark:text-white text-center flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/50">
                  {row.time}
                </div>
                {days.map(day => {
                  const className = row[day];
                  const isVisible = filter === 'All' || row.category === filter || className === 'Rest' || row.category === 'Mixed';
                  const showClass = isVisible && className !== 'Rest';

                  return (
                    <div key={`${idx}-${day}`} className="p-3 border-l border-neutral-200 dark:border-neutral-800 flex items-center justify-center min-h-[100px]">
                      {showClass ? (
                        <div className={`w-full h-full p-3 flex flex-col items-center justify-center text-center rounded-xl border ${getBadgeColor(className)} transition-transform hover:scale-105 cursor-pointer`}>
                          <span className="font-bold text-sm">{className}</span>
                        </div>
                      ) : className === 'Rest' ? (
                        <span className="text-neutral-400 dark:text-neutral-600 text-sm italic">Rest</span>
                      ) : null}
                    </div>
                  );
                })}
              </motion.div>
            ))}
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
                  const className = row[dayKey];
                  const isVisible = filter === 'All' || row.category === filter || className === 'Rest' || row.category === 'Mixed';
                  
                  if (!isVisible || className === 'Rest') return null;

                  return (
                    <div key={idx} className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-neutral-900 dark:text-white w-24">{row.time}</span>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${getBadgeColor(className)}`}>
                        {className}
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
