import Link from 'next/link';
import { ArrowRight, Sparkles, Search, Filter, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToolGrid } from '@/components/tools/tool-grid';
import { getFeaturedTools, getAllTools } from '@/lib/data/ai-tools';

export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  const featuredTools = getFeaturedTools(6);
  const allTools = getAllTools();
  const toolCount = allTools.length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Discover {toolCount}+ AI Tools</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Find the Perfect{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                AI Tool
              </span>
              {' '}for Your Needs
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a curated directory of the best AI tools. From chatbots to image generation,
              discover solutions that transform your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/tools">
                  Browse All Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/collections">
                  View Collections
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy Discovery</CardTitle>
                <CardDescription>
                  Search and filter through our comprehensive database to find exactly what you need
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <Filter className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Smart Filtering</CardTitle>
                <CardDescription>
                  Filter by category, pricing model, ratings, and tags to narrow down your options
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Curated Collections</CardTitle>
                <CardDescription>
                  Explore handpicked collections of top-rated tools, free options, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Dataset Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">About This Directory</h2>
            <p className="text-muted-foreground text-lg">
              Our AI Tools Directory features {toolCount} carefully curated tools across multiple categories.
              The dataset is inspired by leading AI tool directories like "There's an AI for That" and Product Hunt,
              created to help you discover and compare the best AI solutions available today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{toolCount}+</div>
                <div className="text-sm text-muted-foreground">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Daily</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 bg-muted/40">
        <div className="container space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Featured AI Tools</h2>
            <p className="text-muted-foreground text-lg">
              Top-rated tools trusted by thousands of users
            </p>
          </div>
          
          <ToolGrid tools={featuredTools} />
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/tools">
                View All {toolCount} Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Preview Section */}
      <section className="py-16">
        <div className="container space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Curated Collections</h2>
            <p className="text-muted-foreground text-lg">
              Explore specially curated tool collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/collections/top-rated">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    Top Rated Tools
                  </CardTitle>
                  <CardDescription>
                    Discover AI tools rated 4.5 stars and above by users worldwide
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link href="/collections/free-tools">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-green-500" />
                    Free & Freemium Tools
                  </CardTitle>
                  <CardDescription>
                    Explore powerful AI tools you can start using for free today
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link href="/collections/developer-tools">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                    Developer Tools
                  </CardTitle>
                  <CardDescription>
                    AI-powered coding assistants and tools built for developers
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}