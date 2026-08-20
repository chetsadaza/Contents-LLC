import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'TH' | 'EN';

export interface LanguageOption {
  code: Language;
  label: string;
  name: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'TH', label: 'TH', name: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'EN', label: 'EN', name: 'English', flag: '🇺🇸' },
];

interface LanguageContextType {
  language: Language;
  currentLang: LanguageOption;
  setLanguage: (lang: Language) => void;
  availableLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app-lang') as Language;
    return saved === 'EN' ? 'EN' : 'TH';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-lang', lang);
  };

  const currentLang =
    AVAILABLE_LANGUAGES.find((item) => item.code === language) || AVAILABLE_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLang,
        setLanguage,
        availableLanguages: AVAILABLE_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
