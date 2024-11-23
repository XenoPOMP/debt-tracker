import cn from 'classnames';
import type { Metadata } from 'next';

import { DashboardLayout } from '@/src/components/layout/dashboard';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <DashboardLayout>
      <main className={cn(styles.mainPage)}>Main</main>
    </DashboardLayout>
  );
}
