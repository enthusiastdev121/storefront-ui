import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

export default function VsfIconCheck({
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
      data-testid="check"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
      </>
    </VsfIconBase>
  );
}
