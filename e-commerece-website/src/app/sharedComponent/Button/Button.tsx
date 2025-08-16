import React from "react";
interface ButtonProps {
  label: string;
  width?: string;
  color?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, width = "w-40", color = "bg-green-500", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${width} ${color} text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition`}
    >
      {label}
    </button>
  );
};
export default Button;