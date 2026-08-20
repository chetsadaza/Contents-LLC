import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { ThemeProvider } from '@/hooks/useTheme';
import { LanguageProvider } from '@/hooks/useLanguage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
