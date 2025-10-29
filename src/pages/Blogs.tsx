import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'From Zero to Hero: How Chidi Won ₦200,000',
    excerpt: 'Learn the exact strategy that took one player from beginner to top winner in just 3 months...',
    category: 'Winner Stories',
    date: 'December 15, 2024',
    author: 'Adidi Ludo Team',
    image: 'https://via.placeholder.com/400x250/3D1A4D/FFD700?text=Winner+Story',
  },
  {
    id: 2,
    title: '5 Ludo Strategies That Actually Work',
    excerpt: 'Master these proven tactics to increase your winning chances by 50% and dominate the game...',
    category: 'Strategy',
    date: 'December 12, 2024',
    author: 'Pro Player Tips',
    image: 'https://via.placeholder.com/400x250/3D1A4D/E91E8C?text=Strategy+Guide',
  },
  {
    id: 3,
    title: 'Managing Your Bankroll: Smart Play = Big Wins',
    excerpt: 'Professional tips on how to play smart and maximize your earnings while minimizing risk...',
    category: 'Tips & Tricks',
    date: 'December 10, 2024',
    author: 'Financial Expert',
    image: 'https://via.placeholder.com/400x250/3D1A4D/FF9234?text=Bankroll+Tips',
  },
  {
    id: 4,
    title: 'New Player Success Stories: Your Turn is Coming',
    excerpt: 'Meet 5 Adidi Ludo winners who started just like you and are now earning ₦50K+ monthly...',
    category: 'Winner Stories',
    date: 'December 8, 2024',
    author: 'Community Team',
    image: 'https://via.placeholder.com/400x250/3D1A4D/00D9FF?text=Success+Stories',
  },
  {
    id: 5,
    title: 'Tournament Mode: How to Win ₦1M Prize Pool',
    excerpt: 'Exclusive tips from tournament champions on dominating high-stakes competitions...',
    category: 'Tournament Guide',
    date: 'December 5, 2024',
    author: 'Champion Players',
    image: 'https://via.placeholder.com/400x250/3D1A4D/FFD700?text=Tournament+Guide',
  },
  {
    id: 6,
    title: '10 Tips for Ludo Beginners',
    excerpt: 'Start your winning journey right with these essential tips every new player should know...',
    category: 'Tips & Tricks',
    date: 'December 1, 2024',
    author: 'Beginner Guide',
    image: 'https://via.placeholder.com/400x250/3D1A4D/06D6A0?text=Beginner+Tips',
  },
];

export const Blogs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adidi Ludo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tips, Strategies, Winner Stories & Updates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-primary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-card rounded-2xl overflow-hidden border border-white/10 hover:border-accent-magenta/50 transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent-magenta px-3 py-1 rounded-lg text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-accent-cyan" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-accent-orange" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <a
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-2 text-accent-magenta font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <FaArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-button text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all"
            >
              Load More Posts
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card p-8 md:p-12 rounded-3xl border-2 border-accent-gold text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of winners and start your journey today
            </p>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-button text-white font-bold px-10 py-4 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300 text-lg"
            >
              Download Adidi Ludo Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
