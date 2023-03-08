import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import { VsfCounter } from '@storefront-ui/react/components/VsfCounter';
import { VsfIconCircle, VsfIconCheck } from '@storefront-ui/react/components/VsfIcons';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <VsfListItemMenu className="max-w-sm" slotPrefix={<VsfIconCircle />} slotSuffix={<VsfIconCheck />}>
      <span className="inline-block break-words font-body">
        Label
        <VsfCounter v-if="counter" className="ml-2" size="xl">
          123
        </VsfCounter>
      </span>
      <span className="text-xs text-gray-500 break-words">Secondary text</span>
    </VsfListItemMenu>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
