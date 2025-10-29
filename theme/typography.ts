/**
 * ADIDI Ludo Typography System
 * Font styles, sizes, and weights
 */

export const typography = {
  // Font Families
  fontFamily: {
    regular: 'System', // Will be replaced with custom fonts
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },

  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },

  // Font Weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
  },

  // Text Styles (Predefined combinations)
  heading1: {
    fontSize: 36,
    fontWeight: '700' as const,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  heading2: {
    fontSize: 30,
    fontWeight: '700' as const,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  heading3: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  heading4: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400' as const,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 1.5,
    letterSpacing: 0.5,
  },
  button: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 1,
    letterSpacing: 0.5,
  },
  buttonSmall: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 1,
    letterSpacing: 0.5,
  },
} as const;

export default typography;
