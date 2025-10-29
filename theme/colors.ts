/**
 * ADIDI Ludo Color Palette
 * Based on Deep Plum Burgundy theme with vibrant accents
 */

export const colors = {
  // Primary Colors (Burgundy/Purple Theme)
  primary: {
    main: '#3D1A4D', // Deep Plum Burgundy - Main background
    dark: '#2A0F3D', // Darker variant for depth
    light: '#4D2560', // Lighter variant for highlights
    gradient: ['#3D1A4D', '#2A0F3D'], // Background gradients
  },

  // Accent Colors
  accent: {
    magenta: '#E91E8C', // CTAs, highlights, active states
    orange: '#FF9234', // Primary buttons, badges, focus states
    gold: '#FFD700', // Coins, currency, premium features
    cyan: '#00D9FF', // Links, info elements
  },

  // Ludo Game Colors (Standard Board Colors)
  ludo: {
    blue: '#0052CC', // Player 1
    red: '#E63946', // Player 2
    yellow: '#FFD60A', // Player 3
    green: '#06D6A0', // Player 4
    path: '#FFFFFF', // Board path tiles
    safe: '#F0F0F0', // Safe zone tiles
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },

  // Semantic Colors
  semantic: {
    success: '#06D6A0',
    error: '#E63946',
    warning: '#FFD60A',
    info: '#00D9FF',
  },

  // UI Element Colors
  ui: {
    background: '#3D1A4D', // Main screen background
    cardBackground: '#4D2560', // Card backgrounds
    cardBackgroundLight: '#5A2E6E', // Lighter card variant
    border: '#6A3A7A', // Borders and dividers
    borderLight: '#8A5A9A', // Lighter borders
    disabled: '#6B7280', // Disabled states
    placeholder: '#9CA3AF', // Placeholder text
    shadow: 'rgba(0, 0, 0, 0.3)', // Shadow color
  },

  // Text Colors
  text: {
    primary: '#FFFFFF', // Primary text (white)
    secondary: '#E5E7EB', // Secondary text (light gray)
    tertiary: '#D1D5DB', // Tertiary text
    disabled: '#9CA3AF', // Disabled text
    inverse: '#1F2937', // Text on light backgrounds
    accent: '#E91E8C', // Accent text
  },

  // Overlay Colors
  overlay: {
    dark: 'rgba(42, 15, 61, 0.9)', // Dark overlay
    light: 'rgba(77, 37, 96, 0.8)', // Light overlay
    blur: 'rgba(61, 26, 77, 0.7)', // Blur overlay
  },

  // Gradient Definitions
  gradients: {
    primary: ['#3D1A4D', '#2A0F3D'],
    card: ['#4D2560', '#3D1A4D'],
    button: ['#FF9234', '#E67F1D'],
    magenta: ['#E91E8C', '#C7166F'],
    gold: ['#FFD700', '#FFA500'],
    gameBoard: ['#2A0F3D', '#3D1A4D', '#4D2560'],
  },

  // Transparent Colors
  transparent: 'transparent',
} as const;

// Type for color keys
export type ColorKey = keyof typeof colors;

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Handle hex colors
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};

export default colors;
