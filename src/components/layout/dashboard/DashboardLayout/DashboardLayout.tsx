import cn from 'classnames';
import type { FC, PropsWithChildren } from 'react';

import {
  DashboardHeader,
  DashboardSidebar,
} from '@/src/components/layout/dashboard';

import styles from './DashboardLayout.module.scss';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn('h-dvh w-dvw', styles.layout)}>
      <DashboardHeader />
      <DashboardSidebar />
      {children}
    </div>
  );
};
