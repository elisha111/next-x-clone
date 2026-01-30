import Image from "next/image";

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const ProductCard = (props: IProduct) => {
  const { title, image, price } = props;

  return (
    <div className="w-64 border border-white/10 rounded-xl p-4 hover:shadow transition">
      <Image
        className="object-contain mb-3 rounded"
        src={image}
        alt={title}
        width={100}
        height={40}
      />
      <h2 className="text-sm text-white font-medium line-clamp-2 mb-1">
        {title}
      </h2>
      <p className="text-sm text-gray-400">{price}</p>
    </div>
  );
};
