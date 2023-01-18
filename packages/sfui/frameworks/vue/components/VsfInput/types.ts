export enum VsfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfInputProps {
  value: string;
  size?: VsfInputSize;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  characterLimit?: number;
  readonly?: boolean | undefined;
  placeholder?: string;
  errorMessage?: string;
  helpText?: string;
  requiredText?: string;
}
