import { Review } from '@/types/product';

interface ProductReviewsProps {
  reviews: Review[];
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  if (reviews.length === 0) {
    return <p className="opacity-60">No reviews yet.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div key={index} className="card bg-base-100 border border-base-300">
          <div className="card-body p-5 gap-0">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold">{review.reviewerName}</p>
              <span className="text-sm opacity-70">⭐ {review.rating}</span>
            </div>

            <p className="text-sm opacity-80 mb-4">{review.comment}</p>

            <p className="text-xs opacity-50">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
