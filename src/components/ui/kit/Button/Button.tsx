import { Slot } from '@radix-ui/react-slot';
import cn from 'classnames';
import { type ComponentRef, forwardRef } from 'react';

import { buttonVariants } from '@/src/components/ui/kit/Button/Button.variants.ts';

import type { ButtonProps } from './Button.props';

export const Button = forwardRef<ComponentRef<'button'>, ButtonProps>(
  ({ className, asChild, variant, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, disabled }), className)}
        ref={ref}
        disabled
        {...props}
      />
    );
  },
);
