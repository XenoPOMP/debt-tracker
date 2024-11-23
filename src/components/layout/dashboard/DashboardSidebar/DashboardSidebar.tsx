import cn from 'classnames';
import type { FC } from 'react';

import styles from './DashboardSidebar.module.scss';

export const DashboardSidebar: FC = () => {
  return <aside className={cn(styles.dashboard)}>Sidebar</aside>;
};
