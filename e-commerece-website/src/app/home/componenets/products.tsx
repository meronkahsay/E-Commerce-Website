import React from "react";
import { HeartIcon } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons/faStarHalfStroke";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons/faStar";            
import StarRating from "./StarRating";

interface productsProps {
image: string;
title: string;
price: number;
reviews: number;
rating: number;
}




const Products:React.FC<productsProps>=({image,title,price,reviews,rating})=>{
    return(
       
            <div className="relative">
         
            <EyeIcon className="absolute top-5 left-65 "/>
            <HeartIcon  className="absolute top-15 left-65 "/>
          <div >
<img src={image} alt={title} className=" h-60 ml-10">
</img>
<p className="mt-5">{title}</p>
<p className="text-red-600 flex " > ${price} <StarRating rating={rating} /><span className="text-gray-600 ml-4">({reviews})</span> </p>
          </div>
            </div>
    )
}


export default Products;