import Image from 'next/image';
import noDataImage from '@/assets/no-found.png';

type Props = {
  title: string;
  description: string;
};

export function NoResult({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={noDataImage}
        alt="No products found"
        width={200}
        height={200}
        className="object-contain opacity-80"
        priority
      />

      <p className="mt-4 text-lg font-semibold">{title}</p>
      <p className="text-sm opacity-60">{description}</p>
    </div>
  );
}
