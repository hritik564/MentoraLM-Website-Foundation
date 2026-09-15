import type { ProductAccent } from './products';

export interface ProductAccentConfig {
  primary: string;
  secondary: string;
  gradient: string;
  textTreatment: string;
  surfaceTreatment: string;
}

export const productAccentConfig: Record<ProductAccent, ProductAccentConfig> = {
  'cyan-blue': {
    primary: 'var(--color-ai-cyan)',
    secondary: 'var(--color-ai-blue)',
    gradient: 'var(--gradient-ai)',
    textTreatment: 'var(--color-ai-blue)',
    surfaceTreatment: 'color-mix(in srgb, var(--color-ai-cyan) 12%, transparent)',
  },
  'purple-magenta': {
    primary: 'var(--color-careerignite-purple)',
    secondary: 'var(--color-careerignite-magenta)',
    gradient: 'var(--gradient-careerignite)',
    textTreatment: 'var(--color-careerignite-purple)',
    surfaceTreatment:
      'color-mix(in srgb, var(--color-careerignite-magenta) 10%, transparent)',
  },
  'orange-gold': {
    primary: 'var(--color-gradlm-orange)',
    secondary: 'var(--color-gradlm-gold)',
    gradient: 'var(--gradient-gradlm)',
    textTreatment: 'var(--color-gradlm-text)',
    surfaceTreatment: 'color-mix(in srgb, var(--color-gradlm-gold) 16%, transparent)',
  },
  neutral: {
    primary: 'var(--color-muted-text)',
    secondary: 'var(--border-strong)',
    gradient: 'none',
    textTreatment: 'var(--color-muted-text)',
    surfaceTreatment: 'var(--surface-soft)',
  },
};