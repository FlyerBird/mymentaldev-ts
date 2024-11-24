// src/types/index.ts

export interface ThemeProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }
  
  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    isDarkMode: boolean;
  }
  
  export interface NavbarProps extends ThemeProps {
    openModal: (content: 'about' | 'mentalTools') => void;
  }
  
  export interface LandingPageProps {
    isDarkMode: boolean;
  }
  
  // i18n types
  export interface TranslationSection {
    subtitle: string;
    description: string | Array<{content: string}> | Array<{
      title: string;
      content: string;
    }>;
  }
  
  export interface Translations {
    navbar: {
      about: string;
      mentalTools: string;
    };
    home: {
      welcome: string;
      description: string;
      personalGrowth: {
        title: string;
        description: string;
      };
      inclusiveApproach: {
        title: string;
        description: string;
      };
      lifeOptimization: {
        title: string;
        description: string;
      };
      whyUs: {
        title: string;
        reasons: string[];
      };
      startJourney: {
        title: string;
        description: string;
      };
    };
    common: {
      startJourney: string;
      getStarted: string;
      founderLink: string;
    };
    about: {
      title: string;
      sections: TranslationSection[];
    };
    mentalTools: {
      title: string;
      description: string;
    };
  }