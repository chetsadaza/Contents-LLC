import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import {
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  Calendar,
  Lock,
  FileText,
  CheckCircle,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-4">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last updated: January 1, 2025</span>
            </span>
            <span>•</span>
            <span>Jurisdiction: State of Delaware, United States</span>
            <span>•</span>
            <span>Entity: Contents Digital Marketing LLC</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm rounded-none space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Introductory Notice */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-rose-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              Contents Digital Marketing LLC (“we”, “us”, “our”)
            </p>
            <p>
              We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, why we collect it, our legal bases for processing, and what rights you have under United States federal and state laws (including Delaware and California CCPA/CPRA) as well as international frameworks (GDPR / UK GDPR). By using our website at{' '}
              <a href="https://contentsdigital.us" className="text-rose-600 dark:text-rose-400 underline" target="_blank" rel="noopener noreferrer">
                contentsdigital.us
              </a>{' '}
              or booking a consultation, you agree to the practices described below.
            </p>
          </div>

          {/* Section 1: Who We Are */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">1.</span>
              <span>Who We Are</span>
            </h2>
            <div className="p-4 rounded-none bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-1.5 font-mono text-xs text-slate-800 dark:text-slate-200">
              <p className="font-bold text-sm text-slate-950 dark:text-white">Contents Digital Marketing LLC</p>
              <p>1111B S Governors Ave, Dover, DE 19904, United States</p>
              <p>
                Email:{' '}
                <a href="mailto:ceo@contentsdigital.us" className="text-rose-600 dark:text-rose-400 underline">
                  ceo@contentsdigital.us
                </a>{' '}
                / <a href="mailto:hello@contentsllc.com" className="text-rose-600 dark:text-rose-400 underline">hello@contentsllc.com</a>
              </p>
              <p>Phone: +1 (507) 817-9006</p>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">2.</span>
              <span>Information We Collect</span>
            </h2>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                2.1 Information You Provide Directly to Us
              </h3>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 dark:text-slate-300">
                <li><strong className="text-slate-900 dark:text-white">Contact details:</strong> Name, professional email address, telephone number, and company name.</li>
                <li><strong className="text-slate-900 dark:text-white">Booking & scheduling details:</strong> Preferred consultation date, time slot, plan selected (e.g. Strategy Intensive, Advisory), and any project notes or context you submit.</li>
                <li><strong className="text-slate-900 dark:text-white">Billing information:</strong> Limited to invoicing details (company name, billing address, tax identification) necessary to generate electronic invoices.</li>
                <li><strong className="text-slate-900 dark:text-white">Communications:</strong> Inbound emails, support tickets, and call recordings (conducted solely with your explicit prior consent).</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 dark:text-slate-300">
                <li><strong className="text-slate-900 dark:text-white">Technical data:</strong> Internet Protocol (IP) address, browser type and version, device type, operating system, and language preferences.</li>
                <li><strong className="text-slate-900 dark:text-white">Usage & telemetry:</strong> Pages visited, time spent per section, interaction paths, and referring URLs.</li>
                <li><strong className="text-slate-900 dark:text-white">Cookies and local storage:</strong> As detailed in our dedicated <Link to="/cookies" className="text-rose-600 dark:text-rose-400 underline font-medium">Cookie Policy</Link>.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">3.</span>
              <span>How We Use Your Information</span>
            </h2>
            <p>We process collected data solely for specific, legitimate business purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { title: 'Service Delivery', desc: 'To deliver, conduct, and support the AI consulting sessions and deliverables you booked.' },
                { title: 'Invoicing & Accounting', desc: 'To issue invoices, record transaction confirmations, and track accounting status.' },
                { title: 'Client Communications', desc: 'To reply to inquiries, send calendar workshop invitations, and provide ongoing technical advisory.' },
                { title: 'Platform Optimization', desc: 'To monitor website performance, secure our infrastructure, and prevent fraud.' },
                { title: 'Occasional Updates', desc: 'To share relevant technology briefs or service announcements (you may unsubscribe at any time).' },
                { title: 'Legal Compliance', desc: 'To satisfy statutory recordkeeping, tax filing, and regulatory obligations in the United States.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-none">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Legal Basis (GDPR & US State Privacy) */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">4.</span>
              <span>Legal Basis for Processing (GDPR & US Laws)</span>
            </h2>
            <p>For visitors and clients in the European Economic Area (EEA), United Kingdom, and jurisdictions with statutory privacy requirements, our legal bases include:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-slate-900 dark:text-white">Contract Performance:</strong> Processing required to execute and fulfill our service agreement with you.</li>
              <li><strong className="text-slate-900 dark:text-white">Legitimate Interests:</strong> Improving our engineering services, maintaining site security, and managing operational workflows.</li>
              <li><strong className="text-slate-900 dark:text-white">Consent:</strong> Where you have provided unambiguous consent for optional cookies or direct marketing.</li>
              <li><strong className="text-slate-900 dark:text-white">Legal Obligations:</strong> Compliance with mandatory Delaware and U.S. Federal accounting and tax regulations.</li>
            </ul>
          </section>

          {/* Section 5: Sharing Your Information */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">5.</span>
              <span>Sharing Your Information & Subprocessors</span>
            </h2>
            <p>
              <strong className="text-slate-950 dark:text-white">We never sell, rent, or trade your personal information.</strong> We share data exclusively with trusted third-party service providers who assist in operating our business under strict confidentiality agreements:
            </p>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-mono uppercase">
                  <tr>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Provider</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Purpose</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700">Data Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 font-mono">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Google Workspace</td>
                    <td className="p-3">Email communications & calendar scheduling</td>
                    <td className="p-3">United States</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Google Meet</td>
                    <td className="p-3">Video workshops & strategic sessions</td>
                    <td className="p-3">United States</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Vercel / Cloudflare</td>
                    <td className="p-3">Secure web hosting & edge delivery</td>
                    <td className="p-3">United States / Global</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Plausible / GA4</td>
                    <td className="p-3">Aggregated privacy-conscious site analytics</td>
                    <td className="p-3">EU / United States</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">Stripe Inc.</td>
                    <td className="p-3">Secure payment processing & invoicing</td>
                    <td className="p-3">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Data Retention */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">6.</span>
              <span>How Long We Keep Your Data</span>
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-slate-900 dark:text-white">Client records & invoices:</strong> 7 years (pursuant to U.S. Federal and Delaware tax statutory requirements).</li>
              <li><strong className="text-slate-900 dark:text-white">Email subscribers:</strong> Retained until you opt-out or click unsubscribe.</li>
              <li><strong className="text-slate-900 dark:text-white">Aggregated analytics data:</strong> Up to 14 months.</li>
              <li><strong className="text-slate-900 dark:text-white">General inquiry correspondence:</strong> 24 months, after which it is securely purged.</li>
            </ul>
          </section>

          {/* Section 7: Your Privacy Rights */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">7.</span>
              <span>Your Rights (US State Laws & International)</span>
            </h2>
            <p>Depending on your jurisdiction (including California CCPA/CPRA, Delaware, and EU/UK), you hold the right to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60">✓ Access and receive a copy of personal data held about you</div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60">✓ Request rectification of inaccurate information</div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60">✓ Request erasure of your data ("Right to be Forgotten")</div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60">✓ Restrict or object to certain processing activities</div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60">✓ Data portability in a structured, machine-readable format</div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60">✓ Non-discrimination for exercising any privacy rights</div>
            </div>
            <p className="text-xs pt-1">
              To exercise any rights, email{' '}
              <a href="mailto:ceo@contentsdigital.us" className="text-rose-600 dark:text-rose-400 underline font-semibold">
                ceo@contentsdigital.us
              </a>. We will verify your identity and respond within 30 days.
            </p>
          </section>

          {/* Section 8: Security */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">8.</span>
              <span>Security Safeguards</span>
            </h2>
            <p>
              We implement enterprise-grade technical and organizational safeguards including 256-bit SSL encryption in transit, strict multi-factor authentication (MFA) on all administrative systems, and access logging. However, no internet transmission is 100% immune, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 9: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">9.</span>
              <span>Children's Privacy (COPPA)</span>
            </h2>
            <p>
              Our consulting services are strictly directed to business entities and individuals over 18 years of age. We do not knowingly collect personal data from minors. If you believe a minor has submitted personal data, please contact us immediately.
            </p>
          </section>

          {/* Section 10: Changes to Policy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">10.</span>
              <span>Changes to This Policy</span>
            </h2>
            <p>
              We may update this policy periodically to reflect evolving legal requirements and operational changes. When updated, we will revise the “Last updated” date at the top of this page. Material revisions will be communicated directly to active clients.
            </p>
          </section>

          {/* Section 11: Contact */}
          <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">11.</span>
              <span>Contact Us</span>
            </h2>
            <p>For questions or privacy inquiries, contact our data protection team at:</p>
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
            <Link to="/terms" className="text-rose-600 dark:text-rose-400 underline">Terms of Service</Link>
            <span>•</span>
            <Link to="/cookies" className="text-rose-600 dark:text-rose-400 underline">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
