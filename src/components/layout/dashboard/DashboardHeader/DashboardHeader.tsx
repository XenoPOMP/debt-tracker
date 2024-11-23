import cn from 'classnames';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

import { Button } from '@/src/components/ui/kit';
import { LinkHelperService } from '@/src/utils/misc';

import styles from './DashboardHeader.module.scss';

export const DashboardHeader: FC = () => {
  return (
    <header className={cn(styles.dashboard, 'flex justify-between')}>
      <p>Logo</p>

      <Button
        variant='accent'
        asChild
      >
        <Link href={LinkHelperService.debtCreationPage()}>
          New debt <Plus size='1.2em' />
        </Link>
      </Button>
    </header>
  );
};
