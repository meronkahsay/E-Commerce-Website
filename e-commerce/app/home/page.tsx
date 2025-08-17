"use client";

import React from "react";
import NavBar from "../sharedComponents/Navbar";
import TopBanner from "../sharedComponents/TopBanner";
import Footer from "../sharedComponents/Footer";
import NewItem from "./components/NewItems";
import ProductCard from "./components/ProductCard";
import Services from "./components/Services";
import { AiOutlineHeart } from "react-icons/ai"; 
import { FiShoppingCart } from "react-icons/fi";  
import SidebarVoucher from "./components/Onboarding";
import Home from "./components/Category";
import CategoryCard from "./components/CategoryCard";
import { Monitor, Smartphone, Headphones, Camera, Laptop, Gamepad2, Watch} from "lucide-react";
import FlashSaleCard from "./components/FlashSales";
import RedBadge from "../sharedComponents/Badge";
import ProductsPage from "./components/ProductsPage";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
   <div className="flex justify-between items-center w-full py-4 bg-gray-100 px-6 md:px-20">
  <div className="flex-grow">
    <NavBar />
  </div>
  <div className="flex space-x-6">
    <AiOutlineHeart className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-700" />
    <FiShoppingCart className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900" />
  </div>
</div>
      <main className="flex-grow bg-white">
        <SidebarVoucher/>
 <section className="mt-25 ml-35 mr-30">
           <RedBadge text="Today's" />
      
        <h2 className="text-3xl font-bold mb-8 mt-10">Flash Sales</h2>
        
        <div className="flex justify-between overflow-x-auto">
          <FlashSaleCard
            image="/images/redgame.png"
            title="HAVIT HV-G92 Gamepad"
            price={120}
            oldPrice={200}
            discount={40}
            rating={4}
            reviews={88}
          />
          <FlashSaleCard
            image="/images/rkeboard.png"
            title="AK-900 Wired Keyboard"
            price={960}
            oldPrice={1160}
            discount={35}
            rating={4}
            reviews={75}
          />
          <FlashSaleCard
            image="/images/dragontv.png"
            title="IPS LCD Gaming Monitor"
            price={370}
            oldPrice={400}
            discount={30}
            rating={4}
            reviews={99}
          />
          <FlashSaleCard
            image="/images/chair.png"
            title="S-Series Comfort Chair"
            price={375}
            oldPrice={400}
            discount={25}
            rating={4}
            reviews={99}
          />
        </div>
        <div className="mt-6 text-center">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg">View All Products</button>
        </div>
      </section>
       <section className="mt-35 ml-35 mr-30">
           <RedBadge text="Categories" />
        <h2 className="text-4xl font-bold mb-10 mt-12 ">Browse By Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          <CategoryCard icon={<Smartphone  className="w-16 h-18"/>} label="Phones" />
          <CategoryCard icon={<Laptop className="w-16 h-18" />} label="Computers" />
          <CategoryCard icon={<Watch className="w-16 h-18" />} label="SmartWatch" />
          <CategoryCard icon={<Camera className="w-16 h-18" />} label="Camera" active />
          <CategoryCard icon={<Headphones className="w-16 h-18" />} label="HeadPhones" />
          <CategoryCard icon={<Gamepad2 className="w-16 h-18" />} label="Gaming" />
        </div>
      </section>
       <section  className="mt-35 ml-35 mr-30">
          <RedBadge text="This Month" />
        <div className="flex justify-between items-center mb-6">
         
        <h2 className="text-4xl font-bold mt-12  mb-6">Best Selling Products</h2> 
          <button className="bg-red-500 text-white px-15 h-15 rounded-lg text-1xl">View All</button>
        </div>
        <div className="flex justify-between overflow-x-auto">
          <ProductCard
            image="/images/redJacket.png"
            title="The north coat"
            price={260}
            oldPrice={360}
            rating={4}
            reviews={65}
          />
          <ProductCard
            image="/images/whitebag.png"
            title="Gucci duffle bag"
            price={960}
            oldPrice={1160}
            rating={4}
            reviews={65}
          />
          <ProductCard
            image="/images/rainbowDj.png"
            title="RGB liquid CPU Cooler"
            price={160}
            oldPrice={170}
            rating={4}
            reviews={65}
          />
          <ProductCard
            image="/images/bookshelf.png"
            title="Small BookShelf"
            price={360}
            rating={4}
            reviews={65}
          />
        </div>

        <div>
         
    
        </div>
       
      </section>
        <Home/>
         <ProductsPage/>
        <NewItem />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
