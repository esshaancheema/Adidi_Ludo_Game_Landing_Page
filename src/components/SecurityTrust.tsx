import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaCheckCircle, FaUserShield, FaCertificate, FaServer } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SecurityFeature {
  icon: IconType;
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    icon: FaLock,
    title: 'Bank-Grade Encryption',
    description: 'All transactions and personal data protected with 256-bit SSL encryption',
  },
  {
    icon: FaUserShield,
    title: 'KYC Verified',
    description: 'Secure identity verification ensures a safe gaming environment for all',
  },
  {
    icon: FaServer,
    title: 'Server-Side Validation',
    description: 'Every move verified on our servers - impossible to cheat or manipulate',
  },
  {
    icon: FaCertificate,
    title: 'Licensed Platform',
    description: 'Fully licensed and compliant with Nigerian gaming regulations',
  },
  {
    icon: FaCheckCircle,
    title: 'Fair Play Guarantee',
    description: 'Advanced anti-cheat system ensures every game is 100% fair',
  },
  {
    icon: FaShieldAlt,
    title: 'Responsible Gaming',
    description: 'Age verification, spending limits, and self-exclusion options available',
  },
];

export const SecurityTrust = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-magenta rounded-full blur-3xl" />
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
            Your Security is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-magenta">
              Our Priority
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Play with confidence - your money and data are completely safe
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-card p-6 rounded-xl border border-white/10 hover:border-accent-cyan/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-accent-cyan/10 w-14 h-14 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-2xl text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-accent-cyan/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Trusted Payment Partners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Payment Partners */}
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-3 h-24 flex items-center justify-center">
                <div className="text-2xl font-bold text-accent-orange">Paystack</div>
              </div>
              <p className="text-sm text-gray-400">Secure Payment Processing</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-3 h-24 flex items-center justify-center">
                <div className="text-2xl font-bold text-accent-cyan">Flutterwave</div>
              </div>
              <p className="text-sm text-gray-400">Instant Bank Transfers</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl mb-3 h-24 flex items-center justify-center">
                <div className="text-2xl font-bold text-accent-gold">USSD Banking</div>
              </div>
              <p className="text-sm text-gray-400">All Major Nigerian Banks</p>
            </div>
          </div>

          {/* Additional Security Info */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                  <FaCheckCircle className="text-accent-cyan" />
                  Age Verification
                </h4>
                <p className="text-gray-300 text-sm">
                  Strictly 18+ only. ID verification required for large withdrawals to ensure compliance and safety.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                  <FaCheckCircle className="text-accent-cyan" />
                  Data Protection
                </h4>
                <p className="text-gray-300 text-sm">
                  Full NDPR compliance. Your personal information is never shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
