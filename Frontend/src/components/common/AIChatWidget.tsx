import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  ChevronLeft,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: () => void }[];
}

type DepartmentKey = 'sales' | 'technical' | 'support';

interface DepartmentInfo {
  key: DepartmentKey;
  title: string;
  subtitle: string;
  greeting: string;
}

const DEPARTMENTS: Record<DepartmentKey, DepartmentInfo> = {
  sales: {
    key: 'sales',
    title: 'Sales',
    subtitle: 'Packages, custom quotes & $500 Intensive',
    greeting: `Hello! Welcome to **Contents Digital Marketing LLC** Sales.

I can help you explore our investment tiers ($30 Office Hours, $500 Strategy Intensive, $100/mo Retainer, or $28,000 Full Scale Buildout). How can we help you scale today?`,
  },
  technical: {
    key: 'technical',
    title: 'Technical',
    subtitle: 'AI agent pipelines, architecture & infra buildouts',
    greeting: `Hello! You are connected with our **Technical & Architecture** desk.

We build autonomous multi-agent pipelines, custom operations dashboards, and production AI systems. What technical challenge or infrastructure are you looking to build?`,
  },
  support: {
    key: 'support',
    title: 'Support',
    subtitle: 'Booking, Google Meet calls, billing & invoices',
    greeting: `Hello! Welcome to **Support & Client Operations**.

Need assistance with scheduling, rescheduling a 1-on-1 Google Meet session, payment options, or Delaware legal policies? Let me know how I can assist you!`,
  },
};

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<'departments' | 'contact-form' | 'chat'>('departments');
  const [selectedDeptKey, setSelectedDeptKey] = useState<DepartmentKey | null>(null);
  
  // User Form Details
  const [userName, setUserName] = useState<string>('');
  const [userContact, setUserContact] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  // Chat Conversation State
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (currentStep === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, currentStep]);

  // Focus input on chat open
  useEffect(() => {
    if (isOpen && currentStep === 'chat') {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen, currentStep]);

  const getTimeString = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Step 1 -> Select Department
  const handleSelectDepartment = (deptKey: DepartmentKey) => {
    setSelectedDeptKey(deptKey);
    setFormError('');
    setCurrentStep('contact-form');
  };

  // Step 2 -> Submit Contact Form & Start Chat
  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      setFormError('Please enter your name');
      return;
    }
    if (!userContact.trim()) {
      setFormError('Please enter your email or phone number');
      return;
    }

    setFormError('');
    const dept = DEPARTMENTS[selectedDeptKey || 'sales'];

    // Start Conversation with tailored greeting
    const welcomeMsg: Message = {
      id: 'welcome-1',
      sender: 'ai',
      text: `Hi **${userName.trim()}**, thanks for reaching out!

${dept.greeting}`,
      timestamp: getTimeString(),
      quickActions: [
        {
          label: 'Book Consultation',
          action: () => {
            window.location.hash = 'schedule';
            setIsOpen(false);
          },
        },
        {
          label: 'View Pricing Plans',
          action: () => {
            window.location.hash = 'pricing';
            setIsOpen(false);
          },
        },
      ],
    };

    setMessages([welcomeMsg]);
    setCurrentStep('chat');
  };

  // Step 3 -> Send Message & AI Simulation
  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: getTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateSmartReply(text);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: getTimeString(),
        quickActions: response.quickActions,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 850);
  };

  const generateSmartReply = (query: string): { text: string; quickActions?: { label: string; action: () => void }[] } => {
    const q = query.toLowerCase();

    if (q.includes('500') || q.includes('strategy') || q.includes('intensive')) {
      return {
        text: `The **Strategy Intensive ($500 / ฿16,980)** is our premier advisory session.

**Included in this package:**
- 90-minute live 1-on-1 strategy call with our Principal Architect via Google Meet
- Custom AI Roadmap & Architecture Blueprint tailored to your tech stack
- Automation feasibility audit and recommended tools
- 7 days of post-session direct async follow-up`,
        quickActions: [
          {
            label: 'Book $500 Intensive',
            action: () => {
              window.location.href = '/checkout?plan=strategy-intensive';
              setIsOpen(false);
            },
          },
          {
            label: 'Compare Plans',
            action: () => {
              window.location.hash = 'pricing';
              setIsOpen(false);
            },
          },
        ],
      };
    }

    if (q.includes('6-hour') || q.includes('buildout') || q.includes('28000') || q.includes('enterprise')) {
      return {
        text: `Our **6-Hour Complete Infrastructure Buildout ($28,000 / ฿950,880)** delivers full production deployment rapidly:

- End-to-end multi-agent autonomous pipelines
- Custom real-time metrics & ops dashboard
- Enterprise security hardening (SOC2 & GDPR aligned)
- Complete code handover & team walkthrough`,
        quickActions: [
          {
            label: 'Schedule Buildout Call',
            action: () => {
              window.location.hash = 'schedule';
              setIsOpen(false);
            },
          },
        ],
      };
    }

    if (q.includes('price') || q.includes('cost') || q.includes('plan') || q.includes('payment') || q.includes('method') || q.includes('card')) {
      return {
        text: `Here is our transparent pricing structure:

• **Office Hours:** $30 (30-min targeted session)
• **Strategy Intensive:** $500 (90-min comprehensive roadmap)
• **Monthly Partner:** $100 / mo (Ongoing advisory & reviews)
• **Full Scale Enterprise:** $28,000 (Complete 6-hour buildout)

**Payment Options:** We accept Credit/Debit Cards (Visa, MC, Amex), Google Pay, US Bank Account Transfer, Cash App Pay, and Crypto.`,
        quickActions: [
          {
            label: 'Go to Checkout',
            action: () => {
              window.location.href = '/checkout';
              setIsOpen(false);
            },
          },
        ],
      };
    }

    if (q.includes('book') || q.includes('schedule') || q.includes('meet') || q.includes('calendar')) {
      return {
        text: `Booking a consultation is easy:

1. Pick your preferred date & time in Eastern Time (EDT) on our Schedule calendar.
2. Enter your contact information.
3. Complete payment on our dedicated checkout page to instantly receive your Google Meet link!`,
        quickActions: [
          {
            label: 'Open Schedule Calendar',
            action: () => {
              window.location.hash = 'schedule';
              setIsOpen(false);
            },
          },
        ],
      };
    }

    if (q.includes('location') || q.includes('company') || q.includes('address') || q.includes('contact')) {
      return {
        text: `**Contents Digital Marketing LLC**
• **Address:** 1111B S Governors Ave, Dover, DE 19904, United States
• **Email:** ceo@contentsdigital.us
• **Phone:** +1 (507) 817-9006
• **Jurisdiction:** State of Delaware, USA`,
        quickActions: [
          {
            label: 'View Legal Policies',
            action: () => {
              window.location.href = '/privacy';
              setIsOpen(false);
            },
          },
        ],
      };
    }

    // Default response
    return {
      text: `Thank you for your question, ${userName || 'there'}! Our team specializes in high-velocity AI pipelines, automated workflows, and enterprise infrastructure.

Would you like to schedule a 1-on-1 session or explore our capabilities?`,
      quickActions: [
        {
          label: 'Schedule Session',
          action: () => {
            window.location.hash = 'schedule';
            setIsOpen(false);
          },
        },
      ],
    };
  };

  const handleReset = () => {
    setCurrentStep('departments');
    setSelectedDeptKey(null);
    setMessages([]);
  };

  const currentDept = selectedDeptKey ? DEPARTMENTS[selectedDeptKey] : null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* 1. FLOATING CHAT BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 h-12 px-4 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 shadow-xl border border-slate-800 dark:border-slate-200 transition-all duration-300 cursor-pointer active:scale-95"
          title="Open Assistant"
        >
          <MessageSquare className="w-4 h-4 text-white dark:text-slate-950" />
          <span className="text-xs font-bold tracking-tight">
            Chat with us
          </span>
        </button>
      )}

      {/* 2. CHAT MODAL WINDOW */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] max-w-[calc(100vw-24px)] h-[520px] max-h-[calc(100vh-80px)] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          
          {/* HEADER BAR (Clean, Non-cluttered) */}
          <div className="bg-slate-950 dark:bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800/90 shrink-0">
            <div>
              <h3 className="text-xs font-bold text-white tracking-tight">
                Contents Assistant
              </h3>
              <p className="text-[10px] text-slate-400 font-normal">
                Online — Instant reply
              </p>
            </div>

            <div className="flex items-center gap-1">
              {currentStep === 'chat' && (
                <button
                  onClick={handleReset}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* VIEW 1: WELCOME & DEPARTMENT SELECTION                    */}
          {/* ========================================================= */}
          {currentStep === 'departments' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-6 flex flex-col justify-center bg-slate-50/40 dark:bg-slate-950">
              {/* Clean Typography Intro */}
              <div className="text-center space-y-1.5 px-2">
                <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-snug">
                  Hello! How can we help you today?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Welcome! Please select a department to get started.
                </p>
              </div>

              {/* Department Buttons (Clean Minimalist Typography) */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center">
                  Please select a department
                </p>

                <div className="space-y-2">
                  {(Object.keys(DEPARTMENTS) as DepartmentKey[]).map((key) => {
                    const dept = DEPARTMENTS[key];

                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectDepartment(key)}
                        className="w-full p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer text-left"
                      >
                        <div className="space-y-0.5">
                          <span className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors block">
                            {dept.title}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 block leading-tight">
                            {dept.subtitle}
                          </span>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW 2: PRE-CHAT CONTACT INFORMATION FORM                 */}
          {/* ========================================================= */}
          {currentStep === 'contact-form' && currentDept && (
            <div className="flex-1 overflow-y-auto p-5 flex flex-col justify-between bg-white dark:bg-slate-950">
              <div className="space-y-4">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={() => setCurrentStep('departments')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                {/* Header for Department */}
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-950 dark:text-white">
                    {currentDept.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Please provide your contact details to start the conversation.
                  </p>
                </div>

                {/* Form Fields */}
                <form id="chat-contact-form" onSubmit={handleStartChat} className="space-y-3.5 pt-1">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email or Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter email or phone number"
                      value={userContact}
                      onChange={(e) => setUserContact(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white focus:bg-white transition-all"
                    />
                  </div>

                  {formError && (
                    <p className="text-[11px] text-rose-600 font-medium">
                      {formError}
                    </p>
                  )}
                </form>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="submit"
                  form="chat-contact-form"
                  className="w-full h-11 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer active:scale-98"
                >
                  <span>Start Chat</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW 3: LIVE CONVERSATION SCREEN                          */}
          {/* ========================================================= */}
          {currentStep === 'chat' && (
            <>
              {/* Message Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-slate-950 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      'flex flex-col space-y-1 animate-fadeIn',
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    )}
                  >
                    <span className="text-[10px] text-slate-400 font-mono px-1">
                      {msg.sender === 'user' ? 'You' : 'Contents Assistant'} • {msg.timestamp}
                    </span>

                    <div
                      className={cn(
                        'max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed',
                        msg.sender === 'user'
                          ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-br-none shadow-xs'
                          : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-bl-none shadow-2xs'
                      )}
                    >
                      <div className="whitespace-pre-line space-y-1.5 font-normal">
                        {msg.text}
                      </div>

                      {/* Quick Action Chips */}
                      {msg.quickActions && msg.quickActions.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                          {msg.quickActions.map((qa, aIdx) => (
                            <button
                              key={aIdx}
                              onClick={qa.action}
                              className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                            >
                              {qa.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* AI Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 text-xs pl-1 py-1 animate-pulse">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="text-[11px]">Typing reply...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Bar */}
              <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-1 h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-white focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="w-9 h-9 rounded-lg bg-slate-950 hover:bg-slate-800 disabled:opacity-30 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 flex items-center justify-center transition-colors cursor-pointer shadow-xs shrink-0"
                    title="Send"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </>
          )}

        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
