import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is Adidi Ludo legal in Nigeria?',
    answer: 'Yes! Adidi Ludo is fully licensed and compliant with Nigerian gaming regulations. We operate legally and ensure all players are 18+ through our KYC verification process.',
  },
  {
    question: 'How do I withdraw my winnings?',
    answer: 'Withdrawals are simple! Go to your wallet, select "Withdraw," enter the amount (minimum ₦1,000), and choose your bank account. Most withdrawals are processed within 2-4 hours, with a maximum of 24 hours.',
  },
  {
    question: "What's the minimum amount to start playing?",
    answer: 'You can start playing with as little as ₦100. We offer games with entry fees from ₦50, making it accessible for everyone. You can also practice for free before playing with real money.',
  },
  {
    question: 'Is my money safe with Adidi Ludo?',
    answer: 'Absolutely! We use bank-grade 256-bit SSL encryption and partner with trusted payment processors like Paystack and Flutterwave. Your funds are held in secure escrow during games and can be withdrawn anytime.',
  },
  {
    question: 'How are winners determined?',
    answer: 'Winners are determined purely by gameplay skill. Every dice roll is generated server-side and validated to ensure complete fairness. We have advanced anti-cheat systems - no bots, no manipulation.',
  },
  {
    question: 'Can I practice before playing for real money?',
    answer: 'Yes! Our Practice Mode is completely free and allows you to play against AI opponents at beginner, intermediate, and expert levels. Perfect for learning strategies before risking real money.',
  },
  {
    question: 'How long does it take to receive deposits?',
    answer: 'Deposits via bank transfer, cards, and mobile money are instant. USSD deposits typically complete within seconds. You can start playing immediately after your deposit is confirmed.',
  },
  {
    question: 'What happens if I lose my internet connection during a game?',
    answer: 'Don\'t worry! We have a 60-second auto-reconnection window. If you reconnect within this time, you can continue your game. If not, the game will be auto-played based on your previous moves pattern.',
  },
];

const FAQAccordion = ({ faq, isOpen, onClick }: { faq: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-card border border-white/10 rounded-xl overflow-hidden hover:border-accent-magenta/30 transition-all duration-300"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
      >
        <span className="font-semibold text-lg pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className="text-accent-magenta" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-300 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(233, 30, 140, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
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
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-magenta">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about playing and winning on Adidi Ludo
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-gradient-card rounded-2xl border border-accent-cyan/30 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is available 24/7 to help you
          </p>
          <motion.a
            href="mailto:support@adidiludo.ng"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-button text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
