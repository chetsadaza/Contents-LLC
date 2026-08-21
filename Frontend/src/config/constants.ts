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
    id: 'capabilities',
    label: 'Capabilities',
    children: [
      { label: 'AI Strategy & Discovery', path: '/#capabilities-01', description: 'Readiness assessment, roadmap, and ROI analysis' },
      { label: 'Autonomous AI Agents', path: '/#capabilities-02', description: 'Intelligent multi-agent systems for business operations' },
      { label: 'RAG & Enterprise Knowledge', path: '/#capabilities-03', description: 'Connect LLMs securely to your documents and data' },
      { label: 'AI Workflow Automation', path: '/#capabilities-04', description: 'Automate repetitive pipelines and eliminate drag' },
      { label: 'Custom AI Applications', path: '/#capabilities-05', description: 'Bespoke internal tools and client-facing platforms' },
      { label: 'AI Infrastructure', path: '/#capabilities-06', description: 'Deploy, secure, and monitor LLMs on cloud or on-premise' },
    ],
  },
  {
    id: 'how-it-works',
    label: 'How It Works',
    path: '/#how-it-works',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    path: '/#pricing',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    path: '/#testimonials',
  },
  {
    id: 'faq',
    label: 'FAQ',
    path: '/#faq',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/#how-it-works' },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'Schedule', path: '/#schedule' },
  { label: 'Reviews', path: '/#testimonials' },
  { label: 'FAQ', path: '/#faq' },
];
