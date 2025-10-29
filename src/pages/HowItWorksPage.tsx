import { motion } from 'framer-motion';
import { HowItWorks } from '../components/HowItWorks';
import { GameModes } from '../components/GameModes';

export const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                Play & Win
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know to start winning on Adidi Ludo
            </p>
          </motion.div>
        </div>
      </section>

      <HowItWorks />
      <GameModes />
    </div>
  );
};
