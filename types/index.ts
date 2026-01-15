// Cultural Context Types
export type CulturalContext = 'weird' | 'rural' | 'eastwa' | 'lowlit';

// Product Nutrition Data
export interface NutritionData {
  calories: number;
  sugar_g: number;
  sodium_mg: number;
  protein_g: number;
  fiber_g: number;
  servingSize: string;
}

// Product Definition
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'snack' | 'beverage' | 'meal' | 'condiment';
  nutrition: NutritionData;
  imagePlaceholder: string; // Description for placeholder
}

// Visual Translation Types
export interface VisualTranslation {
  type: 'icon' | 'scale' | 'comparison' | 'text';
  value: string | number;
  display: string;
  explanation: string;
}

// Trust Indicator
export interface TrustIndicator {
  type: 'neighbor' | 'community' | 'brand' | 'doctor';
  display: string;
  confidence: number; // 0-100
}

// Complete Translation for a Context
export interface ContextTranslation {
  context: CulturalContext;
  contextName: string;
  sugar: VisualTranslation;
  sodium: VisualTranslation;
  calories: VisualTranslation;
  protein?: VisualTranslation;
  fiber?: VisualTranslation;
  trustIndicators: TrustIndicator[];
  overallMessage: string;
}

// Research Persona
export interface Persona {
  id: string;
  name: string;
  context: CulturalContext;
  age: number;
  occupation: string;
  location: string;
  quote: string;
  trustPathway: string[];
  painPoints: string[];
  mentalModels: string[];
  photo: string; // Placeholder description
}

// Research Insight
export interface ResearchInsight {
  id: string;
  title: string;
  description: string;
  context: CulturalContext[];
  evidence: string;
  designImplication: string;
}

// Translation Mapping Rule
export interface TranslationRule {
  nutrient: keyof NutritionData;
  thresholds: {
    low: number;
    medium: number;
    high: number;
  };
  translations: {
    [key in CulturalContext]: {
      low: VisualTranslation;
      medium: VisualTranslation;
      high: VisualTranslation;
    };
  };
}

// Design Alternative (for rationale section)
export interface DesignAlternative {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  whyRejected?: string;
  chosen: boolean;
}
