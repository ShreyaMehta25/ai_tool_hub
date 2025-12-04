import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Star, Calendar, DollarSign, ArrowLeft } from 'lucide-react';
import { getAllTools, getToolBySlug, getToolsByCategory } from '@/lib/data/ai-tools';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToolGrid } from '@/components/tools/tool-grid';

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.id,
  }));
}

export async function generateMetadata({ params }) {
  const tool = getToolBySlug(params.slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - ${tool.category}`,
    description: tool.shortDescription,
    openGraph: {
      title: `${tool.name} - ${tool.category}`,
      description: tool.shortDescription,
      type: 'website',
    },
  };
}

export const revalidate = 3600;

export default function ToolDetailPage({ params }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  // Get similar tools (same category, exclude current tool)
  const similarTools = getToolsByCategory(tool.category)
    .filter((t) => t.id !== tool.id)
    .slice(0, 3);

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-500/10 text-green-500';
      case 'Freemium':
        return 'bg-blue-500/10 text-blue-500';
      case 'Paid':
        return 'bg-purple-500/10 text-purple-500';
      case 'Enterprise':
        return 'bg-orange-500/10 text-orange-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="container py-8">
      <div className="space-y-8">
        {/* Back Button */}
        <Button asChild variant="ghost" size="sm">
          <Link href="/tools">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
              {tool.name.charAt(0)}
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-4xl font-bold">{tool.name}</h1>
                  <Badge className={getPricingColor(tool.pricing)} variant="secondary">
                    {tool.pricing}
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground">{tool.shortDescription}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{tool.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Launched {tool.launchedYear}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{tool.pricing} Model</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button asChild size="lg">
                  <a href={tool.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {tool.name}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                {tool.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={`/tools?category=${tool.category}`}>
                  <Badge variant="outline" className="text-base px-4 py-2 cursor-pointer hover:bg-accent">
                    {tool.category}
                  </Badge>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pricing Model</span>
                  <span className="font-medium">{tool.pricing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">User Rating</span>
                  <span className="font-medium">{tool.rating.toFixed(1)} / 5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Launch Year</span>
                  <span className="font-medium">{tool.launchedYear}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Tools Section */}
        {similarTools.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Similar Tools in {tool.category}</h2>
            <ToolGrid tools={similarTools} />
          </div>
        )}
      </div>
    </div>
  );
}