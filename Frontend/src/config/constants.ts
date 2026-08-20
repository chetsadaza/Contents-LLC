import type { NavItem } from '@/types';

export interface NavDropdownItem {
  id: string;
  label: string;
  path?: string;
  children?: { label: string; path: string; description?: string }[];
}

export const APP_CONFIG = {
  appName: 'Contents LLC',
  appDescription: 'AI Engineering & Technology Consulting for Modern Enterprises',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
} as const;

export const NAV_DROPDOWNS: NavDropdownItem[] = [
  {
    id: 'products',
    label: 'Products',
    children: [
      { label: 'Enterprise Platform', path: '/#products', description: 'Enterprise management and AI orchestration platform' },
      { label: 'Analytics & Insights', path: '/#analytics', description: 'Real-time deep insights and visual dashboards' },
      { label: 'Workflow Automation', path: '/#automation', description: 'Streamline repetitive operations with AI agents' },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    children: [
      { label: 'For Large Enterprises', path: '/#enterprise', description: 'Scalable high-throughput architecture' },
      { label: 'For High-Growth SMEs', path: '/#sme', description: 'Cost-effective and rapid deployment' },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    path: '/#pricing',
  },
  {
    id: 'resources',
    label: 'Resources',
    children: [
      { label: 'Articles & Blog', path: '/#blog' },
      { label: 'Documentation', path: '/#docs' },
      { label: 'FAQ', path: '/#faq' },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/#careers' },
      { label: 'Contact', path: '/#contact' },
    ],
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products & Solutions', path: '/#products' },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'Resources', path: '/#blog' },
  { label: 'About Us', path: '/about' },
];
