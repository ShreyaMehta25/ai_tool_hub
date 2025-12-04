'use client';

import { ToolCard } from './tool-card';

export function ToolGrid({ tools }) {
  if (!tools || tools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No tools found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}