'use client';

import { useState, useMemo } from 'react';
import { getAllTools, getAllCategories } from '@/lib/data/ai-tools';
import { ToolGrid } from '@/components/tools/tool-grid';
import { SearchBar } from '@/components/tools/search-bar';
import { SortSelect } from '@/components/tools/sort-select';
import { Filters } from '@/components/tools/filters';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function ToolsPage() {
  const allTools = getAllTools();
  const categories = getAllCategories();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating_desc');
  const [filters, setFilters] = useState({ categories: [], pricing: [] });

  const filteredAndSortedTools = useMemo(() => {
    let filtered = allTools;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.shortDescription.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter((tool) =>
        filters.categories.includes(tool.category)
      );
    }

    // Apply pricing filters
    if (filters.pricing.length > 0) {
      filtered = filtered.filter((tool) =>
        filters.pricing.includes(tool.pricing)
      );
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case 'rating_desc':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating_asc':
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case 'name_asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'year_desc':
        sorted.sort((a, b) => b.launchedYear - a.launchedYear);
        break;
      case 'year_asc':
        sorted.sort((a, b) => a.launchedYear - b.launchedYear);
        break;
      default:
        break;
    }

    return sorted;
  }, [allTools, searchQuery, sortBy, filters]);

  const clearFilters = () => {
    setSearchQuery('');
    setFilters({ categories: [], pricing: [] });
    setSortBy('rating_desc');
  };

  const hasActiveFilters =
    searchQuery || filters.categories.length > 0 || filters.pricing.length > 0;

  return (
    <div className="container py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Browse AI Tools</h1>
          <p className="text-muted-foreground text-lg">
            Discover and compare {allTools.length} AI tools across all categories
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name, description, or tags..."
          />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {searchQuery && (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-sm">
                Search: "{searchQuery}"
              </div>
            )}
            {filters.categories.map((cat) => (
              <div
                key={cat}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-sm"
              >
                {cat}
              </div>
            ))}
            {filters.pricing.map((price) => (
              <div
                key={price}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-sm"
              >
                {price}
              </div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-7 px-2"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all
            </Button>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <Filters categories={categories} onFilterChange={setFilters} />
            </div>
          </aside>

          {/* Tools Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {filteredAndSortedTools.length} of {allTools.length} tools
            </div>
            <ToolGrid tools={filteredAndSortedTools} />
          </div>
        </div>
      </div>
    </div>
  );
}