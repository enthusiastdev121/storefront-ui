import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconUndo({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="undo" {...attributes}>
      <path
        fill="#18181B"
        d="M8 19.5a.967.967 0 0 1-.712-.288A.968.968 0 0 1 7 18.5c0-.284.096-.521.288-.713A.967.967 0 0 1 8 17.5h6.1c1.05 0 1.963-.334 2.737-1C17.613 15.833 18 15 18 14s-.387-1.834-1.163-2.5c-.774-.667-1.687-1-2.737-1H7.8l1.9 1.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275l-3.6-3.6a.877.877 0 0 1-.212-.325 1.107 1.107 0 0 1-.063-.375c0-.134.02-.259.063-.375A.877.877 0 0 1 4.7 8.8l3.6-3.6a.948.948 0 0 1 .7-.275c.283 0 .517.091.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L7.8 8.5h6.3c1.617 0 3.004.525 4.162 1.575C19.421 11.125 20 12.433 20 14c0 1.566-.58 2.875-1.738 3.925-1.158 1.05-2.545 1.575-4.162 1.575H8Z"
      />
    </SfIconBase>
  );
}
