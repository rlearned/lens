import { NutritionData, ContextTranslation, VisualTranslation, TrustIndicator, CulturalContext } from '@/types';

/**
 * Core Translation Engine
 * Translates nutrition data into culturally appropriate visual languages
 */

// Sugar Translation (grams → visual equivalents)
function translateSugar(sugar_g: number, context: CulturalContext): VisualTranslation {
  const translations: Record<CulturalContext, Record<string, VisualTranslation>> = {
    weird: {
      low: {
        type: 'text',
        value: sugar_g,
        display: `${sugar_g}g sugar (${Math.round((sugar_g / 50) * 100)}% DV)`,
        explanation: 'Scientific notation with daily value percentage',
      },
      medium: {
        type: 'text',
        value: sugar_g,
        display: `${sugar_g}g sugar (${Math.round((sugar_g / 50) * 100)}% DV)`,
        explanation: 'Scientific notation with daily value percentage',
      },
      high: {
        type: 'text',
        value: sugar_g,
        display: `${sugar_g}g sugar (${Math.round((sugar_g / 50) * 100)}% DV) ⚠️`,
        explanation: 'Scientific notation with warning',
      },
    },
    rural: {
      low: {
        type: 'icon',
        value: Math.round(sugar_g / 4),
        display: '🧊 '.repeat(Math.max(1, Math.round(sugar_g / 4))),
        explanation: 'Sugar cubes: Rural Chinese consumers measure sweetness by spoons of sugar in tea',
      },
      medium: {
        type: 'icon',
        value: Math.round(sugar_g / 4),
        display: '🧊 '.repeat(Math.round(sugar_g / 4)) + ` (${Math.round(sugar_g / 4)} cubes)`,
        explanation: 'Sugar cubes with count for emphasis',
      },
      high: {
        type: 'icon',
        value: Math.round(sugar_g / 4),
        display: '🧊 '.repeat(Math.round(sugar_g / 4)) + ` (${Math.round(sugar_g / 4)} cubes - Very Sweet!)`,
        explanation: 'Sugar cubes with clear warning in relatable terms',
      },
    },
    eastwa: {
      low: {
        type: 'comparison',
        value: sugar_g,
        display: `Less than 1 apple's sweetness`,
        explanation: 'Familiar fruit comparison for Latino farmworker community',
      },
      medium: {
        type: 'comparison',
        value: sugar_g,
        display: `About ${Math.round(sugar_g / 12)} tablespoon${Math.round(sugar_g / 12) > 1 ? 's' : ''} of sugar`,
        explanation: 'Kitchen measurements familiar to home cooks',
      },
      high: {
        type: 'comparison',
        value: sugar_g,
        display: `${Math.round(sugar_g / 12)} tablespoons - Like a small soda!`,
        explanation: 'Relatable comparison with emphasis',
      },
    },
    lowlit: {
      low: {
        type: 'scale',
        value: 1,
        display: '🟢 Low Sugar',
        explanation: 'Simple color-coded scale',
      },
      medium: {
        type: 'scale',
        value: 2,
        display: '🟡 Medium Sugar',
        explanation: 'Traffic light system for quick recognition',
      },
      high: {
        type: 'scale',
        value: 3,
        display: '🔴 High Sugar',
        explanation: 'Universal red = caution',
      },
    },
  };

  // Determine level
  let level: 'low' | 'medium' | 'high';
  if (sugar_g < 10) level = 'low';
  else if (sugar_g < 25) level = 'medium';
  else level = 'high';

  return translations[context][level];
}

// Sodium Translation (mg → visual equivalents)
function translateSodium(sodium_mg: number, context: CulturalContext): VisualTranslation {
  const translations: Record<CulturalContext, Record<string, VisualTranslation>> = {
    weird: {
      low: {
        type: 'text',
        value: sodium_mg,
        display: `${sodium_mg}mg sodium (${Math.round((sodium_mg / 2300) * 100)}% DV)`,
        explanation: 'Scientific notation with daily value',
      },
      medium: {
        type: 'text',
        value: sodium_mg,
        display: `${sodium_mg}mg sodium (${Math.round((sodium_mg / 2300) * 100)}% DV)`,
        explanation: 'Scientific notation with daily value',
      },
      high: {
        type: 'text',
        value: sodium_mg,
        display: `${sodium_mg}mg sodium (${Math.round((sodium_mg / 2300) * 100)}% DV) ⚠️`,
        explanation: 'Scientific notation with warning',
      },
    },
    rural: {
      low: {
        type: 'scale',
        value: 1,
        display: '😊 Lightly salted',
        explanation: 'Emotional indicators resonate more than numbers',
      },
      medium: {
        type: 'scale',
        value: 2,
        display: '😐 Moderately salted',
        explanation: 'Face-based scale for quick understanding',
      },
      high: {
        type: 'scale',
        value: 3,
        display: '😟 Very salty - be careful!',
        explanation: 'Concerned face signals caution',
      },
    },
    eastwa: {
      low: {
        type: 'scale',
        value: 1,
        display: '🟢 Low Salt',
        explanation: 'Simple color system familiar from traffic lights',
      },
      medium: {
        type: 'scale',
        value: 2,
        display: '🟡 Medium Salt',
        explanation: 'Yellow = proceed with caution',
      },
      high: {
        type: 'scale',
        value: 3,
        display: '🔴 High Salt - Half your daily limit!',
        explanation: 'Red with relatable framing',
      },
    },
    lowlit: {
      low: {
        type: 'scale',
        value: 1,
        display: '🟢 Low Salt',
        explanation: 'Universal color coding',
      },
      medium: {
        type: 'scale',
        value: 2,
        display: '🟡 Medium Salt',
        explanation: 'Traffic light system',
      },
      high: {
        type: 'scale',
        value: 3,
        display: '🔴 High Salt',
        explanation: 'Red = stop/caution',
      },
    },
  };

  let level: 'low' | 'medium' | 'high';
  if (sodium_mg < 140) level = 'low';
  else if (sodium_mg < 400) level = 'medium';
  else level = 'high';

  return translations[context][level];
}

// Calories Translation - Universal Body-Based Measurements
function translateCalories(calories: number, context: CulturalContext): VisualTranslation {
  // Universal: ~5 calories per minute of walking at moderate pace
  const walkingMinutes = (calories / 5).toFixed(1);
  
  const translations: Record<CulturalContext, Record<string, VisualTranslation>> = {
    weird: {
      low: {
        type: 'text',
        value: calories,
        display: `${calories} calories (${Math.round((calories / 2000) * 100)}% of 2000 cal diet)`,
        explanation: 'Standard calorie notation',
      },
      medium: {
        type: 'text',
        value: calories,
        display: `${calories} calories (${Math.round((calories / 2000) * 100)}% of 2000 cal diet)`,
        explanation: 'Standard calorie notation',
      },
      high: {
        type: 'text',
        value: calories,
        display: `${calories} calories (${Math.round((calories / 2000) * 100)}% of 2000 cal diet)`,
        explanation: 'Standard calorie notation',
      },
    },
    rural: {
      low: {
        type: 'comparison',
        value: parseFloat(walkingMinutes),
        display: `🚶 ${walkingMinutes} minutes of walking`,
        explanation: 'Walking time: Universal body-based measurement everyone understands',
      },
      medium: {
        type: 'comparison',
        value: parseFloat(walkingMinutes),
        display: `🚶 About ${walkingMinutes} minutes of walking`,
        explanation: 'Walking time as familiar energy unit',
      },
      high: {
        type: 'comparison',
        value: parseFloat(walkingMinutes),
        display: `🚶 ${walkingMinutes} minutes of walking - That's energy!`,
        explanation: 'Walking time with emphasis',
      },
    },
    eastwa: {
      low: {
        type: 'comparison',
        value: parseFloat(walkingMinutes),
        display: `🚶 ${walkingMinutes} minutes of walking`,
        explanation: 'Walking time: Universal measurement that crosses all cultural boundaries',
      },
      medium: {
        type: 'comparison',
        value: parseFloat(walkingMinutes),
        display: `🚶 ${walkingMinutes} minutes of walking`,
        explanation: 'Walking time as relatable energy measurement',
      },
      high: {
        type: 'comparison',
        value: parseFloat(walkingMinutes),
        display: `🚶 ${walkingMinutes} minutes to walk this off!`,
        explanation: 'Walking time with activity context',
      },
    },
    lowlit: {
      low: {
        type: 'scale',
        value: 1,
        display: '🟢 Light Snack',
        explanation: 'Simple portion categorization',
      },
      medium: {
        type: 'scale',
        value: 2,
        display: '🟡 Regular Portion',
        explanation: 'Medium portion size',
      },
      high: {
        type: 'scale',
        value: 3,
        display: '🔴 Large Portion',
        explanation: 'Large portion size',
      },
    },
  };

  let level: 'low' | 'medium' | 'high';
  if (calories < 100) level = 'low';
  else if (calories < 250) level = 'medium';
  else level = 'high';

  return translations[context][level];
}

// Trust Indicators based on context
function generateTrustIndicators(
  context: CulturalContext,
  productPopularity: number = 75 // 0-100
): TrustIndicator[] {
  const indicators: Record<CulturalContext, TrustIndicator[]> = {
    weird: [
      {
        type: 'doctor',
        display: 'FDA Approved',
        confidence: 95,
      },
    ],
    rural: [
      {
        type: 'neighbor',
        display: '✓ Neighbor Verified',
        confidence: productPopularity,
      },
      {
        type: 'community',
        display: 'Popular in local market',
        confidence: productPopularity > 70 ? 85 : 60,
      },
    ],
    eastwa: [
      {
        type: 'community',
        display: '✓ Community Choice',
        confidence: productPopularity,
      },
      {
        type: 'brand',
        display: 'Familiar Brand',
        confidence: 80,
      },
    ],
    lowlit: [
      {
        type: 'community',
        display: 'Popular Choice',
        confidence: productPopularity,
      },
    ],
  };

  return indicators[context].filter((i) => i.confidence > 50);
}

// Main Translation Function
export function translateNutrition(
  nutrition: NutritionData,
  context: CulturalContext
): ContextTranslation {
  const contextNames: Record<CulturalContext, string> = {
    weird: 'Standard WEIRD (Scientific)',
    rural: 'Rural Chinese (Visual & Social)',
    eastwa: 'Eastern Washington (Community-Based)',
    lowlit: 'Low-Literacy (Universal Symbols)',
  };

  return {
    context,
    contextName: contextNames[context],
    sugar: translateSugar(nutrition.sugar_g, context),
    sodium: translateSodium(nutrition.sodium_mg, context),
    calories: translateCalories(nutrition.calories, context),
    trustIndicators: generateTrustIndicators(context),
    overallMessage: getOverallMessage(nutrition, context),
  };
}

// Overall health message
function getOverallMessage(nutrition: NutritionData, context: CulturalContext): string {
  const isHighSugar = nutrition.sugar_g > 25;
  const isHighSodium = nutrition.sodium_mg > 400;

  const messages: Record<CulturalContext, Record<string, string>> = {
    weird: {
      healthy: 'Within recommended daily values',
      caution: 'High in sugar and/or sodium - consume in moderation',
    },
    rural: {
      healthy: 'This looks okay for occasional treats',
      caution: 'Very sweet and salty - maybe save for special occasions',
    },
    eastwa: {
      healthy: 'Okay to enjoy regularly',
      caution: 'High in sugar/salt - better as an occasional treat',
    },
    lowlit: {
      healthy: '👍 Okay choice',
      caution: '⚠️ Enjoy occasionally',
    },
  };

  return (isHighSugar || isHighSodium) ? messages[context].caution : messages[context].healthy;
}
