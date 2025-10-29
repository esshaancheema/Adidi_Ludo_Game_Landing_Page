/**
 * ADIDI Ludo Theme
 * Complete design system export
 */

import colors, {withOpacity} from './colors';
import typography from './typography';
import {spacing, borderRadius, shadows} from './spacing';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  utils: {
    withOpacity,
  },
} as const;

export type Theme = typeof theme;

// Re-export individual modules
export {colors, typography, spacing, borderRadius, shadows, withOpacity};

export default theme;
