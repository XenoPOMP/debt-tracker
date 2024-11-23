import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    primary: {
      bg: '#0F0425',
      font: '#DFD5FB',
      accent: '#E9892F',
      block: {
        primary: '#AC8CF3',
        secondary: '#8F0F1A',
      },
    },
    secondary: {
      bg: '#1D0F38',
    },
  },
} satisfies Theme;
