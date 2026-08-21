import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sliders, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cdm_consent_preferences');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cdm_consent_preferences', JSON.stringify(prefs));
    setIsVisible(false);
    setShowCustomModal(false);
  };

  const handleRejectNonEssential = () => {
    const prefs = {
      necessary: true,
      analytics: false,
      functional: true,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cdm_consent_preferences', JSON.stringify(prefs));
    setIsVisible(false);
    setShowCustomModal(false);
  };

  const handleSaveCustom = () => {
    const prefs = {
      necessary: true,
      analytics: analyticsConsent,
      functional: true,
      marketing: marketingConsent,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cdm_consent_preferences', JSON.stringify(prefs));
    setIsVisible(false);
    setShowCustomModal(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Bottom Cookie Consent Banner */}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-50 animate-slideUp">
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-5 rounded-none shadow-2xl space-y-3.5">
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-950 dark:text-white">
              We value your privacy
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Contents Digital Marketing LLC uses strictly necessary and analytics cookies to optimize user experience and secure consulting sessions pursuant to Delaware and U.S. privacy standards. Read our{' '}
              <Link to="/cookies" className="text-rose-600 dark:text-rose-400 underline font-medium">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-rose-600 dark:text-rose-400 underline font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 min-w-[100px] h-8 px-3 rounded-none bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-2xs"
            >
              Accept All
            </button>

            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="flex-1 min-w-[100px] h-8 px-3 rounded-none border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              Reject Optional
            </button>

            <button
              type="button"
              onClick={() => setShowCustomModal(true)}
              className="h-8 px-2.5 rounded-none border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs flex items-center gap-1 cursor-pointer"
              title="Customize Preferences"
            >
              <Sliders className="w-3 h-3" />
              <span className="text-[11px]">Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Customize Preferences Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-none shadow-2xl max-w-md w-full space-y-4 animate-scaleIn">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-rose-600" />
                <span>Customize Cookie Preferences</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowCustomModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              <div className="flex items-center justify-between pt-1">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Strictly Necessary</p>
                  <p className="text-[10px] text-slate-500">Security, session, and booking flows</p>
                </div>
                <span className="font-mono text-[10px] text-slate-400 font-bold">Required</span>
              </div>

              <div className="flex items-center justify-between pt-2.5">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Analytics Cookies</p>
                  <p className="text-[10px] text-slate-500">Aggregated performance measurement</p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="accent-rose-600 w-4 h-4 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-2.5">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Marketing & Measurement</p>
                  <p className="text-[10px] text-slate-500">Campaign efficacy (LinkedIn/Meta)</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="accent-rose-600 w-4 h-4 cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-3 py-1.5 rounded-none border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer"
              >
                Reject All Optional
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-1.5 rounded-none bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-bold cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
