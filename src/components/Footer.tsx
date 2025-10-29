import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-gold">
                Adidi Ludo
              </div>
            </div>
            <p className="text-gray-400 mb-3 leading-relaxed">
              Nigeria's #1 Ludo betting platform where skills meet rewards.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              <strong className="text-accent-gold">Our Mission:</strong> Making every Nigerian a winner. We're building a platform where your Ludo skills are rewarded, your success is celebrated, and winning is accessible to everyone.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-magenta transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-cyan transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  How to Play
                </Link>
              </li>
              <li>
                <Link to="/game-rules" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Game Rules
                </Link>
              </li>
              <li>
                <Link to="/winners" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Winners Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  Fair Play Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-magenta transition-colors duration-200">
                  KYC Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <a
                    href="mailto:support@adidiludo.ng"
                    className="text-white hover:text-accent-cyan transition-colors duration-200"
                  >
                    support@adidiludo.ng
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-accent-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <a
                    href="tel:+2341234567890"
                    className="text-white hover:text-accent-orange transition-colors duration-200"
                  >
                    +234 123 456 7890
                  </a>
                </div>
              </li>
              <li>
                <div className="text-sm text-gray-400 mb-2">Support Hours</div>
                <div className="text-white">24/7 Available</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Partners */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-center text-sm text-gray-400 mb-4">Trusted Payment Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white/5 px-6 py-3 rounded-lg">
              <span className="font-bold text-accent-orange">Paystack</span>
            </div>
            <div className="bg-white/5 px-6 py-3 rounded-lg">
              <span className="font-bold text-accent-cyan">Flutterwave</span>
            </div>
            <div className="bg-white/5 px-6 py-3 rounded-lg">
              <span className="font-bold text-accent-gold">Nigerian Banks</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Adidi Ludo. All rights reserved. Made with ❤️ for Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>🔞 18+ Only</span>
              <span>•</span>
              <span>Licensed & Regulated</span>
              <span>•</span>
              <span>Play Responsibly</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Disclaimer:</strong> Adidi Ludo is a skill-based gaming platform. Playing involves risk.
            Please play responsibly and within your means. Gambling can be addictive.
            If you need help, contact the National Responsible Gaming Helpline.
          </p>
        </div>
      </div>
    </footer>
  );
};
