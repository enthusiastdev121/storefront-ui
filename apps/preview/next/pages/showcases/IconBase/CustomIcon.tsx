import { VsfIconBase } from '@storefront-ui/react/components/VsfIconBase/index';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfIconBase viewBox="0 0 24 24">
      <path d="M4 18a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4Zm0-5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4ZM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" />
    </VsfIconBase>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
