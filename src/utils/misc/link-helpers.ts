import { CREATE_DEBT_PAGE } from '@/app/constants';
import type { DebtCreationHelperOptions } from '@/src/types';

export class LinkHelperService {
  static debtCreationPage(options?: DebtCreationHelperOptions) {
    const source = options?.source ?? 'internal';

    const params = new URLSearchParams({
      source,
    });

    return `${CREATE_DEBT_PAGE}?${params.toString()}`;
  }
}
