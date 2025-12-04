import Link from 'next/link';
import { Sparkles, Trophy, Gift, Code, Calendar } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTools, getToolsByRating, getToolsByPricing, getToolsByTag } from '@/lib/data/ai-tools';

export const metadata = {
  title: 'Curated Collections',
  description: 'Explore specially curated collections of AI tools organized by ratings, pricing, and categories.',
};

export const revalidate = 3600;

export default function CollectionsPage() {
  const allTools = getAllTools();
  const topRatedCount = getToolsByRating(4.5).length;
  const freeToolsCount = allTools.filter(
    (t) => t.pricing === 'Free' || t.pricing === 'Freemium'
  ).length;
  const devToolsCount = getToolsByTag('developer tools').length + getToolsByTag('coding').length;
  const currentYear = new Date().getFullYear();
  const recentToolsCount = allTools.filter((t) => t.launchedYear >= currentYear - 1).length;

  const collections = [
    {
      title: 'Top Rated Tools',
      description: `Discover ${topRatedCount} AI tools rated 4.5 stars and above. These are the highest-rated tools trusted by thousands of users.`,
      icon: Trophy,
      href: '/collections/top-rated',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Free & Freemium Tools',
      description: `Explore ${freeToolsCount} powerful AI tools you can start using for free or with free tiers. No credit card required to get started.`,
      icon: Gift,
      href: '/collections/free-tools',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Developer Tools',
      description: `Browse ${devToolsCount}+ AI-powered tools built specifically for developers, including coding assistants and automation tools.`,
      icon: Code,
      href: '/collections/developer-tools',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Recently Launched',
      description: `Check out ${recentToolsCount} cutting-edge AI tools launched in the last year. Stay updated with the latest innovations.`,
      icon: Calendar,
      href: '/collections/recently-launched',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <div className="container py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>Curated Collections</span>
          </div>
          <h1 className="text-4xl font-bold">Explore Our Collections</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover AI tools organized into specially curated collections to help you find
            exactly what you need faster.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {collections.map((collection) => {
            const Icon = collection.icon;
            return (
              <Link key={collection.href} href={collection.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${collection.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${collection.color}`} />
                    </div>
                    <CardTitle className="text-xl">{collection.title}</CardTitle>
                    <CardDescription className="text-base">
                      {collection.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}