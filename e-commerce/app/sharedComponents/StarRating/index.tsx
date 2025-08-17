"use client";
import { FC } from "react";
import { Star } from "lucide-react";
interface StarRatingProps {
  rating: number;
  total?: number;
}
const StarRating: FC<StarRatingProps> = ({ rating, total = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
export default StarRating;