import { Badge } from "lucide-react";
import OurProductCard from "../OurProducts";
import RedBadge from "@/app/sharedComponents/Badge";
const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    image: "/images/cesar.jpg",
    rating: 3,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "/images/bcamera.png",
    rating: 4,
    reviews: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "/images/redpc.png",
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    image: "/images/lotion.png",
    rating: 4,
    reviews: 145,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    image: "/images/redcar.png",
    rating: 5,
    reviews: 65,
    tag: "NEW",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "/images/yellowShoes.png",
    rating: 5,
    reviews: 35,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "/images/redbgame.png",
    rating: 5,
    reviews: 55,
    tag: "NEW",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/images/greenjacket.png",
    rating: 5,
    reviews: 55,
    colors: ["#000000", "#1C3D5A"],
  },
];
export default function ProductsPage() {
  return (
    <section className="py-10 px-6 ml-23">
<RedBadge text={"Our Products"}/>
      <h1 className="text-4xl font-bold mb-15 mt-12 ">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <OurProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}