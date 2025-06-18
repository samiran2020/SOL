import { MapPin, MessageSquareText, PhoneIncoming, UserRound } from "lucide-react";
import { FaFacebookF, FaDribbble } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import MobileFooter from "./Mobile-footer";

import Image from "next/image";
import Link from "next/link";
const Footer= () => {
  return (
    <>
      <div className="Footer-Section  relative pb-20 md:pb-0 hidden md:block">
        <div className="footer-food hidden md:flex">
            <Image src="/images/footer-food.svg" alt="footer-food" width={45} height={45} className=" relative p-0" unoptimized />
        </div>
        <div className="footer-food  md:hidden flex">
            <Image src="/images/mobile-footer-food.svg" alt="footer-food" width={45} height={45} className=" relative p-0" unoptimized />
        </div>
        <div className="container">
             <footer className=" grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 relative z-10 -mt-12 md:mt-0 px-5 md:px-0">
                <div className="flex flex-col items-start md:items-center justify-start gap-0 md:gap-2 text-left md:text-center">
                  <div className="flex flex-row md:flex-col items-center gap-3">
                    <MessageSquareText size={45} className="text-DarkPrimary w-[35px] h-[35px] md:w-[45px] md:h-[45px]"  strokeWidth={1}/>
                    <h5 className="p-0 m-0 text-lg md:text-xl uppercase text-DarkPrimary mb-0 md:mb-4 tracking-[1px]  relative -top-[5px]">ABOUT RESTAURANT</h5>
                  </div>
                    <p className="p-0 m-0 text-sm text-DarkPrimary tracking-[1px]">Enjoy a wonderful cafe dining experience</p>
                    <Link href={""} className="p-0 m-0 text-sm text-DarkPrimary underline font-pop font-normal hover:text-colorPrimary">Read More</Link>
                </div>
                <div className="flex flex-col items-start md:items-center justify-start gap-0 md:gap-2 text-left md:text-center">
                    <div className="flex flex-row md:flex-col items-center gap-3">
                      <PhoneIncoming size={45} className="text-DarkPrimary w-[35px] h-[35px] md:w-[45px] md:h-[45px]"  strokeWidth={1}/>
                      <h5 className="p-0 m-0 text-lg md:text-xl uppercase text-DarkPrimary mb-0 md:mb-4 tracking-[1px]  relative -top-[5px]">LET'S TALK</h5>
                    </div>
                    
                    <Link href={""} className="p-0 m-0 text-sm text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary">Email: Support@senseoflanka.com </Link>
                    <Link href={""} className="p-0 m-0 text-sm text-DarkPrimary font-pop font-normal tracking-[1px] hover:text-colorPrimary">Phone: +31 6 42032432</Link>
                </div>
                <div className="flex flex-col items-start md:items-center justify-start gap-0 md:gap-2 text-left md:text-center">
                    <div className="flex flex-row md:flex-col items-center gap-3">
                      <MapPin size={45} className="text-DarkPrimary w-[35px] h-[35px] md:w-[45px] md:h-[45px]"  strokeWidth={1}/>
                      <h5 className="p-0 m-0 text-lg md:text-xl uppercase text-DarkPrimary mb-0 md:mb-4 tracking-[1px]  relative -top-[5px]">CONTACT US</h5>
                    </div>

                    <p className="p-0 m-0 text-sm text-DarkPrimary tracking-[1px] font-pop font-normal">Bredalaan 63, 5652 JB Eindhoven, Netherlands</p>
                </div>
                <div className="flex flex-col items-start md:items-center justify-start gap-0 md:gap-2 text-left md:text-center">
                    <div className="flex flex-row md:flex-col items-center gap-3">
                      <UserRound size={45} className="text-DarkPrimary w-[35px] h-[35px] md:w-[45px] md:h-[45px]"  strokeWidth={1}/>
                      <h5 className="p-0 m-0 text-lg md:text-xl uppercase text-DarkPrimary mb-0 md:mb-4 tracking-[1px]  relative -top-[5px]">Customer Service</h5>
                    </div>

                    <Link href="/terms&condition" className="p-0 m-0 text-sm text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary">Payments & Shipping </Link>
                    <Link href={""} className="p-0 m-0 text-sm text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary">Cancellation & Refund </Link>
                    <Link href={""} className="p-0 m-0 text-sm text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary">Terms And Conditions </Link>
                    <Link href={""} className="p-0 m-0 text-sm text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary">Privacy Policy  </Link>

                </div>
            </footer>
        </div>
        <div className="footer-bottom relative bg-white mt-10 min-h-10 hidden md:flex">
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5">
                    <p>© Copyright 2025 <Link href={""} className="text-colorPrimary hover:text-DarkPrimary hover:underline">senseoflanka </Link></p>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="logo-section w-[7.5rem] h-[7.5rem] bg-white rounded-full p-3 -mt-12">
                        <Image src="../images/SOL-brand.svg" alt="Image" width={130} height={134} className=" relative top-[-5px]" />
                    </div>
                  </div>
                  <div className="col-span-5 flex justify-end">
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
                </div>
            </div>
        </div>
      </div>
      <MobileFooter/>
    </>
  );
}
export default Footer