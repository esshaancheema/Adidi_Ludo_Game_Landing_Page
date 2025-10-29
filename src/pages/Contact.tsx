import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We\'ll respond within 2 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email Support',
      value: 'support@adidiludo.ng',
      link: 'mailto:support@adidiludo.ng',
      color: 'text-accent-cyan',
    },
    {
      icon: FaPhone,
      title: 'Phone Support',
      value: '+234 123 456 7890',
      link: 'tel:+2341234567890',
      color: 'text-accent-orange',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office Location',
      value: 'Lagos, Nigeria',
      link: '#',
      color: 'text-accent-magenta',
    },
    {
      icon: FaClock,
      title: 'Support Hours',
      value: '24/7 Available',
      link: '#',
      color: 'text-accent-gold',
    },
  ];

  const socialMedia = [
    {
      icon: FaFacebook,
      name: 'Facebook',
      followers: '50K+',
      link: 'https://facebook.com',
      color: 'bg-[#1877F2] hover:bg-[#1664d9]',
    },
    {
      icon: FaTwitter,
      name: 'Twitter/X',
      followers: '30K+',
      link: 'https://twitter.com',
      color: 'bg-[#1DA1F2] hover:bg-[#1a91da]',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      followers: '75K+',
      link: 'https://instagram.com',
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
    },
    {
      icon: FaYoutube,
      name: 'YouTube',
      followers: '25K+',
      link: 'https://youtube.com',
      color: 'bg-[#FF0000] hover:bg-[#cc0000]',
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      followers: 'Community',
      link: 'https://whatsapp.com',
      color: 'bg-[#25D366] hover:bg-[#20bd5a]',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-magenta rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're Here to Help 24/7 - Your Success is Our Priority
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Methods
            </h2>
            <p className="text-xl text-gray-300">
              Choose your preferred way to reach us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-card p-6 rounded-2xl border border-white/10 hover:border-accent-magenta/50 transition-all text-center block"
              >
                <method.icon className={`text-5xl ${method.color} mx-auto mb-4`} />
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300">{method.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-card p-8 md:p-12 rounded-3xl border border-accent-cyan/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Send Us a Message
            </h3>
            <p className="text-gray-300 text-center mb-8">
              We respond within 2 hours during business hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-magenta transition-colors text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-magenta transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-magenta transition-colors text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="payment">Payment Issues</option>
                  <option value="account">Account Help</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-dark border border-white/10 rounded-lg focus:outline-none focus:border-accent-magenta transition-colors text-white resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-button text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect on Social Media
            </h2>
            <p className="text-xl text-gray-300">
              Join our community and stay updated with the latest news
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-card p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all text-center group"
              >
                <div className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                  <social.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{social.name}</h3>
                <p className="text-sm text-gray-400">{social.followers} Followers</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-accent-magenta/30 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Instant Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our app for instant support and live chat
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/faq"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl border border-accent-cyan hover:border-accent-cyan/80 transition-all"
              >
                Browse FAQ
              </motion.a>
              <motion.a
                href="/how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl border border-accent-orange hover:border-accent-orange/80 transition-all"
              >
                How It Works
              </motion.a>
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-button text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all"
              >
                Download App
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
