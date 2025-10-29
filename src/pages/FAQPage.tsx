import { motion } from 'framer-motion';
import { FAQ } from '../components/FAQ';

export const FAQPage = () => {
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
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                Questions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Find answers to all your questions about Adidi Ludo
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};
