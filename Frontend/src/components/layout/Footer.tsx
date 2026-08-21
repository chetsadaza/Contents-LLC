import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { APP_CONFIG, NAV_ITEMS } from '@/config/constants';
import { Globe, Mail, MessageSquare, Shield, Lock, MapPin, Phone } from 'lucide-react';
import logoImg from '@/assets/logo/LOGO-USA.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 mt-auto transition-colors duration-200">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Address Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logoImg}
                  alt="Contents LLC Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Contents Digital Marketing LLC delivers enterprise AI engineering and strategic executive consulting. Architecting production-ready AI systems for high-growth organizations.
            </p>
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>1111B S Governors Ave, Dover, DE 19904, USA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>+1 (507) 817-9006</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  {item.path.startsWith('/#') ? (
                    <a
                      href={item.path.replace('/', '')}
                      className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Legal & Privacy
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors block text-slate-500 dark:text-slate-400"
                >
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Help */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Connect
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Get in touch with our team.
            </p>
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
              <a
                href="mailto:ceo@contentsdigital.us"
                title="Email: ceo@contentsdigital.us"
                className="p-2 rounded-none hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://contentsdigital.us"
                target="_blank"
                rel="noopener noreferrer"
                title="Website: contentsdigital.us"
                className="p-2 rounded-none hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="/#schedule"
                title="Book Consultation Session"
                className="p-2 rounded-none hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="py-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Contents Digital Marketing LLC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Delaware Jurisdiction</span>
            <span>•</span>
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
