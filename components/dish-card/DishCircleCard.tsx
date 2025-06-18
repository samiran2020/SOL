import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
//import ProfileMenu from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, ShoppingCart } from "lucide-react";
import { useState } from "react";

const DishcircleCard = (props:any) => {
    // const [wish, setwished] = useState(false);
    //  const toggleLike = () => {
    //     setwished(!wish);
    // };
  return (
      <div className="dish-circle-card bg-white relative ">
        <div className="dish-image flex items-center justify-center relative">
            <div className="food-hover-content w-36 h-36 rounded-full bg-white  absolute top-0 left-0 right-0 bottom-0 m-auto z-10
            flex items-center justify-center flex-col">
                <h2 className="text-xl text-DarkPrimary p-0 m-0 tracking-[1.5px] ">{props.price}</h2>
                <Link href={""} className="flex flex-row text-DarkPrimary gap-2 text-sm uppercase font-agd tracking-[1px] hover:text-colorPrimary">
                    <ShoppingCart size={18}/>
                    Add to cart
                </Link>
            </div>
            <Link href={""} className="food-image w-[220px] h-[220px] overflow-hidden rounded-full relative -left-[2px] -top-[2px]">
                <Image src={props.uri} alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-[100%] h-[100%]" unoptimized />
            </Link>
        </div>
        <div className="dish-content text-center pt-3">
            <h4 className="p-0 m-0 text-lg text-DarkPrimary uppercase tracking-[1px] mb-2">{props.title}</h4>
            <p className="p-0 m-0 text-sm text-DarkPrimary">{props.description}</p>
        </div>
      </div>
  );
}
export default DishcircleCard