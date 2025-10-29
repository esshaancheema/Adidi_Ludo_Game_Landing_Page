/**
 * Shadow Utilities
 * Text shadows and elevation for better visibility and depth
 */

import { CSSProperties } from 'react';

/**
 * Text Shadow Styles for Better Readability
 * Use these to make text visible on dark backgrounds
 */
export const textShadows = {
  // Subtle shadow for light emphasis
  subtle: {
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
  } as CSSProperties,

  // Medium shadow for standard readability
  medium: {
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
  } as CSSProperties,

  // Strong shadow for maximum visibility
  strong: {
    textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)',
  } as CSSProperties,

  // Glow effect for titles and important text
  glow: {
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  } as CSSProperties,

  // Gold glow for premium elements
  goldGlow: {
    textShadow: '0 0 8px rgba(255, 215, 0, 0.6)',
  } as CSSProperties,

  // Orange glow for CTAs
  orangeGlow: {
    textShadow: '0 0 8px rgba(255, 146, 52, 0.6)',
  } as CSSProperties,

  // Neon glow for special effects
  neonMagenta: {
    textShadow: '0 0 12px rgba(233, 30, 140, 0.8)',
  } as CSSProperties,
};

/**
 * View/Card Shadows for Elevation
 */
export const viewShadows = {
  small: {
    boxShadow: '0 2px 3.84px rgba(0, 0, 0, 0.25)',
  } as CSSProperties,

  medium: {
    boxShadow: '0 4px 4.65px rgba(0, 0, 0, 0.3)',
  } as CSSProperties,

  large: {
    boxShadow: '0 6px 7.49px rgba(0, 0, 0, 0.37)',
  } as CSSProperties,
};

export default {textShadows, viewShadows};
