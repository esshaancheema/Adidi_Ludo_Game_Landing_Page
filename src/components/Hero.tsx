import { motion } from 'framer-motion';
import { DownloadButtons } from './DownloadButtons';
import { FaShieldAlt, FaBolt, FaMoneyBillWave } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Ludo Pieces */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-ludo-red rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-20 h-20 bg-ludo-blue rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-ludo-yellow rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-20 right-1/4 w-20 h-20 bg-ludo-green rounded-full opacity-20 blur-sm"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Play Ludo,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              Win Big
            </span>{' '}
            in Naira!
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
          >
            Nigeria's Most Trusted Ludo Betting Platform
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-accent-magenta font-semibold mb-12"
          >
            Turn Your Skills Into Cash - Win Up to ₦1,000,000!
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <DownloadButtons variant="large" className="justify-center" />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-accent-cyan text-xl" />
              <span>100% Secure</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <FaBolt className="text-accent-orange text-xl" />
              <span>Instant Withdrawals</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-accent-gold text-xl" />
              <span>Licensed & Legal</span>
            </div>
          </motion.div>

          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 inline-block bg-gradient-card px-8 py-4 rounded-2xl border border-accent-magenta/30"
          >
            <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">
              100,000+
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Active Players in Nigeria
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
