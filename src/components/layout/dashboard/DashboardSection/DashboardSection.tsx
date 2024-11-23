import type { VariableFC } from '@xenopomp/advanced-types';

import { DASHBOARD_UI_CONTAINER_WIDTH } from '@/app/constants';
import { UiContainer } from '@/src/components/ui';

export const DashboardSection: VariableFC<typeof UiContainer, unknown> = ({
  maxWidth = DASHBOARD_UI_CONTAINER_WIDTH,
  alignContainer = 'left',
  margin = '0px',
  children,
  ...props
}) => {
  return (
    <UiContainer
      maxWidth={maxWidth}
      alignContainer={alignContainer}
      margin={margin}
      {...props}
    >
      {children}
    </UiContainer>
  );
};
