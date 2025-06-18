
import { AlignRight, CalendarCheck, GripHorizontal, Heart, LayoutGrid, Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

const MobileFooter = () => {
  return (
    <div className="mobile-footer-body flex  items-center md:hidden  fixed  bottom-0 w-full bg-white h-[70px] shadow-2xl z-20 px-5 ">
        <ul className="grid grid-cols-5 w-full">
            <li className="flex flex-col justify-center items-center">
                <Link href="/menu" className="text-xxs font-medium font-pop text-DarkPrimary text-center flex flex-col justify-center items-center">
                    <LayoutGrid size={20}/>
                    Menu
                </Link>
            </li>
            <li className="flex flex-col justify-center items-center">
                <Link href="/cart" className="text-xxs font-medium font-pop text-DarkPrimary text-center flex flex-col justify-center items-center">
                    <ShoppingCart size={20}/>
                    Cart
                </Link>
            </li>
            <li className="flex flex-col justify-center items-center">
                <Link href="/" className="text-xxs font-medium font-pop text-white text-center 
                flex flex-col justify-center items-center w-12 h-[50px] bg-colorPrimary rounded-full ">
                    <FiHome size={20}/>
                </Link>
            </li>
            <li className="flex flex-col justify-center items-center">
                <Link href="#" className="text-xxs font-medium font-pop text-DarkPrimary text-center flex flex-col justify-center items-center">
                    <CalendarCheck size={20}/>
                    Reservation
                </Link>
            </li>
            
            <li className="flex flex-col justify-center items-center">
                <Link href="#" className="text-xxs font-medium font-pop text-DarkPrimary text-center flex flex-col justify-center items-center">
                    <GripHorizontal />
                    More
                </Link>
            </li>
        </ul>
    </div>
  );
}
export default MobileFooter