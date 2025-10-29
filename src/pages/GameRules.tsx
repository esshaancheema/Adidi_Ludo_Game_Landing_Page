import { motion } from 'framer-motion';
import { Shield, Clock, Trophy, Users, AlertCircle, CheckCircle } from 'lucide-react';

export const GameRules = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Game Rules & <span className="text-accent-gold">Fair Play</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to know about playing Ludo and winning on Adidi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#standard-rules" className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">📜 Standard Ludo Rules</h3>
              <p className="text-gray-300 text-sm">Learn the classic game of Ludo</p>
            </a>
            <a href="#adidi-rules" className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">🎮 Adidi Ludo Rules</h3>
              <p className="text-gray-300 text-sm">Betting rules and game formats</p>
            </a>
            <a href="#fair-play" className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">⚖️ Fair Play Policy</h3>
              <p className="text-gray-300 text-sm">Our commitment to fairness</p>
            </a>
            <a href="#responsible-gaming" className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">🛡️ Responsible Gaming</h3>
              <p className="text-gray-300 text-sm">Play safely and responsibly</p>
            </a>
          </div>
        </div>
      </section>

      {/* Standard Ludo Rules */}
      <section id="standard-rules" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">📜</span> Standard Ludo Rules
            </h2>

            {/* Game Objective */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">🎯 Game Objective</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                The goal of Ludo is to move all four of your tokens from the starting area to the home area before your opponents do. The first player to get all their tokens home wins the game!
              </p>
            </div>

            {/* Game Setup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">🎲 Game Setup</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                  <span><strong>2-4 Players:</strong> Each player chooses a color (Red, Blue, Green, or Yellow)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Starting Position:</strong> All 4 tokens start in your colored yard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                  <span><strong>The Die:</strong> A single six-sided die determines your moves</span>
                </li>
              </ul>
            </div>

            {/* How to Play */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">🎮 How to Play</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">1. Entering the Board</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Roll a <strong>6</strong> to move a token from your yard to the starting square</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>After rolling a 6, you get another turn</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>You can bring out multiple tokens by rolling 6s</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">2. Moving Your Tokens</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Move clockwise around the board based on your die roll</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>You must use the exact number rolled - no partial moves</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>If you have multiple tokens on the board, choose which one to move</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">3. Capturing Opponents</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>If you land on a square occupied by an opponent's token, you <strong>capture</strong> it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Captured tokens return to their yard and must roll a 6 to re-enter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Capturing gives you a bonus turn!</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">4. Safe Squares ⭐</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Marked with a star symbol</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Tokens on safe squares cannot be captured</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>Multiple tokens can occupy the same safe square</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">5. Reaching Home</h4>
                  <ul className="space-y-2 text-gray-200 ml-6">
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>After completing the circuit, enter your colored home column</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>You must roll the exact number to enter the home triangle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-magenta mr-2">•</span>
                      <span>First player to get all 4 tokens home wins!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Rules */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">✨ Special Rules</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-accent-magenta/20 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-accent-magenta" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Rolling Three 6s</h4>
                    <p className="text-gray-300">If you roll three consecutive 6s, your turn ends immediately and the last token moved returns to the yard.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-cyan/20 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Blockade</h4>
                    <p className="text-gray-300">If you have two tokens on the same square (not a safe square), no opponent can pass that blockade.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-orange/20 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">No Legal Move</h4>
                    <p className="text-gray-300">If you cannot make a legal move with your die roll, your turn passes to the next player.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adidi Ludo Specific Rules */}
      <section id="adidi-rules" className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">🎮</span> Adidi Ludo Betting Rules
            </h2>

            {/* Game Modes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">🏆 Game Modes & Entry Fees</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-dark/50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 text-accent-cyan mr-2" />
                    <h4 className="text-xl font-semibold text-white">Quick Match</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Entry: ₦100 - ₦5,000</li>
                    <li>• Duration: 10-15 minutes</li>
                    <li>• Winner Takes: 85% of pot</li>
                    <li>• Platform Fee: 15%</li>
                  </ul>
                </div>

                <div className="bg-primary-dark/50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Trophy className="w-6 h-6 text-accent-gold mr-2" />
                    <h4 className="text-xl font-semibold text-white">Tournament</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Entry: ₦500 - ₦10,000</li>
                    <li>• Duration: 30-60 minutes</li>
                    <li>• Prize Pool: Guaranteed ₦50K+</li>
                    <li>• Top 3 Winners Paid</li>
                  </ul>
                </div>

                <div className="bg-primary-dark/50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-accent-magenta mr-2" />
                    <h4 className="text-xl font-semibold text-white">High Stakes</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Entry: ₦5,000 - ₦100,000</li>
                    <li>• Duration: 15-20 minutes</li>
                    <li>• Winner Takes: 90% of pot</li>
                    <li>• For experienced players</li>
                  </ul>
                </div>

                <div className="bg-primary-dark/50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-accent-orange mr-2" />
                    <h4 className="text-xl font-semibold text-white">Private Room</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Custom Entry Amount</li>
                    <li>• Invite Friends Only</li>
                    <li>• Set Your Own Rules</li>
                    <li>• Platform Fee: 10%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Time Limits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">⏱️ Time Limits</h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Turn Timer:</strong> Each player has 30 seconds to complete their turn
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Warning:</strong> You'll receive a 10-second warning before time expires
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Auto-Move:</strong> If time expires, the system will automatically make the best available move
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-cyan mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Maximum Game Time:</strong> Quick matches must complete within 20 minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Disconnection Policy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">📱 Disconnection & Reconnection</h3>
              <div className="space-y-4">
                <div className="bg-primary-dark/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">✅ Fair Disconnection Policy</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• You have <strong>60 seconds</strong> to reconnect if disconnected</li>
                    <li>• Game automatically pauses for all players</li>
                    <li>• Timer shows remaining reconnection time</li>
                    <li>• Upon reconnection, game resumes from exact position</li>
                  </ul>
                </div>
                <div className="bg-primary-dark/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">⚠️ Failed Reconnection</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• If you fail to reconnect within 60 seconds, you forfeit the game</li>
                    <li>• Your entry fee is added to the prize pool</li>
                    <li>• Remaining players continue the game normally</li>
                    <li>• Exception: If disconnection was due to server issue, entry fee is refunded</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tournament Rules */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">🏆 Tournament Specific Rules</h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-start">
                  <Trophy className="w-5 h-5 text-accent-gold mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Multi-Round Format:</strong> Win multiple games to advance through rounds
                  </div>
                </div>
                <div className="flex items-start">
                  <Trophy className="w-5 h-5 text-accent-gold mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Prize Distribution:</strong> 1st Place: 60%, 2nd Place: 25%, 3rd Place: 15%
                  </div>
                </div>
                <div className="flex items-start">
                  <Trophy className="w-5 h-5 text-accent-gold mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Minimum Players:</strong> Tournament starts when minimum 8 players registered
                  </div>
                </div>
                <div className="flex items-start">
                  <Trophy className="w-5 h-5 text-accent-gold mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Late Registration:</strong> Closed 2 minutes after tournament begins
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fair Play Policy */}
      <section id="fair-play" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">⚖️</span> Fair Play Policy
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">🛡️ Our Commitment to Fairness</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Shield className="w-6 h-6 text-accent-cyan mr-2" />
                    Random Number Generation
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    All dice rolls use certified Random Number Generator (RNG) technology, audited by independent third parties. Every roll is completely random and cannot be predicted or manipulated by any player or the platform.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Shield className="w-6 h-6 text-accent-cyan mr-2" />
                    Anti-Cheating Measures
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Advanced AI detection for suspicious patterns</li>
                    <li>• Real-time monitoring of all games</li>
                    <li>• Automatic flagging of unusual activity</li>
                    <li>• Manual review by our Fair Play team</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 text-accent-magenta mr-2" />
                    Prohibited Activities
                  </h4>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-300">
                      <li>❌ Using bots or automated tools</li>
                      <li>❌ Colluding with other players</li>
                      <li>❌ Creating multiple accounts</li>
                      <li>❌ Exploiting bugs or glitches</li>
                      <li>❌ Account sharing</li>
                      <li>❌ Deliberate disconnections to avoid losses</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 text-accent-orange mr-2" />
                    Penalties for Violations
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">First Offense:</p>
                      <p className="text-gray-300">Warning + 7-day suspension + forfeiture of winnings</p>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Second Offense:</p>
                      <p className="text-gray-300">30-day suspension + permanent record on account</p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-1">Third Offense:</p>
                      <p className="text-gray-300">Permanent account termination + potential legal action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">🤝 Dispute Resolution</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  If you believe a game was unfair or have concerns about another player's behavior:
                </p>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-accent-cyan text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-white">Report Immediately:</strong> Use the in-game report button within 24 hours of the incident
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent-cyan text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-white">Provide Details:</strong> Include game ID, player names, and description of the issue
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent-cyan text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-white">Investigation:</strong> Our team reviews all game logs and recordings within 48 hours
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent-cyan text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-white">Resolution:</strong> You'll receive a detailed response with our decision and any actions taken
                    </div>
                  </li>
                </ol>
                <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg p-4 mt-6">
                  <p className="text-white font-semibold mb-2">📧 Contact Fair Play Team</p>
                  <p className="text-gray-300">fairplay@adidiludo.com • Response time: 24-48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section id="responsible-gaming" className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">🛡️</span> Responsible Gaming
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">🎮 Play Smart, Play Safe</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Set Your Limits</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Daily deposit limits to control spending</li>
                    <li>• Loss limits to protect your bankroll</li>
                    <li>• Session time reminders</li>
                    <li>• Cooling-off periods (24 hours to 30 days)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Warning Signs</h4>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-gray-300 mb-3">Seek help if you notice:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Spending more than you can afford</li>
                      <li>• Chasing losses</li>
                      <li>• Neglecting work or family</li>
                      <li>• Borrowing money to play</li>
                      <li>• Feeling anxious when not playing</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Self-Exclusion</h4>
                  <p className="text-gray-300 mb-3">
                    If you need a break, you can self-exclude for 1 month, 3 months, 6 months, or permanently. During this time:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Your account will be locked</li>
                    <li>• You cannot deposit or play</li>
                    <li>• You can withdraw existing balance</li>
                    <li>• Marketing communications will stop</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Age Verification</h4>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">🔞 18+ Only</p>
                    <p className="text-gray-300">
                      Adidi Ludo is strictly for adults aged 18 and above. We use government ID verification to ensure compliance. Underage gambling is illegal and will result in immediate account termination.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Get Help</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary-dark/50 rounded-lg p-4">
                      <p className="text-white font-semibold mb-2">📞 National Helpline</p>
                      <p className="text-accent-cyan text-lg">0800-GAMBLING</p>
                      <p className="text-gray-400 text-sm">Free & Confidential</p>
                    </div>
                    <div className="bg-primary-dark/50 rounded-lg p-4">
                      <p className="text-white font-semibold mb-2">💬 Support Chat</p>
                      <p className="text-accent-cyan text-lg">Available 24/7</p>
                      <p className="text-gray-400 text-sm">support@adidiludo.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Mode */}
            <div className="bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 New to Ludo? Try Practice Mode!</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Learn the game without risking money. Practice Mode lets you play against AI opponents and master strategies before entering real-money games.
              </p>
              <button className="bg-gradient-to-r from-accent-cyan to-accent-magenta text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                Start Practicing Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Play Fair & Win Big?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download Adidi Ludo now and join 100,000+ Nigerian players winning daily!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-accent-magenta to-accent-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
                📱 Download on iOS
              </button>
              <button className="bg-gradient-to-r from-accent-cyan to-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
                🤖 Download on Android
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
