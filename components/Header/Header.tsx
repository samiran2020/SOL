import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import ProfileMenu from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { CircleUserRound, Heart, Phone, ShoppingCart } from "lucide-react";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

const Header = () => {
    // const [wish, setwished] = useState(false);
    //  const toggleLike = () => {
    //     setwished(!wish);
    // };
  return (
      <div className="Header-Section border-t-4 border-t-colorPrimary relative z-10">
        <div className="container">
            <div className="grid grid-cols-12 relative">
                <div className="col-span-2 relative mb-[-40px] md:mb-[-60px] pt-1">
                    <Link href="/" >
                        <div className="logo-section w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] bg-white rounded-full p-2 ">
                            <Image src="../images/SOL-brand.svg" alt="Image" width={130} height={134} className=" relative top-[-5px]" />
                        </div>
                    </Link>
                </div>
                <div className="col-span-10  flex flex-row  items-center justify-end gap-2 md:gap-5">
                    <div className="desk-header hidden md:flex">
                        <Navigation/>
                    </div>
                    <Link href="tel:+31642032432" className="call  hidden md:flex flex-row items-center gap-1 ">
                        <div className="call-icon w-10 h-10 rounded-full items-center flex justify-center bg-GreenSecondery">
                            <Phone size={20}  className="text-white"/>
                        </div>
                        <p className="font-semibold text-DarkPrimary  text-xs">+31 6 42032432</p>
                    </Link>
                    <div className="flex flex-row items-center gap-4">
                        <ProfileMenu/>
                        {/* <Button variant="outline" className="border-none outline-none hover:bg-transparent p-0 m-0 w-auto h-auto relative">
                            <Heart className="text-DarkPrimary" size={20} />
                            <Badge variant="default" className=" w-6 h-6 bg-colorPrimary text-xxs text-white items-center 
                            justify-center border-2 border-white border-solid absolute -top-4 -right-3 m-autop-1">1</Badge>
                        </Button> */}
                        <Link href="/cart" className="cart-menu relative">
                            <ShoppingCart className="text-DarkPrimary" size={20} />
                            <Badge variant="default" className=" w-6 h-6 bg-colorPrimary text-xxs text-white items-center 
                            justify-center border-2 border-white border-solid absolute -top-4 -right-3 m-autop-1">5</Badge>
                        </Link>
                    </div>
                    <Button asChild className="py-1 md:py-2 px-2 md:px-4 bg-colorPrimary text-xs md:text-sm text-white ml-3 
                    rounded-3xl border-0 outline-none mk-reserv-buttn md:flex hidden">
                        <Link href="" className="relative z-10 inline-flex" >Make a reservation</Link>
                    </Button>
                    <MobileHeader/>
                </div>
            </div>
        </div>
      </div>
  );
}
export default Header