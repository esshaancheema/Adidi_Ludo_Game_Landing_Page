import { motion } from 'framer-motion';
import { FaBolt, FaTrophy, FaGraduationCap, FaUserFriends } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface GameMode {
  icon: IconType;
  title: string;
  description: string;
  entryFee: string;
  prize: string;
  color: string;
  bgGradient: string;
}

const gameModes: GameMode[] = [
  {
    icon: FaBolt,
    title: 'Quick Match',
    description: '2-player instant matches. Fast-paced action with quick wins. Perfect for lunch breaks and commutes.',
    entryFee: 'From ₦50',
    prize: 'Win up to ₦10,000',
    color: 'text-accent-orange',
    bgGradient: 'from-accent-orange/20 to-transparent',
  },
  {
    icon: FaTrophy,
    title: 'Tournament Mode',
    description: 'Compete with multiple players for massive prize pools. Daily and weekly tournaments available.',
    entryFee: 'From ₦200',
    prize: 'Win up to ₦500,000',
    color: 'text-accent-gold',
    bgGradient: 'from-accent-gold/20 to-transparent',
  },
  {
    icon: FaGraduationCap,
    title: 'Practice Mode',
    description: 'Learn and improve your skills risk-free. Play against AI with beginner, intermediate, and expert levels.',
    entryFee: 'Free',
    prize: 'Build Your Skills',
    color: 'text-accent-cyan',
    bgGradient: 'from-accent-cyan/20 to-transparent',
  },
  {
    icon: FaUserFriends,
    title: 'Private Rooms',
    description: 'Create custom games with friends. Set your own entry fees and invite players via room codes.',
    entryFee: 'Custom Stakes',
    prize: 'Challenge Friends',
    color: 'text-accent-magenta',
    bgGradient: 'from-accent-magenta/20 to-transparent',
  },
];

export const GameModes = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-ludo-blue rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-ludo-red rounded-full blur-3xl" />
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
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-magenta">
              Game Mode
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From casual games to high-stakes tournaments - play your way
          </p>
        </motion.div>

        {/* Game Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {gameModes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${mode.bgGradient} bg-primary-light p-8 rounded-2xl border border-white/10 hover:border-accent-magenta/50 transition-all duration-300 h-full relative overflow-hidden`}>
                {/* Decorative Circle */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${mode.bgGradient} rounded-full blur-2xl opacity-50`} />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`${mode.color} transition-transform duration-300 group-hover:scale-110 inline-block`}>
                    <mode.icon className="text-5xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 relative">
                  {mode.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed relative">
                  {mode.description}
                </p>

                {/* Info Badges */}
                <div className="flex flex-wrap gap-3 relative">
                  <div className="bg-primary-dark px-4 py-2 rounded-lg border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Entry Fee</div>
                    <div className="font-semibold text-accent-gold">{mode.entryFee}</div>
                  </div>
                  <div className="bg-primary-dark px-4 py-2 rounded-lg border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Prize</div>
                    <div className="font-semibold text-accent-magenta">{mode.prize}</div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-magenta opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-accent-gold mb-2">2-4</div>
            <div className="text-gray-300">Players Per Game</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-accent-orange mb-2">10-15</div>
            <div className="text-gray-300">Minutes Per Match</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-accent-cyan mb-2">24/7</div>
            <div className="text-gray-300">Availability</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
