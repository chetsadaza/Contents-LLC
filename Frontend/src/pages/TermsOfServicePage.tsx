import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import {
  FileText,
  Calendar,
  ShieldCheck,
  Building2,
  Scale,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
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
            <Scale className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-4">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last updated: January 1, 2025</span>
            </span>
            <span>•</span>
            <span>Governing Law: State of Delaware, United States</span>
            <span>•</span>
            <span>Entity: Contents Digital Marketing LLC</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm rounded-none space-y-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Introductory Notice */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-l-4 border-rose-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white mb-1">
              Agreement to Terms
            </p>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of the website, AI advisory services, technology consultations, and deliverables provided by <strong>Contents Digital Marketing LLC</strong> (“we”, “us”, “our”). By booking a service, signing a statement of work, or accessing our site at{' '}
              <a href="https://contentsdigital.us" className="text-rose-600 dark:text-rose-400 underline" target="_blank" rel="noopener noreferrer">
                contentsdigital.us
              </a>, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 1: Services */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">1.</span>
              <span>Consultancy Services & Engagement Formats</span>
            </h2>
            <p>We currently provide specialized advisory formats, including:</p>
            <div className="space-y-2.5 pt-1">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Office Hours / Introductory Chat</h3>
                  <span className="font-mono font-bold text-xs text-rose-600 dark:text-rose-400">$30 USD</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">A one-time 30-minute video consultation to assess technical readiness, explore AI opportunities, and map high-level architecture.</p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Strategy Intensive</h3>
                  <span className="font-mono font-bold text-xs text-rose-600 dark:text-rose-400">$500 USD</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">A comprehensive 2-hour interactive strategy session, delivered with a customized written strategy blueprint and 14 days of asynchronous follow-up advisory.</p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Monthly Partner Advisory</h3>
                  <span className="font-mono font-bold text-xs text-rose-600 dark:text-rose-400">$100 USD / month</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ongoing strategic advisory including two 45-minute sprint reviews per month, private asynchronous communication channel, and monthly performance reviews.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Custom enterprise implementations, custom development, and full-day Info-Ops advisory are governed by separate Master Services Agreements (MSAs) or specific Statements of Work (SOWs).
            </p>
          </section>

          {/* Section 2: Booking & Invoicing */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">2.</span>
              <span>Booking, Invoicing & Payment Terms</span>
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-slate-900 dark:text-white">Reservations:</strong> Reserving a consultation time slot is streamlined. Depending on the plan, payment may be settled via our secure checkout or billed via electronic invoice.</li>
              <li><strong className="text-slate-900 dark:text-white">Invoicing:</strong> For invoiced services, we issue digital invoices denominated in U.S. Dollars (USD) payable via credit/debit card, ACH, wire transfer, or approved corporate payment rails.</li>
              <li><strong className="text-slate-900 dark:text-white">Payment Terms:</strong> Payment is due upon receipt or within Net 7 calendar days of invoice date unless otherwise agreed in writing.</li>
              <li><strong className="text-slate-900 dark:text-white">Taxes:</strong> All stated prices exclude applicable sales taxes, withholding taxes, or VAT, which shall be added where required by law.</li>
            </ul>
          </section>

          {/* Section 3: Rescheduling & Cancellation */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">3.</span>
              <span>Rescheduling & Cancellation Policy</span>
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-slate-900 dark:text-white">Notice Period:</strong> You may reschedule any session up to 24 hours prior to the scheduled start time at no additional charge.</li>
              <li><strong className="text-slate-900 dark:text-white">Cancellations:</strong> Cancellations made more than 24 hours in advance incur no penalty.</li>
              <li><strong className="text-slate-900 dark:text-white">Late Cancellations & No-Shows:</strong> Sessions cancelled within 24 hours or instances where a client fails to attend are treated as delivered and invoiced in full. Urgent emergencies will be handled reasonably upon written request.</li>
              <li><strong className="text-slate-900 dark:text-white">Monthly Retainers:</strong> Monthly Partner subscriptions operate on a 30-day rolling term. You may cancel prior to the upcoming billing cycle; partial billing periods are not pro-rated.</li>
            </ul>
          </section>

          {/* Section 4: Satisfaction Guarantee */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">4.</span>
              <span>Satisfaction Guarantee</span>
            </h2>
            <p>
              We stand behind our advisory quality. If you determine an Office Hours session did not deliver tangible value, notify us within 7 days of the session date, and we will waive or refund the charge without question. Strategy Intensive reviews are evaluated on a case-by-case basis once deliverables have been submitted.
            </p>
          </section>

          {/* Section 5: Client Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">5.</span>
              <span>Client Responsibilities</span>
            </h2>
            <p>To ensure effective delivery, you agree to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Provide accurate corporate and contact information upon booking.</li>
              <li>Attend scheduled sessions punctually.</li>
              <li>Provide background context, documentation, or technical access reasonably required for our analysis.</li>
              <li>Utilize advisory insights and deliverables strictly in compliance with applicable laws and industry regulations.</li>
            </ul>
          </section>

          {/* Section 6: Deliverables & Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">6.</span>
              <span>Deliverables & Intellectual Property Rights</span>
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-slate-900 dark:text-white">Client Ownership:</strong> Upon receipt of full payment, you own all bespoke strategy documents, architecture blueprints, and reports created specifically for your organization.</li>
              <li><strong className="text-slate-900 dark:text-white">Pre-existing IP:</strong> We retain all right, title, and interest in our pre-existing methodologies, proprietary templates, algorithmic frameworks, benchmarks, and generalized know-how.</li>
            </ul>
          </section>

          {/* Section 7: Confidentiality & Mutual NDA */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">7.</span>
              <span>Confidentiality</span>
            </h2>
            <p>
              All proprietary technical data, financial records, roadmap plans, and business materials shared during consultations are treated as strictly confidential. We will not disclose your confidential information to third parties without prior written consent, except where required by law. We are prepared to execute a mutual non-disclosure agreement (NDA) prior to engagement.
            </p>
          </section>

          {/* Section 8: Disclaimers */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">8.</span>
              <span>Disclaimers & Best-Effort Basis</span>
            </h2>
            <p>
              Our consulting is provided on a professional best-effort basis. While our engineering methodologies draw on extensive production experience, business outcomes depend on multiple external factors including execution velocity, market dynamics, and operational discipline. We make no express or implied guarantees of specific commercial or financial results. Case studies and metrics are illustrative examples.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">9.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Contents Digital Marketing LLC’s total aggregate liability arising out of or related to these Terms or any engagement shall not exceed the total fees paid by you to us in the three (3) months preceding the event giving rise to liability. In no event shall we be liable for indirect, consequential, special, punitive, or incidental damages, including lost revenue or data corruption.
            </p>
          </section>

          {/* Section 10: Termination */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">10.</span>
              <span>Termination</span>
            </h2>
            <p>
              We reserve the right to suspend or terminate an engagement immediately in the event of material breach of these Terms, non-payment, or conduct that creates undue legal or security risks. In such event, you will only be invoiced for services delivered up to the termination effective date.
            </p>
          </section>

          {/* Section 11: Governing Law & Jurisdiction */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">11.</span>
              <span>Governing Law & Jurisdiction (State of Delaware)</span>
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the <strong>State of Delaware, United States</strong>, without regard to its conflict-of-law principles. The parties irrevocably submit to the exclusive jurisdiction of the state and federal courts situated in Delaware.
            </p>
          </section>

          {/* Section 12: Changes to Terms */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">12.</span>
              <span>Changes to These Terms</span>
            </h2>
            <p>
              We reserve the right to amend these Terms from time to time. Revisions will be published on this page with an updated timestamp. Continued engagement following any posted revisions constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Section 13: Contact Information */}
          <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-rose-600 dark:text-rose-400 font-mono">13.</span>
              <span>Contact Us</span>
            </h2>
            <p>For legal inquiries, contracts, or notices regarding these Terms, contact:</p>
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
            <Link to="/cookies" className="text-rose-600 dark:text-rose-400 underline">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfServicePage;
