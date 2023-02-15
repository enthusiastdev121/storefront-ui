import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconLogin({
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
      data-testid="login"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M9.325 16.275a1.111 1.111 0 0 1-.275-.738c0-.275.092-.504.275-.687l1.85-1.85H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h7.175l-1.85-1.85c-.2-.2-.3-.437-.3-.712 0-.275.1-.513.3-.713.183-.2.413-.3.688-.3.275 0 .504.092.687.275l3.6 3.6c.1.1.171.208.213.325.041.117.062.242.062.375s-.02.258-.062.375a.883.883 0 0 1-.213.325l-3.6 3.6c-.2.2-.433.292-.7.275a1.012 1.012 0 0 1-.675-.3ZM13 21a.965.965 0 0 1-.712-.288A.965.965 0 0 1 12 20c0-.283.096-.52.288-.712A.965.965 0 0 1 13 19h6V5h-6a.965.965 0 0 1-.712-.288A.965.965 0 0 1 12 4c0-.283.096-.521.288-.713A.967.967 0 0 1 13 3h6c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 21h-6Z" />
    </VsfIconBase>
  );
}
