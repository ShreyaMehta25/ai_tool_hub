import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToolGrid } from '@/components/tools/tool-grid';
import { getAllTools } from '@/lib/data/ai-tools';

export const metadata = {
  title: 'Recently Launched AI Tools',
  description: 'Discover the latest AI tools launched in the past year.',
};

export const revalidate = 3600;

export default function RecentlyLaunchedPage() {
  const currentYear = new Date().getFullYear();
  const recentTools = getAllTools()
    .filter((tool) => tool.launchedYear >= currentYear - 1)
    .sort((a, b) => b.launchedYear - a.launchedYear || b.rating - a.rating);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium">
            <Calendar className="h-4 w-4" />
            <span>Recently Launched Collection</span>
          </div>
          <h1 className="text-4xl font-bold">Recently Launched AI Tools</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Stay ahead of the curve with {recentTools.length} cutting-edge AI tools launched in the
            past year. These are the latest innovations in AI technology, bringing new capabilities
            and improvements to various workflows.
          </p>
        </div>

        {/* Tools Grid */}
        <ToolGrid tools={recentTools} />
      </div>
    </div>
  );
}