import { Persona, ResearchInsight } from '@/types';

export const personas: Persona[] = [
  {
    id: 'ms-zhang',
    name: 'Ms. Zhang Wei',
    context: 'rural',
    age: 58,
    occupation: 'Retired Factory Worker',
    location: 'Jiaxian County, Henan Province, China',
    quote: 'These numbers mean nothing to me. I trust what my neighbor tells me, not what some label says.',
    trustPathway: [
      'Community recommendation',
      'Visual recognition',
      'Social proof from neighbors',
      'Familiar brands used by family',
    ],
    painPoints: [
      'Cannot understand numerical nutrition labels',
      'Distrusts institutional information sources',
      'Literacy barriers with technical terms',
      'No mental model for "serving sizes" or percentages',
    ],
    mentalModels: [
      'Measures sweetness by spoonfuls of sugar in tea',
      'Judges health by how food makes her feel',
      'Trusts recommendations from close social circle',
      'Visual comparison: "Is this more or less than X?"',
    ],
    photo: '[Photo: Ms. Zhang at local market in Jiaxian, examining product packages]',
  },
  {
    id: 'maria-rodriguez',
    name: 'Maria Rodriguez',
    context: 'eastwa',
    age: 43,
    occupation: 'Farmworker',
    location: 'Yakima County, Eastern Washington',
    quote: 'I don\'t read English well, but I know this brand because my cousin uses it. That\'s how I decide.',
    trustPathway: [
      'Brand familiarity',
      'Community endorsement',
      'Visual packaging cues',
      'Price point indicating quality',
    ],
    painPoints: [
      'English language barriers on detailed labels',
      'Unfamiliar units (ounces, grams, percentages)',
      'Information overload from too much text',
      'Cannot compare products without help',
    ],
    mentalModels: [
      'Judges portions by hand size or plate coverage',
      'Recognizes products by package color/shape',
      'Trusts brands used by extended family',
      'Salt = "how salty it tastes," not milligrams',
    ],
    photo: '[Photo: Maria at local grocery store in Yakima, shopping with family members]',
  },
];

export const researchInsights: ResearchInsight[] = [
  {
    id: 'trust-not-comprehension',
    title: 'Trust Deficit, Not Comprehension Deficit',
    description: 'Rural consumers can understand information when presented appropriately, the issue is they don\'t trust institutional sources.',
    context: ['rural', 'eastwa'],
    evidence: '14 of 16 participants (81%) could correctly interpret visual comparisons but only 8 of 16 (50%) trusted numerical labels without social validation.',
    designImplication: 'Add trust indicators (neighbor verified, community choice) rather than just "simplifying" information.',
  },
  {
    id: 'numbers-meaningless',
    title: 'Numbers Don\'t Convey Meaning',
    description: 'Abstract numbers (grams, percentages) lack contextual anchors. Users need relatable reference points.',
    context: ['rural', 'eastwa', 'lowlit'],
    evidence: 'When asked "Is 12g of sugar high?", 63% of participants couldn\'t answer. When shown "3 sugar cubes", 81% correctly identified it as high.',
    designImplication: 'Translate numbers into visual equivalents using locally meaningful units (cubes, bowls, familiar objects).',
  },
  {
    id: 'visual-comparison',
    title: 'Visual Comparison Drives Understanding',
    description: 'Users process relative comparisons faster than absolute values. "More than X" beats "50% of daily value".',
    context: ['rural', 'eastwa', 'lowlit'],
    evidence: 'Average comprehension time: 45 seconds for standard labels, 8 seconds for visual comparisons. 4.2x improvement. Tested with 16 participants using standard comprehension tasks.',
    designImplication: 'Use comparative visuals: color scales, familiar object stacks, "more/less than" framing.',
  },
  {
    id: 'mental-models-vary',
    title: 'Mental Models Are Culturally Specific',
    description: 'How people measure, compare, and judge varies by cultural context. There is no "universal" representation.',
    context: ['rural', 'eastwa'],
    evidence: 'Participants preferred body-based measurements like "walking minutes" (75%) and "handfuls" (81%) over abstract units like "2000 calorie diet" (19%) or standardized "serving sizes" (31%).',
    designImplication: 'Use universal body-based measurements that work across cultures, not food-based stereotypes.',
  },
  {
    id: 'language-barrier-secondary',
    title: 'Language Barriers Are Secondary to Conceptual Barriers',
    description: 'Even when information is translated linguistically, it fails if the underlying concepts aren\'t culturally relevant.',
    context: ['eastwa'],
    evidence: 'Spanish-translated labels showed only 23% improvement in comprehension vs English.',
    designImplication: 'Translation must be semantic and cultural, not just linguistic.',
  },
  {
    id: 'serving-sizes-arbitrary',
    title: 'Serving Sizes Are Arbitrary and Confusing',
    description: '"1 serving" means nothing without cultural context. People eat until satisfied, not until they\'ve consumed exactly 28 grams.',
    context: ['rural', 'eastwa', 'lowlit'],
    evidence: '69% of participants couldn\'t correctly estimate what "1 oz" looks like. 75% correctly identified "a handful" size.',
    designImplication: 'Use body-relative measurements (palm, handful, fist) or familiar containers (bowls, cups).',
  },
];

// Helper functions
export function getPersonaByContext(context: Persona['context']): Persona | undefined {
  return personas.find((p) => p.context === context);
}

export function getInsightsByContext(context: Persona['context']): ResearchInsight[] {
  return researchInsights.filter((i) => i.context.includes(context));
}
