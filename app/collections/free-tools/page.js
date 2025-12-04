import Link from 'next/link';
import { ArrowLeft, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToolGrid } from '@/components/tools/tool-grid';
import { getAllTools } from '@/lib/data/ai-tools';

export const metadata = {
  title: 'Free & Freemium AI Tools',
  description: 'Explore powerful AI tools that are free to use or offer generous free tiers.',
};

export const revalidate = 3600;

export default function FreeToolsPage() {
  const freeTools = getAllTools()
    .filter((tool) => tool.pricing === 'Free' || tool.pricing === 'Freemium')
    .sort((a, b) => b.rating - a.rating);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
            <Gift className="h-4 w-4" />
            <span>Free Tools Collection</span>
          </div>
          <h1 className="text-4xl font-bold">Free & Freemium AI Tools</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Discover {freeTools.length} powerful AI tools you can start using today at no cost.
            These tools offer either completely free access or generous free tiers that let you
            explore their capabilities before committing.
          </p>
        </div>

        {/* Tools Grid */}
        <ToolGrid tools={freeTools} />
      </div>
    </div>
  );
}