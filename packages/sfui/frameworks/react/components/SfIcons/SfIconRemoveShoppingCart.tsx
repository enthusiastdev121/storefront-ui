import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconRemoveShoppingCart({
  size = SfIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="remove-shopping-cart" {...attributes}>
      <path d="m15.823 12.995-2-2h1.725l2.75-5H8.823l-2-2h13.125q.575 0 .887.488.313.487.013 1.062l-3.55 6.4a2.07 2.07 0 0 1-.712.775q-.438.275-.763.275m-8.825 9q-.824 0-1.412-.588a1.93 1.93 0 0 1-.588-1.412q0-.824.588-1.413a1.93 1.93 0 0 1 1.412-.587q.824 0 1.413.587.587.588.587 1.413t-.587 1.412a1.93 1.93 0 0 1-1.413.588m12.8.6-5.65-5.6h-6.55q-1.1 0-1.675-.937-.575-.939-.075-1.963l1.05-2.15-1.8-4.05L1.373 4.17a.9.9 0 0 1-.262-.687.98.98 0 0 1 .287-.688.95.95 0 0 1 .7-.275q.425 0 .7.275L21.223 21.22q.274.275.262.688a.98.98 0 0 1-.287.687.93.93 0 0 1-.687.275q-.413 0-.713-.275m-7.65-7.6-2-2h-1.55l-1 2zm4.85 7q-.824 0-1.413-.588a1.93 1.93 0 0 1-.587-1.412q0-.824.588-1.413a1.93 1.93 0 0 1 1.412-.587q.825 0 1.412.587.588.588.588 1.413t-.588 1.412a1.93 1.93 0 0 1-1.412.588" />
    </SfIconBase>
  );
}
