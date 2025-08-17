"use client";

import React from "react";

type Variant = "default" | "noBg" | "google";

type Size = "short" | "long" | "full";
interface ButtonProps {
  buttonText: React.ReactNode; 
  onClickHandler: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
}


const Button = ({
  buttonText,
  onClickHandler,
  variant = "default",
  size = "short",
  className = "",
}: ButtonProps) => {
  let sizeClass =
    size === "long" ? "w-64" : size === "full" ? "w-full" : "w-32";

  let variantClass =
    variant === "noBg"
      ? "bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100"
      : variant === "google"
      ? "bg-white border border-gray-300 text-black hover:bg-gray-50"
      : "bg-pink-700 text-white hover:bg-pink-500";

  return (
    <button
      onClick={onClickHandler}
      className={`py-3 px-4 rounded ${sizeClass} ${variantClass} ${className}`}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default Button;
