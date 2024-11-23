import cn from 'classnames';
import { Settings2, UsersRound, Wallet } from 'lucide-react';
import type { FC } from 'react';

import { NavbarItem } from '@/src/components/ui/kit/NavbarItem/NavbarItem.tsx';

import styles from './DashboardSidebar.module.scss';

export const DashboardSidebar: FC = () => {
  return (
    <aside className={cn(styles.dashboard)}>
      <nav>
        <ul>
          <li>
            <NavbarItem
              href='/'
              index
            >
              <Wallet size='1.2em' />
              Debts
            </NavbarItem>
          </li>

          <li>
            <NavbarItem href='/people'>
              <UsersRound size='1.2em' />
              People
            </NavbarItem>
          </li>

          <li>
            <NavbarItem href='/settings'>
              <Settings2 size='1.2em' />
              Settings
            </NavbarItem>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
