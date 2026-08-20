import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
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
    ],
  },
  {
    path: PATHS.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);

export default router;
