"use client";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const TopBanner = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-6 py-3 text-sm  md:px-20 ">
      <span className="flex-1 text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <a href="#" className="font-bold underline ml-2">
          ShopNow
        </a>
      </span>
      <div className="flex items-center space-x-1">
        <span>English</span>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
    </div>
  );
};
export default TopBanner;
