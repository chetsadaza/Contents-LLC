import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_DROPDOWNS } from '@/config/constants';
import { Container } from '@/components/common/Container';
import {
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import logoImg from '@/assets/logo/LOGO-USA.png';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const handleNavigateHash = (e: React.MouseEvent, path: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const isAnchor = path.startsWith('/#') || path.startsWith('#');
    if (isAnchor) {
      const hash = path.startsWith('/#') ? path.replace('/', '') : path;
      window.location.hash = hash;
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  // Smart Auto-Hide on Scroll Down & Instant Reveal on Scroll Up (Scroll & Wheel)
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Always show at top of page
      if (currentScroll <= 15) {
        setIsVisible(true);
        lastScroll = currentScroll;
        return;
      }

      // Scrolling Down past top -> Hide Navbar
      if (currentScroll > lastScroll && currentScroll > 60) {
        setIsVisible(false);
        setActiveDropdown(null);
      }
      // Scrolling Up -> Instantly Show Navbar
      else if (currentScroll < lastScroll) {
        setIsVisible(true);
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };

    // Instant mouse wheel detection
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < -2) {
        // User rolled mouse wheel UP
        setIsVisible(true);
      } else if (e.deltaY > 15 && window.scrollY > 80) {
        // User rolled mouse wheel DOWN
        setIsVisible(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-md transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      )}
    >
      {/* Top Accent Line Bar */}
      <div className="h-0.5 bg-gradient-to-r from-rose-600 via-red-500 to-slate-900 w-full" />

      <Container size="full" className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 relative" ref={dropdownRef}>
          {/* ========================================================= */}
          {/* LEFT GROUP: Logo + Navigation Menus                       */}
          {/* ========================================================= */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 py-1">
              <img
                src={logoImg}
                alt="Contents LLC Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_DROPDOWNS.map((nav) => {
                const hasChildren = nav.children && nav.children.length > 0;
                const isOpen = activeDropdown === nav.id;

                if (!hasChildren) {
                  const isAnchor = nav.path?.startsWith('/#');
                  const href = isAnchor ? nav.path?.replace('/', '') : nav.path || '/';

                  return isAnchor ? (
                    <a
                      key={nav.id}
                      href={href}
                      className="px-3.5 py-1.5 rounded-none text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {nav.label}
                    </a>
                  ) : (
                    <Link
                      key={nav.id}
                      to={nav.path || '/'}
                      className="px-3.5 py-1.5 rounded-none text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {nav.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={nav.id}
                    className="relative py-2"
                    onMouseEnter={() => handleMouseEnter(nav.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : nav.id)}
                      className={cn(
                        'px-3.5 py-1.5 rounded-none text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer',
                        isOpen && 'bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400'
                      )}
                    >
                      <span>{nav.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 text-slate-400 transition-transform duration-200',
                          isOpen && 'rotate-180 text-rose-600 dark:text-rose-400'
                        )}
                      />
                    </button>

                    {/* CAPABILITIES DROPDOWN MENU */}
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 w-[600px] bg-white dark:bg-slate-900 rounded-none shadow-2xl border border-slate-300 dark:border-slate-700 p-6 z-50 animate-fadeIn">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            CORE AI CAPABILITIES
                          </span>
                          <a
                            href="#schedule"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1"
                          >
                            <span>Explore all</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>

                        <div className="grid grid-cols-2 gap-3.5">
                          {nav.children?.map((child, cIdx) => (
                            <a
                              key={cIdx}
                              href={child.path.replace('/', '')}
                              onClick={(e) => handleNavigateHash(e, child.path)}
                              className="p-3.5 rounded-none border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:border-slate-400 dark:hover:border-slate-600 transition-all group cursor-pointer shadow-2xs"
                            >
                              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                                <span>{child.label}</span>
                              </div>
                              {child.description && (
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                                  {child.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* ========================================================= */}
          {/* RIGHT GROUP: Theme Toggle & Primary CTA                   */}
          {/* ========================================================= */}
          <div className="hidden md:flex items-center gap-3">
            {/* 1. Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* 2. Primary CTA Button */}
            <a href="#schedule">
              <button className="h-10 px-6 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98">
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-fadeIn">
            {NAV_DROPDOWNS.map((nav) => {
              const isAnchor = nav.path?.startsWith('/#');
              const href = isAnchor ? nav.path?.replace('/', '') : nav.path || '/';

              return (
                <div key={nav.id} className="space-y-1">
                  {nav.children ? (
                    <div className="space-y-1">
                      <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {nav.label}
                      </div>
                      {nav.children.map((child, cIdx) => (
                        <a
                          key={cIdx}
                          href={child.path.replace('/', '')}
                          onClick={(e) => handleNavigateHash(e, child.path)}
                          className="block px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400"
                    >
                      {nav.label}
                    </a>
                  )}
                </div>
              );
            })}
            <div className="pt-2 px-3">
              <a href="#schedule" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
