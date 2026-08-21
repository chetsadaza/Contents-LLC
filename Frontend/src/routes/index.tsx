import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/pages/TermsOfServicePage';
import { CookiePolicyPage } from '@/pages/CookiePolicyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PATHS } from './paths';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: PATHS.ABOUT,
        element: <AboutPage />,
      },
      {
        path: PATHS.CONTACT,
        element: <AboutPage />,
      },
      {
        path: PATHS.PRIVACY,
        element: <PrivacyPolicyPage />,
      },
      {
        path: PATHS.TERMS,
        element: <TermsOfServicePage />,
      },
      {
        path: PATHS.COOKIES,
        element: <CookiePolicyPage />,
      },
      {
        path: PATHS.COOKIE_POLICY,
        element: <CookiePolicyPage />,
      },
    ],
  },
  {
    path: PATHS.CHECKOUT,
    element: <CheckoutPage />,
  },
  {
    path: PATHS.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);

export default router;
