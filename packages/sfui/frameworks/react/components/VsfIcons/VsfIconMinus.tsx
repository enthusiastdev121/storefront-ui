import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconMinus({
  className = '',
  size = VsfIconSize.base,
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
      data-testid="minus"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path fillRule="evenodd" clipRule="evenodd" d="M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z" />
      </>
    </VsfIconBase>
  );
}
