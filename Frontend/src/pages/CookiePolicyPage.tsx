import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import {
  Cookie,
  Calendar,
  ShieldCheck,
  Building2,
  Sliders,
  CheckCircle,
  ArrowLeft,
  Info,
} from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true
    analytics: true,
    functional: true,
    marketing: false,
  });
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSavePreferences = () => {
    localStorage.setItem('cdm_consent_preferences', JSON.stringify(cookiePreferences));
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      <Container>
        {/* Breadcrumb & Navigation */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Title Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm rounded-none mb-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-3">
            <Cookie className="w-4 h-4" />
            <span>Privacy & Technology Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-4">
            Cookie Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last updated: January 1, 2025</span>
            </span>
            <span>•</span>
            <span>Entity: Contents Digital Marketing LLC</span>
            <span>•</span>
            <span>Website: contentsdigital.us</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm rounded-none space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Introductory Notice */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-rose-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              About This Cookie Policy
            </p>
            <p>
              This Cookie Policy explains how <strong>Contents Digital Marketing LLC</strong> uses cookies, pixels, local storage, and similar technologies on{' '}
              <a href="https://contentsdigital.us" className="text-rose-600 dark:text-rose-400 underline" target="_blank" rel="noopener noreferrer">
                contentsdigital.us
              </a>. It should be read in conjunction with our <Link to="/privacy" className="text-rose-600 dark:text-rose-400 underline">Privacy Policy</Link>.
            </p>
          </div>

          {/* Section 1: What is a Cookie? */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">1.</span>
              <span>What is a Cookie?</span>
            </h2>
            <p>
              A cookie is a compact text file placed on your computer, tablet, or mobile device when you access a website. Cookies allow websites to remember your browser between visits, preserve your authentication state, maintain booking draft sessions, and evaluate aggregated traffic patterns. Similar technologies include web storage (HTML5 local storage), pixel tags, and device fingerprints—collectively referred to as “cookies” in this policy.
            </p>
          </section>

          {/* Section 2: Categories of Cookies */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">2.</span>
              <span>Categories of Cookies We Use</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-none space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">1. Strictly Necessary</h3>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded-none">Required</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Essential for the website to function securely. These handle session authentication, security verifications, anti-bot protection, and scheduling workflows. They cannot be disabled.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-none space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">2. Analytics & Performance</h3>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-none">Optional</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Help us understand how visitors interact with our content, measure page load speeds, and identify architectural improvements using privacy-first, aggregated telemetry without individual profiling.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-none space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">3. Functional & Preferences</h3>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-none">Optional</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Remember user preferences such as Dark/Light mode theme, timezone selection, language preference, and saved consultation parameters across sessions.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-none space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm">4. Marketing & Measurement</h3>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-none">Optional</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Used to evaluate campaign efficiency and display tailored professional engineering insights across approved enterprise channels (e.g. LinkedIn Insight). Activated solely upon consent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Detailed Cookies Table */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">3.</span>
              <span>Cookies We Currently Set</span>
            </h2>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-mono uppercase">
                  <tr>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Cookie / Service</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Purpose</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Category</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Lifespan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 font-mono">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">cdm_session</td>
                    <td className="p-3">Maintains consultation booking session state</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Strictly necessary</td>
                    <td className="p-3">Session</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">cdm_consent</td>
                    <td className="p-3">Stores your cookie preferences</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Strictly necessary</td>
                    <td className="p-3">12 months</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">theme_preference</td>
                    <td className="p-3">Remembers Dark / Light mode UI choice</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">Functional</td>
                    <td className="p-3">Persistent (Local Storage)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Plausible Analytics</td>
                    <td className="p-3">Privacy-first aggregated site metrics (no cookies)</td>
                    <td className="p-3 text-blue-600 dark:text-blue-400">Analytics</td>
                    <td className="p-3">None (Cookie-less)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Google Analytics (_ga, _ga_*)</td>
                    <td className="p-3">Aggregated visitor flow and session metrics</td>
                    <td className="p-3 text-blue-600 dark:text-blue-400">Analytics</td>
                    <td className="p-3">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Meta Pixel (_fbp)</td>
                    <td className="p-3">Campaign performance measurement</td>
                    <td className="p-3 text-purple-600 dark:text-purple-400">Marketing</td>
                    <td className="p-3">90 days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">LinkedIn Insight (li_sugr, bcookie)</td>
                    <td className="p-3">B2B engagement analytics</td>
                    <td className="p-3 text-purple-600 dark:text-purple-400">Marketing</td>
                    <td className="p-3">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Interactive Cookie Settings Panel */}
          <section className="space-y-4 pt-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">4.</span>
              <span>Your Choices & Interactive Cookie Preferences</span>
            </h2>
            <p>
              You maintain total control over your cookie choices. Adjust your preferences below at any time:
            </p>

            <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-none space-y-4">
              <div className="space-y-3 divide-y divide-slate-200 dark:divide-slate-700">
                {/* Strictly Necessary */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white block">Strictly Necessary Cookies</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Required for website security, booking drafts, and core functionality.</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">Always Active</span>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white block">Analytics Cookies</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Allows aggregated usage metrics to optimize site performance.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                    className="accent-rose-600 w-4 h-4 cursor-pointer"
                  />
                </div>

                {/* Functional */}
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white block">Functional Cookies</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Preserves dark mode preferences and customized regional settings.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookiePreferences.functional}
                    onChange={(e) => setCookiePreferences({ ...cookiePreferences, functional: e.target.checked })}
                    className="accent-rose-600 w-4 h-4 cursor-pointer"
                  />
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white block">Marketing & Measurement</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Measures advertising efficacy on professional networks (LinkedIn/Meta).</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })}
                    className="accent-rose-600 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="px-4 py-2 rounded-none bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Save Cookie Preferences
                </button>

                {savedMessage && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 animate-fadeIn">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Preferences saved successfully!</span>
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-xs text-slate-900 dark:text-white">Additional Controls:</h3>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong className="text-slate-900 dark:text-white">Global Privacy Control (GPC):</strong> We honor the Global Privacy Control (GPC) signal sent by supported browsers and automatically treat it as an opt-out request for non-essential cookies.</li>
                <li><strong className="text-slate-900 dark:text-white">Browser Configuration:</strong> All modern browsers allow you to block or erase cookies via settings. Note that disabling strictly necessary cookies may impair scheduling functionality.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Third-Party Cookies */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">5.</span>
              <span>Third-Party Cookies</span>
            </h2>
            <p>
              Certain cookies are deployed by third-party infrastructure providers that assist our operations (e.g. Google Workspace, Stripe, LinkedIn). These third parties maintain independent privacy policies governing their telemetry practices.
            </p>
          </section>

          {/* Section 6: Changes to Policy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">6.</span>
              <span>Changes to This Policy</span>
            </h2>
            <p>
              We may update this Cookie Policy as technology and statutory guidelines evolve. Updates are effective upon publication on this page.
            </p>
          </section>

          {/* Section 7: Contact Information */}
          <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">7.</span>
              <span>Contact Us</span>
            </h2>
            <p>If you have questions regarding our cookie practices, contact:</p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 font-mono text-xs space-y-1">
              <p className="font-bold text-slate-950 dark:text-white">Contents Digital Marketing LLC</p>
              <p>1111B S Governors Ave, Dover, DE 19904, United States</p>
              <p>Email: <a href="mailto:ceo@contentsdigital.us" className="text-rose-600 dark:text-rose-400 underline">ceo@contentsdigital.us</a></p>
              <p>Phone: +1 (507) 817-9006</p>
            </div>
          </section>

          {/* Bottom Cross-links */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
            <span>Related Policies:</span>
            <Link to="/privacy" className="text-rose-600 dark:text-rose-400 underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="text-rose-600 dark:text-rose-400 underline">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CookiePolicyPage;
