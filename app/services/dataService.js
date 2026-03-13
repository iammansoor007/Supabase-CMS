// src/services/dataService.js
import { 
  FaStar, FaHome, FaShieldAlt, FaHeart, FaCalendarCheck, FaPhoneAlt,
  FaArrowRight, FaCheckCircle, FaQuoteRight, FaCalendarAlt, FaCouch,
  FaChair, FaQuestionCircle, FaDollarSign, FaClock, FaLightbulb,
  FaBuilding, FaTree, FaSnowflake, FaChevronDown
} from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';

// Map icon strings to actual components
const iconMap = {
  FaStar, FaHome, FaShieldAlt, FaHeart, FaCalendarCheck, FaPhoneAlt,
  FaArrowRight, FaCheckCircle, FaQuoteRight, FaCalendarAlt, FaCouch,
  FaChair, FaQuestionCircle, FaDollarSign, FaClock, FaLightbulb,
  FaBuilding, FaTree, FaSnowflake, FaChevronDown,
  GiSparkles
};

// Helper function to get icon component
export const getIconComponent = (iconName) => {
  return iconMap[iconName] || FaCheckCircle;
};

// Default fallback data
const defaultData = {
  hero: {
    stats: []
  },
  services: {
    items: []
  },
  howWeWork: {
    steps: []
  },
  faq: {
    items: []
  },
  workShowcase: {},
  cta: {},
  contact: {}
};

// Safely load data with error handling
let appData = defaultData;
try {
  // Try to import the data, but don't crash if it fails
  const dataModule = require('../../public/data.json');
  appData = dataModule.default || dataModule || defaultData;
} catch (error) {
  console.warn('Could not load data.json, using default data');
  // Use default data
}

// Data fetching functions with safe access
export const getHeroData = () => {
  try {
    const heroData = appData.hero || defaultData.hero;
    // Map icons in stats safely
    heroData.stats = (heroData.stats || []).map(stat => ({
      ...stat,
      icon: getIconComponent(stat.icon)
    }));
    return heroData;
  } catch (error) {
    console.warn('Error in getHeroData:', error);
    return defaultData.hero;
  }
};

export const getServicesData = () => {
  try {
    const servicesData = appData.services || defaultData.services;
    // Map icons in items safely
    servicesData.items = (servicesData.items || []).map(item => ({
      ...item,
      icon: getIconComponent(item.icon)
    }));
    return servicesData;
  } catch (error) {
    console.warn('Error in getServicesData:', error);
    return defaultData.services;
  }
};

export const getHowWeWorkData = () => {
  try {
    const workData = appData.howWeWork || defaultData.howWeWork;
    // Map icons in steps safely
    workData.steps = (workData.steps || []).map(step => ({
      ...step,
      icon: getIconComponent(step.icon)
    }));
    return workData;
  } catch (error) {
    console.warn('Error in getHowWeWorkData:', error);
    return defaultData.howWeWork;
  }
};

export const getFAQData = () => {
  try {
    const faqData = appData.faq || defaultData.faq;
    // Map icons in items safely
    faqData.items = (faqData.items || []).map(item => ({
      ...item,
      icon: getIconComponent(item.icon)
    }));
    return faqData;
  } catch (error) {
    console.warn('Error in getFAQData:', error);
    return defaultData.faq;
  }
};

export const getWorkShowcaseData = () => {
  try {
    return appData.workShowcase || defaultData.workShowcase;
  } catch (error) {
    return defaultData.workShowcase;
  }
};

export const getCTAData = () => {
  try {
    return appData.cta || defaultData.cta;
  } catch (error) {
    return defaultData.cta;
  }
};

export const getContactData = () => {
  try {
    return appData.contact || defaultData.contact;
  } catch (error) {
    return defaultData.contact;
  }
};

// Get all data
export const getAllData = () => {
  try {
    return appData;
  } catch (error) {
    return defaultData;
  }
};