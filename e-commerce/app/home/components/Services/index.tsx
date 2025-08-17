import { FiTruck } from "react-icons/fi"; import { FaHeadset } from "react-icons/fa"; import { MdVerified } from "react-icons/md";
export default function Services() { 
    return ( 
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 bg-white text-center"> 

<div className="flex flex-col items-center"> 
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 ring-7 ring-gray-300"> 
        <FiTruck className="w-7 h-7" /> </div> <p className="font-bold text-lg">FREE AND FAST DELIVERY</p>
         <p className="text-sm text-neutral-600">Free delivery for all orders over $140</p> </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 ring-7 ring-gray-300">
      <FaHeadset className="w-7 h-7" />
    </div>
    <p className="font-bold text-lg">24/7 CUSTOMER SERVICE</p>
    <p className="text-sm text-neutral-600">Friendly 24/7 customer support</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 ring-7 ring-gray-300">
      <MdVerified className="w-7 h-7" />
    </div>
    <p className="font-bold text-lg">MONEY BACK GUARANTEE</p>
    <p className="text-sm text-neutral-600">We return money within 30 days</p>
  </div>
</section>
); }