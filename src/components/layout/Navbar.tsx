import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaApple, FaGooglePlay } from 'react-icons/fa';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-dark/95 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">AL</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-gold">
                  Adidi Ludo
                </div>
                <div className="text-xs text-gray-400">Play. Win. Celebrate.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent-magenta ${
                    isActive(item.path)
                      ? 'text-accent-magenta'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-gradient-button text-white font-semibold px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300"
            >
              Download App
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white text-2xl p-2 hover:text-accent-magenta transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-primary-dark shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 text-white text-2xl hover:text-accent-magenta transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>

                {/* Logo */}
                <Link
                  to="/"
                  className="flex items-center gap-3 mb-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AL</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-gold">
                      Adidi Ludo
                    </div>
                    <div className="text-xs text-gray-400">Play. Win. Celebrate.</div>
                  </div>
                </Link>

                {/* Navigation Links */}
                <nav className="space-y-2 mb-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-accent-magenta text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Download Buttons */}
                <div className="space-y-3 pb-6">
                  <div className="text-sm font-semibold text-gray-400 mb-3">
                    Download App
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                  >
                    <FaApple className="text-2xl" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                  >
                    <FaGooglePlay className="text-xl" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
};
