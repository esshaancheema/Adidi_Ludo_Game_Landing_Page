export interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  amount: string;
  amountValue: number;
  quote: string;
  story: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Chidi O.',
    age: 28,
    location: 'Lagos',
    amount: '₦200,000+',
    amountValue: 200000,
    quote: 'Adidi Ludo changed my life!',
    story: 'I started with just ₦500 and won ₦5,000 in my first week! Now I play daily and have won over ₦200,000. I paid my rent with my winnings. This platform is real and life-changing!',
  },
  {
    id: 2,
    name: 'Amara N.',
    age: 24,
    location: 'Abuja',
    amount: '₦50,000+',
    amountValue: 50000,
    quote: 'Best decision I ever made',
    story: 'As a student, every Naira counts. I\'ve won ₦50,000 in tournaments and it\'s helping me through school. The best part? It\'s all about skill, not luck! My family is so proud.',
  },
  {
    id: 3,
    name: 'Emeka I.',
    age: 35,
    location: 'Port Harcourt',
    amount: '₦500,000+',
    amountValue: 500000,
    quote: 'My side income is now bigger than my salary',
    story: 'I\'m a small business owner and Adidi Ludo has become my main side income. ₦500,000 in 3 months! I\'ve expanded my business with the winnings. My wife couldn\'t believe it at first!',
  },
  {
    id: 4,
    name: 'Fatima A.',
    age: 22,
    location: 'Kano',
    amount: '₦25,000+',
    amountValue: 25000,
    quote: 'From skeptic to believer',
    story: 'I was skeptical at first, but after winning ₦10,000 in my second game, I was hooked! Now I\'m saving for my master\'s degree with my winnings. Every day is a new opportunity!',
  },
  {
    id: 5,
    name: 'Tunde B.',
    age: 42,
    location: 'Lagos',
    amount: '₦1,000,000',
    amountValue: 1000000,
    quote: 'The biggest win of my life!',
    story: '₦1,000,000 in a single tournament! I couldn\'t believe my eyes. I\'ve been playing Ludo since childhood, and now my skills finally paid off. Adidi Ludo is 100% legit and life-changing!',
  },
];
