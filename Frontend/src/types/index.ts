/**
 * Global TypeScript Type Definitions
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data: T;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}
