import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Lock,
  CreditCard,
  Building2,
  Tag,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sun,
  Moon,
  Search,
  Check,
  ExternalLink,
  ChevronDown,
  Globe,
  Smartphone,
  Coins,
  Receipt,
  FileText,
  Clock,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import logoImg from '@/assets/logo/LOGO-USA.png';

interface PlanInfo {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
}

const ALL_PLANS: Record<string, PlanInfo> = {
  'coffee-chat': {
    id: 'coffee-chat',
    name: 'Introductory Coffee Chat',
    subtitle: '30 minutes. High-level roadmap, explore AI opportunities.',
    price: '$30',
    duration: '30 mins',
  },
  'strategy-intensive': {
    id: 'strategy-intensive',
    name: 'Strategy Intensive',
    subtitle: 'The full picture. A real plan you can execute from tomorrow.',
    price: '$500',
    duration: '2 hours',
  },
  'monthly-advisory': {
    id: 'monthly-advisory',
    name: 'Monthly Advisory',
    subtitle: 'Ongoing strategic partner. Continuous guidance & sprint reviews.',
    price: '$100',
    duration: 'Ongoing',
  },
  'ai-vibe-code': {
    id: 'ai-vibe-code',
    name: 'AI Vibe Code Consult',
    subtitle: '30 minutes. Deep dive into your AI-first codebase.',
    price: '$1500',
    duration: '30 mins',
  },
  'ai-solutions-consult': {
    id: 'ai-solutions-consult',
    name: 'AI Solutions Consult',
    subtitle: 'Full day (6 hours). Enterprise-grade AI implementation.',
    price: '$15000',
    duration: '6 hours',
  },
  'ai-automation-info-ops': {
    id: 'ai-automation-info-ops',
    name: 'AI & Automation Info Ops',
    subtitle: '30 minutes. Tactical automation & information operations.',
    price: '$5000',
    duration: '30 mins',
  },
  'ai-automation-info-ops-full': {
    id: 'ai-automation-info-ops-full',
    name: 'AI & Automation Info Ops Full',
    subtitle: 'Full day (6 hours). Complete Info-Ops infrastructure.',
    price: '$28000',
    duration: '6 hours',
  },
};

const US_BANKS = [
  { id: 'mercury', name: 'Mercury', iconBg: 'bg-indigo-600', iconText: '☿' },
  { id: 'chase', name: 'Chase', iconBg: 'bg-blue-700', iconText: '◆' },
  { id: 'boa', name: 'Bank of America', iconBg: 'bg-red-600', iconText: '⚑' },
  { id: 'wellsfargo', name: 'Wells Fargo', iconBg: 'bg-amber-600', iconText: 'WF' },
  { id: 'capitalone', name: 'Capital One', iconBg: 'bg-sky-800', iconText: 'C1' },
  { id: 'schwab', name: 'Charles Schwab', iconBg: 'bg-blue-500', iconText: 'CS' },
  { id: 'relay', name: 'Relay', iconBg: 'bg-emerald-700', iconText: 'R' },
  { id: 'navyfed', name: 'Navy Federal Cr...', iconBg: 'bg-blue-900', iconText: 'NF' },
  { id: 'usaa', name: 'USAA Bank', iconBg: 'bg-slate-800', iconText: 'US' },
];

const COUNTRIES = [
  { code: 'TH', name: 'Thailand' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'JP', name: 'Japan' },
  { code: 'DE', name: 'Germany' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'CA', name: 'Canada' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'CH', name: 'Switzerland' },
];

export const CheckoutPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const planParam = searchParams.get('plan') || 'strategy-intensive';
  const dateParam = parseInt(searchParams.get('date') || '25', 10);
  const timeParam = searchParams.get('time') || '16:00';
  const nameParam = searchParams.get('name') || 'Jed';
  const emailParam = searchParams.get('email') || 'jed8@gmail.com';
  const phoneParam = searchParams.get('phone') || '+66 81 234 5678';

  const selectedPlan: PlanInfo =
    ALL_PLANS[planParam] || ALL_PLANS['strategy-intensive'];

  // Currency & Promo State
  const [checkoutCurrency, setCheckoutCurrency] = useState<'THB' | 'USD'>('THB');
  const [showPromoInput, setShowPromoInput] = useState<boolean>(false);
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState<string>('');

  // Payment Method Selection: 'card' | 'gpay' | 'usbank' | 'cashapp' | 'crypto'
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'usbank' | 'cashapp' | 'crypto'>('card');
  
  // Card Form
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: nameParam,
    country: 'TH',
    saveInfo: true,
  });

  // US Bank Form
  const [selectedBank, setSelectedBank] = useState<string>('chase');
  const [bankSearchQuery, setBankSearchQuery] = useState<string>('');
  const [accountHolderName, setAccountHolderName] = useState<string>(nameParam);

  // Crypto Form
  const [cryptoPhone, setCryptoPhone] = useState<string>(phoneParam);

  const [contactEmail, setContactEmail] = useState<string>(emailParam);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>('');

  const USD_EXCHANGE_RATE = 33.96; // 1 USD = 33.96 THB

  const getPlanUsdPrice = (priceStr: string): number => {
    const clean = priceStr.replace(/[^0-9]/g, '');
    const val = parseInt(clean, 10);
    return isNaN(val) ? 500 : val;
  };

  const baseUsdPrice = getPlanUsdPrice(selectedPlan.price);
  const discountedUsdPrice = Math.max(baseUsdPrice * (1 - discountPercent / 100), 0);
  const discountedThbPrice = Math.round(discountedUsdPrice * USD_EXCHANGE_RATE);

  const formattedThb = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 2 }).format(discountedThbPrice);
  const formattedUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(discountedUsdPrice);

  const originalThb = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 2 }).format(Math.round(baseUsdPrice * USD_EXCHANGE_RATE));
  const originalUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(baseUsdPrice);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCodeInput.trim().toUpperCase();
    if (code === 'VIP10' || code === 'CONTENTS') {
      setAppliedPromo(code);
      setDiscountPercent(10);
      setPromoCodeInput('');
      setShowPromoInput(false);
    } else if (code === 'LAUNCH50') {
      setAppliedPromo(code);
      setDiscountPercent(50);
      setPromoCodeInput('');
      setShowPromoInput(false);
    } else if (code === '') {
      setPromoError('Please enter a promotion code');
    } else {
      setPromoError('Invalid promotion code');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setDiscountPercent(0);
    setPromoError('');
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTransactionId(`TXN-CTN-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const filteredBanks = US_BANKS.filter((b) =>
    b.name.toLowerCase().includes(bankSearchQuery.toLowerCase())
  );

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/#schedule');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200 py-6 sm:py-10 px-4 sm:px-6">
      {/* Top Header Controls */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={handleGoBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 rounded-lg shadow-2xs">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span>256-Bit SSL Encrypted</span>
          </div>

          <button
            onClick={toggleTheme}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 flex items-center justify-center cursor-pointer shadow-2xs"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {!isSuccess ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6 sm:p-10 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              
              {/* ========================================================= */}
              {/* LEFT COLUMN: BRAND, CURRENCY SWITCHER & ORDER SUMMARY     */}
              {/* ========================================================= */}
              <div className="md:col-span-5 space-y-6 md:pr-6 md:border-r border-slate-100 dark:border-slate-800">
                {/* Brand Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="Contents LLC"
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Pay <span className="font-bold text-slate-950 dark:text-white">Contents Digital Marketing, LLC</span>
                  </h2>
                </div>

                {/* Currency Selector Pills */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Select currency
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutCurrency('THB')}
                      className={cn(
                        'p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer',
                        checkoutCurrency === 'THB'
                          ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 ring-2 ring-blue-600/20'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      )}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="text-sm">🇹🇭</span>
                        <span>{formattedThb}</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCheckoutCurrency('USD')}
                      className={cn(
                        'p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer',
                        checkoutCurrency === 'USD'
                          ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 ring-2 ring-blue-600/20'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      )}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="text-sm">🇺🇸</span>
                        <span>{formattedUsd}</span>
                      </span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">
                    1 USD = {USD_EXCHANGE_RATE.toFixed(4)} THB · Your bank may apply conversion rates and fees.
                  </p>
                </div>

                {/* Line Item Breakdown */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                        <img src={logoImg} alt="Logo" className="h-4 w-auto object-contain" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          {selectedPlan.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                          2026-08-{dateParam} · {timeParam} ET — {selectedPlan.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white shrink-0 font-mono">
                      {checkoutCurrency === 'THB' ? originalThb : originalUsd}
                    </span>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900 dark:text-white font-mono">
                        {checkoutCurrency === 'THB' ? originalThb : originalUsd}
                      </span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5" />
                          <span>Promotion discount ({appliedPromo} -{discountPercent}%)</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">
                            -{checkoutCurrency === 'THB' 
                              ? new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 2 }).format(Math.round(baseUsdPrice * (discountPercent / 100) * USD_EXCHANGE_RATE))
                              : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(baseUsdPrice * (discountPercent / 100))}
                          </span>
                          <button
                            type="button"
                            onClick={handleRemovePromo}
                            className="text-[11px] text-rose-500 hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Promo Code Trigger Button / Input */}
                    {!appliedPromo && !showPromoInput && (
                      <button
                        type="button"
                        onClick={() => setShowPromoInput(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                      >
                        <Tag className="w-3 h-3 text-slate-500" />
                        <span>Add promotion code</span>
                      </button>
                    )}

                    {showPromoInput && !appliedPromo && (
                      <form onSubmit={handleApplyPromo} className="space-y-1.5 pt-1">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Promotion code (try VIP10)"
                            value={promoCodeInput}
                            onChange={(e) => setPromoCodeInput(e.target.value)}
                            className="flex-1 h-8 px-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs uppercase text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                          />
                          <button
                            type="submit"
                            className="h-8 px-3 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 cursor-pointer"
                          >
                            Apply
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowPromoInput(false)}
                            className="h-8 px-2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                        {promoError && (
                          <p className="text-[11px] text-rose-500 font-medium">{promoError}</p>
                        )}
                      </form>
                    )}

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-baseline justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Total due
                      </span>
                      <span className="text-base sm:text-lg font-bold font-mono text-slate-950 dark:text-white">
                        {checkoutCurrency === 'THB' ? formattedThb : formattedUsd}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Carbon Offset Guarantee */}
                <div className="pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-900 dark:text-emerald-300 text-[11px]">
                    <span className="text-base shrink-0">🌱</span>
                    <p className="leading-relaxed">
                      Contents Digital Marketing, LLC contributes <strong>0.5% of your purchase</strong> to support frontier carbon removal initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* RIGHT COLUMN: PAYMENT METHODS & ACCORDION FORM            */}
              {/* ========================================================= */}
              <div className="md:col-span-7 space-y-5">
                
                {/* 1. Express Checkout Buttons */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleProcessPayment}
                      className="h-11 rounded-xl bg-black hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-98"
                    >
                      <span className="text-base font-sans"></span>
                      <span>Pay</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleProcessPayment}
                      className="h-11 rounded-xl bg-[#00D66F] hover:bg-[#00c063] text-[#0A2540] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-98"
                    >
                      <span className="text-sm">›</span>
                      <span>link</span>
                    </button>
                  </div>

                  <div className="relative flex items-center justify-center py-1.5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                    </div>
                    <span className="relative px-3 bg-white dark:bg-slate-900 text-xs text-slate-400">
                      Or
                    </span>
                  </div>
                </div>

                {/* 2. Contact Information */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Contact information
                  </label>
                  <div>
                    <label className="text-[11px] text-slate-500 block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 3. Payment Methods Form */}
                <form onSubmit={handleProcessPayment} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Payment method
                    </label>

                    {/* Method Radio Group Card */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                      
                      {/* ================= METHOD 1: CARD ================= */}
                      <div className={cn('p-3.5 transition-colors', paymentMethod === 'card' && 'bg-blue-50/20 dark:bg-blue-950/10')}>
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="payment_accordion"
                              checked={paymentMethod === 'card'}
                              onChange={() => setPaymentMethod('card')}
                              className="accent-blue-600 w-4 h-4 cursor-pointer"
                            />
                            <CreditCard className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              Card
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                            <span className="px-1 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200 font-mono text-[9px]">VISA</span>
                            <span className="px-1 py-0.5 bg-red-50 text-red-700 rounded border border-red-200 font-mono text-[9px]">MC</span>
                            <span className="px-1 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-200 font-mono text-[9px]">AMEX</span>
                            <span className="px-1 py-0.5 bg-amber-50 text-amber-700 rounded border border-amber-200 font-mono text-[9px]">DISC</span>
                          </div>
                        </label>

                        {paymentMethod === 'card' && (
                          <div className="mt-3.5 space-y-3 pl-6 animate-fadeIn">
                            <div className="space-y-1">
                              <label className="text-[11px] text-slate-600 dark:text-slate-400">
                                Card information
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  required
                                  placeholder="Card number"
                                  value={cardData.number}
                                  onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                                  className="w-full h-9 pl-3 pr-20 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                                />
                                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                                  <span className="text-[8px] font-bold px-1 py-0.5 bg-blue-600 text-white rounded">VISA</span>
                                  <span className="text-[8px] font-bold px-1 py-0.5 bg-red-600 text-white rounded">MC</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 mt-1">
                                <input
                                  type="text"
                                  required
                                  placeholder="MM / YY"
                                  value={cardData.expiry}
                                  onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                                  className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                                />
                                <div className="relative">
                                  <input
                                    type="text"
                                    required
                                    placeholder="CVC"
                                    maxLength={4}
                                    value={cardData.cvc}
                                    onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                                    className="w-full h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                                  />
                                  <CreditCard className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[11px] text-slate-600 dark:text-slate-400">
                                Cardholder name
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="Full name on card"
                                value={cardData.name}
                                onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                                className="w-full h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[11px] text-slate-600 dark:text-slate-400">
                                Billing address / Country
                              </label>
                              <div className="relative">
                                <select
                                  value={cardData.country}
                                  onChange={(e) => setCardData({ ...cardData, country: e.target.value })}
                                  className="w-full h-9 px-3 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 appearance-none cursor-pointer"
                                >
                                  {COUNTRIES.map((c) => (
                                    <option key={c.code} value={c.code}>
                                      {c.name}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                              </div>
                            </div>

                            <label className="flex items-center gap-2 pt-1 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cardData.saveInfo}
                                onChange={(e) => setCardData({ ...cardData, saveInfo: e.target.checked })}
                                className="accent-blue-600 rounded"
                              />
                              <span className="text-[11px] text-slate-600 dark:text-slate-400">
                                Save my information for secure 1-click checkout
                              </span>
                            </label>
                          </div>
                        )}
                      </div>

                      {/* ================= METHOD 2: GOOGLE PAY ================= */}
                      <div className={cn('p-3.5 transition-colors', paymentMethod === 'gpay' && 'bg-blue-50/20 dark:bg-blue-950/10')}>
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="payment_accordion"
                              checked={paymentMethod === 'gpay'}
                              onChange={() => setPaymentMethod('gpay')}
                              className="accent-blue-600 w-4 h-4 cursor-pointer"
                            />
                            <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <span className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200">G Pay</span>
                              <span>Google Pay</span>
                            </span>
                          </div>
                        </label>

                        {paymentMethod === 'gpay' && (
                          <div className="mt-3 pl-6 pr-2 animate-fadeIn">
                            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex items-center gap-3">
                              <Smartphone className="w-5 h-5 text-slate-500 shrink-0" />
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                A secure browser prompt will open to complete payment with Google Pay.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ================= METHOD 3: US BANK ACCOUNT ================= */}
                      <div className={cn('p-3.5 transition-colors', paymentMethod === 'usbank' && 'bg-blue-50/20 dark:bg-blue-950/10')}>
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="payment_accordion"
                              checked={paymentMethod === 'usbank'}
                              onChange={() => setPaymentMethod('usbank')}
                              className="accent-blue-600 w-4 h-4 cursor-pointer"
                            />
                            <Building2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              US bank account
                            </span>
                          </div>
                        </label>

                        {paymentMethod === 'usbank' && (
                          <div className="mt-3.5 space-y-3 pl-6 pr-1 animate-fadeIn">
                            <div className="space-y-1">
                              <label className="text-[11px] text-slate-600 dark:text-slate-400">
                                Account holder name
                              </label>
                              <input
                                type="text"
                                value={accountHolderName}
                                onChange={(e) => setAccountHolderName(e.target.value)}
                                placeholder="Full name on bank account"
                                className="w-full h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <div className="relative">
                                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                  type="text"
                                  value={bankSearchQuery}
                                  onChange={(e) => setBankSearchQuery(e.target.value)}
                                  placeholder="Search your bank"
                                  className="w-full h-9 pl-9 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                                />
                              </div>

                              {/* 3x3 Grid of Banks */}
                              <div className="grid grid-cols-3 gap-2">
                                {filteredBanks.map((bank) => {
                                  const isSelected = selectedBank === bank.id;
                                  return (
                                    <button
                                      key={bank.id}
                                      type="button"
                                      onClick={() => setSelectedBank(bank.id)}
                                      className={cn(
                                        'p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer',
                                        isSelected
                                          ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 ring-1 ring-blue-600'
                                          : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300'
                                      )}
                                    >
                                      <div className={cn('w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-xs', bank.iconBg)}>
                                        {bank.iconText}
                                      </div>
                                      <span className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 truncate w-full">
                                        {bank.name}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>

                              <div className="text-center pt-1">
                                <button
                                  type="button"
                                  className="text-[11px] text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline cursor-pointer"
                                >
                                  Enter bank details manually (may take 1-2 business days)
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ================= METHOD 4: CASH APP PAY ================= */}
                      <div className={cn('p-3.5 transition-colors', paymentMethod === 'cashapp' && 'bg-blue-50/20 dark:bg-blue-950/10')}>
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="payment_accordion"
                              checked={paymentMethod === 'cashapp'}
                              onChange={() => setPaymentMethod('cashapp')}
                              className="accent-blue-600 w-4 h-4 cursor-pointer"
                            />
                            <span className="w-4 h-4 rounded bg-[#00D632] text-white flex items-center justify-center text-[10px] font-bold">
                              $
                            </span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              Cash App Pay
                            </span>
                          </div>
                        </label>

                        {paymentMethod === 'cashapp' && (
                          <div className="mt-3 pl-6 pr-2 animate-fadeIn">
                            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-[#00D632] text-white flex items-center justify-center text-xs font-bold">
                                  $
                                </span>
                                <span className="text-xs font-bold text-slate-900 dark:text-white">
                                  Cash App Pay selected
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <Smartphone className="w-4 h-4 text-slate-400" />
                                <span>A secure QR code will be generated to scan with your Cash App</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ================= METHOD 5: CRYPTO ================= */}
                      <div className={cn('p-3.5 transition-colors', paymentMethod === 'crypto' && 'bg-blue-50/20 dark:bg-blue-950/10')}>
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="payment_accordion"
                              checked={paymentMethod === 'crypto'}
                              onChange={() => setPaymentMethod('crypto')}
                              className="accent-blue-600 w-4 h-4 cursor-pointer"
                            />
                            <Coins className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            <div>
                              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                                Crypto
                              </span>
                              <span className="text-[10px] text-slate-500 block">
                                Powered by Link
                              </span>
                            </div>
                          </div>
                        </label>

                        {paymentMethod === 'crypto' && (
                          <div className="mt-3.5 space-y-3 pl-6 pr-1 animate-fadeIn">
                            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex items-center gap-2.5">
                              <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                You will be redirected to connect your wallet or exchange (Coinbase, MetaMask, Phantom).
                              </p>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[11px] text-slate-600 dark:text-slate-400">
                                Mobile phone number
                              </label>
                              <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
                                <div className="px-2.5 py-2 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex items-center gap-1 text-xs">
                                  <span>🇹🇭</span>
                                  <ChevronDown className="w-3 h-3 text-slate-400" />
                                </div>
                                <input
                                  type="tel"
                                  value={cryptoPhone}
                                  onChange={(e) => setCryptoPhone(e.target.value)}
                                  placeholder="+66 81 234 5678"
                                  className="flex-1 h-9 px-3 text-xs font-mono text-slate-900 dark:text-white focus:outline-none"
                                />
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-400 leading-relaxed">
                              ⚡ <strong>link</strong> · By continuing, you agree to create a Link account according to the <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                            </p>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Submit Action Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full h-12 rounded-xl bg-[#0070F3] hover:bg-[#0060df] active:bg-[#0051ba] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    <Lock className="w-4 h-4" />
                    <span>
                      {isProcessing
                        ? 'Processing securely...'
                        : paymentMethod === 'gpay'
                        ? 'Continue with Google Pay'
                        : paymentMethod === 'cashapp'
                        ? 'Continue with Cash App Pay'
                        : paymentMethod === 'crypto'
                        ? 'Continue with Crypto'
                        : paymentMethod === 'usbank'
                        ? 'Continue with Bank Account'
                        : `Pay ${checkoutCurrency === 'THB' ? formattedThb : formattedUsd}`}
                    </span>
                  </button>

                  {/* Powered by Stripe & Legal Links */}
                  <div className="pt-2 text-center space-y-2">
                    <div className="flex items-center justify-center gap-3 text-xs text-slate-500">
                      <span>Powered by <strong>stripe</strong></span>
                      <span>·</span>
                      <Link to="/terms" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-slate-800 dark:hover:text-slate-200">Terms</Link>
                      <span>·</span>
                      <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-slate-800 dark:hover:text-slate-200">Privacy</Link>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* OFFICIAL RECEIPT & SUCCESS CONFIRMATION SCREEN            */
          /* ========================================================= */
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl text-center space-y-6 animate-fadeIn max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                PAYMENT & RESERVATION CONFIRMED
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                You're all confirmed!
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                We've sent your official booking confirmation, receipt, and Google Meet invitation to <strong className="text-slate-900 dark:text-white">{contactEmail}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-left space-y-3 text-xs font-mono">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Transaction ID:</span>
                <span className="font-bold text-slate-900 dark:text-white">{transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Merchant Entity:</span>
                <span className="font-bold text-slate-900 dark:text-white">Contents Digital Marketing, LLC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Engagement:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">{checkoutCurrency === 'THB' ? formattedThb : formattedUsd}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Time:</span>
                <span className="font-bold text-slate-900 dark:text-white">2026-08-{dateParam} · {timeParam} ET</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Meeting Location:</span>
                <span className="font-bold text-slate-900 dark:text-white">Google Meet (1:1 Strategic Workshop)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Add to Google Calendar</span>
              </a>

              <Link
                to="/"
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
