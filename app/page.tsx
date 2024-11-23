import type { Metadata } from 'next';

import {
  DashboardLayout,
  DashboardSection,
} from '@/src/components/layout/dashboard';
import { generateStaticMetadata } from '@/src/utils/seo';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <DashboardLayout>
      <main>
        <DashboardSection>Main</DashboardSection>
      </main>
    </DashboardLayout>
  );
}
