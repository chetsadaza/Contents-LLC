import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Star,
  Compass,
  Code2,
  TrendingUp,
  CheckCircle2,
  ArrowDown,
  Shield,
  Check,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Video,
  CalendarCheck,
  Plus,
  Minus,
  HelpCircle,
  CreditCard,
  Lock,
  QrCode,
  Building2,
  Tag,
  ShieldCheck,
  Download,
  ExternalLink,
  Receipt,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/logo/LOGO-USA.png';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const philosophyItems = [
    {
      title: 'Think Clearly',
      description:
        'We start by thoroughly understanding the core problem, not by chasing tech hype, ensuring every initiative aligns with your true business goals.',
    },
    {
      title: 'Build Truly',
      description:
        'We architect, engineer, and embed AI solutions directly into your team’s everyday operations from day one.',
    },
    {
      title: 'Deliver Impact',
      description:
        'Reduce redundancy, elevate productivity, and unlock real value that drives measurable growth every day.',
    },
  ];

  const solutionTracks = [
    {
      id: '01',
      icon: <Compass className="w-5 h-5 text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors" />,
      title: 'Discover',
      subtitle: 'Find Where AI Creates Real Business Value',
      description:
        'We start with your business, not the technology. We analyze your workflows, challenges, data, and goals to identify where AI can make the biggest impact.',
      suitableTags: [
        'Organizations exploring AI',
        'Teams with repetitive workflows',
        'Businesses looking for practical AI opportunities',
      ],
      link: '/contact',
    },
    {
      id: '02',
      icon: <Code2 className="w-5 h-5 text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors" />,
      title: 'Build',
      subtitle: 'Turn Strategy Into Working AI Systems',
      description:
        'Once we know what matters, we design and build the solution. From AI assistants and RAG systems to custom applications and automation, we create technology around your actual workflow.',
      suitableTags: [
        'Organizations ready to implement AI',
        'Teams with defined use cases',
        'Businesses building custom AI solutions',
      ],
      link: '/contact',
    },
    {
      id: '03',
      icon: <TrendingUp className="w-5 h-5 text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors" />,
      title: 'Scale',
      subtitle: 'Make AI Part of How Your Organization Works',
      description:
        'Deployment is only the beginning. We help integrate AI into existing operations, monitor performance, improve workflows, and build the foundation for long-term adoption.',
      suitableTags: [
        'Organizations already using AI',
        'Teams scaling AI across departments',
        'Businesses seeking continuous improvement',
      ],
      link: '/contact',
    },
  ];

  const capabilitiesList = [
    {
      id: '01',
      title: 'AI Strategy',
      subtitle: 'Find the right AI opportunities',
      description:
        'We analyze workflows, data architecture, and business goals to uncover high-impact use cases where AI creates real, measurable value.',
      tags: [
        'AI Readiness Assessment',
        'Use Case Discovery',
        'AI Roadmap',
        'ROI & Impact Analysis',
      ],
    },
    {
      id: '02',
      title: 'AI Agents',
      subtitle: 'Intelligent systems that work for your team',
      description:
        'Build autonomous AI agents capable of understanding context, making decisions, and executing multi-step organizational workflows.',
      tags: [
        'AI Agents',
        'AI Assistants',
        'Multi-Agent Systems',
        'Workflow Automation',
      ],
    },
    {
      id: '03',
      title: 'RAG & Enterprise Knowledge',
      subtitle: 'Turn your knowledge into an AI that can answer',
      description:
        'Securely connect AI to your documents, databases, and institutional knowledge for fast, pinpoint-accurate enterprise search and retrieval.',
      tags: [
        'RAG',
        'Enterprise Search',
        'Knowledge Base',
        'Document Intelligence',
      ],
    },
    {
      id: '04',
      title: 'AI Automation',
      subtitle: 'Automate the work that slows your team down',
      description:
        'Transform repetitive manual tasks into streamlined, autonomous pipelines from data ingestion and processing to downstream business execution.',
      tags: [
        'Workflow Automation',
        'API Integration',
        'Data Processing',
        'Business Process Automation',
      ],
    },
    {
      id: '05',
      title: 'Custom AI Applications',
      subtitle: 'AI products built around your business',
      description:
        'Engineer purpose-built AI applications tailored precisely around your workflow, eliminating the need to adapt your business to rigid off-the-shelf software.',
      tags: [
        'Custom AI Apps',
        'Internal Tools',
        'AI Dashboards',
        'AI-powered Platforms',
      ],
    },
    {
      id: '06',
      title: 'AI Infrastructure',
      subtitle: 'The foundation for reliable AI at scale',
      description:
        'Architect enterprise-grade infrastructure to deploy, secure, monitor, and scale LLMs and AI workloads reliably on cloud or on-premise.',
      tags: [
        'Cloud / On-Premise',
        'LLM Deployment',
        'Security',
        'Monitoring & Optimization',
      ],
    },
  ];

  // How It Works Steps (Horizontal Slide Content)
  const howItWorksSteps = [
    {
      step: '01',
      title: 'Discovery',
      subtitle: 'Understand the problem before choosing the technology.',
      description:
        'We start with a focused conversation to understand your business, workflows, challenges, data, and goals. Together, we identify where AI can create the most meaningful impact.',
      coverTitle: 'What we cover',
      deliverables: [
        'Business & workflow assessment',
        'AI opportunity discovery',
        'Current systems & data',
        'Goals and success criteria',
      ],
    },
    {
      step: '02',
      title: 'Strategy & Design',
      subtitle: 'Turn the opportunity into a practical AI plan.',
      description:
        'We translate the problem into a clear solution architecture, define the right AI approach, and establish a roadmap for implementation.',
      coverTitle: 'What we deliver',
      deliverables: [
        'AI solution architecture',
        'Technical roadmap',
        'Data & integration strategy',
        'Security considerations',
        'Implementation plan',
      ],
    },
    {
      step: '03',
      title: 'Build & Deploy',
      subtitle: 'Turn the plan into a system your team can actually use.',
      description:
        'We engineer, integrate, and deploy the solution into your existing environment. After launch, we help monitor performance and continuously improve the system.',
      coverTitle: 'What we deliver',
      deliverables: [
        'Production-ready AI system',
        'System integration',
        'Deployment',
        'Monitoring',
        'Team handover & support',
      ],
    },
  ];

  // State for How It Works Horizontal Slider
  const [howItWorksStep, setHowItWorksStep] = useState<number>(0);

  // Pricing Tab Switcher: 'advisory' (Image 2) vs 'enterprise' (Image 3)
  const [pricingCategory, setPricingCategory] = useState<'advisory' | 'enterprise'>('advisory');

  // Pricing Tier 1 (Image 2)
  const advisoryPlans = [
    {
      id: 'office-hours',
      name: 'Office Hours',
      subtitle: '30 minutes. One problem. A clear next step.',
      price: '$30',
      period: 'one-time',
      duration: '30 mins',
      buttonText: 'Book office hours',
      popular: false,
      features: [
        '30-minute 1:1 video call',
        'Single-topic deep focus',
        'Written follow-up notes',
        'Recommended resources',
      ],
    },
    {
      id: 'strategy-intensive',
      name: 'Strategy Intensive',
      subtitle: 'The full picture. A real plan you can execute from tomorrow.',
      price: '$500',
      period: 'one-time',
      duration: '2 hours',
      buttonText: 'Book strategy session',
      popular: true,
      popularBadge: 'Most popular',
      features: [
        'Pre-call brand & market audit',
        '2-hour strategy workshop',
        '12-page custom strategy doc',
        '30-day action roadmap',
        '14 days of email follow-up',
      ],
    },
    {
      id: 'monthly-partner',
      name: 'Monthly Partner',
      subtitle: 'Marketing brain on-call. Cancel anytime.',
      price: '$100',
      period: '/month',
      duration: 'Ongoing',
      buttonText: 'Start monthly partnership',
      popular: false,
      features: [
        'Two 45-min calls per month',
        'Async Loom & email support',
        'Monthly performance review',
        'Campaign spot-checks',
        'Private resource vault',
      ],
    },
    {
      id: 'ai-vibe-code',
      name: 'AI Vibe Code Consult',
      subtitle: '30 minutes. Deep dive into your AI-first codebase.',
      price: '$1500',
      period: 'one-time',
      duration: '30 mins',
      buttonText: 'Book Consult',
      popular: false,
      features: [
        '30-minute 1:1 strategy call',
        'Vibe coding architecture review',
        'Cursor & LLM workflow optimization',
        'Actionable tech stack roadmap',
      ],
    },
  ];

  // Pricing Tier 2 (Image 3)
  const enterprisePlans = [
    {
      id: 'ai-solutions-consult',
      name: 'AI Solutions Consult',
      subtitle: 'Full day (6 hours). Enterprise-grade AI implementation.',
      price: '$15000',
      period: 'one-time',
      duration: '6 hours',
      buttonText: 'Book Full Day',
      popular: true,
      popularBadge: 'Most popular',
      isDarkCard: true,
      features: [
        '6-hour intensive workshop',
        'Custom AI agent architecture',
        'System integration strategy',
        'Scalability & security audit',
        '30 days of slack support',
      ],
    },
    {
      id: 'ai-automation-info-ops',
      name: 'AI & Automation Info Ops',
      subtitle: '30 minutes. Tactical automation & information operations.',
      price: '$5000',
      period: 'one-time',
      duration: '30 mins',
      buttonText: 'Book Ops Session',
      popular: false,
      isDarkCard: false,
      features: [
        '30-minute tactical session',
        'Automated content delivery systems',
        'Info-ops strategy setup',
        'Real-time monitoring tools',
      ],
    },
    {
      id: 'ai-automation-info-ops-full',
      name: 'AI & Automation Info Ops Full',
      subtitle: 'Full day (6 hours). Complete Info-Ops infrastructure.',
      price: '$28000',
      period: 'one-time',
      duration: '6 hours',
      buttonText: 'Go Full Scale',
      popular: true,
      popularBadge: 'Enterprise',
      isDarkCard: false,
      features: [
        '6-hour complete infra buildout',
        'End-to-end automation pipelines',
        'Custom dashboard deployment',
        'Security & resilience hardening',
        'Full documentation & handover',
      ],
    },
  ];

  const allAvailablePlans = [...advisoryPlans, ...enterprisePlans];

  // =========================================================================
  // STEP-BY-STEP PROGRESSIVE SCHEDULE WIZARD & CHECKOUT STATE
  // =========================================================================
  const [scheduleStep, setScheduleStep] = useState<number>(1);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('strategy-intensive');
  const [selectedDate, setSelectedDate] = useState<number>(27); // 27th Aug
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
  });

  // Checkout & Payment State
  const [checkoutCurrency, setCheckoutCurrency] = useState<'THB' | 'USD'>('THB');
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'promptpay' | 'bank'>('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    country: 'Thailand',
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>('');

  const selectedPlanObj =
    allAvailablePlans.find((p) => p.id === selectedPlanId) || allAvailablePlans[1];

  const USD_EXCHANGE_RATE = 33.96; // 1 USD = 33.96 THB

  const getPlanUsdPrice = (priceStr: string): number => {
    const clean = priceStr.replace(/[^0-9]/g, '');
    const val = parseInt(clean, 10);
    return isNaN(val) ? 500 : val;
  };

  const baseUsdPrice = getPlanUsdPrice(selectedPlanObj.price);
  const discountedUsdPrice = Math.max(baseUsdPrice * (1 - discountPercent / 100), 0);
  const discountedThbPrice = Math.round(discountedUsdPrice * USD_EXCHANGE_RATE);

  const formattedThb = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(discountedThbPrice);
  const formattedUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(discountedUsdPrice);

  const originalThb = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(Math.round(baseUsdPrice * USD_EXCHANGE_RATE));
  const originalUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(baseUsdPrice);

  const timeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
  ];

  const handleSelectPlanAndSchedule = (planId: string) => {
    setSelectedPlanId(planId);
    setScheduleStep(2); // Jump directly to Date & Time
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCodeInput.trim().toUpperCase();
    if (code === 'VIP10' || code === 'CONTENTS') {
      setAppliedPromo(code);
      setDiscountPercent(10);
      setPromoCodeInput('');
    } else if (code === 'LAUNCH50') {
      setAppliedPromo(code);
      setDiscountPercent(50);
      setPromoCodeInput('');
    } else if (code === '') {
      setPromoError('Please enter a promo code');
    } else {
      setPromoError('Invalid promo code');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setDiscountPercent(0);
    setPromoError('');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingFormData.name || !bookingFormData.email) return;
    const params = new URLSearchParams({
      plan: selectedPlanId,
      date: selectedDate.toString(),
      time: selectedTime,
      name: bookingFormData.name,
      email: bookingFormData.email,
      phone: bookingFormData.phone || '',
    });
    navigate(`/checkout?${params.toString()}`);
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setTransactionId(`TXN-CTN-${Math.floor(100000 + Math.random() * 900000)}`);
      setScheduleStep(5); // Advance to Step 5: Success & Receipt
    }, 1200);
  };

  // =========================================================================
  // FAQ ACCORDION STATE & DATA
  // =========================================================================
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'How does a consultation or engagement with Contents LLC work?',
      answer:
        'We work in three focused phases: Discovery (understanding your workflows and uncovering high-impact AI opportunities without chasing tech hype), Strategy & Design (architecting the technical solution, data pipelines, and execution roadmap), and Build & Deploy (engineering production-ready AI systems integrated directly into your operations).',
    },
    {
      question: 'Do we need technical expertise or in-house developers to work with you?',
      answer:
        'Not at all. We handle the full technical buildout, cloud deployment, and system integrations. We also provide complete documentation, recorded video walkthroughs, and hands-on team training so your non-technical team can operate the systems effortlessly.',
    },
    {
      question: 'How does invoicing work? Is upfront payment required?',
      answer:
        'No upfront payment is required to book a session on our calendar. Invoicing is handled separately after we finalize your scope and confirm your scheduled consultation format.',
    },
    {
      question: 'How long does a typical AI implementation take?',
      answer:
        'Tactical AI workflows, custom assistants, and internal automations typically launch in 2 to 3 weeks. Comprehensive enterprise architectures, custom RAG knowledge engines, and multi-agent systems generally take 4 to 8 weeks depending on integration complexity.',
    },
    {
      question: 'Is our company data secure when using your AI systems?',
      answer:
        'Security and data isolation are our highest priorities. Your proprietary business data, customer records, and internal documents are never used to train public foundation models, and all cloud/on-premise deployments adhere strictly to enterprise data privacy standards.',
    },
    {
      question: 'Can I switch or upgrade between Advisory and Enterprise plans?',
      answer:
        'Yes, absolutely. Many founders begin with an Office Hours or Strategy Intensive session to validate their requirements, and then roll that investment directly into a larger Enterprise implementation or Info-Ops buildout.',
    },
    {
      question: 'What ongoing support is provided after launch?',
      answer:
        'Every project includes post-launch monitoring, performance tuning, and team handover. If you require continuous optimization, you can partner with us on a monthly retainer for on-call advisory and feature expansions.',
    },
  ];

  // =========================================================================
  // SCROLL-DRIVEN CONTINUOUS IN-PLACE PINNED SEQUENCE (HERO -> ABOUT -> APPROACH -> ALL 6 CAPABILITIES)
  // =========================================================================
  const pinnedTrackRef = useRef<HTMLDivElement>(null);
  const [scrollStep, setScrollStep] = useState<number>(0);
  const [lineHeightPx, setLineHeightPx] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  const fullTextP1 =
    'Contents LLC is a team of AI engineers and consultants working alongside enterprise leaders to turn strategic business challenges into production-ready systems. We start by understanding the problem, not by picking technology, then design, build, and seamlessly integrate AI into organizational workflows.';
  const fullTextP2 =
    'Because we believe AI only holds real value when it drives tangible business outcomes. From eliminating repetitive tasks and supercharging team productivity to creating entirely new operational capabilities, we partner with you from day one until AI becomes an everyday reality in your business.';

  const [typedP1, setTypedP1] = useState('');
  const [typedP2, setTypedP2] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!pinnedTrackRef.current) return;
      const rect = pinnedTrackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScrolled = -rect.top;

      if (totalScrollable <= 0) return;
      const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);
      setCurrentProgress(progress);

      if (progress < 0.10) {
        setScrollStep(0);
        setLineHeightPx(0);
      } else if (progress < 0.22) {
        setScrollStep(1);
        setLineHeightPx(0);
      } else if (progress < 0.34) {
        setScrollStep(2);
        setLineHeightPx(0);
      } else {
        setScrollStep(3);
        if (progress <= 0.44) {
          setLineHeightPx(0);
        } else {
          const ratio = Math.min(Math.max((progress - 0.44) / (0.92 - 0.44), 0), 1);
          const MAX_LINE_HEIGHT = 1000;
          setLineHeightPx(ratio * MAX_LINE_HEIGHT);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct scroll to individual capability cards or sections like #schedule
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      if (hash === '#schedule') {
        const scheduleEl = document.getElementById('schedule');
        if (scheduleEl) {
          scheduleEl.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (hash === '#pricing' || hash === '#how-it-works' || hash === '#faq' || hash === '#testimonials') {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (hash.startsWith('#capabilities') || hash === '#story-experience') {
        if (!pinnedTrackRef.current) return;
        const rect = pinnedTrackRef.current.getBoundingClientRect();
        const totalScrollable = rect.height - window.innerHeight;
        let targetProgress = 0.46;

        if (hash === '#capabilities-01') targetProgress = 0.48;
        else if (hash === '#capabilities-02') targetProgress = 0.55;
        else if (hash === '#capabilities-03') targetProgress = 0.63;
        else if (hash === '#capabilities-04') targetProgress = 0.71;
        else if (hash === '#capabilities-05') targetProgress = 0.79;
        else if (hash === '#capabilities-06') targetProgress = 0.88;

        const targetY = window.scrollY + rect.top + totalScrollable * targetProgress;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashScroll);
    if (window.location.hash) {
      setTimeout(handleHashScroll, 150);
      setTimeout(handleHashScroll, 400);
    }
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  // =========================================================================
  // SCROLL-DRIVEN STACKED SEQUENCE (SCHEDULE -> TESTIMONIALS)
  // =========================================================================
  const scheduleStackRef = useRef<HTMLDivElement>(null);
  const [scheduleStackProgress, setScheduleStackProgress] = useState<number>(0);

  useEffect(() => {
    const handleScheduleStackScroll = () => {
      if (!scheduleStackRef.current) return;
      const rect = scheduleStackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScrolled = -rect.top;

      if (totalScrollable <= 0) return;
      const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);
      setScheduleStackProgress(progress);
    };

    window.addEventListener('scroll', handleScheduleStackScroll, { passive: true });
    handleScheduleStackScroll();
    return () => window.removeEventListener('scroll', handleScheduleStackScroll);
  }, []);

  const isScheduleTransitioning = scheduleStackProgress > 0.25;
  const scheduleTransitionRatio = Math.min(Math.max((scheduleStackProgress - 0.25) / 0.45, 0), 1);

  // Next Step Action Handler for Interactive Floating Button
  const handleNextStep = () => {
    if (!pinnedTrackRef.current) return;
    const rect = pinnedTrackRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;

    if (currentProgress < 0.18) {
      const targetY = window.scrollY + rect.top + totalScrollable * 0.24;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else if (currentProgress < 0.34) {
      const targetY = window.scrollY + rect.top + totalScrollable * 0.46;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else if (currentProgress < 0.85) {
      const targetY = window.scrollY + rect.top + totalScrollable * 0.92;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else {
      const howItWorksEl = document.getElementById('how-it-works');
      if (howItWorksEl) {
        howItWorksEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Typewriter effect trigger ONLY when crossing from step 0 to step >= 1
  const isTriggeredRef = useRef(false);

  useEffect(() => {
    if (scrollStep >= 1) {
      if (isTriggeredRef.current) {
        setTypedP1(fullTextP1);
        setTypedP2(fullTextP2);
        setIsTypingDone(true);
        return;
      }

      isTriggeredRef.current = true;
      let p1Index = 0;
      let p2Index = 0;
      setIsTypingDone(false);

      const interval = setInterval(() => {
        if (p1Index < fullTextP1.length) {
          p1Index = Math.min(p1Index + 3, fullTextP1.length);
          setTypedP1(fullTextP1.slice(0, p1Index));
        } else if (p2Index < fullTextP2.length) {
          p2Index = Math.min(p2Index + 3, fullTextP2.length);
          setTypedP2(fullTextP2.slice(0, p2Index));
        } else {
          setTypedP1(fullTextP1);
          setTypedP2(fullTextP2);
          setIsTypingDone(true);
          clearInterval(interval);
        }
      }, 14);

      return () => clearInterval(interval);
    } else {
      isTriggeredRef.current = false;
      setTypedP1('');
      setTypedP2('');
      setIsTypingDone(false);
    }
  }, [scrollStep >= 1]);

  return (
    <div className="space-y-0">
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative min-h-[calc(100vh-5.5rem)] flex flex-col justify-center items-center py-10 lg:py-16 overflow-hidden">
        {/* Subtle Dot Pattern Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,black_70%,transparent_100%)] opacity-70 dark:opacity-40 -z-10 pointer-events-none" />

        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-rose-500/10 via-slate-400/5 to-slate-900/10 dark:from-rose-950/20 dark:via-slate-900/10 dark:to-slate-950/30 blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
            {/* 1. Top Status Pill Capsule */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium shadow-xs hover:border-slate-300 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span>Accepting 3 new clients • Q3 2025</span>
            </div>

            {/* 2. Main Headline with Signature Red Accent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.12]">
              Marketing consulting that <br />
              <span className="font-serif italic font-normal text-rose-600 dark:text-rose-500 tracking-normal">
                actually moves
              </span>{' '}
              your numbers.
            </h1>

            {/* 3. Subtitle Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              I help founders fix their funnel, sharpen their brand, and grow faster — without the
              60-slide agency theatre. Book a 30-minute call and see for yourself.
            </p>

            {/* 4. Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a href="#schedule">
                <button className="h-12 sm:h-13 px-7 sm:px-8 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98">
                  <span>Book a consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              <a href="#pricing">
                <button className="h-12 sm:h-13 px-7 sm:px-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-98">
                  See pricing — from $30
                </button>
              </a>
            </div>

            {/* 5. Social Proof Avatars + 4.9/5 Star Rating Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-slate-950 shadow-xs">
                  SC
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-slate-950 shadow-xs">
                  MT
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-slate-950 shadow-xs">
                  EW
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-700 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-slate-950 shadow-xs">
                  JL
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-950 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-slate-950 shadow-xs">
                  RA
                </div>
              </div>

              {/* Star Rating & Text */}
              <div className="text-left space-y-0.5">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white ml-1">
                    4.9/5
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  From 47 founder-led brands
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2, 3 & 4: CONTINUOUS IN-PLACE PINNED FRAME (WHO WE ARE -> OUR APPROACH -> ALL 6 CARDS) */}
      {/* ========================================================= */}
      <div
        id="story-experience"
        ref={pinnedTrackRef}
        className="relative h-[850vh] border-t border-slate-100 dark:border-slate-800/80"
      >
        {/* Pinned Viewport Container */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-start items-center overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
          <Container>
            <div className="relative w-full min-h-screen flex items-center justify-center">

              {/* ========================================================= */}
              {/* LAYER 1: WHO WE ARE (Step 0, 1, 2)                        */}
              {/* ========================================================= */}
              <div
                className={cn(
                  'w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center transition-all duration-800 ease-in-out origin-top-left absolute inset-0 my-auto',
                  scrollStep >= 3
                    ? '-translate-x-48 sm:-translate-x-72 -translate-y-28 scale-[0.75] opacity-0 blur-xs pointer-events-none'
                    : 'translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto'
                )}
              >
                {/* LEFT COLUMN: Title and Typewriter Text */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Headline with Font Pairing */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 dark:text-white leading-[1.25] tracking-tight">
                    AI built not just for testing, <br />
                    <span className="font-serif italic font-normal text-slate-500 dark:text-slate-400">
                      but to make business thrive.
                    </span>
                  </h2>

                  {/* Story Paragraphs (Typewriter) */}
                  <div className="min-h-[140px] space-y-4 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {scrollStep >= 1 && (
                      <>
                        <p className="transition-opacity duration-300">
                          {typedP1}
                          {!isTypingDone && typedP2 === '' && (
                            <span className="inline-block w-1.5 h-4 ml-1 bg-rose-600 animate-pulse align-middle" />
                          )}
                        </p>
                        {typedP1.length > 30 && (
                          <p className="transition-opacity duration-300">
                            {typedP2}
                            {!isTypingDone && typedP2 !== '' && (
                              <span className="inline-block w-1.5 h-4 ml-1 bg-rose-600 animate-pulse align-middle" />
                            )}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* Bottom Motto Badge */}
                  <div
                    className={cn(
                      'pt-2 transition-all duration-700 ease-out',
                      scrollStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold shadow-2xs">
                      <Sparkles className="w-4 h-4 text-rose-500" />
                      <span>Think Clearly · Build Truly · Deliver Impact</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Rising Bar + 3 Staggered Items */}
                <div className="lg:col-span-6 relative pl-6 sm:pl-8">
                  <div className="absolute left-0 bottom-0 top-0 w-0.5 bg-slate-200 dark:bg-slate-800">
                    <div
                      className={cn(
                        'w-full bg-slate-900 dark:bg-white transition-all duration-700 ease-out origin-bottom',
                        scrollStep >= 2 ? 'h-full scale-y-100 opacity-100' : 'h-0 scale-y-0 opacity-0'
                      )}
                    />
                  </div>

                  <div className="space-y-6 lg:space-y-8">
                    {philosophyItems.map((item, idx) => {
                      const delayClasses = [
                        'delay-100',
                        'delay-250',
                        'delay-400',
                      ];

                      return (
                        <div
                          key={idx}
                          className={cn(
                            'space-y-1.5 transition-all duration-700 ease-out transform group',
                            delayClasses[idx],
                            scrollStep >= 2
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-10 pointer-events-none'
                          )}
                        >
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ================================================================= */}
              {/* LAYER 2 & 3: OUR APPROACH -> CONNECTING CRIMSON LINE -> ALL 6 CARDS */}
              {/* ================================================================= */}
              <div
                className={cn(
                  'w-full max-w-6xl mx-auto space-y-10 sm:space-y-12 transition-all duration-700 ease-out absolute inset-0 my-auto flex flex-col justify-start pt-14 sm:pt-16',
                  scrollStep >= 3
                    ? 'translate-x-0 scale-100 opacity-100 pointer-events-auto'
                    : 'translate-x-48 sm:translate-x-72 translate-y-12 scale-95 opacity-0 blur-xs pointer-events-none'
                )}
                style={{
                  transform: scrollStep >= 3 ? `translateY(${-lineHeightPx * 2.2}px)` : undefined,
                }}
              >
                {/* PART 1: OUR APPROACH */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="text-center space-y-2.5 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.2]">
                      From Business Problem{' '}
                      <span className="font-serif italic font-normal text-slate-500 dark:text-slate-400">
                        to AI in Production
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      Every organization starts with a different challenge. We work alongside your team to identify where AI can create real value, design the right solution, and turn it into something your organization can use every day.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch relative">
                    {solutionTracks.map((card, index) => (
                      <div
                        key={index}
                        className={cn(
                          'bg-white/95 dark:bg-slate-900/90 border rounded-none p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1',
                          index === 1
                            ? 'border-slate-400/90 dark:border-slate-600 shadow-md'
                            : 'border-slate-200/90 dark:border-slate-800'
                        )}
                      >
                        <div className="space-y-3.5">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                              {card.icon}
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                              {card.id}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                            {card.title}
                          </h3>

                          <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                            {card.subtitle}
                          </p>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal pt-1">
                            {card.description}
                          </p>
                        </div>

                        <div className="pt-5 space-y-3.5 mt-auto">
                          <div>
                            <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-1.5">
                              Best suited for
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {card.suitableTags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 select-none"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                            <a
                              href="#schedule"
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:translate-x-1 transition-all cursor-pointer"
                            >
                              <span>Explore Track</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PART 2 & 3: AI CAPABILITIES */}
                <div className="relative pt-8 sm:pt-12 pb-32">
                  <div
                    className={cn(
                      'text-center space-y-2 max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 relative z-20',
                      lineHeightPx > 40 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                  >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.2]">
                      What We Build{' '}
                      <span className="font-serif italic font-normal text-slate-500 dark:text-slate-400">
                        for your business
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      From intelligent assistants to automated workflows, we build AI systems around the way your organization actually works.
                    </p>
                  </div>

                  <div className="relative pb-6 flex flex-col items-center">
                    <div className="absolute top-0 bottom-20 left-6 lg:left-1/2 -translate-x-1/2 w-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-full">
                      {lineHeightPx > 20 && (
                        <div
                          className="w-full bg-gradient-to-b from-rose-500 via-red-500 to-rose-700 shadow-[0_0_18px_rgba(244,63,94,0.95)] rounded-full transition-all duration-75 ease-out origin-top relative"
                          style={{
                            height: `${Math.min(Math.max((lineHeightPx / 850) * 100, 0), 100)}%`,
                          }}
                        >
                          <div className="absolute -bottom-2 -left-1.5 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_22px_rgba(244,63,94,1)] border-2 border-white dark:border-slate-900 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="w-full space-y-8 sm:space-y-10 relative z-10">
                      {capabilitiesList.map((item, idx) => {
                        const thresholds = [50, 180, 320, 480, 640, 800];
                        const isNodeActive = lineHeightPx >= thresholds[idx];
                        const isEven = idx % 2 === 0;

                        return (
                          <div
                            key={item.id}
                            className={cn(
                              'relative flex flex-col lg:flex-row items-center gap-4 lg:gap-12 transition-all duration-700 ease-out',
                              isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            )}
                          >
                            <div
                              className={cn(
                                'w-full lg:w-[calc(50%-2.5rem)] pl-14 lg:pl-0 transition-all duration-700 ease-out',
                                isNodeActive
                                  ? 'opacity-100 translate-x-0 scale-100'
                                  : isEven
                                  ? 'opacity-25 -translate-x-6 scale-95 blur-2xs'
                                  : 'opacity-25 translate-x-6 scale-95 blur-2xs'
                              )}
                            >
                              <div
                                className={cn(
                                  'bg-white/95 dark:bg-slate-900/90 border rounded-none p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all duration-500 group relative',
                                  isNodeActive
                                    ? 'border-slate-400 dark:border-slate-600 shadow-xl hover:-translate-y-1'
                                    : 'border-slate-200/90 dark:border-slate-800 shadow-xs'
                                )}
                              >
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400">
                                      <span className="text-rose-600 dark:text-rose-500">{item.id}</span> — CAPABILITY
                                    </span>
                                  </div>

                                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                    {item.title}
                                  </h3>

                                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                                    {item.subtitle}
                                  </p>

                                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                                    {item.description}
                                  </p>
                                </div>

                                <div className="pt-4 space-y-2 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                                  <div className="flex flex-wrap gap-1.5">
                                    {item.tags.map((tag, tIdx) => (
                                      <span
                                        key={tIdx}
                                        className="px-2 py-0.5 rounded-none text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 select-none"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                              <div
                                className={cn(
                                  'w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 border-2',
                                  isNodeActive
                                    ? 'bg-rose-600 text-white border-white dark:border-slate-900 shadow-[0_0_24px_rgba(244,63,94,1)] scale-110'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-300 dark:border-slate-700 scale-90'
                                )}
                              >
                                {item.id}
                              </div>
                            </div>

                            <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-10 pb-10 text-center relative z-20">
                      <a href="#schedule">
                        <button className="h-13 sm:h-14 px-9 sm:px-11 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-base shadow-lg shadow-slate-950/20 dark:shadow-none hover:shadow-xl transition-all inline-flex items-center gap-3 cursor-pointer active:scale-98">
                          <span>Start Your AI Project</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Container>

          {/* FLOATING NEXT STEP BUTTON */}
          <div className="absolute bottom-6 right-6 z-30 sm:bottom-8 sm:right-8">
            <button
              onClick={handleNextStep}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span className="group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                {currentProgress < 0.85 ? 'Next Step' : 'How It Works'}
              </span>
              <div className="w-6 h-6 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center group-hover:bg-rose-600 dark:group-hover:bg-rose-500 dark:group-hover:text-white transition-colors">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 5: HOW IT WORKS (Horizontal Sliding Step Experience) */}
      {/* ========================================================= */}
      <section
        id="how-it-works"
        className="relative pt-20 pb-4 lg:pt-28 lg:pb-6 bg-white dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-slate-500/5 via-transparent to-slate-900/5 dark:from-slate-950/20 dark:to-transparent blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="space-y-10 lg:space-y-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.18]">
                  From first conversation{' '}
                  <span className="font-serif italic font-normal text-slate-500 dark:text-slate-400">
                    to AI in production
                  </span>
                  , in three steps.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  We move from understanding the problem to building a working solution — without unnecessary complexity or endless discovery phases.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200 dark:border-slate-700">
                  {howItWorksSteps.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHowItWorksStep(idx)}
                      className={cn(
                        'px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5',
                        howItWorksStep === idx
                          ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      )}
                    >
                      <span className="font-mono text-rose-600 dark:text-rose-500 font-bold">{s.step}</span>
                      <span>{s.title}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHowItWorksStep((prev) => Math.max(prev - 1, 0))}
                    disabled={howItWorksStep === 0}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-slate-400 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setHowItWorksStep((prev) => Math.min(prev + 1, howItWorksSteps.length - 1))}
                    disabled={howItWorksStep === howItWorksSteps.length - 1}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-slate-400 transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${howItWorksStep * 100}%)`,
                }}
              >
                {howItWorksSteps.map((stepItem, sIdx) => (
                  <div
                    key={sIdx}
                    className="w-full shrink-0 px-1"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 shadow-sm rounded-none relative">
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="text-5xl sm:text-6xl font-black font-mono text-slate-950 dark:text-white">
                            {stepItem.step}
                          </span>
                          <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                            PHASE {stepItem.step}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
                            {stepItem.title}
                          </h3>
                          <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                            {stepItem.subtitle}
                          </p>
                        </div>

                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                          {stepItem.description}
                        </p>

                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          {sIdx < howItWorksSteps.length - 1 ? (
                            <button
                              onClick={() => setHowItWorksStep(sIdx + 1)}
                              className="px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                            >
                              <span>Next Phase: {howItWorksSteps[sIdx + 1].title}</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <a href="#schedule">
                              <button className="px-7 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98">
                                <span>Book Your Session</span>
                                <ArrowDown className="w-4 h-4" />
                              </button>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 space-y-4 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-3">
                            {stepItem.coverTitle}
                          </div>
                          <div className="space-y-3">
                            {stepItem.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-slate-900 dark:text-slate-100 shrink-0 mt-0.5" />
                                <span className="font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                          <span>Step {sIdx + 1} of 3</span>
                          <span className="font-bold text-slate-950 dark:text-white">{Math.round(((sIdx + 1) / 3) * 100)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: TRUSTED BY BRANDS & METRICS (Social Proof)     */}
      {/* ========================================================= */}
      <section
        id="trusted-by"
        className="relative pt-4 pb-6 lg:pt-6 lg:pb-8 bg-white dark:bg-slate-900 overflow-hidden"
      >
        <Container>
          <div className="space-y-10 lg:space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs shadow-2xs">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="font-bold text-slate-950 dark:text-white">4.9/5</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">From 47 founder-led brands</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.18]">
                Trusted by brands{' '}
                <span className="font-serif italic font-normal text-rose-600 dark:text-rose-500">
                  building something real
                </span>
              </h2>
            </div>

            {/* Marquee Brands */}
            <div className="py-6 border-y border-slate-100 dark:border-slate-800/80 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-marquee gap-12 sm:gap-20 items-center">
                {[
                  'Northbound',
                  'Aster Beauty',
                  'Brickhouse',
                  'Paperbird',
                  'Mellow Foods',
                  'Hemlock',
                  'Lumen',
                  'Prairie',
                  'Northbound',
                  'Aster Beauty',
                  'Brickhouse',
                  'Paperbird',
                  'Mellow Foods',
                  'Hemlock',
                  'Lumen',
                  'Prairie',
                  'Northbound',
                  'Aster Beauty',
                  'Brickhouse',
                  'Paperbird',
                  'Mellow Foods',
                  'Hemlock',
                  'Lumen',
                  'Prairie',
                ].map((brand, bIdx) => (
                  <div
                    key={bIdx}
                    className="shrink-0 text-center py-2 px-3 group transition-all cursor-default"
                  >
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:scale-105 inline-block transition-all duration-300 font-sans select-none">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { number: '47', label: 'Brands scaled', desc: 'Accelerated and optimized' },
                { number: '$14M+', label: 'Ad-spend managed', desc: 'Deployed with high efficiency' },
                { number: '312%', label: 'Average ROAS uplift', desc: 'Measurable return on growth' },
                { number: '9 yrs', label: 'Industry experience', desc: 'Tested across diverse markets' },
              ].map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 p-6 sm:p-7 flex flex-col justify-between group hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md transition-all rounded-none relative"
                >
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-slate-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 pt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: PRICING (Image 2 & Image 3)                    */}
      {/* ========================================================= */}
      <section
        id="pricing"
        className="relative pt-8 pb-20 lg:pt-10 lg:pb-28 bg-white dark:bg-slate-900 overflow-hidden"
      >
        <Container>
          <div className="space-y-12 lg:space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                Simple pricing.{' '}
                <span className="font-serif italic font-normal text-slate-500 dark:text-slate-400">
                  No surprises.
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                Pick a format, book a time, we talk. Invoicing handled separately — no payment required to reserve.
              </p>

              {/* Category Tab Switcher */}
              <div className="pt-4 flex justify-center">
                <div className="inline-flex p-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
                  <button
                    onClick={() => setPricingCategory('advisory')}
                    className={cn(
                      'px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer',
                      pricingCategory === 'advisory'
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    )}
                  >
                    Advisory & Strategy (4 Plans)
                  </button>
                  <button
                    onClick={() => setPricingCategory('enterprise')}
                    className={cn(
                      'px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5',
                      pricingCategory === 'enterprise'
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    )}
                  >
                    <span>Enterprise & Info-Ops</span>
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  </button>
                </div>
              </div>
            </div>

            {/* TAB 1: Advisory & Strategy Plans */}
            {pricingCategory === 'advisory' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch animate-fadeIn">
                {advisoryPlans.map((plan, pIdx) => (
                  <div
                    key={pIdx}
                    className={cn(
                      'bg-white dark:bg-slate-900 border rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all duration-300 relative group hover:-translate-y-1',
                      plan.popular
                        ? 'border-slate-950 dark:border-white shadow-lg ring-1 ring-slate-950/10 dark:ring-white/10'
                        : 'border-slate-200/90 dark:border-slate-800 hover:shadow-md'
                    )}
                  >
                    <div className="space-y-4">
                      <div className="h-6 flex items-center">
                        {plan.popular && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-bold shadow-xs">
                            <Sparkles className="w-3 h-3" />
                            <span>{plan.popularBadge}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                        {plan.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug min-h-[36px]">
                        {plan.subtitle}
                      </p>

                      <div className="pt-2 flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-black font-mono text-slate-950 dark:text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {plan.period}
                        </span>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => handleSelectPlanAndSchedule(plan.id)}
                          className="w-full h-11 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-98 bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950"
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-slate-900 dark:text-slate-100 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: Enterprise & Info-Ops Plans */}
            {pricingCategory === 'enterprise' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto animate-fadeIn">
                {enterprisePlans.map((plan, pIdx) => (
                  <div
                    key={pIdx}
                    className={cn(
                      'rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 border',
                      plan.isDarkCard
                        ? 'bg-slate-950 text-white border-slate-800 shadow-2xl ring-1 ring-rose-500/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg'
                    )}
                  >
                    <div className="space-y-4">
                      <div className="h-6 flex items-center">
                        {plan.popular && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-bold shadow-xs">
                            <Sparkles className="w-3 h-3" />
                            <span>{plan.popularBadge}</span>
                          </div>
                        )}
                      </div>

                      <h3
                        className={cn(
                          'text-2xl font-bold',
                          plan.isDarkCard ? 'text-white' : 'text-slate-950 dark:text-white'
                        )}
                      >
                        {plan.name}
                      </h3>

                      <p
                        className={cn(
                          'text-xs sm:text-sm leading-snug min-h-[36px]',
                          plan.isDarkCard ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                        )}
                      >
                        {plan.subtitle}
                      </p>

                      <div className="pt-2 flex items-baseline gap-1">
                        <span
                          className={cn(
                            'text-4xl sm:text-5xl font-black font-mono tracking-tight',
                            plan.isDarkCard ? 'text-white' : 'text-slate-950 dark:text-white'
                          )}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={cn(
                            'text-xs font-medium',
                            plan.isDarkCard ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
                          )}
                        >
                          {plan.period}
                        </span>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => handleSelectPlanAndSchedule(plan.id)}
                          className={cn(
                            'w-full h-12 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98',
                            plan.isDarkCard
                              ? 'bg-rose-600 hover:bg-rose-700 text-white'
                              : 'bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950'
                          )}
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'pt-6 mt-6 border-t space-y-3',
                        plan.isDarkCard ? 'border-slate-800' : 'border-slate-100 dark:border-slate-800'
                      )}
                    >
                      {plan.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className={cn(
                            'flex items-start gap-2.5 text-xs sm:text-sm',
                            plan.isDarkCard ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'
                          )}
                        >
                          <Check className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8 & 9: SCROLL-DRIVEN STACKED SEQUENCE             */}
      {/* (SCHEDULE "Pick a time" -> TESTIMONIALS "What founders say") */}
      {/* ========================================================= */}
      <div
        id="schedule"
        ref={scheduleStackRef}
        className="relative h-[250vh] border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900"
      >
        {/* Pinned Sticky Viewport Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
          
          {/* ========================================================= */}
          {/* LAYER 1: PROGRESSIVE MULTI-STEP SCHEDULE WIZARD           */}
          {/* ========================================================= */}
          <div
            className={cn(
              'w-full max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-500 ease-out absolute inset-x-0 my-auto',
              scheduleStackProgress >= 0.60 ? 'pointer-events-none' : 'pointer-events-auto'
            )}
            style={{
              transform: isScheduleTransitioning
                ? `translateY(${-scheduleTransitionRatio * 150}px) scale(${1 - scheduleTransitionRatio * 0.08})`
                : 'translateY(0px) scale(1)',
              opacity: isScheduleTransitioning ? Math.max(1 - scheduleTransitionRatio * 1.5, 0) : 1,
              filter: isScheduleTransitioning ? `blur(${scheduleTransitionRatio * 6}px)` : 'none',
            }}
          >
            <div className="space-y-8 lg:space-y-10">
              {/* Header with Title & Context */}
              <div className="text-center space-y-2.5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.18]">
                  Pick a time{' '}
                  <span className="font-serif italic font-normal text-rose-600 dark:text-rose-500">
                    that works.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                  All times are shown in Eastern Time (Dover, DE). Reschedule freely up to 24 hours before.
                </p>

                {/* 3 Quick Value Badges */}
                <div className="pt-1 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                    <span>1-on-1 video call via Google Meet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                    <span>Starts at 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                    <span>Free to reserve - invoice sent after</span>
                  </div>
                </div>
              </div>

              {/* STEP PROGRESS TRACKER */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-1.5 sm:p-2 rounded-full border border-slate-200/80 dark:border-slate-700 max-w-xl mx-auto flex items-center justify-between">
                {[
                  { stepNum: 1, label: '01 Plan' },
                  { stepNum: 2, label: '02 Date & Time' },
                  { stepNum: 3, label: '03 Your Details' },
                  { stepNum: 4, label: '04 Confirmation' },
                ].map((s) => (
                  <button
                    key={s.stepNum}
                    onClick={() => {
                      if (s.stepNum < scheduleStep || (s.stepNum === 2 && selectedPlanId)) {
                        setScheduleStep(s.stepNum);
                      }
                    }}
                    className={cn(
                      'flex-1 py-1.5 px-2 rounded-full text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer',
                      scheduleStep === s.stepNum
                        ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                        : scheduleStep > s.stepNum
                        ? 'text-slate-800 dark:text-slate-200 font-semibold'
                        : 'text-slate-400 dark:text-slate-500 cursor-not-allowed'
                    )}
                  >
                    {scheduleStep > s.stepNum && <CheckCircle2 className="w-3 h-3 text-rose-600 dark:text-rose-500 shrink-0" />}
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>

              {/* STEP 1: CHOOSE A PLAN */}
              {scheduleStep === 1 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 rounded-2xl shadow-sm space-y-4 animate-fadeIn max-h-[380px] overflow-y-auto">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                        Step 1: Choose Your Consultation Format
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">1 of 3</span>
                  </div>

                  <div className="space-y-2.5">
                    {allAvailablePlans.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={cn(
                            'p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 cursor-pointer group',
                            isSelected
                              ? 'bg-slate-50 dark:bg-slate-800/90 border-slate-950 dark:border-white shadow-sm ring-1 ring-slate-950/10'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={cn(
                                'w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-colors',
                                isSelected
                                  ? 'border-rose-600 dark:border-rose-500 bg-rose-600 dark:bg-rose-500'
                                  : 'border-slate-300 dark:border-slate-600 group-hover:border-slate-400'
                              )}
                            >
                              {isSelected && <div className="w-1 h-1 rounded-full bg-white" />}
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-xs sm:text-sm text-slate-950 dark:text-white">
                                  {plan.name}
                                </span>
                                {plan.popular && (
                                  <span className="px-2 py-0.2 rounded-full bg-rose-50 dark:bg-rose-950/50 text-[9px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                                    {plan.popularBadge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {plan.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3 pl-7 sm:pl-0">
                            <span className="text-[11px] font-medium text-slate-400">
                              {plan.duration}
                            </span>
                            <div className="text-right">
                              <span className="text-sm sm:text-base font-black font-mono text-slate-950 dark:text-white">
                                {plan.price}
                              </span>
                              <span className="text-[10px] text-slate-400 ml-1">
                                {plan.period}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button
                      onClick={() => setScheduleStep(2)}
                      className="h-11 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
                    >
                      <span>Continue to Date & Time</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: SELECT DATE & TIME */}
              {scheduleStep === 2 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 rounded-2xl shadow-sm space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                        Step 2: Select Date & Time
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Selected Plan: <strong className="text-slate-900 dark:text-white">{selectedPlanObj.name}</strong> ({selectedPlanObj.price})
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">2 of 3</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-6 bg-slate-50/70 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">SELECT A DATE</span>
                        <span className="text-xs font-bold text-slate-950 dark:text-white">August 2026</span>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, dIdx) => (
                          <div key={dIdx} className="font-bold text-slate-400 py-0.5 text-[10px]">
                            {day}
                          </div>
                        ))}
                        <div className="py-1 text-slate-300"></div>
                        <div className="py-1 text-slate-300"></div>
                        <div className="py-1 text-slate-300"></div>
                        <div className="py-1 text-slate-300"></div>
                        <div className="py-1 text-slate-300"></div>
                        <div className="py-1 text-slate-300">1</div>
                        <div className="py-1 text-slate-300">2</div>

                        {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((dateNum) => {
                          const isSelected = selectedDate === dateNum;
                          const isAvailable = dateNum >= 20;

                          return (
                            <button
                              key={dateNum}
                              disabled={!isAvailable}
                              onClick={() => setSelectedDate(dateNum)}
                              className={cn(
                                'py-1.5 rounded-lg font-mono text-[11px] font-semibold transition-all cursor-pointer',
                                isSelected
                                  ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                                  : isAvailable
                                  ? 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-transparent'
                                  : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
                              )}
                            >
                              {dateNum}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="md:col-span-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">SELECT A TIME</span>
                        <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                          Thursday, Aug {selectedDate}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 max-h-[210px] overflow-y-auto pr-1">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={cn(
                                'py-2 px-2.5 rounded-lg text-xs font-mono font-bold border transition-all text-center cursor-pointer',
                                isSelected
                                  ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-xs'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                              )}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setScheduleStep(1)}
                      className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      onClick={() => setScheduleStep(3)}
                      className="h-11 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION */}
              {scheduleStep === 3 && (
                <form
                  onSubmit={handleBookingSubmit}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 rounded-2xl shadow-sm space-y-4 animate-fadeIn max-h-[380px] overflow-y-auto"
                >
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                        Step 3: Your Information
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">3 of 3</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-3.5 h-3.5 text-rose-600 dark:text-rose-500" />
                      <span className="font-bold text-slate-900 dark:text-white">{selectedPlanObj.name}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 dark:text-slate-300">Thu, Aug {selectedDate} at {selectedTime} (EDT)</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">{selectedPlanObj.price}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        NAME *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={bookingFormData.name}
                          onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                          className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        EMAIL *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={bookingFormData.email}
                          onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                          className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        PHONE (OPTIONAL)
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={bookingFormData.phone}
                          onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                          className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setScheduleStep(2)}
                      className="px-4 py-2 rounded-none border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="h-11 px-7 rounded-none bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
                    >
                      <span>Proceed to Payment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

              {/* ========================================================= */}
              {/* STEP 4: BESPOKE CONTENTS LLC SECURE CHECKOUT SCREEN       */}
              {/* ========================================================= */}
              {scheduleStep === 4 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-none shadow-2xl p-6 sm:p-8 animate-fadeIn max-h-[82vh] overflow-y-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT COLUMN: ORDER SUMMARY & CURRENCY SWITCHER */}
                    <div className="lg:col-span-5 space-y-6 lg:pr-6 lg:border-r border-slate-200 dark:border-slate-800">
                      {/* Back & Logo */}
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setScheduleStep(3)}
                          className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                          title="Back to info"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <img
                          src={logoImg}
                          alt="Contents LLC"
                          className="h-8 w-auto object-contain"
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Payment to
                        </p>
                        <h3 className="text-base font-bold text-slate-950 dark:text-white">
                          Contents Digital Marketing, LLC
                        </h3>
                      </div>

                      {/* Currency Selector */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Select Currency / เลือกสกุลเงิน
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setCheckoutCurrency('THB')}
                            className={cn(
                              'p-2.5 rounded-none border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer',
                              checkoutCurrency === 'THB'
                                ? 'border-slate-950 dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs ring-1 ring-slate-950 dark:ring-white'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                            )}
                          >
                            <span className="flex items-center gap-1.5">
                              <span>🇹🇭</span>
                              <span>{formattedThb}</span>
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setCheckoutCurrency('USD')}
                            className={cn(
                              'p-2.5 rounded-none border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer',
                              checkoutCurrency === 'USD'
                                ? 'border-slate-950 dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs ring-1 ring-slate-950 dark:ring-white'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                            )}
                          >
                            <span className="flex items-center gap-1.5">
                              <span>🇺🇸</span>
                              <span>{formattedUsd}</span>
                            </span>
                          </button>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400">
                          1 USD = {USD_EXCHANGE_RATE.toFixed(4)} THB
                        </p>
                      </div>

                      {/* Selected Item Breakdown */}
                      <div className="p-4 rounded-none bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                              {selectedPlanObj.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                              2026-08-{selectedDate} • {selectedTime} EDT — 1:1 Strategic consultation and production blueprint.
                            </p>
                          </div>
                          <span className="text-xs font-bold font-mono text-slate-900 dark:text-white shrink-0">
                            {checkoutCurrency === 'THB' ? originalThb : originalUsd}
                          </span>
                        </div>

                        {appliedPromo && (
                          <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-2 border-t border-slate-200 dark:border-slate-700">
                            <span className="flex items-center gap-1">
                              <Tag className="w-3.5 h-3.5" />
                              <span>Promo Code ({appliedPromo} -{discountPercent}%)</span>
                            </span>
                            <button
                              type="button"
                              onClick={handleRemovePromo}
                              className="text-[11px] text-rose-500 hover:underline cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                        )}

                        {/* Promo Code Input */}
                        {!appliedPromo && (
                          <form onSubmit={handleApplyPromo} className="pt-2 border-t border-slate-200 dark:border-slate-700 flex gap-2">
                            <input
                              type="text"
                              placeholder="Promo code (try VIP10)"
                              value={promoCodeInput}
                              onChange={(e) => setPromoCodeInput(e.target.value)}
                              className="flex-1 h-8 px-2.5 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white uppercase placeholder:normal-case focus:outline-none focus:border-slate-900"
                            />
                            <button
                              type="submit"
                              className="h-8 px-3 rounded-none bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 cursor-pointer"
                            >
                              Apply
                            </button>
                          </form>
                        )}
                        {promoError && (
                          <p className="text-[11px] text-rose-500 font-medium">{promoError}</p>
                        )}

                        {/* Total Due */}
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-baseline justify-between">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            Total Due / ยอดรวมที่ต้องชำระ
                          </span>
                          <span className="text-lg font-mono font-bold text-slate-950 dark:text-white">
                            {checkoutCurrency === 'THB' ? formattedThb : formattedUsd}
                          </span>
                        </div>
                      </div>

                      {/* Carbon Removal & Guarantee */}
                      <div className="space-y-2 text-[11px] text-slate-500 dark:text-slate-400">
                        <div className="flex items-start gap-2 p-2.5 rounded-none bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                          <span className="text-base shrink-0">🌱</span>
                          <p className="leading-relaxed">
                            Contents Digital Marketing, LLC will donate <strong>0.5% of your purchase</strong> to help remove CO₂ from the atmosphere.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: PAYMENT METHODS & FORM */}
                    <div className="lg:col-span-7 space-y-6">
                      {/* Express 1-Click Checkout */}
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={handleProcessPayment}
                            className="h-11 rounded-none bg-black hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-98"
                          >
                            <span> Pay</span>
                          </button>
                          <button
                            type="button"
                            onClick={handleProcessPayment}
                            className="h-11 rounded-none bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-98"
                          >
                            <span>⚡ link</span>
                          </button>
                        </div>

                        <div className="relative flex items-center justify-center py-2">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                          </div>
                          <span className="relative px-3 bg-white dark:bg-slate-900 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            Or pay with card
                          </span>
                        </div>
                      </div>

                      {/* Payment Form */}
                      <form onSubmit={handleProcessPayment} className="space-y-4">
                        {/* Contact info pre-fill */}
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            CONTACT EMAIL
                          </label>
                          <input
                            type="email"
                            required
                            value={bookingFormData.email}
                            onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                            className="w-full h-10 px-3 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900"
                          />
                        </div>

                        {/* Payment Method Selector Tabs */}
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            PAYMENT METHOD / วิธีการชำระเงิน
                          </label>

                          <div className="border border-slate-300 dark:border-slate-700 rounded-none divide-y divide-slate-200 dark:divide-slate-800">
                            {/* Option 1: Credit Card */}
                            <div className="p-3.5 space-y-3 bg-white dark:bg-slate-900">
                              <label className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    name="payment_method"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                    className="accent-slate-950"
                                  />
                                  <CreditCard className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                                    Card (บัตรเครดิต / เดบิต)
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                                  <span className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-none border border-slate-200 dark:border-slate-700">VISA</span>
                                  <span className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-none border border-slate-200 dark:border-slate-700">MC</span>
                                  <span className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-none border border-slate-200 dark:border-slate-700">JCB</span>
                                </div>
                              </label>

                              {paymentMethod === 'card' && (
                                <div className="space-y-3 pt-2">
                                  <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase">
                                      Card Number
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      placeholder="4242 •••• •••• 4242"
                                      value={cardData.number}
                                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                                      className="w-full h-9 px-3 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-slate-900"
                                    />
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                      <label className="text-[10px] font-bold text-slate-500 uppercase">
                                        MM / YY
                                      </label>
                                      <input
                                        type="text"
                                        required
                                        placeholder="12 / 28"
                                        value={cardData.expiry}
                                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                                        className="w-full h-9 px-3 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-slate-900"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="text-[10px] font-bold text-slate-500 uppercase">
                                        CVC / CVV
                                      </label>
                                      <input
                                        type="text"
                                        required
                                        placeholder="123"
                                        maxLength={4}
                                        value={cardData.cvc}
                                        onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                                        className="w-full h-9 px-3 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-slate-900"
                                      />
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase">
                                      Cardholder Name
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      placeholder="Full name on card"
                                      value={cardData.name}
                                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                                      className="w-full h-9 px-3 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Option 2: Thai PromptPay QR Code */}
                            <div className="p-3.5 space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
                              <label className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    name="payment_method"
                                    checked={paymentMethod === 'promptpay'}
                                    onChange={() => setPaymentMethod('promptpay')}
                                    className="accent-slate-950"
                                  />
                                  <QrCode className="w-4 h-4 text-emerald-600" />
                                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                                    PromptPay / Thai QR (พร้อมเพย์)
                                  </span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 border border-emerald-200 dark:border-emerald-800">
                                  INSTANT
                                </span>
                              </label>

                              {paymentMethod === 'promptpay' && (
                                <div className="pt-2 space-y-2 text-center">
                                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 inline-block mx-auto">
                                    <QrCode className="w-32 h-32 mx-auto text-slate-900 dark:text-white" />
                                    <p className="text-[10px] font-mono mt-1 text-slate-500">
                                      Scan to pay {formattedThb}
                                    </p>
                                  </div>
                                  <p className="text-[11px] text-slate-500">
                                    Compatible with all Thai banking apps (KBANK, SCB, BBL, KTB, etc.)
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Option 3: Bank Wire Transfer */}
                            <div className="p-3.5 space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
                              <label className="flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-2">
                                  <input
                                    type="radio"
                                    name="payment_method"
                                    checked={paymentMethod === 'bank'}
                                    onChange={() => setPaymentMethod('bank')}
                                    className="accent-slate-950"
                                  />
                                  <Building2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                                    US / Global Bank Wire Transfer
                                  </span>
                                </div>
                              </label>

                              {paymentMethod === 'bank' && (
                                <div className="pt-2 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-left text-xs font-mono space-y-1 text-slate-600 dark:text-slate-300">
                                  <p><strong>Bank:</strong> JPMorgan Chase Bank, N.A.</p>
                                  <p><strong>Account Name:</strong> Contents Digital Marketing, LLC</p>
                                  <p><strong>Routing (ACH/Wire):</strong> 021000021</p>
                                  <p><strong>SWIFT/BIC:</strong> CHASUS33XXX</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Submit Payment Button */}
                        <button
                          type="submit"
                          disabled={isProcessingPayment}
                          className="w-full h-12 rounded-none bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98 disabled:opacity-50"
                        >
                          <Lock className="w-4 h-4" />
                          <span>
                            {isProcessingPayment
                              ? 'Processing Secure Payment...'
                              : `Pay ${checkoutCurrency === 'THB' ? formattedThb : formattedUsd}`}
                          </span>
                        </button>

                        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                          <span className="flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                            <span>256-Bit SSL Encrypted</span>
                          </span>
                          <span>•</span>
                          <span>Powered by <strong>stripe</strong></span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 5: BOOKING & PAYMENT SUCCESS RECEIPT SCREEN          */}
              {/* ========================================================= */}
              {scheduleStep === 5 && (
                <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 sm:p-8 rounded-none shadow-2xl text-center space-y-5 animate-fadeIn max-w-xl mx-auto">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                      PAYMENT & RESERVATION CONFIRMED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                      You're all confirmed!
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      We've emailed your booking confirmation, official receipt, and Google Meet link to <strong className="text-slate-900 dark:text-white">{bookingFormData.email || 'your email'}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-none border border-slate-200 dark:border-slate-700 text-left space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                      <span className="text-slate-500">Transaction ID:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{transactionId || 'TXN-CTN-884192'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Engagement:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{selectedPlanObj.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Amount Paid:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{checkoutCurrency === 'THB' ? formattedThb : formattedUsd}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date & Time:</span>
                      <span className="font-bold text-slate-900 dark:text-white">Thursday, Aug {selectedDate}, 2026 at {selectedTime} EDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Platform:</span>
                      <span className="font-bold text-slate-900 dark:text-white">Google Meet (1:1 Video Workshop)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href="https://calendar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-none bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Add to Google Calendar</span>
                    </a>

                    <button
                      onClick={() => {
                        setScheduleStep(1);
                        setAppliedPromo(null);
                        setDiscountPercent(0);
                      }}
                      className="px-5 py-2.5 rounded-none border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      Schedule Another Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* LAYER 2: TESTIMONIALS MASONRY WALL ("What founders say")   */}
          {/* ========================================================= */}
          <div
            id="testimonials"
            className={cn(
              'w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500 ease-out absolute inset-x-0 my-auto',
              scheduleStackProgress >= 0.45 ? 'pointer-events-auto' : 'pointer-events-none'
            )}
            style={{
              transform: isScheduleTransitioning
                ? `translateY(${(1 - scheduleTransitionRatio) * 115}%) scale(${0.92 + scheduleTransitionRatio * 0.08})`
                : 'translateY(120%) scale(0.92)',
              opacity: isScheduleTransitioning ? Math.min(scheduleTransitionRatio * 1.5, 1) : 0,
            }}
          >
            <div className="space-y-8 lg:space-y-10">
              {/* Header: Rating Badge + Headline + Subtitle */}
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold shadow-2xs">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="font-bold text-slate-950 dark:text-white">4.9/5</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="text-slate-600 dark:text-slate-300">From 47 founder-led brands</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.18]">
                  What the founders{' '}
                  <span className="font-serif italic font-normal text-rose-600 dark:text-rose-500">
                    actually say.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                  Real feedback from founders and operators who scaled their revenue, eliminated operational drag, and deployed AI into production.
                </p>
              </div>

              {/* Testimonials Masonry Wall Container with Top/Bottom Gradient Mask */}
              <div className="relative h-[480px] sm:h-[540px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start h-full">
                  {/* Column 1 */}
                  <div className="space-y-4 sm:space-y-5 animate-marquee-vertical">
                    {[
                      {
                        quote:
                          'When I first partnered with Contents LLC, I was at a crossroads with our growth funnel. We had strong marketing ideas but lacked the technical automation to execute them at scale. They gave us the architecture, AI agents, and complete clarity we needed to move forward.',
                        author: 'Emily Johnson',
                        role: 'Founder, Aster Beauty',
                        avatar: 'EJ',
                      },
                      {
                        quote:
                          'Contents LLC automated our client reporting and lead triage in less than three weeks. What used to take our ops team 15 hours every week now runs automatically in the background. The ROI was obvious within the first month.',
                        author: 'Michael Roberts',
                        role: 'Managing Director, Mellow Foods',
                        avatar: 'MR',
                      },
                      {
                        quote:
                          'Our organic conversion and ad efficiency doubled after deploying their AI automation pipeline. Their tactical approach and deep technical understanding made the entire integration frictionless.',
                        author: 'Rachel Adams',
                        role: 'Head of Growth, Hemlock Studio',
                        avatar: 'RA',
                      },
                      {
                        quote:
                          'When I first partnered with Contents LLC, I was at a crossroads with our growth funnel. We had strong marketing ideas but lacked the technical automation to execute them at scale. They gave us the architecture, AI agents, and complete clarity we needed to move forward.',
                        author: 'Emily Johnson',
                        role: 'Founder, Aster Beauty',
                        avatar: 'EJ',
                      },
                      {
                        quote:
                          'Contents LLC automated our client reporting and lead triage in less than three weeks. What used to take our ops team 15 hours every week now runs automatically in the background. The ROI was obvious within the first month.',
                        author: 'Michael Roberts',
                        role: 'Managing Director, Mellow Foods',
                        avatar: 'MR',
                      },
                      {
                        quote:
                          'Our organic conversion and ad efficiency doubled after deploying their AI automation pipeline. Their tactical approach and deep technical understanding made the entire integration frictionless.',
                        author: 'Rachel Adams',
                        role: 'Head of Growth, Hemlock Studio',
                        avatar: 'RA',
                      },
                    ].map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 space-y-3 group"
                      >
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          "{card.quote}"
                        </p>

                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                              {card.avatar}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-950 dark:text-white">
                                {card.author}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                {card.role}
                              </div>
                            </div>
                          </div>

                          <div className="flex text-amber-400 shrink-0">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 sm:space-y-5 animate-marquee-vertical-slow">
                    {[
                      {
                        quote:
                          'Most consultants sell you 60-page decks and theoretical frameworks. Contents LLC actually built and shipped working AI systems into our live workflow. They moved us from understanding the problem to full production in record time.',
                        author: 'James Wilson',
                        role: 'CEO, Northbound',
                        avatar: 'JW',
                      },
                      {
                        quote:
                          'The Strategy Intensive gave us complete clarity on our AI roadmap for the next 12 months. Invoicing was straightforward, execution was lightning-fast, and the results speak directly to our bottom line.',
                        author: 'Sarah Lee',
                        role: 'Founder, Brickhouse',
                        avatar: 'SL',
                      },
                      {
                        quote:
                          'Having their team on call as a monthly partner feels like having a world-class AI architect in-house without the massive payroll overhead. Best business decision we made this year.',
                        author: 'David Chen',
                        role: 'Founder, Prairie Operations',
                        avatar: 'DC',
                      },
                      {
                        quote:
                          'Most consultants sell you 60-page decks and theoretical frameworks. Contents LLC actually built and shipped working AI systems into our live workflow. They moved us from understanding the problem to full production in record time.',
                        author: 'James Wilson',
                        role: 'CEO, Northbound',
                        avatar: 'JW',
                      },
                      {
                        quote:
                          'The Strategy Intensive gave us complete clarity on our AI roadmap for the next 12 months. Invoicing was straightforward, execution was lightning-fast, and the results speak directly to our bottom line.',
                        author: 'Sarah Lee',
                        role: 'Founder, Brickhouse',
                        avatar: 'SL',
                      },
                      {
                        quote:
                          'Having their team on call as a monthly partner feels like having a world-class AI architect in-house without the massive payroll overhead. Best business decision we made this year.',
                        author: 'David Chen',
                        role: 'Founder, Prairie Operations',
                        avatar: 'DC',
                      },
                    ].map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 space-y-3 group"
                      >
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          "{card.quote}"
                        </p>

                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                              {card.avatar}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-950 dark:text-white">
                                {card.author}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                {card.role}
                              </div>
                            </div>
                          </div>

                          <div className="flex text-amber-400 shrink-0">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="hidden lg:block space-y-4 sm:space-y-5 animate-marquee-vertical-fast">
                    {[
                      {
                        quote:
                          'Before Contents LLC, we were trying to stitch together random AI APIs with no real strategy. Their team came in, designed a clean enterprise RAG system around our actual data, and made everything feel simple and actionable.',
                        author: 'Laura Smith',
                        role: 'Co-Founder, Paperbird',
                        avatar: 'LS',
                      },
                      {
                        quote:
                          'Three weeks after implementing their AI-driven workflow, our customer response turnaround dropped from 4 hours to under 2 minutes. The project-based execution and hands-on support truly set them apart.',
                        author: 'Chris Brown',
                        role: 'CTO, Lumen',
                        avatar: 'CB',
                      },
                      {
                        quote:
                          'Compared to traditional agencies, Contents LLC offers incredible precision and speed. The custom AI tooling they built for our team is used every single day across all departments.',
                        author: 'Sophia Martinez',
                        role: 'COO, Northbound Operations',
                        avatar: 'SM',
                      },
                      {
                        quote:
                          'Before Contents LLC, we were trying to stitch together random AI APIs with no real strategy. Their team came in, designed a clean enterprise RAG system around our actual data, and made everything feel simple and actionable.',
                        author: 'Laura Smith',
                        role: 'Co-Founder, Paperbird',
                        avatar: 'LS',
                      },
                      {
                        quote:
                          'Three weeks after implementing their AI-driven workflow, our customer response turnaround dropped from 4 hours to under 2 minutes. The project-based execution and hands-on support truly set them apart.',
                        author: 'Chris Brown',
                        role: 'CTO, Lumen',
                        avatar: 'CB',
                      },
                      {
                        quote:
                          'Compared to traditional agencies, Contents LLC offers incredible precision and speed. The custom AI tooling they built for our team is used every single day across all departments.',
                        author: 'Sophia Martinez',
                        role: 'COO, Northbound Operations',
                        avatar: 'SM',
                      },
                    ].map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-lg hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 space-y-3 group"
                      >
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          "{card.quote}"
                        </p>

                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                              {card.avatar}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-950 dark:text-white">
                                {card.author}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                {card.role}
                              </div>
                            </div>
                          </div>

                          <div className="flex text-amber-400 shrink-0">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 10: FAQ (Questions, answered.)                    */}
      {/* ========================================================= */}
      <section
        id="faq"
        className="relative pt-8 pb-24 lg:pt-10 lg:pb-32 bg-white dark:bg-slate-900 overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading, Subtitle, CTA Button & Isometric graphic */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                  Frequently Asked <br />
                  <span className="font-sans font-black not-italic text-slate-950 dark:text-white">
                    Questions
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md font-normal">
                  Got questions? We've got answers! Browse our FAQ, or reach out anytime — we're here to help make your journey smooth sailing.
                </p>
              </div>

              {/* Action Button: Reach Out */}
              <div className="pt-2">
                <a href="#schedule">
                  <button className="h-12 px-8 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98">
                    <span>Reach Out</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>

              {/* Isometric / Modern Graphic Widget */}
              <div className="pt-8 hidden sm:block">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-4 max-w-sm">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-2xs shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                      Need custom consultation?
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Book a call and talk directly to our team.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Accordion Questions List */}
            <div className="lg:col-span-7 border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
              {faqItems.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;

                return (
                  <div key={fIdx} className="transition-colors">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {faq.question}
                      </span>
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0',
                          isOpen
                            ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-2xs rotate-45'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 group-hover:border-slate-400 dark:group-hover:border-slate-500'
                        )}
                      >
                        <Plus className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>

                    {/* Answer Reveal */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300 ease-in-out',
                        isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                      )}
                    >
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: FINAL CTA                                     */}
      {/* ========================================================= */}
      <section
        id="final-cta"
        className="relative py-24 lg:py-36 bg-white dark:bg-slate-900 overflow-hidden text-center"
      >
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.12]">
              Start with the problem.{' '}
              <br className="hidden sm:block" />
              <span className="font-serif italic font-normal text-rose-600 dark:text-rose-500">
                We'll figure out the solution.
              </span>
            </h2>

            {/* Human Editorial Sub-copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
              Pick a format that fits your stage, book a time directly on our calendar, and let's get straight to work.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <a href="#schedule">
                <button className="h-13 px-8 sm:px-9 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer active:scale-98">
                  <span>Book a consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              <a href="mailto:hello@contentsllc.com">
                <button className="h-13 px-8 sm:px-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-98">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Or send us an email</span>
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
