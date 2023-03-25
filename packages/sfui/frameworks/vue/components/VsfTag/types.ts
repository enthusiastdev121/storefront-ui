export enum VsfTagVariants {
  primary = 'primary',
  secondary = 'secondary',
  negative = 'negative',
  warning = 'warning',
  gray = 'gray',
}

export enum VsfTagSizes {
  sm = 'sm',
  base = 'base',
}

export enum VsfTagAriaLiveValues {
  off = 'off',
  polite = 'polite',
  assertive = 'assertive',
}

export interface VsfTagProps {
  label?: string;
  size?: string;
  variant?: string;
  strong?: boolean;
  ariaLive?: VsfTagAriaLiveValues;
}
