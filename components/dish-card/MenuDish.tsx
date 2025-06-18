import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
//import ProfileMenu from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, ShoppingCart } from "lucide-react";
import { useState } from "react";

const MenuCard = ( props:any) => {
    // const [wish, setwished] = useState(false);
    //  const toggleLike = () => {
    //     setwished(!wish);
    // };
    // src="/images/food-1.jpg"
    
  return (
      <div className="menu-card bg-white relative  rounded-2xl flex flex-col md:flex-row items-center">
        <div className="dish-image flex items-center justify-center relative">
            <Link href={""} className="food-image overflow-hidden rounded-full relative ">
                <Image src={props.uri}  alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-[100%] h-[100%]" unoptimized />
            </Link>
        </div>
        <div className="card-content pl-3">
            <h4 className="text-md md:text-lg text-DarkPrimary uppercase tracking-[1px] p-0 m-0 mb-[6px]">{props.title}</h4>
            <p className="text-xxs md:text-xs text-DarkPrimary  p-0 m-0 leading-4 md:leading-5">{props.description}</p>
            <div className="action-grup flex w-full flex-row mt-2 items-center justify-between pr-3">
                <h5 className="text-xl text-DarkPrimary uppercase  p-0 m-0 font-sheep">{props.price}</h5>
                <Link href={""} className="flex flex-row text-DarkPrimary gap-2 text-xs uppercase font-agd tracking-[1px] hover:text-colorPrimary">
                    <ShoppingCart size={15}/>
                    Add to cart
                </Link>
            </div>
        </div>
      </div>
  );
}
export default MenuCard