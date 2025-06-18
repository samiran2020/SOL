import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight, Phone, PhoneIncoming } from "lucide-react";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaFacebookF, FaDribbble, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MobileHeader = () => {
  return (
    <div className="mobile-header-body block md:hidden">
        <Sheet>
            <SheetTrigger className="p-0 md:p-2 bg-transparent text-sm text-DarkPrimary  outline-none  rounded-none 
            cursor-pointer  hover:text-colorPrimary  text-left gap-5 flex items-center flex-row justify-center ml-2">
                <AlignRight strokeWidth={1.5} size={30}/>
            </SheetTrigger>
        
            {/* <SheetTrigger>Open</SheetTrigger> */}
            <SheetContent className="bg-[#f5ebdc]  mobile-header" >
                <Link href="/" className=" flex items-center justify-center bg-white w-full text-center  pt-2" >
                    <div className="logo-section w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] bg-white rounded-full p-2 relative z-10  -mb-10">
                        <Image src="../images/SOL-brand.svg" alt="Image" width={130} height={134} className=" relative top-[-5px]" />
                    </div>
                </Link>
                <SheetHeader className="p-0 gap-0 py-3 px-2 ">
                    <Navigation/>
                    <span className="p-0 m-0 text-lg md:text-xl text-DarkPrimary  tracking-[1px] mt-6 pl-3 pont-pop font-bold">Contact with us</span>
                    <Link href="tel:+31642032432" className="call flex flex-row items-center  gap-1 mt-1 pl-3">
                        <p className="font-medium text-DarkPrimary  text-xs">Phone: +31 6 42032432</p>
                    </Link>
                    <Link href="tel:+31642032432" className="call flex flex-row items-center  gap-1 mt-1 pl-3">
                        <p className="font-medium text-DarkPrimary  text-xs">Email: Support@senseoflanka.com</p>
                    </Link>
                    <Link href="tel:+31642032432" className="call flex flex-row items-center  gap-1 mt-1 pl-3">
                        <p className="font-medium text-DarkPrimary  text-xs leading-5">Address: Bredalaan 63, 5652 JB Eindhoven, Netherlands</p>
                    </Link>
                    <div className="col-span-5 flex justify-start pl-2 mt-4">
                        <ul className="flex flex-row gap-3 items-center">
                        <li>
                            <Link href={""}><FaFacebookF size={18} className="text-DarkPrimary hover:text-colorPrimary"/></Link>
                        </li>
                        <li>
                            <Link href={""}><FaDribbble size={18} className="text-DarkPrimary hover:text-colorPrimary"/></Link>
                        </li>
                        <li>
                            <Link href={""}><FaXTwitter size={18} className="text-DarkPrimary hover:text-colorPrimary"/></Link>
                        </li>
                        <li>
                            <Link href={""}><FaInstagram size={18} className="text-DarkPrimary hover:text-colorPrimary"/></Link>
                        </li>
                        </ul>
                    </div>
                    <Button asChild className="py-1 md:py-2 px-2 md:px-4 bg-colorPrimary text-xs md:text-sm text-white ml-3 rounded-3xl border-0 outline-none mk-reserv-buttn mt-5">
                        <Link href="" className="relative z-10 inline-flex" >Make a reservation</Link>
                    </Button>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  );
}
export default MobileHeader