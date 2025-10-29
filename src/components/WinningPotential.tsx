import { motion } from 'framer-motion';
import { FaStar, FaFireAlt, FaCrown } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface PrizeTier {
  icon: IconType;
  level: string;
  range: string;
  description: string;
  color: string;
  gradient: string;
  featured?: boolean;
}

const prizeTiers: PrizeTier[] = [
  {
    icon: FaStar,
    level: 'Beginner',
    range: '₦500 - ₦5,000',
    description: 'Perfect for getting started. Low-stakes games with real rewards.',
    color: 'text-accent-cyan',
    gradient: 'from-accent-cyan/20 to-primary-light',
  },
  {
    icon: FaFireAlt,
    level: 'Intermediate',
    range: '₦5,000 - ₦50,000',
    description: 'Step up your game. Compete for serious cash prizes daily.',
    color: 'text-accent-orange',
    gradient: 'from-accent-orange/20 to-primary-light',
    featured: true,
  },
  {
    icon: FaCrown,
    level: 'Expert',
    range: '₦50,000 - ₦1,000,000',
    description: 'High-stakes tournaments. Life-changing prizes for top players.',
    color: 'text-accent-gold',
    gradient: 'from-accent-gold/20 to-primary-light',
  },
];

const stats = [
  { value: '₦50M+', label: 'Total Prizes Paid' },
  { value: '10,000+', label: 'Daily Winners' },
  { value: '₦1M', label: 'Biggest Single Win' },
];

export const WinningPotential = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-magenta/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
            Your Path to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              Daily Wins
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From small wins to life-changing jackpots - every skill level has its rewards
          </p>
        </motion.div>

        {/* Prize Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {prizeTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-magenta px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <div className={`
                bg-gradient-to-br ${tier.gradient}
                p-8 rounded-2xl border-2
                ${tier.featured ? 'border-accent-magenta' : 'border-white/10'}
                hover:border-accent-gold/50
                transition-all duration-300
                h-full
                ${tier.featured ? 'md:scale-105' : ''}
              `}>
                {/* Icon */}
                <div className={`${tier.color} mb-6`}>
                  <tier.icon className="text-6xl mx-auto" />
                </div>

                {/* Level Badge */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">{tier.level}</h3>
                  <div className={`inline-block ${tier.color} text-3xl font-bold mb-4`}>
                    {tier.range}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed">
                  {tier.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-accent-gold/30 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-accent-gold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Winner Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-primary-light p-8 md:p-10 rounded-2xl border border-accent-magenta/30 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 text-6xl text-accent-magenta opacity-50">"</div>

            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 italic mb-6 leading-relaxed">
                I started with small games and won my first ₦5,000 in my second week. Now I play tournaments and have won over ₦200,000. Adidi Ludo changed my life!
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">Chidi O.</div>
                  <div className="text-accent-cyan">Lagos, Nigeria</div>
                </div>
                <div className="text-right">
                  <div className="text-accent-gold font-bold text-2xl">₦200K+</div>
                  <div className="text-sm text-gray-400">Total Winnings</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
