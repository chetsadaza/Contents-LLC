import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const HomePage: React.FC = () => {
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
  // STEP-BY-STEP PROGRESSIVE SCHEDULE WIZARD STATE
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
  const [isBookingSubmitted, setIsBookingSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const selectedPlanObj =
    allAvailablePlans.find((p) => p.id === selectedPlanId) || allAvailablePlans[1];

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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBookingSubmitted(true);
      setScheduleStep(4);
    }, 800);
  };

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

        {/* Ambient Gradient Glow (Subtle & Refined) */}
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

                  {/* 3. Story Paragraphs (Typewriter) */}
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

                  {/* 4. Bottom Motto Badge */}
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
                  {/* Vertical Progress Bar */}
                  <div className="absolute left-0 bottom-0 top-0 w-0.5 bg-slate-200 dark:bg-slate-800">
                    <div
                      className={cn(
                        'w-full bg-slate-900 dark:bg-white transition-all duration-700 ease-out origin-bottom',
                        scrollStep >= 2 ? 'h-full scale-y-100 opacity-100' : 'h-0 scale-y-0 opacity-0'
                      )}
                    />
                  </div>

                  {/* 3 Core Philosophies */}
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
                {/* ------------------------------------------------------------- */}
                {/* PART 1: OUR APPROACH (From Business Problem to AI in Production) */}
                {/* ------------------------------------------------------------- */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Header Title & Subtitle */}
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

                  {/* 3 Solution Track Cards */}
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
                          {/* Number Badge with Icon */}
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                              {card.icon}
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                              {card.id}
                            </span>
                          </div>

                          {/* Card Title */}
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                            {card.title}
                          </h3>

                          {/* Subtitle */}
                          <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                            {card.subtitle}
                          </p>

                          {/* Description Paragraph */}
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal pt-1">
                            {card.description}
                          </p>
                        </div>

                        {/* Suitable Tags & Bottom Action Link */}
                        <div className="pt-5 space-y-3.5 mt-auto">
                          {/* Suitable for badges */}
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

                          {/* Bottom CTA Link */}
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

                {/* ------------------------------------------------------------- */}
                {/* PART 2 & 3: AI CAPABILITIES (What We Build - ALL 6 CARDS)     */}
                {/* ------------------------------------------------------------- */}
                <div className="relative pt-8 sm:pt-12 pb-32">
                  {/* Category Header for Capabilities (Positioned ABOVE the line) */}
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

                  {/* Timeline Cards Container with Clean Vertical Line Starting Right Below Header */}
                  <div className="relative pb-6 flex flex-col items-center">
                    {/* Central Vertical Track Line */}
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

                    {/* 6 Capabilities Cards */}
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
                            {/* Card Box */}
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

                            {/* Center Node */}
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

                    {/* Bottom Project CTA */}
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
            {/* Header with Step Tabs & Navigation Arrows */}
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

              {/* Step Navigation Pill Tabs */}
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

            {/* Horizontal Sliding Carousel Track */}
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

            {/* Downward Arrow to Social Proof */}
            <div className="pt-4 pb-2 flex justify-center">
              <a
                href="#trusted-by"
                className="group flex flex-col items-center gap-2 cursor-pointer"
                title="Scroll down to Trusted Brands"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs hover:border-slate-400 dark:hover:border-slate-600 transition-all">
                  <ArrowDown className="w-4 h-4 text-slate-900 dark:text-white group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: TRUSTED BY BRANDS & METRICS (Social Proof)     */}
      {/* ========================================================= */}
      <section
        id="trusted-by"
        className="relative pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white dark:bg-slate-900 overflow-hidden"
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

            {/* Down Arrow to Pricing */}
            <div className="pt-4 flex justify-center">
              <a
                href="#pricing"
                className="group flex flex-col items-center gap-1.5 cursor-pointer"
                title="Scroll to Pricing Plans"
              >
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  Explore Pricing
                </span>
                <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs hover:border-slate-400 transition-all">
                  <ArrowDown className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: PRICING (Image 2 & Image 3)                    */}
      {/* ========================================================= */}
      <section
        id="pricing"
        className="relative py-24 lg:py-32 bg-slate-50/70 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden"
      >
        <Container>
          <div className="space-y-14 lg:space-y-16">
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

            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              <p>All prices in USD. Invoice sent separately after booking · no upfront payment.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: PROGRESSIVE MULTI-STEP SCHEDULE WIZARD         */}
      {/* ========================================================= */}
      <section
        id="schedule"
        className="relative py-24 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden"
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 lg:space-y-12">
            {/* Header with Title & Context */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.18]">
                Pick a time{' '}
                <span className="font-serif italic font-normal text-rose-600 dark:text-rose-500">
                  that works.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                All times are shown in Eastern Time (Dover, DE). Reschedule freely up to 24 hours before.
              </p>

              {/* 3 Quick Value Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>1-on-1 video call via Google Meet</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>Starts at 30 minutes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>Free to reserve - invoice sent after</span>
                </div>
              </div>
            </div>

            {/* STEP PROGRESS TRACKER */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 sm:p-2.5 rounded-full border border-slate-200/80 dark:border-slate-700 max-w-2xl mx-auto flex items-center justify-between">
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
                    'flex-1 py-2 px-2 sm:px-3 rounded-full text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer',
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
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Step 1: Choose Your Consultation Format
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Select the engagement model that matches your current stage.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">1 of 3</span>
                </div>

                <div className="space-y-3">
                  {allAvailablePlans.map((plan) => {
                    const isSelected = selectedPlanId === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={cn(
                          'p-4 sm:p-5 rounded-xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group',
                          isSelected
                            ? 'bg-slate-50 dark:bg-slate-800/90 border-slate-950 dark:border-white shadow-sm ring-1 ring-slate-950/10'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                        )}
                      >
                        <div className="flex items-start gap-3.5">
                          <div
                            className={cn(
                              'w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-colors',
                              isSelected
                                ? 'border-rose-600 dark:border-rose-500 bg-rose-600 dark:bg-rose-500'
                                : 'border-slate-300 dark:border-slate-600 group-hover:border-slate-400'
                            )}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm sm:text-base text-slate-950 dark:text-white">
                                {plan.name}
                              </span>
                              {plan.popular && (
                                <span className="px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/50 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                                  {plan.popularBadge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {plan.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 pl-8 sm:pl-0">
                          <span className="text-xs font-medium text-slate-400">
                            {plan.duration}
                          </span>
                          <div className="text-right">
                            <span className="text-lg sm:text-xl font-black font-mono text-slate-950 dark:text-white">
                              {plan.price}
                            </span>
                            <span className="text-[11px] text-slate-400 ml-1">
                              {plan.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setScheduleStep(2)}
                    className="h-12 px-7 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
                  >
                    <span>Continue to Date & Time</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT DATE & TIME */}
            {scheduleStep === 2 && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Step 2: Select Date & Time
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Selected Plan: <strong className="text-slate-900 dark:text-white">{selectedPlanObj.name}</strong> ({selectedPlanObj.price})
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">2 of 3</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left: Interactive Calendar (August 2026) */}
                  <div className="md:col-span-6 bg-slate-50/70 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">SELECT A DATE</span>
                      <span className="text-sm font-bold text-slate-950 dark:text-white">August 2026</span>
                    </div>

                    {/* Calendar Days Grid */}
                    <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, dIdx) => (
                        <div key={dIdx} className="font-bold text-slate-400 py-1">
                          {day}
                        </div>
                      ))}
                      {/* Blank offset for August 2026 */}
                      <div className="py-2 text-slate-300"></div>
                      <div className="py-2 text-slate-300"></div>
                      <div className="py-2 text-slate-300"></div>
                      <div className="py-2 text-slate-300"></div>
                      <div className="py-2 text-slate-300"></div>
                      <div className="py-2 text-slate-300">1</div>
                      <div className="py-2 text-slate-300">2</div>

                      {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((dateNum) => {
                        const isSelected = selectedDate === dateNum;
                        const isAvailable = dateNum >= 20;

                        return (
                          <button
                            key={dateNum}
                            disabled={!isAvailable}
                            onClick={() => setSelectedDate(dateNum)}
                            className={cn(
                              'py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer',
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

                  {/* Right: Time Slots Grid */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">SELECT A TIME</span>
                      <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                        Thursday, Aug {selectedDate}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 max-h-[260px] overflow-y-auto pr-1">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              'py-2.5 px-3 rounded-lg text-xs font-mono font-bold border transition-all text-center cursor-pointer',
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

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setScheduleStep(1)}
                    className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Plans</span>
                  </button>

                  <button
                    onClick={() => setScheduleStep(3)}
                    className="h-12 px-7 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
                  >
                    <span>Continue to Your Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT INFORMATION */}
            {scheduleStep === 3 && (
              <form
                onSubmit={handleBookingSubmit}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 animate-fadeIn"
              >
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Step 3: Your Information
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      We'll send the Google Meet invitation and booking confirmation here.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">3 of 3</span>
                </div>

                {/* Selected Slot Recap Banner */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
                    <span className="font-bold text-slate-900 dark:text-white">{selectedPlanObj.name}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600 dark:text-slate-300">Thursday, Aug {selectedDate}, 2026 at {selectedTime} (Eastern Time)</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{selectedPlanObj.price}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      NAME *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={bookingFormData.name}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                        className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      EMAIL *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={bookingFormData.email}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                        className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      PHONE (OPTIONAL)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={bookingFormData.phone}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                        className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      WHAT DO YOU WANT TO TACKLE? (OPTIONAL)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        placeholder="Brief context: business, main goal, current blocker..."
                        value={bookingFormData.topic}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, topic: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setScheduleStep(2)}
                    className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 px-8 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Booking Session...' : 'Confirm & Reserve Meeting'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: SUCCESS CONFIRMATION MODAL / SCREEN */}
            {scheduleStep === 4 && isBookingSubmitted && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl text-center space-y-6 animate-fadeIn max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                    You're all scheduled!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    We've sent a calendar invitation and meeting link to <strong className="text-slate-900 dark:text-white">{bookingFormData.email || 'your email'}</strong>.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 text-left space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Plan:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{selectedPlanObj.name} ({selectedPlanObj.price})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date & Time:</span>
                    <span className="font-bold text-slate-900 dark:text-white">Thursday, Aug {selectedDate}, 2026 at {selectedTime} (EDT)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-slate-900 dark:text-white">Google Meet Video Call</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-2">
                    <span className="text-slate-500">Payment:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Invoice sent separately after booking</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setScheduleStep(1);
                      setIsBookingSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    Schedule Another Time
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
