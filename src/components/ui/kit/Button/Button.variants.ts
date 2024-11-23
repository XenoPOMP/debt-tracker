import { type VariantProps, cva } from 'class-variance-authority';

import styles from './Button.module.scss';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  [
    'inline-flex flex-center text-20 px-3 py-4 rounded-4 gap-5 leading-[100%]',
    'transition-colors',
    styles.button,
  ],
  {
    variants: {
      variant: {
        default: ['bg-primary-block-primary text-primary-bg'],
        accent: ['bg-primary-accent text-primary-bg'],
      },
      disabled: {
        true: 'grayscale cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
      disabled: false,
    },
  },
);
