export interface Winner {
  id: number;
  name: string;
  age?: number;
  location: string;
  amount: number;
  gameType: 'Quick Match' | 'Tournament' | 'High Stakes' | 'Private Room';
  time: string;
  timeAgo: number; // minutes ago
  isRepeat: boolean;
  repeatCount?: number;
  totalWinnings?: number;
  quote?: string;
}

// Generate realistic Nigerian names and locations
const nigerianNames = [
  'Chidi O.', 'Amara N.', 'Emeka I.', 'Fatima A.', 'Tunde B.',
  'Ngozi M.', 'Adebayo S.', 'Blessing K.', 'Ibrahim H.', 'Chioma P.',
  'Yusuf M.', 'Ada U.', 'Kunle R.', 'Zainab L.', 'Obinna C.',
  'Hauwa I.', 'Segun F.', 'Chidinma E.', 'Musa A.', 'Ifeanyi N.',
  'Aisha B.', 'Babatunde L.', 'Chiamaka O.', 'Usman K.', 'Nneka W.',
  'Abdullahi S.', 'Chukwudi M.', 'Halima Y.', 'Olusegun D.', 'Ebere G.',
  'Aliyu T.', 'Chinonso V.', 'Sadiya R.', 'Folake A.', 'Ikechukwu P.',
  'Zara M.', 'Taiwo J.', 'Adaeze K.', 'Mohammed F.', 'Uchenna B.',
  'Bintu L.', 'Kayode W.', 'Ifeoma S.', 'Hassan D.', 'Amarachi H.',
  'Lukman O.', 'Nkechi R.', 'Suleiman A.', 'Obiageli M.', 'Bashir K.'
];

const locations = [
  'Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan',
  'Benin City', 'Kaduna', 'Enugu', 'Jos', 'Ilorin',
  'Aba', 'Onitsha', 'Warri', 'Calabar', 'Uyo',
  'Maiduguri', 'Zaria', 'Akure', 'Osogbo', 'Abeokuta'
];

const gameTypes: Winner['gameType'][] = ['Quick Match', 'Tournament', 'High Stakes', 'Private Room'];

// Generate time descriptions
const getTimeDescription = (minutesAgo: number): string => {
  if (minutesAgo < 1) return 'Just now';
  if (minutesAgo < 60) return `${minutesAgo} min ago`;
  const hours = Math.floor(minutesAgo / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

// Generate realistic prize amounts
const generatePrizeAmount = (): number => {
  const random = Math.random();
  if (random < 0.5) return Math.floor(Math.random() * 4500) + 500; // ₦500-₦5,000 (50%)
  if (random < 0.8) return Math.floor(Math.random() * 15000) + 5000; // ₦5,000-₦20,000 (30%)
  if (random < 0.95) return Math.floor(Math.random() * 80000) + 20000; // ₦20,000-₦100,000 (15%)
  return Math.floor(Math.random() * 900000) + 100000; // ₦100,000-₦1,000,000 (5%)
};

// Generate 80 recent winners
export const recentWinners: Winner[] = Array.from({ length: 80 }, (_, i) => {
  const minutesAgo = Math.floor(Math.random() * 480); // Last 8 hours
  const amount = generatePrizeAmount();
  const isRepeat = Math.random() > 0.7; // 30% are repeat winners
  const repeatCount = isRepeat ? Math.floor(Math.random() * 20) + 2 : undefined;
  const totalWinnings = isRepeat ? amount * (repeatCount || 1) + Math.floor(Math.random() * 50000) : undefined;

  return {
    id: i + 1,
    name: nigerianNames[Math.floor(Math.random() * nigerianNames.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    amount,
    gameType: gameTypes[Math.floor(Math.random() * gameTypes.length)],
    time: getTimeDescription(minutesAgo),
    timeAgo: minutesAgo,
    isRepeat,
    repeatCount,
    totalWinnings,
  };
}).sort((a, b) => a.timeAgo - b.timeAgo); // Sort by most recent first

// Top 10 Today's Champions with detailed info
export const todaysChampions: (Winner & { age: number; quote: string })[] = [
  {
    id: 101,
    name: 'Tunde B.',
    age: 42,
    location: 'Lagos',
    amount: 1000000,
    gameType: 'Tournament',
    time: '3 hours ago',
    timeAgo: 180,
    isRepeat: true,
    repeatCount: 15,
    totalWinnings: 2500000,
    quote: 'The biggest win of my life! I\'ve been playing since childhood, and it finally paid off!',
  },
  {
    id: 102,
    name: 'Emeka I.',
    age: 35,
    location: 'Port Harcourt',
    amount: 500000,
    gameType: 'High Stakes',
    time: '1 hour ago',
    timeAgo: 60,
    isRepeat: true,
    repeatCount: 12,
    totalWinnings: 1200000,
    quote: 'Consistency is key! This is my 12th major win this month.',
  },
  {
    id: 103,
    name: 'Chidi O.',
    age: 28,
    location: 'Lagos',
    amount: 250000,
    gameType: 'Tournament',
    time: '2 hours ago',
    timeAgo: 120,
    isRepeat: true,
    repeatCount: 25,
    totalWinnings: 800000,
    quote: 'From ₦500 to ₦250K! Adidi Ludo changed my life completely.',
  },
  {
    id: 104,
    name: 'Amara N.',
    age: 24,
    location: 'Abuja',
    amount: 150000,
    gameType: 'Tournament',
    time: '4 hours ago',
    timeAgo: 240,
    isRepeat: true,
    repeatCount: 8,
    totalWinnings: 350000,
    quote: 'Paying my school fees with my winnings! Best decision ever.',
  },
  {
    id: 105,
    name: 'Adebayo S.',
    age: 31,
    location: 'Ibadan',
    amount: 100000,
    gameType: 'High Stakes',
    time: '30 min ago',
    timeAgo: 30,
    isRepeat: false,
    quote: 'My first major win! Can\'t believe this is real!',
  },
  {
    id: 106,
    name: 'Fatima A.',
    age: 22,
    location: 'Kano',
    amount: 75000,
    gameType: 'Tournament',
    time: '5 hours ago',
    timeAgo: 300,
    isRepeat: true,
    repeatCount: 6,
    totalWinnings: 180000,
    quote: 'Saving for my master\'s degree with these wins!',
  },
  {
    id: 107,
    name: 'Kunle R.',
    age: 29,
    location: 'Lagos',
    amount: 50000,
    gameType: 'Quick Match',
    time: '1 hour ago',
    timeAgo: 60,
    isRepeat: true,
    repeatCount: 10,
    totalWinnings: 250000,
    quote: 'Quick matches, quick money! Love this platform.',
  },
  {
    id: 108,
    name: 'Ngozi M.',
    age: 26,
    location: 'Enugu',
    amount: 45000,
    gameType: 'High Stakes',
    time: '2 hours ago',
    timeAgo: 120,
    isRepeat: false,
    quote: 'Never thought I could win this much! Thank you Adidi!',
  },
  {
    id: 109,
    name: 'Ibrahim H.',
    age: 38,
    location: 'Kaduna',
    amount: 35000,
    gameType: 'Tournament',
    time: '6 hours ago',
    timeAgo: 360,
    isRepeat: true,
    repeatCount: 7,
    totalWinnings: 120000,
    quote: 'Tournaments are my specialty. Consistency pays off!',
  },
  {
    id: 110,
    name: 'Chioma P.',
    age: 27,
    location: 'Abuja',
    amount: 30000,
    gameType: 'Quick Match',
    time: '3 hours ago',
    timeAgo: 180,
    isRepeat: true,
    repeatCount: 5,
    totalWinnings: 85000,
    quote: 'Side hustle that actually works! Making ₦30K+ daily.',
  },
];

// Hall of Champions (Repeat winners with 10+ wins)
export const hallOfChampions: (Winner & { age: number; winRate: number; gamesPlayed: number })[] = [
  {
    id: 201,
    name: 'Chidi O.',
    age: 28,
    location: 'Lagos',
    amount: 800000,
    gameType: 'Tournament',
    time: 'All time',
    timeAgo: 0,
    isRepeat: true,
    repeatCount: 25,
    totalWinnings: 800000,
    winRate: 68,
    gamesPlayed: 150,
  },
  {
    id: 202,
    name: 'Emeka I.',
    age: 35,
    location: 'Port Harcourt',
    amount: 1200000,
    gameType: 'High Stakes',
    time: 'All time',
    timeAgo: 0,
    isRepeat: true,
    repeatCount: 18,
    totalWinnings: 1200000,
    winRate: 72,
    gamesPlayed: 200,
  },
  {
    id: 203,
    name: 'Tunde B.',
    age: 42,
    location: 'Lagos',
    amount: 2500000,
    gameType: 'Tournament',
    time: 'All time',
    timeAgo: 0,
    isRepeat: true,
    repeatCount: 15,
    totalWinnings: 2500000,
    winRate: 65,
    gamesPlayed: 180,
  },
  {
    id: 204,
    name: 'Kunle R.',
    age: 29,
    location: 'Lagos',
    amount: 450000,
    gameType: 'Quick Match',
    time: 'All time',
    timeAgo: 0,
    isRepeat: true,
    repeatCount: 35,
    totalWinnings: 450000,
    winRate: 62,
    gamesPlayed: 280,
  },
  {
    id: 205,
    name: 'Amara N.',
    age: 24,
    location: 'Abuja',
    amount: 350000,
    gameType: 'Tournament',
    time: 'All time',
    timeAgo: 0,
    isRepeat: true,
    repeatCount: 12,
    totalWinnings: 350000,
    winRate: 58,
    gamesPlayed: 120,
  },
];

// Statistics
export const winnersStats = {
  totalPrizesToday: 2547000,
  activePlayersNow: 15234,
  gamesToday: 45892,
  biggestWinToday: 1000000,
  averageWin: 12500,
  totalWinnersToday: 8945,
};
