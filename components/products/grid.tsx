import { Product } from '@/types/product';
import { ProductCard } from './card';
import { NoResult } from '../no-result';

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  if (products.length === 0)
    return (
      <div className="mt-32">
        <NoResult title="No products found" description="No products match your current filters." />
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
