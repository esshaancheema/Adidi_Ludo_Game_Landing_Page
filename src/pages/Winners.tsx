import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaCrown,
  FaStar,
  FaFire,
  FaChartLine,
  FaUsers,
  FaGamepad,
  FaCoins,
} from 'react-icons/fa';
import { recentWinners, todaysChampions, hallOfChampions, winnersStats } from '../data/winners';

export const Winners = () => {
  const [liveFeedIndex, setLiveFeedIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'quick' | 'tournament' | 'high-stakes'>('all');
  const [displayedWinners, setDisplayedWinners] = useState(20);

  // Simulate live feed updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveFeedIndex((prev) => (prev + 1) % recentWinners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Filter winners
  const filteredWinners = recentWinners.filter((winner) => {
    if (filter === 'all') return true;
    if (filter === 'quick') return winner.gameType === 'Quick Match';
    if (filter === 'tournament') return winner.gameType === 'Tournament';
    if (filter === 'high-stakes') return winner.gameType === 'High Stakes';
    return true;
  });

  // Get next 5 winners for live feed
  const liveFeedWinners = Array.from({ length: 5 }, (_, i) => {
    const index = (liveFeedIndex + i) % recentWinners.length;
    return recentWinners[index];
  });

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-magenta rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent-magenta/20 px-6 py-2 rounded-full mb-6 border border-accent-magenta">
              <div className="w-3 h-3 bg-accent-magenta rounded-full animate-pulse" />
              <span className="font-bold text-accent-magenta">LIVE</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Today's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                Winners
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real winners, real prizes, real time - your name could be here next!
            </p>

            {/* Live Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-card p-6 rounded-xl border border-accent-gold/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">
                  {formatCurrency(winnersStats.totalPrizesToday)}
                </div>
                <div className="text-sm text-gray-400">Paid Today</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-card p-6 rounded-xl border border-accent-cyan/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-1">
                  {winnersStats.activePlayersNow.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">Playing Now</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-card p-6 rounded-xl border border-accent-orange/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-1">
                  {winnersStats.gamesToday.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">Games Today</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-card p-6 rounded-xl border border-accent-magenta/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-magenta mb-1">
                  {formatCurrency(winnersStats.biggestWinToday)}
                </div>
                <div className="text-sm text-gray-400">Biggest Win</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Winner Feed */}
      <section className="py-12 bg-primary-dark border-y border-accent-magenta/30">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-magenta rounded-full animate-pulse" />
            <h2 className="text-2xl font-bold">Live Winner Feed</h2>
          </div>

          <div className="bg-gradient-card p-6 rounded-2xl border border-white/10">
            <div className="space-y-3">
              {liveFeedWinners.map((winner, index) => (
                <motion.div
                  key={`${winner.id}-${liveFeedIndex}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-primary-dark rounded-lg hover:bg-primary-light transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center font-bold text-white">
                      {winner.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {winner.name}{' '}
                        {winner.isRepeat && (
                          <span className="text-accent-gold">⭐</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        {winner.location} • {winner.gameType}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-accent-gold">
                      {formatCurrency(winner.amount)}
                    </div>
                    <div className="text-xs text-gray-400">{winner.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's Top Winners */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Today's Top Winners
            </h2>
            <p className="text-xl text-gray-300">
              The champions of today - will you be on this list tomorrow?
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { key: 'all', label: 'All Games' },
              { key: 'quick', label: 'Quick Match' },
              { key: 'tournament', label: 'Tournaments' },
              { key: 'high-stakes', label: 'High Stakes' },
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === filterOption.key
                    ? 'bg-accent-magenta text-white'
                    : 'bg-primary-light text-gray-300 hover:bg-primary-dark'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div className="bg-gradient-card rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-dark">
                  <tr>
                    <th className="px-6 py-4 text-left">Rank</th>
                    <th className="px-6 py-4 text-left">Player</th>
                    <th className="px-6 py-4 text-left">Location</th>
                    <th className="px-6 py-4 text-left">Game Type</th>
                    <th className="px-6 py-4 text-right">Amount Won</th>
                    <th className="px-6 py-4 text-right">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWinners.slice(0, displayedWinners).map((winner, index) => (
                    <tr
                      key={winner.id}
                      className="border-t border-white/5 hover:bg-primary-light transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {index < 3 ? (
                            <FaCrown
                              className={`text-xl ${
                                index === 0
                                  ? 'text-accent-gold'
                                  : index === 1
                                  ? 'text-gray-400'
                                  : 'text-amber-600'
                              }`}
                            />
                          ) : (
                            <span className="text-gray-400">#{index + 1}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-magenta rounded-full flex items-center justify-center font-bold">
                            {winner.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold flex items-center gap-2">
                              {winner.name}
                              {winner.isRepeat && (
                                <span className="text-accent-gold text-sm">
                                  ⭐ x{winner.repeatCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{winner.location}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                            winner.gameType === 'Tournament'
                              ? 'bg-accent-gold/20 text-accent-gold'
                              : winner.gameType === 'High Stakes'
                              ? 'bg-accent-magenta/20 text-accent-magenta'
                              : 'bg-accent-cyan/20 text-accent-cyan'
                          }`}
                        >
                          {winner.gameType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-xl font-bold text-accent-gold">
                          {formatCurrency(winner.amount)}
                        </div>
                        {winner.totalWinnings && (
                          <div className="text-xs text-gray-400">
                            Total: {formatCurrency(winner.totalWinnings)}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right text-gray-400 text-sm">
                        {winner.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Load More */}
            {displayedWinners < filteredWinners.length && (
              <div className="p-6 text-center border-t border-white/10">
                <button
                  onClick={() => setDisplayedWinners((prev) => prev + 20)}
                  className="bg-gradient-button text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all"
                >
                  Load More Winners
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Today's Champions Showcase */}
      <section className="py-20 bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <FaTrophy className="inline text-accent-gold mr-3" />
              Today's Champions
            </h2>
            <p className="text-xl text-gray-300">
              Meet the top 5 winners who dominated today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todaysChampions.slice(0, 5).map((champion, index) => (
              <motion.div
                key={champion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-card p-6 rounded-2xl border-2 ${
                  index === 0
                    ? 'border-accent-gold'
                    : 'border-white/10 hover:border-accent-magenta/50'
                } transition-all`}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-gold px-4 py-1 rounded-full text-sm font-bold">
                    👑 Top Winner
                  </div>
                )}

                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-magenta rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-3">
                    {champion.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    {champion.name}, {champion.age}
                  </h3>
                  <p className="text-accent-cyan">{champion.location}, Nigeria</p>
                </div>

                <div className="bg-primary-dark p-4 rounded-lg mb-4">
                  <div className="text-3xl font-bold text-accent-gold text-center mb-1">
                    {formatCurrency(champion.amount)}
                  </div>
                  <div className="text-sm text-gray-400 text-center">
                    {champion.gameType} • {champion.time}
                  </div>
                </div>

                {champion.isRepeat && (
                  <div className="flex items-center justify-center gap-2 mb-3 text-sm">
                    <FaStar className="text-accent-gold" />
                    <span>
                      {champion.repeatCount} wins • Total:{' '}
                      {formatCurrency(champion.totalWinnings!)}
                    </span>
                  </div>
                )}

                <p className="text-gray-300 italic text-sm text-center">
                  "{champion.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Champions */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <FaFire className="inline text-accent-orange mr-3" />
              Hall of Champions
            </h2>
            <p className="text-xl text-gray-300">
              Legendary repeat winners with 10+ victories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hallOfChampions.map((champion, index) => (
              <motion.div
                key={champion.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-gold/20 to-accent-magenta/20 p-6 rounded-2xl border-2 border-accent-gold/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{champion.name}</h3>
                    <p className="text-accent-cyan">{champion.location}</p>
                  </div>
                  <div className="text-4xl">
                    {index === 0 ? '👑' : index === 1 ? '⭐' : '💎'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-primary-dark p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Total Wins</div>
                    <div className="text-2xl font-bold text-accent-gold">
                      {formatCurrency(champion.totalWinnings!)}
                    </div>
                  </div>
                  <div className="bg-primary-dark p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Victories</div>
                    <div className="text-2xl font-bold text-accent-magenta">
                      {champion.repeatCount}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-400">Win Rate: </span>
                    <span className="font-bold text-accent-cyan">
                      {champion.winRate}%
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Games: </span>
                    <span className="font-bold">{champion.gamesPlayed}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card p-8 md:p-12 rounded-3xl border-2 border-accent-gold text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Name Could Be Here Tomorrow!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join {winnersStats.totalWinnersToday.toLocaleString()} winners who are
              celebrating today
            </p>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-button text-white font-bold px-10 py-4 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300 text-lg"
            >
              Start Winning Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
