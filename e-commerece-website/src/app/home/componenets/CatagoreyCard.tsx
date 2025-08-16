"use client";
import { FC } from "react";
interface CategoryCardProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
const CategoryCard: FC<CategoryCardProps> = ({ icon, label, active }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center border  p-6 cursor-pointer transition ${
        active ? "bg-red-500 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div className="mb-3">{icon}</div>
      <span className="text-xl ">{label}</span>
    </div>
  );
};
export default CategoryCard;