import { motion } from 'framer-motion';
import { FaUniversity, FaCreditCard, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface PaymentMethod {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    icon: FaUniversity,
    title: 'Bank Transfer',
    description: 'Instant deposits from all Nigerian banks',
    color: 'text-accent-cyan',
  },
  {
    icon: FaCreditCard,
    title: 'Debit/Credit Cards',
    description: 'Visa, Mastercard, and Verve accepted',
    color: 'text-accent-orange',
  },
  {
    icon: FaPhoneAlt,
    title: 'USSD Banking',
    description: 'Dial from any phone - no internet needed',
    color: 'text-accent-magenta',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Money',
    description: 'All major mobile money providers',
    color: 'text-accent-gold',
  },
];

export const PaymentMethods = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ludo-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ludo-green/10 rounded-full blur-3xl" />

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
            Easy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              Deposits & Withdrawals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Multiple payment options designed for Nigerian players
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="bg-gradient-card p-6 rounded-2xl border border-white/10 hover:border-accent-gold/50 transition-all duration-300 text-center h-full">
                <div className={`${method.color} mb-4 inline-block`}>
                  <method.icon className="text-5xl" />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deposit/Withdrawal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Deposits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-primary-light p-8 rounded-2xl border border-accent-cyan/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaCreditCard className="text-2xl text-accent-cyan" />
                </div>
                <h3 className="text-2xl font-bold">Instant Deposits</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Minimum Deposit</span>
                  <span className="font-bold text-accent-gold">₦100</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Maximum Daily Deposit</span>
                  <span className="font-bold text-accent-gold">₦500,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Processing Time</span>
                  <span className="font-bold text-accent-cyan">Instant</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent-cyan/10 rounded-lg">
                <p className="text-sm text-gray-200">
                  💡 <strong>Pro Tip:</strong> Bank transfers and USSD are usually free with no charges!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Withdrawals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-primary-light p-8 rounded-2xl border border-accent-magenta/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-magenta/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaUniversity className="text-2xl text-accent-magenta" />
                </div>
                <h3 className="text-2xl font-bold">Fast Withdrawals</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Minimum Withdrawal</span>
                  <span className="font-bold text-accent-gold">₦1,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Maximum Daily Withdrawal</span>
                  <span className="font-bold text-accent-gold">₦1,000,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Processing Time</span>
                  <span className="font-bold text-accent-magenta">0-24 Hours</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent-magenta/10 rounded-lg">
                <p className="text-sm text-gray-200">
                  ✅ <strong>No Wahala:</strong> Most withdrawals processed within 2-4 hours!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-card p-8 rounded-2xl border border-accent-gold/30"
        >
          <h3 className="text-2xl font-bold mb-3">Start with Just ₦100</h3>
          <p className="text-lg text-gray-300 mb-6">
            Small deposit, big winning potential. Your first game could change everything!
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-button text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300"
          >
            Download & Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
