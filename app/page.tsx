'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/productService';

import { ProductSearch } from '@/components/products/search';
import { ProductCategoryFilter } from '@/components/products/category';
import { ProductGrid } from '@/components/products/grid';
import { Loading } from '@/components/loading';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['getProducts'],
    queryFn: getProducts,
  });

  const products = data?.products ?? [];

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);

    return matchSearch && matchCategory;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  if (isLoading) return <Loading />;

  return (
    <main className="max-w-7xl mx-auto px-4 my-8">
      <ProductSearch value={search} onChange={setSearch} />

      <div className="my-4">
        <ProductCategoryFilter
          categories={categories}
          selected={selectedCategories}
          onToggle={toggleCategory}
          onReset={() => setSelectedCategories([])}
        />
      </div>

      <ProductGrid products={filteredProducts} />
    </main>
  );
}
