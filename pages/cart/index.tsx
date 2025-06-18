import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { BadgePercent, ClipboardList, Eye, Info, MapPin, Minus, MoveRight, Plus, Star } from "lucide-react";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserLoginAuthForm from "@/components/auth/login";
import UserSignupAuthForm from "@/components/auth/signup";

const Cart = () => {
    return (
       <div className="cart-page-body  py-20">
            <div className="container">
                <Breadcrumb className="pb-8">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/" className="font-pop textsm font-medium text-colorPrimary">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {/* <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/components">Components</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem> */}
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-pop textsm font-medium text-gray-500">Cart</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grid grid-cols-12 gap-6">
                    <div className="left-panel col-span-12 md:col-span-7 order-2 md:order-1">
                        <h3 className="p-0 m-0 uppercase text-DarkPrimary mb-4">Your Cart</h3>
                        <div className="content-body py-8 px-6 bg-white  rounded-sm mb-4 relative after:h-[300px] after:w-[2px] after:absolute after:border-l after:border-l-black after:border-dashed after:top-8 after:left-11 after:z-10">
                            <div className="box-header flex flex-row gap-2 items-center mb-4">
                               <span className=" inline-flex w-10 h-10 flex-col justify-center items-center bg-black text-YellowSecondery shadow-lg  relative z-20 ">
                                <VscAccount size={20} />
                               </span>
                               <h5 className="p-0 m-0 uppercase text-lg tracking-[1px] text-DarkPrimary">Account</h5>       
                            </div>
                            
                            <p className="p-0 m-0 text-xs text-gray-500 font-normal pl-12">To place your order now, log in to your existing account or sign up.</p>
                            <div className="login-butn-grup flex flex-row gap-4 items-center mt-4 pl-12">
                                
                                <Dialog>
                                    <DialogTrigger className=" flex items-center flex-col font-pop bg-white border border-GreenSecondery 
                                        outline-none px-5  rounded-none h-14  min-w-28 text-GreenSecondery hover:bg-white hover:shadow-xl  justify-center ">
                                        <small className="flex">Have an account?</small>
                                        <p className="font-semibold"> LOG IN</p>
                                    </DialogTrigger>
                                    <UserLoginAuthForm/>
                                </Dialog>
                                <Dialog>
                                    <DialogTrigger className=" flex items-center flex-col font-pop bg-GreenSecondery border border-GreenSecondery 
                                outline-none px-5  rounded-none h-14  min-w-28 text-white hover:bg-black hover:border-black hover:shadow-xl justify-center">
                                        <small className="flex">New to Sense Of Lanka?</small>
                                    <p className="font-semibold">SIGN UP</p>
                                    </DialogTrigger>
                                    <UserSignupAuthForm/>
                                </Dialog>
                            </div>
                        </div>

                        <div className="content-body py-8 px-6 bg-white  rounded-sm mb-4 relative after:h-[350px] after:w-[2px] after:absolute after:border-l after:border-l-black after:border-dashed after:top-8 after:left-11 after:z-10">
                            <div className="box-header flex flex-row gap-2 items-center mb-4">
                               <span className=" inline-flex w-10 h-10 flex-col justify-center items-center bg-black text-YellowSecondery shadow-lg relative z-20 ">
                                <HiOutlineLocationMarker size={20} />
                               </span>
                               <h5 className="p-0 m-0 uppercase text-lg tracking-[1px] text-DarkPrimary">Delivery address</h5>       
                            </div>
                            
                            <div className="flex pl-12 gap-4">
                                <div className="ex-location flex flex-row gap-2 w-1/2 border border-gray-300 p-5 hover:shadow-xl">
                                    <span><MapPin/></span>
                                    <div className="flex flex-col relative -mt-1">
                                        <h4 className="font-popp font-semibold text-md p-0 m-0 mb-2">Home</h4>
                                        <p className="text-xs m-0 p-0 text-gray-600">30, Rabindra Nagar, Alipore, Nimta, North Dumdum, West Bengal 700058, India</p>
                                        <Button className=" mt-4 bg-GreenSecondery rounded-3xl text-white font-pop  " >
                                            Deliver Here
                                        </Button>
                                    </div>
                                </div>
                                <div className="new-added flex flex-row gap-2 w-1/2 border border-gray-200 border-dashed p-5 hover:shadow-xl ">
                                    <span>
                                        <MdOutlineAddLocationAlt size={26}/>
                                    </span>
                                    <div className="flex flex-col relative ">
                                        <h4 className="font-popp font-semibold text-md p-0 m-0">Add new Address</h4>
                                        <Dialog >
                                        <DialogTrigger className="mt-5 py-2 outline-none border border-DarkPrimary
                                         rounded-3xl bg-white text-DarkPrimary font-pop hover:text-white hover:bg-DarkPrimary">Add New</DialogTrigger>
                                        <DialogContent className="p-0 bg-[#f5ebdc] overflow-hidden border-0 shadow-none">
                                            <DialogHeader className="p-5 pb-0">
                                                <DialogTitle className="font-agd uppercase  tracking-[1.2px]">Select Delivery Address</DialogTitle>
                                            </DialogHeader>
                                            <div className="ex-address  p-5 pt-0  gap-3 py-0 mb-0">
                                                <RadioGroup defaultValue="option-one">
                                                    <div className="flex items-start space-x-2 mb-3">
                                                        <RadioGroupItem value="option-one" id="option-one" checked />
                                                        <div className="flex items-center flex-col relative -mt-1">
                                                            <Label htmlFor="option-one" className="font-pop w-full text-xs mb-1">Peter smith ,700049 <span className="p-1 bg-[#ead9c0]  rounded-sm px-2 text-xxs ml-2 font-light">Home</span></Label>
                                                            <small className="text-xxs font-pop">30, Ravindra Nagar, Alipur West, Nimta, Kolkata</small>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <RadioGroupItem value="option-two" id="option-two" />
                                                        <div className="flex items-center flex-col relative -mt-1">
                                                            <Label htmlFor="option-one" className="font-pop w-full text-xs mb-1">Peter smith ,700056 <span className="p-1 bg-[#ead9c0]  rounded-sm px-2 text-xxs ml-2 font-light">Home</span></Label>
                                                            <small className="text-xxs font-pop">3/1c b.m Banerjee road belgharia kolkata 700056, 3/1c b.m Banerjee road, Kolkata</small>
                                                        </div>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <div className="pin-box p-5  bg-[#6f3c2f] border-t-2 border-t-[#e70] pt-4">
                                                <h5 className=" uppercase text-DarkPrimary text-sm traking-[2px] text-white inline-flex">Use pincode to check delivery info</h5>
                                                <form>
                                                    <div className="pin-box-card flex flex-col gap-1">
                                                        <Input placeholder="Enter pin code"/>
                                                        <Input placeholder="Door / Flat no."/>
                                                        <Input placeholder="landmark"/>
                                                        <Button className="bg-YellowSecondery text-white font-pop text-xs h-12" >SAVE ADDRESS & PROCEED</Button>
                                                    </div>
                                                    

                                                </form>
                                            </div>
                                        </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-body py-8 px-6 bg-white  rounded-sm mb-4">
                            <div className="box-header flex flex-row gap-2 items-center mb-4">
                               <span className=" inline-flex w-10 h-10 flex-col justify-center items-center bg-black text-YellowSecondery shadow-lg  relative z-10">
                                <CiWallet size={20} />
                               </span>
                               <h5 className="p-0 m-0 uppercase text-lg tracking-[1px] text-DarkPrimary">Choose Payment Mode</h5>       
                            </div>
                            <div className="payment-option">
                                <Accordion type="single" defaultValue="upi" collapsible>
                                    <AccordionItem value="upi" className="border-b border-b-gray-300 border-dashed  hover:shadow-lg px-4">
                                        <AccordionTrigger className="payment-opt-acor-button   py-2">
                                            <div className="butn-content flex flex-col w-full text-left">
                                                <h5 className="p-0 m-0 font-pop text-sm font-semibold text-DarkPrimary mb-2">UPI</h5>
                                                <span className="p-0 m-0 font-pop text-xs font-normal text-gray-500">Pay by any UPI app</span>
                                                <small className="p-0 m-0 font-pop text-xxs font-normal text-GreenSecondery">Up to ₹0 instant saving on GooglePay</small>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="shadow-none bg-[#F9F6F3] p-5 rounded-md mb-3">
                                            <div className="flex flex-row gap-2 items-center mb-2">
                                                <RadioGroup>
                                                    <RadioGroupItem value="card" id="" />
                                                </RadioGroup>
                                                <small className="p-0 m-0 font-pop text-sm font-normal text-DarkPrimary">Your UPI ID</small>
                                            </div>
                                            <form className="flex flex-row gap-5 items-center">
                                                <Input placeholder="Enter UPI ID" className=" h-12" divclassName="border-0 rounded-sm" />
                                                <Button className=" rounded-sm h-12  disabled:cursor-not-allowed" disabled>Pay ₹ 194.00/-</Button>
                                            </form>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="card" className="border-b border-b-gray-300 border-dashed  hover:shadow-lg px-4">
                                        <AccordionTrigger className="payment-opt-acor-button   py-2 pt-5 ">
                                            <div className="butn-content flex flex-col w-full text-left">
                                                <h5 className="p-0 m-0 font-pop text-sm font-semibold text-DarkPrimary mb-2">Credit / Debit / ATM Card</h5>
                                                <span className="p-0 m-0 font-pop text-xs font-normal text-gray-500">Add and secure cards as per RBI guidelines</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="shadow-none bg-[#F9F6F3] p-5 rounded-md mb-3">
                                            <div className="flex flex-row gap-2 items-center">
                                                <RadioGroup>
                                                    <RadioGroupItem value="card" id="" />
                                                </RadioGroup>
                                                <small className="p-0 m-0 font-pop text-sm font-normal text-DarkPrimary">Enter Credit / Debit / ATM Card details</small>
                                            </div>
                                            <form className="flex flex-col gap-2 mt-4 ">
                                                <Input placeholder="Enter Card Number " className=" h-12 " divclassName="border-0 rounded-sm  font-popp" />
                                                <div className="input-grup flex flex-row gap-2 items-center">
                                                    <div className="flex flex-row gap-2">
                                                        <Input placeholder="MM" className=" h-12" divclassName="border-0 rounded-sm font-popp" />
                                                        <Input placeholder="YY" className=" h-12" divclassName="border-0 rounded-sm font-popp" />
                                                    </div>
                                                    <Input placeholder="CVV" className=" h-12" divclassName="border-0 rounded-sm" />
                                                </div>
                                                <Button className=" rounded-sm h-12  disabled:cursor-not-allowed" disabled>Pay ₹ 194.00/-</Button>
                                                <small className="p-0 m-0 font-pop text-xxs font-normal text-GreenSecondery">Add and secure cards as per RBI guidelines</small>
                                                
                                            </form>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="Cash" className="border-b border-b-gray-300 border-dashed  hover:shadow-lg px-4">
                                        <AccordionTrigger className="payment-opt-acor-button   py-2 pt-5 ">
                                            <div className="butn-content flex flex-col w-full text-left">
                                                <h5 className="p-0 m-0 font-pop text-sm font-semibold text-DarkPrimary mb-2">Cash on Delivery</h5>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="shadow-none bg-[#F9F6F3] p-5 rounded-md mb-3">
                                            <div className="flex flex-row gap-2 items-center">
                                                <RadioGroup>
                                                    <RadioGroupItem value="card" id="" />
                                                </RadioGroup>
                                                <small className="p-0 m-0 font-pop text-sm font-normal text-DarkPrimary">Due to handling costs, a nominal fee of ₹7 will be charged</small>
                                            </div>
                                            
                                            <form className="flex flex-row gap-2 mt-4 ">
                                                <div className="input-grup flex flex-row gap-2 items-center">
                                                    <div className="flex flex-row gap-2 bg-white h-10 p-1 rounded-sm">
                                                        <Image src="/images/captua.png" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                                                    </div>
                                                    <Input placeholder="Enter the characters" divclassName="border-none"  className=" font-pop text-xs"/>
                                                </div>
                                                <Button className="font-pop " disabled>Confirm Order</Button>
                                            </form>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <Button  className=" bg-DarkPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none p-0 
                            procied-pay-button  text-center cursor-pointer hover:bg-DarkPrimary m-0 flex items-center mt-4 w-full">
                                <span className="relative z-10  items-center justify-center tracking-[0.5px] capitalize font-pop flex py-2 px-4 w-full" >Proceed to Pay <MoveRight  size={16} strokeWidth={2} className="ml-1 relative "/></span>
                            </Button>
                        </div>

                    </div>

                    {/* right-panel-start-here */}
                    <div className="right-panel col-span-12 md:col-span-5 relative md:sticky top-0 md:top-6 self-auto md:self-start order-1">
                        <h3 className="p-0 m-0 uppercase text-DarkPrimary mb-4">Bill Details</h3>
                        <div className="content-body p-5 bg-white rounded-sm">   
                            <div className="content-body flex-col  border-b border-b-gray-300 border-dashed py-5 flex  gap-2 last:border-0 ">
                                <div className="product-card flex flex-col md:flex-row items-start justify-between flex-wrap gap-2 md:gap-5 border-b border-b-gray-300 border-dashed pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                                    <div className="product-info flex flex-row items-start w-full md:w-[72%] flex-wrap gap-2">
                                        <div className="product-image extra-meal-image w-[50x] h-[50px] overflow-hidden rounded-xl">
                                            <Image src="/images/Butter-Milk.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </div>
                                        <div className="product-info w-full md:w-[83%]">
                                            <h4 className="p-0 m-0 uppercase text-DarkPrimary text-sm tracking-[1px] mb-1">Tempered Masala Butter Milk</h4>
                                            <p className="text-xxs text-gray-500 leading-5 p-0 m-0">A special Tamilnadu Blended Yogurt with coriander leaves, green chilly, ginger & Indian Spices</p>
                                            <Link href="/cart" className=" font-pop text-xxs text-GreenSecondery  p-0 m-0 underline hover:text-colorPrimary " >Costomize</Link>
                                        </div>
                                    </div>
                                    <div className="price-info text-center">
                                        <div className="price-amount ml-auto mb-3">
                                            <h4 className="p-0 m-0 mt-2">₹194/-</h4>                    
                                        </div>
                                        <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2">
                                            <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                <Minus />
                                            </Button>
                                            <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                            <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                <Plus />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-card flex flex-row items-start justify-between flex-wrap gap-2 md:gap-5 border-b border-b-gray-300 border-dashed pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                                    <div className="product-info flex flex-row items-start w-[72%] flex-wrap gap-2">
                                        <div className="product-image extra-meal-image w-[50px] h-[50px] overflow-hidden rounded-xl">
                                            <Image src="/images/butter.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </div>
                                        <div className="product-info w-[83%]">
                                            <h4 className="p-0 m-0 uppercase text-DarkPrimary text-sm tracking-[1px] mb-1">Tempered Masala Butter Milk</h4>
                                            <p className="text-xxs text-gray-500 leading-5 p-0 m-0">A special Tamilnadu Blended Yogurt with coriander leaves, green chilly, ginger & Indian Spices</p>
                                            <Link href="/cart" className=" font-pop text-xxs text-GreenSecondery  p-0 m-0 underline hover:text-colorPrimary " >Costomize</Link>
                                        </div>
                                    </div>
                                    <div className="price-info text-center">
                                        <div className="price-amount ml-auto mb-3">
                                            <h4 className="p-0 m-0 mt-2">₹194/-</h4>                    
                                        </div>
                                        <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2">
                                            <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                <Minus />
                                            </Button>
                                            <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                            <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                <Plus />
                                            </Button>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="special-instruction flex flex-row items-center gap-2 bg-[#f8f6f3] h-10 rounded-sm  px-4">
                                    <ClipboardList className="" size={17} strokeWidth={1.5} color="#d4d2d0"/>
                                    <Input placeholder="Special instructions for your meal (optional)…" className="text-xxs bg-transparent p-0 placeholder:text-xxs placeholder:text-[#d4d2d0]" divclassName=" font-pop text-xs border-none bg-transparent" />
                                </div>
                            </div>
                            <div className="discount-sec border-b border-b-gray-300 border-dashed py-5 flex flex-col gap-2 last:border-0">
                                 <Sheet>
                                    <SheetTrigger className="p-2 bg-white text-sm text-DarkPrimary ml-0  outline-none  w-full rounded-none 
                                    cursor-pointer border border-dashed border-gray-500 h-16 hover:bg-white hover:shadow-lg  text-left gap-5 flex items-center flex-row justify-start px-5 font-pop m-0">
                                        <BadgePercent strokeWidth={1.5}/> Apply Coupon
                                    </SheetTrigger>
                                   
                                    {/* <SheetTrigger>Open</SheetTrigger> */}
                                    <SheetContent >
                                        <SheetHeader className="p-0 gap-0 pb-2 ">
                                            <header className=" sticky top-0 self-start shadow-2xl w-full p-4">
                                                <h4 className="p-0 m-0 flex flex-row gap-1 uppercase items-center text-DarkPrimary text-lg"><BadgePercent strokeWidth={1.5}/> Apply Coupon</h4>
                                                <div className="flex flex-row items-center mt-5">
                                                    <Input className=" h-10" divclassName="" placeholder="Code"/>
                                                    <Button className="text-xs font-pop ml-2" >Apply Coupon</Button>
                                                </div>
                                            </header>
                                            <div className="discount-content p-4 overflow-y-scroll h-[80vh]">
                                                <div className="copun-list border border-solid border-gray-400 p-4">
                                                    <h5 className="font-pop uppercase text-xxs text-gray-400 font-semibold">Available Coupons</h5>
                                                    <div className="cuppon-box border-b border-b-gray-300 border-dashed pb-4 mb-4 last:border-none">
                                                        <div className="code inline-flex p-3 border-dashed border border-gray-400 px-5 rounded-xl font-pop uppercase font-bold text-DarkPrimary">
                                                            CREDSWIGGYUPI
                                                        </div>
                                                        <p className="text-xs font-pop font-bold text-DarkPrimary p-0 my-3 mb-0 ">Flat ₹100 cashback using Swiggy UPI</p>
                                                        <small className="text-xxs font-pop text-DarkPrimary p-0 my-3 mb-0 leading-4 inline-block ">Cashback will be credited to CRED Balance. Rewards powered by CRED</small>
                                                        <Accordion type="single" collapsible className="border-none">
                                                            <AccordionItem value="item-1" className="border-none m-0 p-0">
                                                                <AccordionTrigger className="text-xs font-pop text-DarkPrimary p-0 inline-flex justify-start more-button border-0 shadow-none ">More</AccordionTrigger>
                                                                <AccordionContent className="border-none">
                                                                    <p className="font-pop uppercase text-xxs text-gray-400 font-medium p-0 m-0 mb-2">Terms and Conditions</p>
                                                                    <ul className="flex flex-col gap-1 list-disc">
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Offer applicable on app versions 5.3.0(1) & above for iOS & 4.63.0(1271) & above for Android</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Applicable only for selected users & once per user during the campaign</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Cashback will be provided on the net transaction amount of ₹99 or more using Swiggy UPI as a payment instrument</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Users will get a maximum cashback of ₹100 across Food & Instamart</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">To avail this offer, please log in on Swiggy with the same mobile number that is registered on CRED</p></li>
                                                                    </ul>
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        </Accordion>
                                                        <Button asChild className="py-2 px-4 bg-DarkPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none 
                                                        procied-button min-w-[100px] text-center cursor-pointer hover:bg-GreenSecondery m-0 flex items-center ">
                                                            <Link href="/cart" className="relative z-10 inline-flex items-center justify-center tracking-[0.5px] capitalize font-pop text-xxs" >APPLY COUPON <MoveRight  size={16} strokeWidth={2} className="ml-1 relative "/></Link>
                                                        </Button>
                                                    </div>
                                                    <div className="cuppon-box border-b border-b-gray-300 border-dashed pb-4 mb-4 last:border-none">
                                                        <div className="code inline-flex p-3 border-dashed border border-gray-400 px-5 rounded-xl font-pop uppercase font-bold text-DarkPrimary">
                                                            CREDSWIGGYUPI
                                                        </div>
                                                        <p className="text-xs font-pop font-bold text-DarkPrimary p-0 my-3 mb-0 ">Flat ₹100 cashback using Swiggy UPI</p>
                                                        <small className="text-xxs font-pop text-DarkPrimary p-0 my-3 mb-0 leading-4 inline-block ">Cashback will be credited to CRED Balance. Rewards powered by CRED</small>
                                                        <Accordion type="single" collapsible className="border-none">
                                                            <AccordionItem value="item-1" className="border-none m-0 p-0">
                                                                <AccordionTrigger className="text-xs font-pop text-DarkPrimary p-0 inline-flex justify-start more-button border-0 shadow-none ">More</AccordionTrigger>
                                                                <AccordionContent className="border-none">
                                                                    <p className="font-pop uppercase text-xxs text-gray-400 font-medium p-0 m-0 mb-2">Terms and Conditions</p>
                                                                    <ul className="flex flex-col gap-1 list-disc">
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Offer applicable on app versions 5.3.0(1) & above for iOS & 4.63.0(1271) & above for Android</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Applicable only for selected users & once per user during the campaign</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Cashback will be provided on the net transaction amount of ₹99 or more using Swiggy UPI as a payment instrument</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">Users will get a maximum cashback of ₹100 across Food & Instamart</p></li>
                                                                        <li className="list-disc"><p className="font-pop text-xxs text-DarkPrimary font-normal p-0 m-0 mb-2">To avail this offer, please log in on Swiggy with the same mobile number that is registered on CRED</p></li>
                                                                    </ul>
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        </Accordion>
                                                        <Button asChild className="py-2 px-4 bg-DarkPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none 
                                                        procied-button min-w-[100px] text-center cursor-pointer hover:bg-GreenSecondery m-0 flex items-center ">
                                                            <Link href="/cart" className="relative z-10 inline-flex items-center justify-center tracking-[0.5px] capitalize font-pop text-xxs" >APPLY COUPON <MoveRight  size={16} strokeWidth={2} className="ml-1 relative "/></Link>
                                                        </Button>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                                <div className="flex flex-col gap-6 opt-in mt-4">
                                    <div className="flex items-start gap-3">
                                        <Checkbox id="terms-2" defaultChecked />
                                        <div className="grid gap-0 relative -mt-1">
                                            <Label htmlFor="terms-2" className="text-DarkPrimary font-pop text-sm font-medium p-0 m-0">Opt in for No-contact Delivery</Label>
                                            <p className="text-muted-foreground text-xs font-normal">
                                                Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="order-details-sec border-b border-b-gray-300 border-dashed py-5 flex flex-col gap-2 last:border-0">
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
                                <Link href="/terms&condition" className=" font-pop text-xxs text-GreenSecondery  p-0 m-0 underline hover:text-colorPrimary ">Refer to Terms & Conditions</Link>
                                {/* <Button asChild className="py-2 px-4 bg-DarkPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none 
                                procied-button min-w-[100px] text-center cursor-pointer hover:bg-GreenSecondery m-0 flex items-center mt-4">
                                    <Link href="/checkout" className="relative z-10 inline-flex items-center justify-center tracking-[0.5px] capitalize font-pop" >Proceed to checkout <MoveRight  size={16} strokeWidth={2} className="ml-1 relative "/></Link>
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};
export default Cart;
