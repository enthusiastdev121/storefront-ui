import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconShipmentDeliver({
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
      data-testid="shipment-deliver"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.793 12.49a1 1 0 0 1-1-1V4.23a2.33 2.33 0 0 1 .67-1.59A2.24 2.24 0 0 1 6.053 2h11.52a2.16 2.16 0 0 1 1.56.64c.419.417.659.98.67 1.57v5.3a1 1 0 0 1-2 0V4.23a.27.27 0 0 0-.08-.17.152.152 0 0 0-.057-.046.15.15 0 0 0-.073-.014h-2.79v2.27a1.73 1.73 0 0 1-1.8 1.73h-2.46a1.74 1.74 0 0 1-1.74-1.73V4h-2.8a.18.18 0 0 0-.15.06.34.34 0 0 0-.09.2v7.23a1 1 0 0 1-.97 1ZM10.803 4h2v2h-2V4Z"
        />
        <path d="M16.003 17.45h-4.7a2.1 2.1 0 0 1-1.23-.4 2.059 2.059 0 0 1-.532-.545l-5.177-.315a.41.41 0 0 0-.16 0 .22.22 0 0 0-.1.09.24.24 0 0 0 0 .14.31.31 0 0 0 0 .13.23.23 0 0 0 .15.14l8.55 3.21a1.53 1.53 0 0 0 1 0l6.55-2.19a1 1 0 0 1 .63 1.9l-6.55 2.18a3.37 3.37 0 0 1-1.19.21 3.36 3.36 0 0 1-1.24-.2l-8.52-3.21a2.25 2.25 0 0 1-1.24-1.11 2.31 2.31 0 0 1-.24-1.16 2.25 2.25 0 0 1 .39-1.12 2.16 2.16 0 0 1 .89-.78 2.15 2.15 0 0 1 1.17-.22l4.954.294c.014-.032.03-.063.045-.094a2.13 2.13 0 0 1 .55-.68c.223-.18.483-.31.76-.38l4.85-1.34a4.871 4.871 0 0 1 2-.11l2.89.49a1.013 1.013 0 1 1-.33 2l-2.89-.48a2.632 2.632 0 0 0-1.15.06l-4.86 1.31-.07.07.1.11h4.7a1 1 0 0 1 0 2Z" />
      </>
    </VsfIconBase>
  );
}
