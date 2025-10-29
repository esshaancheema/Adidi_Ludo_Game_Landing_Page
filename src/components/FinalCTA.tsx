import { motion } from 'framer-motion';
import { DownloadButtons } from './DownloadButtons';
import { FaRocket, FaStar } from 'react-icons/fa';

export const FinalCTA = () => {
  return (
    <section id="download" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-magenta rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-card p-8 md:p-12 lg:p-16 rounded-3xl border-2 border-accent-gold/50 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-magenta opacity-10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative text-center">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="bg-gradient-gold p-6 rounded-full inline-block">
                  <FaRocket className="text-5xl text-white" />
                </div>
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Turn Your Ludo Skills{' '}
                <span className="text-transparent bg-clip-text bg-gradient-gold">
                  Into Cash?
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Join 100,000+ Nigerian players winning real Naira every day
              </p>

              {/* Benefits List */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-accent-cyan">
                  <FaStar className="text-xl" />
                  <span className="font-semibold">Free to Download</span>
                </div>
                <div className="flex items-center gap-2 text-accent-orange">
                  <FaStar className="text-xl" />
                  <span className="font-semibold">Start from ₦100</span>
                </div>
                <div className="flex items-center gap-2 text-accent-magenta">
                  <FaStar className="text-xl" />
                  <span className="font-semibold">Instant Withdrawals</span>
                </div>
              </div>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <DownloadButtons variant="large" className="justify-center" />
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                  <span>100% Secure & Licensed</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
                  <span>18+ Only - Play Responsibly</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {[
              { value: '100K+', label: 'Active Players' },
              { value: '₦50M+', label: 'Prizes Paid' },
              { value: '4.8★', label: 'App Rating' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-primary-light p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
