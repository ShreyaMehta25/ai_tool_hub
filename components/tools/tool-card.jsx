'use client';

import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ToolCard({ tool }) {
  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      case 'Freemium':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
      case 'Paid':
        return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20';
      case 'Enterprise':
        return 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
    }
  };

  return (
    <Card className="group h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl">
              {tool.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {tool.name}
              </CardTitle>
              <CardDescription className="text-xs">{tool.category}</CardDescription>
            </div>
          </div>
          <Badge className={getPricingColor(tool.pricing)}>
            {tool.pricing}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {tool.shortDescription}
        </p>
        
        <div className="flex items-center gap-1 mt-3">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-medium">{tool.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground ml-2">
            Launched {tool.launchedYear}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tool.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button asChild className="flex-1" size="sm">
          <Link href={`/tools/${tool.id}`}>
            View Details
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}