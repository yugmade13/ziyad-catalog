import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="card card-sm bg-base-100 shadow-sm hover:shadow-md transition">
        <figure>
          <div className="relative w-full aspect-4/3">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <div className="card-body p-4 gap-0">
          <p className="text-base opacity-70 truncate">
            {product.title}
          </p>

          <div className="flex items-center gap-4">
            <h2 className="card-title text-xl">${product.price}</h2>
            {product.discountPercentage > 0 && (
              <span className="badge badge-secondary badge-sm">
                {Math.round(product.discountPercentage)}%
              </span>
            )}
          </div>

          <p className="text-sm opacity-70">
            ⭐ {product.rating} ({product.reviews.length})
          </p>
          <p className="text-sm opacity-70">🛍️ {product.brand}</p>
        </div>
      </div>
    </Link>
  );
}
