import { motion } from 'framer-motion';
import { FaDownload, FaWallet, FaTrophy } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Step {
  number: string;
  icon: IconType;
  title: string;
  description: string;
  highlight: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: FaDownload,
    title: 'Download & Register',
    description: 'Get the Adidi Ludo app from App Store or Google Play. Sign up in under 2 minutes with your phone number.',
    highlight: 'Free to Download',
  },
  {
    number: '02',
    icon: FaWallet,
    title: 'Deposit & Play',
    description: 'Add funds from as low as ₦100 using bank transfer, cards, or mobile money. Choose your game mode and start playing.',
    highlight: 'From ₦100 Only',
  },
  {
    number: '03',
    icon: FaTrophy,
    title: 'Win & Cash Out',
    description: 'Beat your opponents and win real Naira! Withdraw your winnings anytime to your bank account within 24 hours.',
    highlight: 'Instant Wins',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent-magenta/10 rounded-full blur-3xl" />

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
            Start Winning in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your journey from download to big wins - it's that easy!
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent-magenta to-transparent z-0" />
              )}

              {/* Card */}
              <div className="relative bg-gradient-card p-8 rounded-2xl border border-accent-magenta/30 hover:border-accent-magenta/60 transition-all duration-300 h-full group">
                {/* Step Number Badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-magenta rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-primary-dark w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-magenta/20 transition-all duration-300">
                  <step.icon className="text-4xl text-accent-orange" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-lg text-sm font-semibold">
                  {step.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-accent-cyan/30 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Thrill?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Join over 100,000 players who are already winning daily on Adidi Ludo
            </p>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-button text-white font-bold px-10 py-4 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300 text-lg"
            >
              Download Now - It's Free!
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
