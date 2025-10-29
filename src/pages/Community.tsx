import { motion } from 'framer-motion';
import { WinningPotential } from '../components/WinningPotential';

export const Community = () => {
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
              Join{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                100,000+ Winners
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Be part of Nigeria's largest and most successful Ludo community
            </p>
          </motion.div>
        </div>
      </section>

      <WinningPotential />
    </div>
  );
};
