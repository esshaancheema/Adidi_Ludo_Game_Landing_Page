import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaBolt } from 'react-icons/fa';

export const QuickCTA = () => {
  return (
    <section className="py-16 bg-primary-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-magenta/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-accent-magenta via-accent-orange to-accent-gold p-1 rounded-3xl">
            <div className="bg-primary-main p-8 md:p-12 rounded-3xl">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="mb-6"
                >
                  <div className="bg-gradient-gold p-6 rounded-full inline-block">
                    <FaRocket className="text-4xl text-white" />
                  </div>
                </motion.div>

                {/* Headline */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Start{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-gold">
                    Winning Now!
                  </span>
                </h2>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                  From ₦100 to ₦1,000,000 - Your Next Big Win is Just One Game Away
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-accent-cyan">
                    <FaStar className="text-xl" />
                    <span className="font-semibold">Free to Download</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-orange">
                    <FaBolt className="text-xl" />
                    <span className="font-semibold">Play in 5 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-magenta">
                    <FaStar className="text-xl" />
                    <span className="font-semibold">Win Real Naira</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-button text-white font-bold px-10 py-5 rounded-xl hover:shadow-2xl hover:shadow-accent-orange/50 transition-all duration-300 text-lg"
                >
                  Download App & Win Today
                </motion.a>

                {/* Trust Badge */}
                <p className="text-sm text-gray-400 mt-6">
                  🔒 100% Secure | ✅ Licensed & Legal | 🎮 10,000+ Daily Winners
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
