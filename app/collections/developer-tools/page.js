import Link from 'next/link';
import { ArrowLeft, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToolGrid } from '@/components/tools/tool-grid';
import { getAllTools } from '@/lib/data/ai-tools';

export const metadata = {
  title: 'Developer Tools - AI-Powered Coding Assistants',
  description: 'Explore AI tools built specifically for developers, including coding assistants and automation tools.',
};

export const revalidate = 3600;

export default function DeveloperToolsPage() {
  const developerTools = getAllTools()
    .filter(
      (tool) =>
        tool.tags.includes('developer tools') ||
        tool.tags.includes('coding') ||
        tool.category === 'Coding Assistant'
    )
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
            <Code className="h-4 w-4" />
            <span>Developer Tools Collection</span>
          </div>
          <h1 className="text-4xl font-bold">AI Tools for Developers</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore {developerTools.length} AI-powered tools designed specifically for developers.
            From coding assistants that help you write better code faster, to automation tools
            that streamline your workflow, find the perfect AI companion for your development needs.
          </p>
        </div>

        {/* Tools Grid */}
        <ToolGrid tools={developerTools} />
      </div>
    </div>
  );
}