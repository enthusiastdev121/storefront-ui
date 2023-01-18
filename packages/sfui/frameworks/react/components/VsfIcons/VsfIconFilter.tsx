import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconFilter({
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
      data-testid="filter"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="M19 9c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2H3a1 1 0 0 0 0 2h13.185A2.993 2.993 0 0 0 19 9Zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2ZM9 9a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h3.185A2.993 2.993 0 0 0 9 15a2.993 2.993 0 0 0 2.815-2H21a1 1 0 1 0 0-2h-9.185A2.993 2.993 0 0 0 9 9Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm10 2a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h13.185A2.994 2.994 0 0 0 19 21c1.654 0 3-1.346 3-3s-1.346-3-3-3Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Z" />
        <path d="M19 9c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2H3a1 1 0 0 0 0 2h13.185A2.993 2.993 0 0 0 19 9Zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2ZM9 9a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h3.185A2.993 2.993 0 0 0 9 15a2.993 2.993 0 0 0 2.815-2H21a1 1 0 1 0 0-2h-9.185A2.993 2.993 0 0 0 9 9Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm10 2a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h13.185A2.994 2.994 0 0 0 19 21c1.654 0 3-1.346 3-3s-1.346-3-3-3Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Z" />
      </>
    </VsfIconBase>
  );
}
