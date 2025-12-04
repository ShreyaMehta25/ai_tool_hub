'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Filters({ categories, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPricing, setSelectedPricing] = useState([]);

  const pricingOptions = ['Free', 'Freemium', 'Paid', 'Enterprise'];

  const handleCategoryChange = (category, checked) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);
    setSelectedCategories(newCategories);
    onFilterChange({ categories: newCategories, pricing: selectedPricing });
  };

  const handlePricingChange = (pricing, checked) => {
    const newPricing = checked
      ? [...selectedPricing, pricing]
      : selectedPricing.filter((p) => p !== pricing);
    setSelectedPricing(newPricing);
    onFilterChange({ categories: selectedCategories, pricing: newPricing });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pricing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pricingOptions.map((pricing) => (
            <div key={pricing} className="flex items-center space-x-2">
              <Checkbox
                id={`pricing-${pricing}`}
                checked={selectedPricing.includes(pricing)}
                onCheckedChange={(checked) => handlePricingChange(pricing, checked)}
              />
              <Label
                htmlFor={`pricing-${pricing}`}
                className="text-sm font-normal cursor-pointer"
              >
                {pricing}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}