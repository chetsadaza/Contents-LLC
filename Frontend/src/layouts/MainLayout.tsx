import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/common/CookieBanner';

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const prevPathRef = React.useRef<string | null>(null);

  useEffect(() => {
    // Enable browser automatic scroll restoration on page reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    // Only scroll to top when actively navigating to a DIFFERENT route path (e.g., from / to /privacy)
    // On page reload (when prevPathRef.current is null), preserve the user's current scroll position!
    if (prevPathRef.current !== null && prevPathRef.current !== location.pathname) {
      window.scrollTo(0, 0);
    }

    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <Header />

      {/* Main Dynamic Content Area with top offset for fixed Navbar */}
      <main className="flex-1 pt-20 sm:pt-22">
        <Outlet />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
