import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <Header />

      {/* Main Dynamic Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
