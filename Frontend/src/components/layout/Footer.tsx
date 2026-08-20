import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { APP_CONFIG, NAV_ITEMS } from '@/config/constants';
import { Globe, Mail, MessageSquare } from 'lucide-react';
import logoImg from '@/assets/logo/Contents LLC.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 mt-auto transition-colors duration-200">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Contents LLC Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Enterprise-grade AI engineering and strategic technology consulting. Architecting production-ready AI systems for high-growth businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Help */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Connect & Support
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Get in touch with our engineering and advisory team.
            </p>
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
              <a href="#" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="py-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} {APP_CONFIG.appName}. All rights reserved.</p>
          <p>Enterprise AI Infrastructure & Architecture</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
