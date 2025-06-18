import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { BadgePercent, Eye, Info, MapPin, Minus, MoveRight, Plus, Star } from "lucide-react";
import { CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const Cart = () => {
    return (
       <div className="cart-page-body  py-20">
            <div className="container">
                <div className="grid grid-cols-12 gap-6 mt-9">
                    <div className="left-panel col-span-8">
                        <h3 className="p-0 m-0 uppercase text-DarkPrimary mb-4">Billing details</h3>
                        <div className="content-body py-8 px-6 bg-white  rounded-sm">
                            <h5>Enter your billing details</h5>
                            <form>
                                
                            </form>
                            <div className="button-sec flex w-full justify-end mt-5">
                                <Button asChild className="py-2 px-4 bg-GreenSecondery text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button2 min-w-[100px] text-center cursor-pointer hover:bg-GreenSecondery">
                                    <Link href="/menu" className="relative z-10 inline-flex items-center justify-center tracking-[1px]" >Update Cart <MoveRight  size={16} strokeWidth={2} className="ml-1"/></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="right-panel col-span-4 sticky top-6 self-start">
                        <h3 className="p-0 m-0 uppercase text-DarkPrimary mb-4">Your order</h3>
                        <div className="content-body p-5 bg-white rounded-sm">
                            <div className="product-details-card border-b border-b-gray-300 border-dashed pb-3 flex flex-row gap-2 last:border-0">
                                
                                <div className="details-box">
                                    dfgdf
                                </div>
                            </div>    
                            
                            <div className="order-details-sec border-b border-b-gray-300 border-dashed py-5 flex flex-col gap-2 last:border-0">
                            <h5 className="font-popp  text-sm p-0 m-0 text-DarkPrimary font-pop font-semibold mb-3">Cart totals</h5>    
                            <ul className="flex flex-col gap-2 w-full">
                                <li className="flex flex-row items-center justify-between">
                                    <span className="font-popp  text-xs p-0 m-0 text-[#616161] font-pop">Order Total</span>
                                    <b className="font-popp  text-sm p-0 m-0 text-DarkPrimary font-pop"><span className="font-serif">₹</span> 194.00/-</b>
                                </li>
                                <li className="flex flex-row items-center justify-between">
                                    <TooltipProvider>
                                        <span className="font-popp  text-xs p-0 m-0 text-[#616161] font-pop flex flex-rwo items-center gap-1">
                                            Taxes and Charges
                                            <Tooltip>
                                                <TooltipTrigger><Info size={14} className="text-[#bbbbbb]"/></TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="font-popp  text-xxs p-0 m-0 text-[#616161] font-pop mb-1">
                                                        CGST  <span className="font-serif pl-5">₹</span> 11.18
                                                    </p>
                                                    <p className="font-popp  text-xxs p-0 m-0 text-[#616161] font-pop">
                                                        SGST  <span className="font-serif pl-5">₹</span> 11.18
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </span>
                                    </TooltipProvider>
                                    <b className="font-popp  text-sm p-0 m-0 text-DarkPrimary font-pop"><span className="font-serif">₹</span> 22.36/-</b>
                                </li>
                                <li className="flex flex-row items-center justify-between">
                                    <span className="font-popp  text-xs p-0 m-0 text-[#616161] font-pop">Shipping</span>
                                    <span className="font-popp  text-xs p-0 m-0 text-colorPrimary font-pop">Free Shipping</span>
                                </li>
                            </ul>
                            <div className="total flex flex-roe justify-between pt-3 border-t border-b-gray-300 border-dashed mt-3">
                                <p className="font-popp  text-sm p-0 m-0 text-DarkPrimary font-pop font-bold">TOTAL PAYABLE</p>
                                <b className="font-popp  text-sm p-0 m-0 text-DarkPrimary font-pop"><span className="font-serif">₹</span> 194.00/-</b>
                            </div>
                            </div>
                            <div className="link border-b border-b-gray-300 border-dashed pb-3 flex flex-col gap-2 last:border-0 mt-5">
                                <Link href="/cart" className=" font-pop text-xxs text-GreenSecondery  p-0 m-0 underline hover:text-colorPrimary ">Refer to Terms & Conditions</Link>
                                <Button  className="py-2 px-4 bg-DarkPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none 
                                procied-button min-w-[100px] text-center cursor-pointer hover:bg-GreenSecondery m-0 flex items-center mt-4">
                                    Submit                      
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};
export default Cart;
