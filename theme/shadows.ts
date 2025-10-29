/**
 * Shadow Utilities
 * Text shadows and elevation for better visibility and depth
 */

import {TextStyle, ViewStyle} from 'react-native';

/**
 * Text Shadow Styles for Better Readability
 * Use these to make text visible on dark backgrounds
 */
export const textShadows = {
  // Subtle shadow for light emphasis
  subtle: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  } as TextStyle,

  // Medium shadow for standard readability
  medium: {
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
  } as TextStyle,

  // Strong shadow for maximum visibility
  strong: {
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 6,
  } as TextStyle,

  // Glow effect for titles and important text
  glow: {
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  } as TextStyle,

  // Gold glow for premium elements
  goldGlow: {
    textShadowColor: 'rgba(255, 215, 0, 0.6)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 8,
  } as TextStyle,

  // Orange glow for CTAs
  orangeGlow: {
    textShadowColor: 'rgba(255, 146, 52, 0.6)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 8,
  } as TextStyle,

  // Neon glow for special effects
  neonMagenta: {
    textShadowColor: 'rgba(233, 30, 140, 0.8)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 12,
  } as TextStyle,
};

/**
 * View/Card Shadows for Elevation
 */
export const viewShadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  } as ViewStyle,

  medium: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  } as ViewStyle,

  large: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 6,
  } as ViewStyle,
};

export default {textShadows, viewShadows};
