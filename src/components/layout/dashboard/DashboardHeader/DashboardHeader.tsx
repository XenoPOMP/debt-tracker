import cn from 'classnames';
import type { FC } from 'react';

import styles from './DashboardHeader.module.scss';

export const DashboardHeader: FC = () => {
  return <header className={cn(styles.dashboard)}>Header</header>;
};
