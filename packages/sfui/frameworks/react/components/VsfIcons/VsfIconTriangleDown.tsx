import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconTriangleDown({
  className = '',
  size = VsfIconSizeEnum.base,
  ariaLabel,
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      data-testid="triangle-down"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M11.24 15.114a1 1 0 0 0 1.52 0l3.825-4.463A1 1 0 0 0 15.825 9h-7.65a1 1 0 0 0-.76 1.65l3.826 4.464Z" />
    </VsfIconBase>
  );
}
