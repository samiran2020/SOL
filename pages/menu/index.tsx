import Link from "next/link";
import Image from "next/image";
import { Switch } from "@/components/ui/switch"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Minus, MoveRight, Plus } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';

const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);

    // const handleToggle = () => {
    //     setIsVisible(!isVisible);
    // };

    return (
       <div className="about-page-body">
            <div className="inner-banner-section">
                <div className="slider-banner flex justify-center items-center relative">
                    <div className="caption absolute w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                        text-center flex-col ">
                        <h4 className="text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">What's on your mind?</h4>  
                        <h1 className="text-3xl text-white uppercase tracking-[2px] leading-[60px] p-0 m-0">Order Online at Sense of Lanka</h1> 
                    </div>
                    <Image src="/images/inner-banner-image.webp" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
            </div>
            <div className="flex py-16 pb-0">
                <div className="container">
                    <h5 className="p-0 m-0 font-sheep uppercase text-DarkPrimary text-xl flex justify-center mb-4">Craving comfort? Pick dine-in, takeaway, or doorstep delight!</h5>
                    <div className="flex row items-center justify-center gap-4">
                        <p className="p-0 m-0 font-agd uppercase text-[#A37B16] text-lg">ORDER ONLINE</p>
                        <Switch className="data-[state=checked]:bg-colorPrimary data-[state=unchecked]:bg-[#A37B16]"/>
                        <p className="p-0 m-0 font-agd uppercase text-colorPrimary text-lg">Dine-in/takeaway</p>
                    </div>
                </div>
            </div>
            <div className="menu-section py-10 pb-16">
                <div className="container">
                    <h2 className="p-0 m-0 uppercase text-DarkPrimary text-xxl  mb-4">Our Menu</h2>
                    <Tabs defaultValue="drink">
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                            className="relative"
                            // plugins={[
                            //     Autoplay({
                            //     delay: 3000,
                            //     }),
                            // ]}
                        >
                            <TabsList className="w-full bg-transparent border-b border-b-[#e3e1df] border-solid rounded-none h-auto p-0">
                                <CarouselContent className=" w-full flex flex-row ">
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="drink" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/drinks.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            WELCOME DRINKS
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="small-bites" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/SMALL-BITES.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            SMALL BITES
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="tandoori" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 ">
                                                <Image src="/images/Tandoori.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            Tandoori
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="hot-chaats" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/Hot-Chaats.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            Hot Chaats
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="sos" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/Idiyappam.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            SIGNATURE OF SENSA
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="sis" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/sis.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            SOUTH INDIAN SPECIAL
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="biriyani" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 relative -mb-[1px]">
                                                <Image src="/images/BIRIYANI.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            BIRIYANI
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="extras" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 ">
                                                <Image src="/images/extra.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            EXTRAS
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="currys" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/CURRYS.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            CURRYS
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="nis" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 ">
                                                <Image src="/images/nis.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            North Indian Special
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="kadai" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 ">
                                                <Image src="/images/Kadai-Special.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            Kadai Special
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="breads" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 ">
                                                <Image src="/images/BREADS.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            BREADS
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="desserts" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0 ">
                                                <Image src="/images/DESSERTS.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            DESSERTS
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/12 min-w-[150px] justify-center flex">
                                        <TabsTrigger value="hot-beverages" className="flex flex-col items-center gap-1 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#A37B16] data-[state=active]:border-solid data-[state=active]:rounded-none data-[state=active]:text-[#A37B16] font-agd tracking-[0.8px] p-0 px-3 text-sm uppercase relative -mb-[1px] pb-2">
                                            <div className="menu-image w-[70px] h-[70px] rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden p-0">
                                                <Image src="/images/Hot-beverages.jpg" alt="Image" width={35} height={35} className=" relative p-0" unoptimized />
                                            </div>
                                            Hot beverages
                                        </TabsTrigger>
                                    </CarouselItem>
                                </CarouselContent>
                            </TabsList>
                            <CarouselPrevious className="top-11 -left-1" />
                            <CarouselNext className="top-11 -right-2"/>
                        </Carousel>
                        <Sheet>
                        <div className="menu-content-body">
                            <TabsContent value="drink" className="py-7">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">WELCOME DRINKS</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-2 md:gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Butter-Milk.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Tempered Masala Butter Milk</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">A special Tamilnadu Blended Yogurt with coriander leaves, green chilly, ginger & Indian Spices</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mango-Lassi.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mango Lassi</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Blended creamy yogurt with mango</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Lassi-salt.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Lassi salt/sweet</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Blended creamy yogurt with Salt or Sweet</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Vasantha-Neer.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Vasantha Neer</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">A Delicious Tender Coconut water with Honey,Mint leaves & Lemon</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="small-bites" className="py-7">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="tandoori" className="py-7">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">Tandoori</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Tandoori.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Tandoori Chicken full</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Tender chicken (Whole chicken on bone) marinated in a spicy yogurt mixture and cooked in tandoori over.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paneer-Tikka.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Tandoori Paneer Tikka</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">The perfect blend of spices and smoky flavour of marinated and tandoor-cooked paneer with authentic tandoor flavour of fresh spices</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Malai-Chicken.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Malai Chicken Tikka</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">A delicious, tender, mild flavour tandoor oven cooked boneless chicken marinated with cashew & cream with dash of Indian spices</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Tandoori-Jhinga.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Tandoori Jhinga</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Tiger Prawns marinated generously in tandoori spices and cooked to perfection in tandoor oozing out smoky flavour</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="hot-chaats">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">Hot Chaats</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/panipuri.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Panipuri</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Crispy puffed crackers (Puri) filled with spiced mashed potato and accompanied by flavourful spicy-sweet-tangy water to be filled in.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Sev-Dahi-puri.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Sev Dahi puri</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">A mouth-watering street food popular all overIndia, crispy puffed crackers (Puri) stuffed with mashed potato.
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Aloo-Tikki-chaat.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Aloo Tikki chaat</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Delhi style delicious street food contains potato patties, deep fried and dipped in mild whitepea
curry topped with tangy tamarind chutney, a bit of yogurt and herbs</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Samosa-chaat.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Samosa chaat</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">
                                                Samosas dipped in base of chickpea curry,
                                                topped with tamarind chutney, mint chutney, thin sev, additional spices to make it an amazing street food
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="sos">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SIGNATURE OF SENSA</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Idiyappam with Veg Kurma</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">String hoppers of steamed Rice flour pressed in to a noodle form served with mixed vegetables curry</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Idiyappam with Chicken Gravy</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">String hoppers of steamed Rice flour pressed in to a noodle form served with Spicy Chicken curry</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Kottu Parotta</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Madurai style popular street food made by shredded parotta , a soft crispy, layered flat bread stir fried with veggies and spices</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Egg Kottu Parotta</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Madurai style popular street food made by shredded parotta , a soft crispy, layered flat bread stir fried with veggies , Eggs and spices</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="sis">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="biriyani">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="extras">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="currys">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="nis">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="kadai">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="breads">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="desserts">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="hot-beverages">
                                <h3 className=" uppercase mb-7 text-DarkPrimary tracking-[1px] ">SMALL BITES</h3>
                                <div className="grid grid-cols-4 gap-7">
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Medu-Vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Medu Vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian savoury doughnut, crispy on the outside</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Paruppu-vada.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Paruppu vada</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">South Indian lentil fritter made with chana dal Served with delicious coconut chutney.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Podi-Idli.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Podi Idli</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Steamed mini Rice idli tossed in ghee with spiced Masala Chaas served with delicious coconut chutney</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                    <Card className="p-0 overflow-hidden shadow-md border-none flex flex-col">
                                        <CardHeader className="p-0 w-full h-[200px]">
                                            <Image src="/images/Mini-Idli-Sambar.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </CardHeader>
                                        <CardContent className="p-5 pb-0 mb-3">
                                            <CardTitle className="text-DarkPrimary font-normal text-xl p-0 m-0 uppercase tracking-[0.8px] mb-2 font-sheep">Mini Idli Sambar</CardTitle>
                                            <CardDescription className=" text-xs p-0 m-0  tracking-[0.5px] leading-5">Perfect bite small steamed rice cake (Idli) dipped in delicious sambar, with ghee topping for a divine taste.</CardDescription>
                                        </CardContent>
                                        <CardFooter className="flex flex-row items-center justify-between mt-auto">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-gray-400 line-through">₹258/-</span>
                                            </div>
                                            <SheetTrigger asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                            </SheetTrigger>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </TabsContent>
                        </div>
                            <SheetContent className="lg:max-w-[30rem]">
                                <SheetHeader className="p-0 text-center relative h-full">
                                    <div className=" overflow-y-scroll scroll-bar">
                                        <div className="meal-image w-[100%] h-[40%]">
                                            <Image src="/images/Butter-Milk.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                        </div>
                                        <div className="title-content flex flex-row items-start justify-between text-left px-5 py-2 gap-4">
                                            <div className="pro-content">
                                                <SheetTitle className="p-0 m-0 text-xl font-normal text-DarkPrimary uppercase py-2 pb-0">Tempered Masala Butter Milk</SheetTitle>
                                                <p className="text-xxs text-gray-400 ">A special Tamilnadu Blended Yogurt with coriander leaves, green chilly, ginger & Indian Spices</p>
                                            </div>
                                            <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                    {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                    {/* <CiCircleMinus /> */}
                                                    <Minus />
                                                </Button>
                                                <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                    {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                    {/* <CiCirclePlus /> */}
                                                    <Plus />
                                                </Button>
                                            </div>
                                        </div>
                                        <Tabs defaultValue="customise" className="w-full">
                                            <TabsList className="w-full border-y border-y-gray-400 border-dashed py-2 bg-gray-100 rounded-none p-0">
                                                <TabsTrigger value="customise" className="w-1/2 font-agd uppercase text-DarkPrimary tracking-[1px] data-[state=active]:bg-YellowSecondery 
                                                data-[state=active]:text-DarkPrimary rounded-none ">Customise</TabsTrigger>
                                                <TabsTrigger value="add-ons" className="w-1/2 font-agd uppercase text-DarkPrimary tracking-[1px] data-[state=active]:bg-YellowSecondery  
                                                data-[state=active]:text-DarkPrimary rounded-none ">Add-ons</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="customise" className=" w-full m-0 p-5 text-left " >
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/butter.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0"> Add Extra Butter</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/milk.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0">Add Extra Milk</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/masala.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0">Add Extra Masala</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                            <TabsContent value="add-ons" className=" w-full m-0 p-5 text-left ">
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/butter.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0"> Add-Ons meal 1</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/milk.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0"> Add-Ons meal 2</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/masala.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0"> Add-Ons meal 3</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="meal-box flex flex-row items-center justify-between mb-4 pb-4 border-b border-dashed border-b-gray-300 last:border-0">
                                                    <div className="extra-meal-image w-[80px] h-[80px] overflow-hidden rounded-xl">
                                                        <Image src="/images/butter.jpg" alt="Image" width={35} height={35} className=" relative p-0 w-full h-full object-cover object-center" unoptimized />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between w-[80%]">
                                                        <div className="flex flex-col  w-[80%] flex-wrap">
                                                            <p className="text-md font-medium font-agd uppercase text-DarkPrimary p-0 m-0">  Add-Ons meal 4</p>
                                                            <div className="price flex flex-row items-center gap-3">
                                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                                <span className="text-gray-400 line-through">₹258/-</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-grup">
                                                            {!isVisible && (
                                                            <Button onClick={() => setIsVisible(true)} className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button min-w-[100px] text-center cursor-pointer">
                                                                <span className="relative z-10 inline-flex items-center justify-center" >Add <Plus size={16} strokeWidth={2.5}/></span>
                                                            </Button>
                                                            )}
                                                            {isVisible && (
                                                                <div className="count-button flex flex-row items-center gap-1 border-2 border-solid border-DarkPrimary rounded-3xl px-2 mt-3">
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCircleMinus /> */}
                                                                        <Minus />
                                                                    </Button>
                                                                    <Input value={0} divclassName="border-none" className="w-[30px] h-10 text-center text-md font-poop border-none outline-none p-1 "/>
                                                                    <Button  className="cursor-pointer text-DarkPrimary bg-transparent text-lg p-0 hover:bg-transparent hover:text-colorPrimary h-10">
                                                                        {/* <MoveRight  size={16} strokeWidth={2} className="ml-1"/> */}
                                                                        {/* <CiCirclePlus /> */}
                                                                        <Plus />
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </div>            
                                    <div className=" sticky bottom-0 self-end z-10 bg-white w-full p-3 px-5  border-t border-t-gray-300 border-dashed flex items-center justify-between">
                                        <div className="price w-1/2 text-left">
                                            <div className="price flex flex-row items-center gap-3">
                                                <h4 className="p-0 m-0">₹194/-</h4>
                                                <span className="text-colorPrimary line-through">₹258/-</span>
                                            </div>
                                            <p className="p-0 m-0 font-pop text-xxs text-gray-400 tracking-[1px] uppercase">Price Before Tax</p>
                                        </div>
                                        <Button asChild className="py-2 px-4 bg-GreenSecondery text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button2 min-w-[100px] text-center cursor-pointer hover:bg-GreenSecondery">
                                            <Link href="/cart" className="relative z-10 inline-flex items-center justify-center" >Continue <MoveRight  size={16} strokeWidth={2} className="ml-1"/></Link>
                                        </Button>
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </Tabs>        
                </div>
            </div>
               
            
       </div>
    );
};
export default Menu;
