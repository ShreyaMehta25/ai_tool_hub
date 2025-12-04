import toolsData from '@/data/ai-tools.json';

export interface AiTool {
  id: string;
  name: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Enterprise';
  shortDescription: string;
  longDescription: string;
  logoUrl: string;
  website: string;
  tags: string[];
  rating: number;
  launchedYear: number;
}

export function getAllTools(): AiTool[] {
  return toolsData as AiTool[];
}

export function getToolBySlug(slug: string): AiTool | undefined {
  return toolsData.find((tool) => tool.id === slug) as AiTool | undefined;
}

export function getToolsByCategory(category: string): AiTool[] {
  return toolsData.filter((tool) => tool.category === category) as AiTool[];
}

export function getToolsByPricing(pricing: string): AiTool[] {
  return toolsData.filter((tool) => tool.pricing === pricing) as AiTool[];
}

export function getToolsByRating(minRating: number): AiTool[] {
  return toolsData.filter((tool) => tool.rating >= minRating) as AiTool[];
}

export function getToolsByYear(year: number): AiTool[] {
  return toolsData.filter((tool) => tool.launchedYear === year) as AiTool[];
}

export function getToolsByTag(tag: string): AiTool[] {
  return toolsData.filter((tool) => tool.tags.includes(tag)) as AiTool[];
}

export function getFeaturedTools(count: number = 6): AiTool[] {
  return toolsData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count) as AiTool[];
}

export function getAllCategories(): string[] {
  const categories = new Set(toolsData.map((tool) => tool.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const tags = new Set(toolsData.flatMap((tool) => tool.tags));
  return Array.from(tags).sort();
}