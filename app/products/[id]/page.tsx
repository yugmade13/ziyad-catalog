'use client';

import { Loading } from '@/components/loading';
import { NoResult } from '@/components/no-result';
import { getProductById } from '@/services/productService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ProductDetail } from '@/components/products/detail';
import { ProductReviews } from '@/components/products/review';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useQuery({
    queryKey: ['getProduct', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  if (isLoading) return <Loading />;

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <NoResult title="No product found" description="The product you are looking for does not exist." />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <ProductDetail product={product} />

      <div className="divider my-12">Reviews</div>

      <ProductReviews reviews={product.reviews} />
    </div>
  );
}
