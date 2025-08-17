import { FC } from "react";
import { Heart, Eye } from "lucide-react";
import StarRating from "@/app/sharedComponents/StarRating";
interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  tag?: string;
  colors?: string[];
}
const OurProductCard: FC<ProductProps> = ({
  name,
  price,
  image,
  rating,
  reviews,
  tag,
  colors,
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm relative group">
      {tag && (
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
          {tag}
        </span>
      )}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
        <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <Heart size={18} />
        </button>
        <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <Eye size={18} />
        </button>
      </div>
      <img src={image} alt={name} className="w-full h-40 object-contain" />
      <div className="mt-3">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-red-500 font-semibold">${price}</p>
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
           <StarRating rating={4} />
          <span className="text-gray-500 text-xs ml-1">({reviews})</span>
        </div>
        {colors && (
          <div className="flex gap-2 mt-2">
            {colors.map((c, i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}
        {name.includes("Camera") && (
          <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 text-sm">
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default OurProductCard;