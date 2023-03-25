export enum VsfCounterSizes {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}

export interface VsfCounterProps {
  size?: VsfCounterSizes;
  pill?: boolean;
}
