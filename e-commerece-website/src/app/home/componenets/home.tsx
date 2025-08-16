"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function HomeComponent() {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });
  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="font-sans">
    
      <div className="bg-black text-white text-center py-2 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold cursor-pointer underline">ShopNow</span>
      </div>
  
      <div className="flex items-center justify-between px-6 py-4 border-b">

        <div className="text-2xl font-bold">Exclusive</div>
      
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">Contact</a>
          <a href="#" className="hover:text-red-500">About</a>
          <a href="#" className="hover:text-red-500">Sign Up</a>
        </div>
    
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded px-3 py-1">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
       
        </div>
      </div>
    
      <div className="flex">
      
        <div className="w-1/5 border-r p-4 hidden md:block">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty"
          ].map((item) => (
            <div key={item} className="py-2 flex justify-between hover:text-red-500 cursor-pointer">
              {item} <span>›</span>
            </div>
          ))}
        </div>
     
        <div className="flex-1 p-4">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <div className="py-45 px-3 text-white ">
              <p className="text-sm">iPhone 14 Series</p>
              <h1 className="text-7xl font-bold mt-0 w-1/3">
                Up to 10% off Voucher
              </h1>
              <button className="mt-4 border-b-2 pb-1">Shop Now →</button>
            </div>
            <Image
              src="/images/phone.jpg" 
              alt="iPhone"
              width={600}
              height={800}
              className="absolute right-0 top-12"
            />
           
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            </div>
          </div>
        </div>
      </div>
 
      <div className="px-6 mt-8">

        <div className="flex items-center justify-between">

          <div className="flex gap-4 text-center">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label}>
                <p className="text-lg font-bold">{value.toString().padStart(2, '0')}</p>
                <p className="text-xs capitalize">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}