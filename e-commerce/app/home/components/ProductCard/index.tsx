"use client";
import { FC } from "react";
import StarRating from "@/app/sharedComponents/StarRating";
import { Heart } from "lucide-react";
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
}
const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  rating,
  reviews,
}) => {
  return (
    
    <div className="relative bg-white rounded-2xl shadow  w-56">
      <button className="absolute top-2 right-2 text-gray-500">
        <Heart className="w-5 h-5" />
      </button>
      <img src={image} alt={title} className="w-70 h-80 object-contain m-0" />
      <h3 className="text-1xl font-semibold">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-red-500 font-bold">${price}</span>
        {oldPrice && (
          <span className="line-through text-gray-400 text-sm">${oldPrice}</span>
        )}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <StarRating rating={rating} />
        <span className="text-xs text-gray-500">({reviews})</span>
      </div>
    </div>
  );
};
export default ProductCard;





