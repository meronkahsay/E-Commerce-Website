
import FlashSaleCard from "./componenets/Flashcard";
import Catagories from "./componenets/Catagories";
import ProductCard from "./componenets/Productcard";
import HomeComponent from "./componenets/home";
import { Monitor, Smartphone, Headphones, Camera, Laptop, Gamepad2, Watch} from "lucide-react";
import CategoryCard from "./componenets/CatagoreyCard";
import RedBadge from "@/app/sharedComponent/Badge";
import Products from "./componenets/products";



export default function HomePage() {
  return (
  
    <div className="px-35 space-y-12">
        <div>
          <HomeComponent/>
        </div>
      {/* Flash Sales */}
      <section>
      
      
        <h2 className="text-4xl font-bold mb-4">Flash Sales</h2>
        
        <div className="flex justify-around overflow-x-auto">
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
      {/* Categories */}
      <section>
       
        <h2 className="text-4xl font-bold mb-6">Browse By Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          <CategoryCard icon={<Smartphone  className="w-16 h-18"/>} label="Phones" />
          <CategoryCard icon={<Laptop className="w-16 h-18" />} label="Computers" />
          <CategoryCard icon={<Watch className="w-16 h-18" />} label="SmartWatch" />
          <CategoryCard icon={<Camera className="w-16 h-18" />} label="Camera" active />
          <CategoryCard icon={<Headphones className="w-16 h-18" />} label="HeadPhones" />
          <CategoryCard icon={<Gamepad2 className="w-16 h-18" />} label="Gaming" />
        </div>
      </section>
      {/* Best Selling Products */}
      <section>
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold mb-4">Best Selling Products</h2> 
          <button className="bg-red-500 text-white px-10 py-4 rounded-lg text-1xl">View All</button>
        </div>
        <div className="flex justify-around overflow-x-auto">
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
         
          <Catagories />
        </div>
       
      </section>
      <div>
       
       

        <RedBadge text="Our Products" />
    <h1 className="text-4xl py-6 " >Explore Our Produts</h1>
    <div className="flex justify-around flex-wrap gap-4">
         
    <Products image="/images/cesar.jpg"
    title="Breed Dry Dog Food"
    price={100}
    rating={3}
    reviews={35}
    />
      <Products image="/images/bcamera.png"
    title="CANON EOS DSLR Camera"
    price={360}
    rating={4}
    reviews={95}
    />  <Products image="/images/redpc.png"
    title="ASUS FHD Gaming Laptop"
    price={700}
    rating={5}
    reviews={325}
    />  <Products image="/images/lotion.png"
    title="Curology Products Set"
    price={500}
    rating={4}
    reviews={145}
    />
      </div>
       <div className="flex justify-around flex-wrap gap-4 mt-30">
         
    <Products image="/images/redcar.png"
    title="Kds Electric Car"
    price={960}
    rating={5}
    reviews={65}
    />
      <Products image="/images/yellowShoes.png"
    title="Jr.Zoom Soccer Cleats"
    price={1160}
    rating={5}
    reviews={35}
    />  <Products image="/images/redbgame.png"
    title="GP11 Shooter USB Gamepad"
    price={660}
    rating={4.5}
    reviews={55}
    />  <Products image="/images/greenjacket.png"
    title="Quilted Satin Jacket"
    price={660}
    rating={4.5}
    reviews={55}
    />
      </div>
      </div>
    </div>
  );
}