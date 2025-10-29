import { motion } from 'framer-motion';
import { FaCoins, FaMobileAlt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: FaCoins,
    title: 'Win Real Naira Instantly',
    description: 'Every game is a chance to win real money. Cash prizes from ₦100 to ₦1,000,000 paid directly to your wallet.',
    color: 'text-accent-gold',
  },
  {
    icon: FaMobileAlt,
    title: 'Play Anytime, Anywhere',
    description: 'Available 24/7 on iOS and Android. Join matches in seconds and play from the comfort of your home.',
    color: 'text-accent-orange',
  },
  {
    icon: FaShieldAlt,
    title: '100% Secure Payments',
    description: 'Bank-grade encryption with Paystack & Flutterwave integration. Your money and data are completely safe.',
    color: 'text-accent-cyan',
  },
  {
    icon: FaCheckCircle,
    title: 'Fair & Transparent Gaming',
    description: 'Server-side validation ensures every game is fair. No bots, no cheats - just pure skill-based competition.',
    color: 'text-accent-magenta',
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-magenta rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-accent-magenta">100,000+</span> Nigerians Choose Adidi Ludo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The most trusted and rewarding Ludo gaming platform in Nigeria
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-card p-8 rounded-2xl border border-white/10 hover:border-accent-magenta/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`${benefit.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <benefit.icon className="text-5xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Join thousands of winners playing daily
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-button text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300"
          >
            Start Winning Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
