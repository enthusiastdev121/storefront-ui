import { VsfLink } from '@storefront-ui/react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
      <VsfLink href="#" className="text-sm">
        {' '}
        Small{' '}
      </VsfLink>
      <VsfLink href="#" className="text-base">
        {' '}
        Base{' '}
      </VsfLink>
      <VsfLink href="#" className="text-large">
        {' '}
        Large{' '}
      </VsfLink>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
