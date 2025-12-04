'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SortSelect({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rating_desc">Highest Rated</SelectItem>
        <SelectItem value="rating_asc">Lowest Rated</SelectItem>
        <SelectItem value="name_asc">Name (A-Z)</SelectItem>
        <SelectItem value="name_desc">Name (Z-A)</SelectItem>
        <SelectItem value="year_desc">Newest First</SelectItem>
        <SelectItem value="year_asc">Oldest First</SelectItem>
      </SelectContent>
    </Select>
  );
}