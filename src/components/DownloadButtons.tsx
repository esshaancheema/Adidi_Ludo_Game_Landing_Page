import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

interface DownloadButtonsProps {
  variant?: 'large' | 'small';
  className?: string;
}

export const DownloadButtons = ({ variant = 'large', className = '' }: DownloadButtonsProps) => {
  const isLarge = variant === 'large';

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* iOS App Store Button */}
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center justify-center gap-3
          bg-black text-white rounded-xl
          transition-all duration-300
          hover:shadow-xl hover:shadow-accent-cyan/30
          ${isLarge ? 'px-8 py-4' : 'px-6 py-3'}
        `}
      >
        <FaApple className={isLarge ? 'text-4xl' : 'text-3xl'} />
        <div className="text-left">
          <div className={`text-xs ${isLarge ? 'text-gray-300' : 'text-gray-400'}`}>
            Download on the
          </div>
          <div className={`font-semibold ${isLarge ? 'text-xl' : 'text-lg'}`}>
            App Store
          </div>
        </div>
      </motion.a>

      {/* Google Play Store Button */}
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center justify-center gap-3
          bg-black text-white rounded-xl
          transition-all duration-300
          hover:shadow-xl hover:shadow-accent-cyan/30
          ${isLarge ? 'px-8 py-4' : 'px-6 py-3'}
        `}
      >
        <FaGooglePlay className={isLarge ? 'text-3xl' : 'text-2xl'} />
        <div className="text-left">
          <div className={`text-xs ${isLarge ? 'text-gray-300' : 'text-gray-400'}`}>
            GET IT ON
          </div>
          <div className={`font-semibold ${isLarge ? 'text-xl' : 'text-lg'}`}>
            Google Play
          </div>
        </div>
      </motion.a>
    </div>
  );
};
