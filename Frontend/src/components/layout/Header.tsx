import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_DROPDOWNS } from '@/config/constants';
import { Container } from '@/components/common/Container';
import {
  ChevronDown,
  Sun,
  Moon,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import logoImg from '@/assets/logo/Contents LLC.png';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { currentLang, setLanguage, availableLanguages } = useLanguage();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

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

  // Smart Auto-Hide Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY <= 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling Down -> Hide Navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
        setActiveDropdown(null);
        setLangDropdownOpen(false);
      }
      // Scrolling Up -> Show Navbar
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setLangDropdownOpen(false);
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
        'sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200/90 dark:border-slate-800 shadow-2xs transition-all duration-300 ease-in-out',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      )}
    >
      {/* Top Accent Line Bar */}
      <div className="h-1 bg-gradient-to-r from-rose-600 via-red-500 to-slate-900 w-full" />

      <Container size="full" className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 relative" ref={dropdownRef}>
          {/* ========================================================= */}
          {/* LEFT GROUP: Logo + Navigation Menus                       */}
          {/* ========================================================= */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 py-1">
              <img
                src={logoImg}
                alt="Contents LLC Logo"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {NAV_DROPDOWNS.map((nav) => {
                const hasChildren = nav.children && nav.children.length > 0;
                const isOpen = activeDropdown === nav.id;
                const isProducts = nav.id === 'products';

                if (!hasChildren && !isProducts) {
                  return (
                    <Link
                      key={nav.id}
                      to={nav.path || '/'}
                      className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
                        'px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer',
                        isOpen && 'bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 font-semibold'
                      )}
                    >
                      <span>{nav.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 text-slate-400 transition-transform duration-200',
                          isOpen && 'rotate-180 text-cyan-600 dark:text-cyan-400'
                        )}
                      />
                    </button>

                    {/* ========================================================= */}
                    {/* MEGA MENU 1: Products 4 Columns                           */}
                    {/* ========================================================= */}
                    {isOpen && isProducts && (
                      <div className="absolute top-full left-0 mt-1 w-[720px] lg:w-[760px] max-w-[92vw] bg-white dark:bg-slate-900 rounded-none shadow-2xl border border-slate-300 dark:border-slate-700 p-6 lg:p-7 z-50 animate-in fade-in zoom-in-95">
                        <div className="grid grid-cols-4 gap-4 lg:gap-5 items-stretch">
                          {/* Column 1: Hardware */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Hardware
                            </h4>
                            <div className="space-y-3.5">
                              <Link to="/#dgx" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  NVIDIA DGX Spark
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Desktop-sized AI Supercomputer
                                </p>
                              </Link>

                              <Link to="/#blackwell" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  GB300 Blackwell Ultra
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Enterprise-Grade AI Workstation
                                </p>
                              </Link>

                              <Link to="/#edge" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Edge & Jetson
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  On-premise real-time inference
                                </p>
                              </Link>
                            </div>
                          </div>

                          {/* Column 2: Marketplace */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Marketplace
                            </h4>
                            <div className="space-y-3">
                              <Link to="/#marketplace" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Hardware Hub
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                  Compare specs and pricing
                                </p>
                              </Link>

                              <Link to="/#compare" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Compare Models
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                  DGX vs Blackwell benchmarks
                                </p>
                              </Link>

                              <Link to="/#buy-license" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  <span>Model Licenses</span>
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-none font-semibold">
                                    NEW
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                  Commercial LLM licenses
                                </p>
                              </Link>

                              <Link to="/#spec-checker" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Spec Advisor
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                  Find the right hardware fit
                                </p>
                              </Link>
                            </div>
                          </div>

                          {/* Column 3: Playground & Testing */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Experience
                            </h4>
                            <div className="space-y-3.5">
                              <Link to="/#playground" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  <span>AI Playground</span>
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-none font-semibold">
                                    LIVE
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Test LLMs directly in browser
                                </p>
                              </Link>

                              <Link to="/#benchmark" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  <span>Benchmark Arena</span>
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-none font-semibold">
                                    UPDATED
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Throughput and latency rankings
                                </p>
                              </Link>

                              <Link to="/#model-arena" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  <span>DGX Arena</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Real-world workload validation
                                </p>
                              </Link>
                            </div>
                          </div>

                          {/* Column 4: Quotes & Inquiries */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Get Started
                            </h4>
                            <div className="space-y-3.5">
                              <Link to="/contact" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Request a Quote
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Guaranteed response within 4h
                                </p>
                              </Link>

                              <Link to="/contact" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Consult an Architect
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Custom enterprise architecture
                                </p>
                              </Link>

                              <Link to="/contact" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Enterprise Sales
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Volume procurement discounts
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* MEGA MENU 2: Solutions 2 Columns                         */}
                    {/* ========================================================= */}
                    {isOpen && nav.id === 'solutions' && (
                      <div className="absolute top-full left-0 mt-1 w-[480px] lg:w-[520px] max-w-[92vw] bg-white dark:bg-slate-900 rounded-none shadow-2xl border border-slate-300 dark:border-slate-700 p-6 lg:p-7 z-50 animate-in fade-in zoom-in-95">
                        <div className="grid grid-cols-2 gap-5 items-stretch">
                          {/* Column 1: By Use Case */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Use Cases
                            </h4>
                            <div className="space-y-3.5">
                              <Link to="/#use-cases" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Industry Blueprints
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Real-world production case studies
                                </p>
                              </Link>

                              <Link to="/#customer-cases" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Customer Stories
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Deployments across leading enterprises
                                </p>
                              </Link>

                              <Link to="/#testimonials" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Client Reviews
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Verified executive feedback
                                </p>
                              </Link>
                            </div>
                          </div>

                          {/* Column 2: Professional Services */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Services
                            </h4>
                            <div className="space-y-3.5">
                              <Link to="/#training" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  On-Site Setup & Training
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Dedicated engineering support
                                </p>
                              </Link>

                              <Link to="/#partners" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Partner Ecosystem
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  System integrators & distributors
                                </p>
                              </Link>

                              <Link to="/#community" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Community Hub
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Technical forums & Q&A
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* MEGA MENU 3: Resources 2 Columns                          */}
                    {/* ========================================================= */}
                    {isOpen && nav.id === 'resources' && (
                      <div className="absolute top-full left-0 mt-1 w-[540px] lg:w-[580px] max-w-[92vw] bg-white dark:bg-slate-900 rounded-none shadow-2xl border border-slate-300 dark:border-slate-700 p-6 lg:p-7 z-50 animate-in fade-in zoom-in-95">
                        <div className="grid grid-cols-2 gap-6 items-stretch">
                          {/* Column 1: Getting Started */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Getting Started
                            </h4>
                            <div className="space-y-3.5">
                              <Link to="/#buyer-guide" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Buyer's Guide
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Right-sizing your AI compute
                                </p>
                              </Link>

                              <Link to="/#how-it-works" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  How It Works
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  From ordering to production rollout
                                </p>
                              </Link>

                              <Link to="/#ai-wiki" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  <span>AI Glossary</span>
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-none font-semibold">
                                    NEW
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Plain-English LLM & RAG terms
                                </p>
                              </Link>

                              <Link to="/#technical-docs" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Technical Documentation
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Install, configure & optimize
                                </p>
                              </Link>
                            </div>
                          </div>

                          {/* Column 2: Media & Insights */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Media & Docs
                            </h4>
                            <div className="space-y-3">
                              <Link to="/#articles" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Engineering Blog
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Latest research & benchmarks
                                </p>
                              </Link>

                              <Link to="/#videos" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Demo Videos
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Hands-on walkthroughs
                                </p>
                              </Link>

                              <Link to="/#webinars" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  <span>Webinars</span>
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-none font-semibold">
                                    REPLAY
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Executive webinars on-demand
                                </p>
                              </Link>

                              <Link to="/#downloads" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  Downloads & Whitepapers
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Datasheets and system specs
                                </p>
                              </Link>

                              <Link to="/#faq" onClick={() => setActiveDropdown(null)} className="block group">
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  FAQ
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  Answers to top questions
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* MEGA MENU 4: Company 1 Column                             */}
                    {/* ========================================================= */}
                    {isOpen && nav.id === 'company' && (
                      <div className="absolute top-full left-0 mt-1 w-[320px] max-w-[92vw] bg-white dark:bg-slate-900 rounded-none shadow-2xl border border-slate-300 dark:border-slate-700 p-5 lg:p-6 z-50 animate-in fade-in zoom-in-95">
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            About Contents LLC
                          </h4>
                          <div className="space-y-3.5">
                            <Link to="/about" onClick={() => setActiveDropdown(null)} className="block group">
                              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                Our Story
                              </div>
                            </Link>

                            <Link to="/contact" onClick={() => setActiveDropdown(null)} className="block group">
                              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                Contact Team
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                Direct line to engineers
                              </p>
                            </Link>

                            <Link to="/contact" onClick={() => setActiveDropdown(null)} className="block group">
                              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                Schedule Office Visit
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                Experience live demo in Bangkok
                              </p>
                            </Link>

                            <Link to="/#trust-center" onClick={() => setActiveDropdown(null)} className="block group">
                              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                Trust & Security Center
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                Compliance, data privacy & SLA
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* ========================================================= */}
          {/* RIGHT GROUP: Theme, Language, Search, CTA                 */}
          {/* ========================================================= */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
            {/* 1. Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* 2. Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span className="text-sm">{currentLang.flag}</span>
                <span className="font-bold text-slate-800 dark:text-white">{currentLang.code}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50 animate-in fade-in">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        'w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center gap-2 font-medium cursor-pointer',
                        currentLang.code === lang.code
                          ? 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-cyan-600 dark:hover:text-cyan-400'
                      )}
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Notification Bell Icon */}
            <button
              title="Notifications"
              className="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative flex items-center justify-center cursor-pointer"
            >
              <Bell className="w-4 h-4" />
            </button>

            {/* 4. Search Input Box */}
            <div className="relative w-48 xl:w-56">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, docs..."
                className="w-full h-9 pl-8 pr-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-2xs"
              />
            </div>

            {/* 5. Primary CTA Button */}
            <Link to="/contact">
              <button className="h-9 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white font-semibold text-xs shadow-sm shadow-cyan-200 dark:shadow-none hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-98">
                Book a Demo
              </button>
            </Link>
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
          <div className="lg:hidden py-4 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-in fade-in">
            {NAV_DROPDOWNS.map((nav) => (
              <div key={nav.id} className="space-y-1">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {nav.label}
                </div>
                {nav.children ? (
                  nav.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 hover:text-cyan-600 dark:hover:text-cyan-400"
                    >
                      {child.label}
                    </Link>
                  ))
                ) : (
                  <Link
                    to={nav.path || '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 hover:text-cyan-600 dark:hover:text-cyan-400"
                  >
                    {nav.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 px-3">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold text-xs shadow-md">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
