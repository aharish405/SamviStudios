import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || searchParams.get('plan') || '';
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      service: defaultService
    }
  });

  const onSubmit = (data) => {
    const lines = [
      'Hello Samvi Studios!',
      '',
      data.service ? `Interested in: ${data.service}` : '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Message: ${data.message}`,
    ].filter((l, i) => !(i === 2 && !data.service));
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/919700605652?text=${text}`, '_blank');
  };

  return (
    <div className="pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <SEO
        title="Contact Us — Enquire About Classes & Programs"
        description="Get in touch with Samvi Studios, Kompally. Enquire about Yoga, Classical Dance, Music, Certification Courses, Workshops, Corporate Wellness and more. Call +91 97006 05652."
        canonical="/contact"
      />
      <div className="bg-neutral-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-heading"
          >
            Get in <span className="text-primary-light">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Ready to start your arts journey? Contact us to enquire about any of our programs.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Contact Information</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Fill out the form to connect directly via WhatsApp, or reach us at our studio location in Kompally.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-primary-light shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">Address</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">Samvi Studios, Kompally,<br />Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-primary-light shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">+91 97006 05652<br />+91 95158 24491</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-primary-light shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">Email</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">hello@samvistudios.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-neutral-200 dark:border-neutral-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8080182522736!2d78.4735231!3d17.516629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b0000000000%3A0x0!2sKompally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 lg:p-10 shadow-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
                  placeholder="e.g. Kiran Kumar"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  {...register("phone", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number"
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
                  placeholder="9988776655"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Service Interested In
                </label>

                {defaultService ? (
                  /* Pre-filled mode — service came from a "Book Now" / nav sub-item click */
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary dark:text-primary-light border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light" />
                        Pre-selected from your choice
                      </span>
                    </div>
                    <input
                      type="text"
                      {...register('service', { required: 'Please enter the service you are interested in' })}
                      className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary ${errors.service ? 'border-red-500' : 'border-primary/30 dark:border-primary/20'}`}
                    />
                    <p className="mt-1 text-xs text-neutral-400">You can edit this if needed.</p>
                  </div>
                ) : (
                  /* Manual mode — full dropdown */
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary ${errors.service ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
                  >
                    <option value="">Select a service</option>
                    <optgroup label="Offline Sessions">
                      <option value="Offline Sessions — Yoga">Offline Sessions — Yoga</option>
                      <option value="Offline Sessions — Dance (Classical)">Offline Sessions — Dance (Classical)</option>
                      <option value="Offline Sessions — Zumba">Offline Sessions — Zumba</option>
                      <option value="Offline Sessions — Music">Offline Sessions — Music</option>
                      <option value="Offline Sessions — Gymnastics">Offline Sessions — Gymnastics</option>
                    </optgroup>
                    <optgroup label="Online Sessions">
                      <option value="Online Sessions — Yoga">Online Sessions — Yoga</option>
                      <option value="Online Sessions — Dance (Classical)">Online Sessions — Dance (Classical)</option>
                    </optgroup>
                    <optgroup label="Workshops">
                      <option value="Workshops — Yoga">Workshops — Yoga</option>
                      <option value="Workshops — Dance (Classical)">Workshops — Dance (Classical)</option>
                    </optgroup>
                    <optgroup label="Certification Courses">
                      <option value="Certification Courses — Yoga">Certification Courses — Yoga</option>
                      <option value="Certification Courses — Music">Certification Courses — Music</option>
                      <option value="Certification Courses — Dance (Classical)">Certification Courses — Dance (Classical)</option>
                    </optgroup>
                    <optgroup label="Personal Training">
                      <option value="Personal Training — Yoga">Personal Training — Yoga</option>
                      <option value="Personal Training — Dance (Classical)">Personal Training — Dance (Classical)</option>
                    </optgroup>
                    <option value="Corporate Wellness Programs">Corporate Wellness Programs</option>
                    <option value="Sangeethu">Sangeethu</option>
                    <option value="Events — Dance (Classical)">Events — Dance (Classical)</option>
                    <optgroup label="Retreats">
                      <option value="Retreats — Yoga">Retreats — Yoga</option>
                      <option value="Retreats — Dance (Classical)">Retreats — Dance (Classical)</option>
                    </optgroup>
                    <option value="Other / General Enquiry">Other / General Enquiry</option>
                  </select>
                )}

                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'}`}
                  placeholder="I'm interested in joining..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-[#25D366]/30"
              >
                <Send size={20} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
