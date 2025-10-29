import { motion } from 'framer-motion';
import { Shield, Heart, Users, Zap, Award, Target, TrendingUp, Lock } from 'lucide-react';

export const AboutUs = () => {
  const stats = [
    { value: '100,000+', label: 'Active Players' },
    { value: '₦2.5M+', label: 'Paid Daily' },
    { value: '45,000+', label: 'Games Played Daily' },
    { value: '4.8★', label: 'App Store Rating' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Fair Play',
      description: 'Certified RNG, transparent rules, and zero tolerance for cheating. Every game is monitored for fairness.',
      color: 'from-accent-cyan to-primary-light',
    },
    {
      icon: Lock,
      title: 'Security First',
      description: 'Bank-grade encryption, secure payments, and rigorous KYC verification protect your account and funds.',
      color: 'from-accent-magenta to-accent-orange',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join 100,000+ Nigerian players in a vibrant community where everyone has a chance to win.',
      color: 'from-accent-orange to-accent-gold',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology, instant withdrawals, and seamless gameplay on any device.',
      color: 'from-accent-cyan to-accent-magenta',
    },
  ];

  const milestones = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Adidi Ludo was founded with a simple mission: bring the joy of Ludo to the digital age while creating real earning opportunities for Nigerians.',
    },
    {
      year: '2023',
      title: 'Rapid Growth',
      description: 'Reached 10,000 active players within 6 months. Introduced tournaments and private rooms based on community feedback.',
    },
    {
      year: '2024',
      title: 'Major Milestone',
      description: '100,000+ registered users, ₦500M+ in total winnings paid out. Became Nigeria\'s most trusted Ludo gaming platform.',
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Expanding across West Africa, introducing new game modes, and building the ultimate social gaming experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary-main to-primary-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ludo-pattern.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-accent-gold">Adidi Ludo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're on a mission to make every Nigerian a winner through the game they love
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our <span className="text-accent-cyan">Story</span>
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Adidi Ludo was born from a simple observation: millions of Nigerians play Ludo every day, but the experience was scattered across basic apps with no real rewards or community.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Our founders, a team of Nigerian tech entrepreneurs and gaming enthusiasts, asked themselves: <em className="text-accent-gold">"What if we could combine the timeless joy of Ludo with real earning opportunities, while maintaining absolute fairness and security?"</em>
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                In 2022, we launched Adidi Ludo with a commitment to three principles: <strong className="text-white">Fair Play, Secure Transactions, and Community First</strong>. We partnered with leading payment providers, implemented certified Random Number Generation, and built a platform that treats every player with respect.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Today, over 100,000 Nigerians trust Adidi Ludo to turn their skills into earnings. We've paid out over ₦500 million in winnings, created countless success stories, and built a community where everyone has a fair shot at winning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent-magenta/20 to-accent-cyan/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Target className="w-16 h-16 text-accent-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-accent-gold mb-6">
              "Making Every Nigerian a Winner"
            </p>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We believe that everyone deserves a chance to earn through their skills and have fun doing it. Adidi Ludo provides a fair, secure, and exciting platform where your Ludo expertise can translate into real rewards. We're not just building a game—we're creating opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our <span className="text-accent-magenta">Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors"
                >
                  <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our <span className="text-accent-orange">Journey</span>
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-gold"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 bg-accent-gold rounded-full border-4 border-primary-main"></div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 ml-16 md:ml-0 md:mr-16">
                    <div className="inline-block bg-gradient-to-r from-accent-gold to-accent-orange text-primary-dark px-4 py-1 rounded-full font-bold mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose <span className="text-accent-cyan">Adidi Ludo</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Proven Track Record',
                  description: '₦500M+ paid out to winners. Real players, real winnings.',
                },
                {
                  icon: Shield,
                  title: 'Licensed & Regulated',
                  description: 'Fully compliant with Nigerian gaming regulations.',
                },
                {
                  icon: Zap,
                  title: 'Instant Withdrawals',
                  description: 'Get your winnings in minutes, not days.',
                },
                {
                  icon: Users,
                  title: 'Active Community',
                  description: '100,000+ players online every day.',
                },
                {
                  icon: Lock,
                  title: 'Secure Platform',
                  description: 'Bank-grade encryption protects your data and funds.',
                },
                {
                  icon: Heart,
                  title: '24/7 Support',
                  description: 'Dedicated Nigerian support team always ready to help.',
                },
                {
                  icon: TrendingUp,
                  title: 'Best Odds',
                  description: 'Only 10-15% platform fee. More winnings for you.',
                },
                {
                  icon: Target,
                  title: 'Fair Matchmaking',
                  description: 'Play against opponents at your skill level.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
                >
                  <feature.icon className="w-10 h-10 text-accent-cyan mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Licensing & Regulation */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Licensing & <span className="text-accent-gold">Regulation</span>
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <div className="flex items-start mb-6">
                <Shield className="w-12 h-12 text-accent-gold mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Fully Licensed Operation</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Adidi Ludo operates under a valid gaming license issued by the National Lottery Regulatory Commission (NLRC) of Nigeria. We comply with all local regulations regarding online gaming, age verification, and responsible gaming practices.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    License Number: <span className="text-accent-cyan font-semibold">NLRC/2022/456789</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary-dark/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">🔐 Security Certifications</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SSL/TLS 256-bit Encryption</li>
                    <li>• PCI DSS Compliant</li>
                    <li>• ISO 27001 Certified</li>
                    <li>• Regular Security Audits</li>
                  </ul>
                </div>

                <div className="bg-primary-dark/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">✅ Fair Play Certifications</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Certified RNG (iTech Labs)</li>
                    <li>• Monthly Audits</li>
                    <li>• Transparent Game Logs</li>
                    <li>• Independent Oversight</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-cyan/20 to-accent-magenta/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">🛡️ Your Protection Matters</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                We're committed to maintaining the highest standards of integrity, security, and responsible gaming. Our platform undergoes regular audits by independent third parties to ensure compliance and fairness.
              </p>
              <p className="text-gray-300">
                For regulatory inquiries: <span className="text-accent-cyan font-semibold">compliance@adidiludo.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent-magenta via-accent-orange to-accent-gold rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Winning Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of Nigeria's most trusted Ludo gaming platform. Download now and start winning today!
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
