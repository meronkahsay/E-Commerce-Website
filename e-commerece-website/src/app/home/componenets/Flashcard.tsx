"use client";
import { FC } from "react";
import StarRating from "./StarRating";
import { Heart } from "lucide-react";
interface FlashSaleCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}
const FlashSaleCard: FC<FlashSaleCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <div className="relative bg-white rounded-2xl shadow p-4 w-56">
      <span className="absolute top-2 left-2 bg-red-500 text-white text-1xl px-2 py-1 rounded">
        -{discount}%
      </span>
      <button className="absolute top-2 right-2 text-gray-500">
        <Heart className="w-9 h-7" />
      </button>
      <img src={image} alt={title} className="w-70 h-80 object-contain m-0" />
      <h3 className="text-1xl font-semibold">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-red-500 font-bold">${price}</span>
        <span className="line-through text-gray-400 text-sm">${oldPrice}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <StarRating rating={4} />
        <span className="text-1xl text-gray-500">({reviews})</span>
      </div>
    </div>
  );
};
export default FlashSaleCard;