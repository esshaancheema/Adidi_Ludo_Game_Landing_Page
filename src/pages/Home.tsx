import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { QuickCTA } from '../components/home/QuickCTA';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { SecurityTrust } from '../components/SecurityTrust';
import { PaymentMethods } from '../components/PaymentMethods';
import { FinalCTA } from '../components/FinalCTA';

export const Home = () => {
  return (
    <>
      {/* 1. Hero Section - Perfect as is */}
      <Hero />

      {/* 2. Trust Section - Why 100,000+ Nigerians Choose Adidi Ludo */}
      <Benefits />

      {/* 3. Start Winning CTA - Quick conversion push */}
      <QuickCTA />

      {/* 4. How to Play - 3-step process */}
      <HowItWorks />

      {/* 5. Your Path to Daily Wins - Testimonials Carousel */}
      <Testimonials />

      {/* 6. Security & Trust - Keep existing */}
      <SecurityTrust />

      {/* 7. Payment Methods - Deposits & Withdrawals */}
      <PaymentMethods />

      {/* 8. Ready to Turn Your Ludo Skills? - Final CTA */}
      <FinalCTA />
    </>
  );
};
