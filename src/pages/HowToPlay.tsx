import { motion } from 'framer-motion';
import {
  Download,
  UserPlus,
  Wallet,
  CreditCard,
  Gamepad2,
  Dices,
  Move,
  Zap,
  Target,
  Trophy,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Star
} from 'lucide-react';

export const HowToPlay = () => {
  const gettingStarted = [
    {
      icon: Download,
      step: '1',
      title: 'Download the App',
      description: 'Get Adidi Ludo from Google Play Store or Apple App Store. Free download, works on all Android and iOS devices.',
      details: ['Available on Android 6.0+', 'Available on iOS 12.0+', 'Under 50MB size', 'No ads during gameplay'],
    },
    {
      icon: UserPlus,
      step: '2',
      title: 'Create Your Account',
      description: 'Sign up with your phone number and verify via OTP. Complete KYC for secure transactions.',
      details: ['Nigerian phone number required', 'Email verification', 'Government ID for KYC', 'Choose unique username'],
    },
    {
      icon: Wallet,
      step: '3',
      title: 'Fund Your Wallet',
      description: 'Add money to your wallet using multiple payment methods. Minimum deposit: ₦100.',
      details: ['Bank Transfer', 'Card Payment (Visa/Mastercard)', 'USSD', 'Instant crediting'],
    },
    {
      icon: Gamepad2,
      step: '4',
      title: 'Start Playing & Winning',
      description: 'Choose your game mode, select entry amount, get matched with opponents, and play to win!',
      details: ['Quick Match in seconds', 'Join tournaments', 'Create private rooms', 'Win real money'],
    },
  ];

  const gameplayBasics = [
    {
      icon: Dices,
      title: 'Rolling the Dice',
      description: 'Tap the dice to roll. You have 30 seconds per turn.',
      tips: ['Roll a 6 to bring out tokens', 'Rolling 6 gives bonus turn', 'Three 6s = turn forfeited'],
    },
    {
      icon: Move,
      title: 'Moving Tokens',
      description: 'Select which token to move based on your strategy.',
      tips: ['Move exactly the number rolled', 'Plan your moves ahead', 'Multiple tokens = more options'],
    },
    {
      icon: Zap,
      title: 'Capturing Opponents',
      description: 'Land on opponent\'s token to capture it and send them back to start.',
      tips: ['Capturing gives bonus turn', 'Safe squares protect tokens', 'Strategic capturing wins games'],
    },
    {
      icon: Target,
      title: 'Reaching Home',
      description: 'Move all 4 tokens around the board and into your home triangle first to win!',
      tips: ['Exact roll needed to enter home', 'First to home wins', 'Protect leading tokens'],
    },
  ];

  const strategies = [
    {
      icon: Shield,
      title: 'Defensive Play',
      description: 'Use safe squares strategically. Don\'t leave tokens vulnerable to capture.',
    },
    {
      icon: Zap,
      title: 'Aggressive Capture',
      description: 'Actively hunt opponent tokens. Each capture sets them back significantly.',
    },
    {
      icon: TrendingUp,
      title: 'Balanced Approach',
      description: 'Bring out multiple tokens. Don\'t rely on just one token to win.',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Use your 30 seconds wisely. Quick decisions under pressure matter.',
    },
    {
      icon: Target,
      title: 'End Game Focus',
      description: 'Once ahead, prioritize getting tokens home over capturing.',
    },
    {
      icon: Users,
      title: 'Read Opponents',
      description: 'Anticipate opponent moves. Block their paths when possible.',
    },
  ];

  const gameModes = [
    {
      mode: 'Quick Match',
      entry: '₦100 - ₦5,000',
      duration: '10-15 minutes',
      players: '2-4 players',
      reward: 'Winner takes 85%',
      bestFor: 'Fast cash games and practice',
      icon: Zap,
      color: 'from-accent-cyan to-primary-light',
    },
    {
      mode: 'Tournament',
      entry: '₦500 - ₦10,000',
      duration: '30-60 minutes',
      players: '8+ players',
      reward: 'Top 3 winners paid',
      bestFor: 'Big prizes and competition',
      icon: Trophy,
      color: 'from-accent-gold to-accent-orange',
    },
    {
      mode: 'High Stakes',
      entry: '₦5,000 - ₦100,000',
      duration: '15-20 minutes',
      players: '2-4 players',
      reward: 'Winner takes 90%',
      bestFor: 'Experienced players only',
      icon: Star,
      color: 'from-accent-magenta to-accent-orange',
    },
    {
      mode: 'Private Room',
      entry: 'Custom amount',
      duration: 'Flexible',
      players: 'Invite friends',
      reward: 'Custom rules',
      bestFor: 'Playing with friends',
      icon: Users,
      color: 'from-accent-orange to-accent-cyan',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary-main to-primary-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ludo-pattern.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Gamepad2 className="w-20 h-20 text-accent-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Play <span className="text-accent-gold">Adidi Ludo</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Master the game in minutes. Win for a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              🚀 Getting Started
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gettingStarted.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-accent-magenta to-accent-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-r from-accent-cyan to-accent-magenta w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4 ml-16">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="text-accent-gold mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Understanding the Game Board */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              🎲 Understanding the Game Board
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-accent-gold mb-4">Board Layout</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-cyan mr-2">•</span>
                      <span><strong className="text-white">4 Colored Zones:</strong> Red, Blue, Green, Yellow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-cyan mr-2">•</span>
                      <span><strong className="text-white">Starting Yard:</strong> Where your 4 tokens begin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-cyan mr-2">•</span>
                      <span><strong className="text-white">Main Path:</strong> 52 squares going clockwise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-cyan mr-2">•</span>
                      <span><strong className="text-white">Home Column:</strong> Final 6 squares in your color</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-cyan mr-2">•</span>
                      <span><strong className="text-white">Home Triangle:</strong> The winning destination</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-accent-gold mb-4">Special Squares</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-accent-gold mr-2 mt-1" />
                      <span><strong className="text-white">Safe Squares (★):</strong> Tokens cannot be captured here</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-accent-magenta mr-2 mt-1" />
                      <span><strong className="text-white">Starting Square:</strong> Where you enter the board</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-accent-cyan mr-2 mt-1" />
                      <span><strong className="text-white">Home Entry:</strong> Turn into your colored column</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Basic Gameplay */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              🎮 Basic Gameplay
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gameplayBasics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-accent-gold to-accent-orange w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="bg-primary-dark/50 rounded-lg p-4">
                    <p className="text-accent-gold font-semibold mb-2">💡 Pro Tips:</p>
                    <ul className="space-y-1">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-accent-cyan mr-2">→</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Winning Strategies */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent-magenta/10 to-accent-cyan/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              🏆 Winning Strategies
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Learn from champions who have won over ₦10M combined
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
                >
                  <strategy.icon className="w-10 h-10 text-accent-gold mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Game Modes Explained */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              🎯 Game Modes Explained
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gameModes.map((mode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-10`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{mode.mode}</h3>
                      <mode.icon className="w-10 h-10 text-accent-gold" />
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Entry Fee:</span>
                        <span className="text-white font-semibold">{mode.entry}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white font-semibold">{mode.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Players:</span>
                        <span className="text-white font-semibold">{mode.players}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Reward:</span>
                        <span className="text-accent-gold font-semibold">{mode.reward}</span>
                      </div>
                    </div>

                    <div className="bg-primary-dark/50 rounded-lg p-4 mt-4">
                      <p className="text-accent-cyan font-semibold mb-1">Best For:</p>
                      <p className="text-gray-300">{mode.bestFor}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Betting Mechanics */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              💰 Betting Mechanics
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">How Winnings Work</h3>

              <div className="space-y-6">
                <div className="bg-primary-dark/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Entry Fee Structure</h4>
                  <p className="text-gray-300 mb-3">
                    When you join a game, you pay an entry fee. This fee goes into the prize pool. The platform takes a small commission (10-15%), and the rest is distributed to winners.
                  </p>
                  <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Example: ₦1,000 Quick Match (2 players)</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Total Pool: ₦2,000</li>
                      <li>• Platform Fee (15%): ₦300</li>
                      <li>• Winner Gets: ₦1,700</li>
                      <li>• <strong className="text-accent-gold">Your Profit: ₦700</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary-dark/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Tournament Prize Distribution</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-accent-gold/20 rounded-lg p-4 text-center">
                      <Trophy className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                      <p className="text-white font-bold">1st Place</p>
                      <p className="text-accent-gold text-2xl font-bold">60%</p>
                    </div>
                    <div className="bg-gray-500/20 rounded-lg p-4 text-center">
                      <Trophy className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-white font-bold">2nd Place</p>
                      <p className="text-gray-300 text-2xl font-bold">25%</p>
                    </div>
                    <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                      <Trophy className="w-8 h-8 text-accent-orange mx-auto mb-2" />
                      <p className="text-white font-bold">3rd Place</p>
                      <p className="text-accent-orange text-2xl font-bold">15%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-dark/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Withdrawal Process</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CreditCard className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                      <span><strong className="text-white">Instant Withdrawals:</strong> Request anytime, receive within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Wallet className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                      <span><strong className="text-white">Minimum Withdrawal:</strong> ₦500</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                      <span><strong className="text-white">Verification:</strong> KYC required for withdrawals above ₦10,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Mode */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center"
          >
            <Target className="w-16 h-16 text-accent-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              New to Ludo? Start with Practice Mode!
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Learn the game without risking money. Practice against AI opponents until you're confident to play for real money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-accent-cyan to-accent-magenta text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
                🎯 Try Practice Mode Free
              </button>
              <button className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors">
                📖 Read Full Game Rules
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent-magenta via-accent-orange to-accent-gold">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Winning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 100,000+ Nigerians earning daily through Ludo skills!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-dark px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
                📱 Download on iOS
              </button>
              <button className="bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-xl border-2 border-white">
                🤖 Download on Android
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
