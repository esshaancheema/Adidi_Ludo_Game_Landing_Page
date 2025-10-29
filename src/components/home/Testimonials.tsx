import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-magenta rounded-full blur-3xl"
        />
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
            Real stories from real winners - your success story starts today
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-gradient-card p-8 md:p-12 rounded-3xl border-2 border-accent-gold/50 shadow-2xl"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-5xl text-accent-gold/30 mb-6" />

                {/* Main Quote */}
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-gold mb-6 leading-relaxed">
                  "{currentTestimonial.quote}"
                </p>

                {/* Story */}
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                  {currentTestimonial.story}
                </p>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-magenta rounded-full flex items-center justify-center text-2xl font-bold">
                      {currentTestimonial.name.charAt(0)}
                    </div>

                    {/* Name & Location */}
                    <div>
                      <div className="font-bold text-xl">
                        {currentTestimonial.name}, {currentTestimonial.age}
                      </div>
                      <div className="flex items-center gap-2 text-accent-cyan">
                        <FaMapMarkerAlt />
                        <span>{currentTestimonial.location}, Nigeria</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Won */}
                  <div className="bg-primary-dark px-6 py-4 rounded-xl border border-accent-gold/30">
                    <div className="text-sm text-gray-400 mb-1">Total Winnings</div>
                    <div className="text-3xl font-bold text-accent-gold">
                      {currentTestimonial.amount}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-primary-light hover:bg-accent-magenta w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-primary-light hover:bg-accent-magenta w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-accent-gold'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { value: '100K+', label: 'Happy Winners' },
              { value: '₦50M+', label: 'Prizes Paid' },
              { value: '₦1M', label: 'Biggest Win' },
              { value: '4.8★', label: 'User Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-primary-light p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
