import { TagOrComponent } from '../../shared/types';

export type VsfBreadcrumbType = {
  name: string;
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
};

export type VsfBreadcrumbHomeType = {
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
};

export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  homeItem?: VsfBreadcrumbHomeType;
  moreButtonAriaLabel?: string;
  homeIconAriaLabel?: string;
}
