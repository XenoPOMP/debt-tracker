import type { FC, PropsWithChildren } from 'react';

import { DashboardLayout } from '@/src/components/layout/dashboard';

const DashboardSharedLayout: FC<PropsWithChildren> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardSharedLayout;
