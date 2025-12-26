import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      
      <div className="relative aspect-square rounded-xl overflow-hidden bg-base-200">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm opacity-60 mb-4 capitalize">
            {product.category} · {product.brand}
          </p>

          <p className="mb-6 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-semibold">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="badge badge-secondary">
                {Math.round(product.discountPercentage)}%
              </span>
            )}
          </div>

          <div className="text-sm opacity-70 space-y-1">
            <p>⭐ {product.rating} rating</p>
            <p>Stock: {product.stock}</p>
          </div>
        </div>

        <button className="btn btn-neutral mt-6">Add to Cart</button>
      </div>
    </div>
  );
}
