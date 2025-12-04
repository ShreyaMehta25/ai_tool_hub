import Link from 'next/link';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToolGrid } from '@/components/tools/tool-grid';
import { getToolsByRating } from '@/lib/data/ai-tools';

export const metadata = {
  title: 'Top Rated AI Tools',
  description: 'Discover the highest-rated AI tools with ratings of 4.5 stars and above.',
};

export const revalidate = 3600;

export default function TopRatedPage() {
  const topRatedTools = getToolsByRating(4.5).sort((a, b) => b.rating - a.rating);

  return (
    <div className="container py-8">
      <div className="space-y-8">
        {/* Back Button */}
        <Button asChild variant="ghost" size="sm">
          <Link href="/collections">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium">
            <Trophy className="h-4 w-4" />
            <span>Top Rated Collection</span>
          </div>
          <h1 className="text-4xl font-bold">Top Rated AI Tools</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore {topRatedTools.length} exceptional AI tools with ratings of 4.5 stars and above.
            These tools have been highly rated by users for their quality, features, and reliability.
          </p>
        </div>

        {/* Tools Grid */}
        <ToolGrid tools={topRatedTools} />
      </div>
    </div>
  );
}