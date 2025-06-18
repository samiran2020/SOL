import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Eye, MoveDown, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DishcircleCard from "@/components/dish-card/DishCircleCard";
import MenuCard from "@/components/dish-card/MenuDish";

const HomePage = () => {
    
    const MENU = [
    {
      title: 'Vegetabable Samosa',
      description:'Fresh veggies, flavorful spices, and a soft wrap our Veg Roll',
      url:"/images/food-1.jpg",
      price:'€2.25',

    },
    {
      title: 'Veg Roll',
      description:'Fresh veggies, flavorful spices, and a soft wrap our Veg Roll',
      url:"/images/roll.jpg",
      price:'€1.25',

    },
    {
      title: 'Tuna Cutlet',
      description:'Fresh veggies, flavorful spices, and a soft wrap our Veg Roll',
      url:"/images/Tuna-Cutlet.jpg",
      price:'€3.25',

    },
    {
      title: 'CHICKEN SAMOSA',
      description:'Fresh veggies, flavorful spices, and a soft wrap our Veg Roll',
      url:"/images/CHICKEN-SAMOSA.jpg",
      price:'€4.25',

    },
    {
      title: 'Vegetabable Samosa',
      description:'Fresh veggies, flavorful spices, and a soft wrap our Veg Roll',
      url:"/images/food-1.jpg",
      price:'€2.25',

    },
  ];

  const dishes = [
    {
      title: 'Vegetabable Samosa',
      description:'Cheese ◍ Capsicum ◍ Basil',
      url:"/images/food-1.jpg",
      price:'€2.25',

    },
    {
      title: 'Medium spicy chips',
      description:'Cheese ◍ Capsicum ◍ Basil',
      url:"/images/CHICKEN-SAMOSA.jpg",
      price:'€2.25',

    },
    {
      title: 'Tandoori Paneer Tikka',
      description:'Cheese ◍ Capsicum ◍ Basil',
      url:"/images/Tuna-Cutlet.jpg",
      price:'€2.25',

    },
    {
      title: 'Aloo Tikki chaat',
      description:'Cheese ◍ Capsicum ◍ Basil',
      url:"/images/Aloo-Tikki-chaat.jpg",
      price:'€2.25',

    },
    {
      title: 'Panipuri',
      description:'Cheese ◍ Capsicum ◍ Basil',
      url:"/images/panipuri.jpg",
      price:'€2.25',

    },
    {
      title: 'Sev Dahi puri',
      description:'Cheese ◍ Capsicum ◍ Basil',
      url:"/images/Sev-Dahi-puri.jpg",
      price:'€2.25',

    },
  ];

    return (
        <div className="homepage-body p-0 m-0 border-0 my-0 mx-auto">
            {/* hero-slider section*/}
            <section className="banner-section relative -mt-1 ">
                <Link href={"#scroll-section"}  className=" absolute right-0 bottom-24 z-[1] hidden md:inline-block">
                    <span className="scroll-down text-xs text-white tracking-[2px] ">Scroll Down </span>
                     <MoveDown size={20} className="text-[#A37B16]" />
                </Link>
                <Carousel >
                    <CarouselContent>
                        <CarouselItem className="slider-banner h-[350px] md:h-auto flex justify-center items-center relative">
                            <div className="caption absolute w-[75%] md:w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                             text-center flex-col ">
                                 <h1 className="text-[1.875rem] md:text-3xl text-white uppercase tracking-[2px] leading-[40px] md:leading-[60px] p-0 m-0">Our SeasonalMenus</h1> 
                                 <h4 className="text-sm md:text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">Every bite celebrates the season’s 
                                    bounty at its peak.</h4>  
                                <Button asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button mt-5">
                                    <Link href="/menu" className="relative z-10 inline-flex" >View Our Menu</Link>
                                </Button>
                            </div>
                            <Image src="/images/banner-image.jpg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                        </CarouselItem>
                        <CarouselItem className="slider-banner h-[350px] md:h-auto flex justify-center items-center relative">
                            <div className="caption absolute  w-[75%] md:w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                             text-center flex-col ">
                                 <h1 className="text-[1.875rem] md:text-3xl text-white uppercase tracking-[2px] leading-[40px] md:leading-[60px] p-0 m-0">Our SeasonalMenus</h1> 
                                 <h4 className="text-sm md:text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">Every bite celebrates the season’s 
                                    bounty at its peak.</h4>  
                                <Button asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button mt-5">
                                    <Link href=".menu"  className="tracking-[1px]">View Our Menu</Link>
                                </Button>
                            </div>
                            <Image src="/images/banner-image.jpg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                        </CarouselItem>
                        <CarouselItem className="slider-banner h-[350px] md:h-auto flex justify-center items-center relative">
                            <div className="caption absolute  w-[75%] md:w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                             text-center flex-col ">
                                 <h1 className="text-[1.875rem] md:text-3xl text-white uppercase tracking-[2px] leading-[40px] md:leading-[60px] p-0 m-0">Our SeasonalMenus</h1> 
                                 <h4 className="text-sm md:text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">Every bite celebrates the season’s 
                                    bounty at its peak.</h4>  
                                <Button asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button mt-5">
                                    <Link href="/menu"  className="tracking-[1px]">View Our Menu</Link>
                                </Button>
                            </div>
                            <Image src="/images/banner-image.jpg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious  className="banner-arrow-left"/>
                    <CarouselNext className="banner-arrow-right"/>
                </Carousel>
            </section>
            {/* Popular menu section*/}
            <section className="popular-menu py-8 pt-0 md:py-24 pb-10 md:pb-20 relative" id="scroll-section">
                <div className="flower w-[100px] h-[90px]  md:w-[120px] md:h-[110] absolute top-0 left-0 z-10 floating-image ">
                    <Image src="/images/flower.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <div className="flower w-[90px] h-[80px] absolute top-0 right-4 z-10 floating-image ">
                    <Image src="/images/flower.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <Tabs defaultValue="starters">
                    <div className="container">
                        <header className=" flex flex-col md:flex-row justify-between items-center">
                            <div className="header-content md:text-left text-center mb-3 md:mb-0">
                                <h4 className="text-sm md:text-lg text-colorPrimary p-0 m-0 tracking-[1.5px] uppercase ">CHOOSE DELICIOUS</h4>
                                <h2 className="text-xl md:text-xxl text-DarkPrimary p-0 m-0 tracking-[1.5px] uppercase">Popular menu</h2>
                            </div>
                            <div className="tab-button flex flex-row  items-center gap-5 overflow-x-scroll md:overflow-x-visible  whitespace-nowrap md:whitespace-normal flex-nowrap md:flex-wrap w-full md:w-auto overflow-y-visible  h-14 md:h-auto">
                                <div className="tab-button-body relative z-10">
                                    <TabsList className="bg-transparent gap-2 md:gap-5">
                                        <TabsTrigger value="starters" className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-GreenSecondery font-agd uppercase text-DarkPrimary text-sm md:text-lg tracking-[1px] flex-row md:flex-col hover:text-GreenSecondery gap-2 md:gap-0 border md:border-none border-gray-400 px-8 md:px-0  rounded-3xl md:rounded-none data-[state=active]:border-GreenSecondery md:data-[state=active]:border-none bg-white">
                                            <Image src="/images/Starters.svg" alt="Image" width={35} height={35} className=" relative p-0 w-[30px] h-[30px] object-contain object-center" unoptimized />
                                            Starters
                                         </TabsTrigger>
                                        <TabsTrigger value="nonvage" className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-GreenSecondery font-agd uppercase text-DarkPrimary text-sm md:text-lg tracking-[1px] flex-row md:flex-col hover:text-GreenSecondery gap-2 md:gap-0 border md:border-none border-gray-400 px-8 md:px-0  rounded-3xl md:rounded-none data-[state=active]:border-GreenSecondery md:data-[state=active]:border-none bg-white">
                                            <Image src="/images/Nonvage.svg" alt="Image" width={35} height={35} className=" relative p-0 w-[30px] h-[30px] object-contain object-center" unoptimized />
                                            Nonvage
                                        </TabsTrigger>
                                        <TabsTrigger value="vegetarian" className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-GreenSecondery font-agd uppercase text-DarkPrimary text-sm md:text-lg tracking-[1px] flex-row md:flex-col hover:text-GreenSecondery gap-2 md:gap-0 border md:border-none border-gray-400 px-8 md:px-0  rounded-3xl md:rounded-none data-[state=active]:border-GreenSecondery md:data-[state=active]:border-none bg-white">
                                            <Image src="/images/Vegetarian.svg" alt="Image" width={35} height={35} className=" relative p-0 w-[30px] h-[30px] object-contain object-center" unoptimized />
                                           Vegetarian        
                                        </TabsTrigger>
                                        <TabsTrigger value="dessert" className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-GreenSecondery font-agd uppercase text-DarkPrimary text-sm md:text-lg tracking-[1px] flex-row md:flex-col hover:text-GreenSecondery gap-2 md:gap-0 border md:border-none border-gray-400 px-8 md:px-0  rounded-3xl md:rounded-none data-[state=active]:border-GreenSecondery md:data-[state=active]:border-none bg-white">
                                            <Image src="/images/Dessert.svg" alt="Image" width={35} height={35} className=" relative p-0 w-[30px] h-[30px] object-contain object-center" unoptimized />
                                            Dessert
                                        </TabsTrigger>
                                        <TabsTrigger value="drinks" className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-GreenSecondery font-agd uppercase text-DarkPrimary text-sm md:text-lg tracking-[1px] flex-row md:flex-col hover:text-GreenSecondery gap-2 md:gap-0 border md:border-none border-gray-400 px-8 md:px-0  rounded-3xl md:rounded-none data-[state=active]:border-GreenSecondery md:data-[state=active]:border-none bg-white">
                                            <Image src="/images/Drink.svg" alt="Image" width={35} height={35} className=" relative p-0 w-[30px] h-[30px] object-contain object-center" unoptimized />
                                            Drinks
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                
                                <Link href={"/menu"} className=" hidden md:inline-flex items-center  justify-center py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none mk-reserv-buttn min-w-28 text-center hover:bg-DarkPrimary relative z-0 ">
                                    <span>View All</span>
                                </Link>
                            </div>
                        </header>
                    </div>
                    <div className="tab-body">
                        <TabsContent value="starters">
                            <div className="slider-body overflow-x-hidden">
                                <Carousel
                                    opts={{
                                        align: "center",
                                        loop: true,
                                    }}
                                    className="_custome-carosul relative pb-0 md:pb-16"
                                    plugins={[
                                        Autoplay({
                                        delay: 3000,
                                        }),
                                    ]}
                                >
                                    <CarouselContent className="py-4 pb-6 md:py-8">
                                        {MENU.map((item: any) =>{
                                            return (
                                                <CarouselItem className="basis-1/3 md:basis-1/4 ">
                                                    <MenuCard uri={item.url} title={item.title} description={item.description} price={item.price}/>
                                                </CarouselItem>
                                            );
                                        })}
                                    </CarouselContent>
                                    <div className="hidden md:flex z-20 absolute w-[80px] h-[25px] bottom-6 md:bottom-3 left-0 right-0 m-auto text-center items-center justify-center ">
                                        <CarouselPrevious className="_cust-arrow_left" />
                                        <CarouselNext className="_cust-arrow_right"/>
                                    </div>
                                    
                                </Carousel>
                            </div>
                        </TabsContent>
                        <TabsContent value="nonvage">
                            <div className="slider-body overflow-x-hidden">
                                <Carousel
                                    opts={{
                                        align: "center",
                                        loop: true,
                                    }}
                                    className="_custome-carosul relative pb-0 md:pb-16"
                                    plugins={[
                                        Autoplay({
                                        delay: 3000,
                                        }),
                                    ]}
                                >
                                    <CarouselContent className="py-4 pb-6 md:py-8">
                                        {MENU.map((item: any) =>{
                                            return (
                                                <CarouselItem className="basis-1/3 md:basis-1/4 ">
                                                    <MenuCard uri={item.url} title={item.title} description={item.description} price={item.price}/>
                                                </CarouselItem>
                                            );
                                        })}
                                    </CarouselContent>
                                    <div className="hidden md:flex  z-20 absolute w-[80px] h-[25px] bottom-6 md:bottom-3 left-0 right-0 m-auto text-center items-center justify-center">
                                        <CarouselPrevious className="_cust-arrow_left" />
                                        <CarouselNext className="_cust-arrow_right"/>
                                    </div>
                                    
                                </Carousel>
                            </div>
                        </TabsContent>
                        <TabsContent value="vegetarian">
                            <div className="slider-body overflow-x-hidden">
                                <Carousel
                                    opts={{
                                        align: "center",
                                        loop: true,
                                    }}
                                    className="_custome-carosul relative pb-0 md:pb-16"
                                    plugins={[
                                        Autoplay({
                                        delay: 3000,
                                        }),
                                    ]}
                                >
                                    <CarouselContent className="py-4 pb-6 md:py-8">
                                        {MENU.map((item: any) =>{
                                            return (
                                                <CarouselItem className="basis-1/3 md:basis-1/4 ">
                                                    <MenuCard uri={item.url} title={item.title} description={item.description} price={item.price}/>
                                                </CarouselItem>
                                            );
                                        })}
                                    </CarouselContent>
                                    <div className="hidden md:flex  z-20 absolute w-[80px] h-[25px] bottom-6 md:bottom-3 left-0 right-0 m-auto text-center items-center justify-center">
                                        <CarouselPrevious className="_cust-arrow_left" />
                                        <CarouselNext className="_cust-arrow_right"/>
                                    </div>
                                    
                                </Carousel>
                            </div>
                        </TabsContent>
                        <TabsContent value="dessert">
                            <div className="slider-body overflow-x-hidden">
                                <Carousel
                                    opts={{
                                        align: "center",
                                        loop: true,
                                    }}
                                    className="_custome-carosul relative pb-0 md:pb-16"
                                    plugins={[
                                        Autoplay({
                                        delay: 3000,
                                        }),
                                    ]}
                                >
                                    <CarouselContent className="py-4 pb-6 md:py-8">
                                        {MENU.map((item: any) =>{
                                            return (
                                                <CarouselItem className="basis-1/3 md:basis-1/4 ">
                                                    <MenuCard uri={item.url} title={item.title} description={item.description} price={item.price}/>
                                                </CarouselItem>
                                            );
                                        })}
                                    </CarouselContent>
                                    <div className="hidden md:flex  z-20 absolute w-[80px] h-[25px] bottom-6 md:bottom-3 left-0 right-0 m-auto text-center items-center justify-center">
                                        <CarouselPrevious className="_cust-arrow_left" />
                                        <CarouselNext className="_cust-arrow_right"/>
                                    </div>
                                    
                                </Carousel>
                            </div>
                        </TabsContent>
                        <TabsContent value="drinks">
                            <div className="slider-body overflow-x-hidden">
                                <Carousel
                                    opts={{
                                        align: "center",
                                        loop: true,
                                    }}
                                    className="_custome-carosul relative pb-0 md:pb-16"
                                    plugins={[
                                        Autoplay({
                                        delay: 3000,
                                        }),
                                    ]}
                                >
                                    <CarouselContent className="py-4 pb-6 md:py-8">
                                        {MENU.map((item: any) =>{
                                            return (
                                                <CarouselItem className="basis-1/3 md:basis-1/4 ">
                                                    <MenuCard uri={item.url} title={item.title} description={item.description} price={item.price}/>
                                                </CarouselItem>
                                            );
                                        })}
                                    </CarouselContent>
                                    <div className="hidden md:flex  z-20 absolute w-[80px] h-[25px] bottom-6 md:bottom-3 left-0 right-0 m-auto text-center items-center justify-center">
                                        <CarouselPrevious className="_cust-arrow_left" />
                                        <CarouselNext className="_cust-arrow_right"/>
                                    </div>
                                    
                                </Carousel>
                            </div>
                        </TabsContent>
                        <div className="flex flex-col justify-center items-center  md:hidden w-full text-center">
                            <Link href={"/menu"} className=" inline-flex md:hidden items-center  justify-center py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none mk-reserv-buttn min-w-28 text-center hover:bg-DarkPrimary relative z-0 ">
                                <span>View All</span>
                            </Link>
                        </div>
                    </div>
                </Tabs>
                <div className="spyce absolute bottom-[50px] right-0 md:right-[180px] hidden md:flex">
                    <Image src="/images/spyci.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <div className="vagis absolute bottom-0 left-0 hidden md:flex">
                    <Image src="/images/vages.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
            </section>
            {/* schedule-section section*/}
            <section className="schedule-section relative overflow-hidden ">
                <div className="grup-food hidden md:flex">
                    <Image src="/images/grup-food.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 py-12 relative z-10">
                        <div className=" hidden md:flex col-span-5"></div>
                        <div className="col-span-12 md:col-span-7 pl-0 md:pl-4">
                            <div className="box-heading-content mb-5 text-center md:text-left">
                                <h4 className="p-0 m-0 text-sm md:text-lg text-YellowSecondery uppercase tracking-[1.5px] arrow-after relative inline-block">Not just a meal</h4>
                                <h2 className="p-0 m-0 text-xl md:text-xxl text-white uppercase tracking-[1.5px]">an experience</h2>
                            </div>
                            <div className=" grid grid-cols-12 gap-5">
                                <div className=" schedule-box-body col-span-12 md:col-span-7 border-white border-solid border rounded-2xl p-4">
                                    <div className="schedule-box-inner border-white border-solid border rounded-2xl min-h-[445px]">
                                        <header className="py-4 text-center">
                                            <h3 className="text-[35px] text-white uppercase tracking-[1.5px] font-sheep after-class p-0 m-0">HOURS</h3>
                                        </header>
                                        <ul className="p-4 flex flex-col gap-2 mb-5">
                                            <li className="flex flex-row  items-center  justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[58%] md:w-[69%] after-divider relative">Tue</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                            </li>
                                            <li className="flex flex-row  items-center justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[58%] md:w-[69%] after-divider relative">Wed</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0 ">8:00am-10:00pm</h5>
                                            </li>
                                            <li className="flex flex-row  items-center justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0 w-[58%] md:w-[69%] after-divider relative">Thurs</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                            </li>
                                            <li className="flex flex-row  items-center justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0 w-[58%] md:w-[69%] after-divider relative">Fri</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                            </li>
                                            <li className="flex flex-row items-center justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0 w-[58%] md:w-[69%] after-divider relative">Sat</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                            </li>
                                            <li className="flex flex-row items-center justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[58%] md:w-[69%] after-divider relative">Sun</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                            </li>
                                            <li className="flex flex-row  items-center justify-between md:justify-start w-full">
                                                <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[58%] md:w-[69%] after-divider relative">Mon</h4>
                                                <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">Close</h5>
                                            </li>
                                        </ul>

                                        <p className="text-xs text-white w-full text-center tracking-[1.5px] p-0 m-0">First Come, First Serve!</p>
                                        <p className="text-xs text-YellowSecondery w-full text-center tracking-[1.5px] p-0 m-0">Online Reservations Available.</p>
                                    </div>
                                </div>
                                <div className=" content-box col-span-12 md:col-span-5 ">
                                    <div className="para-content w-full md:w-[85%] mb-6">
                                        <p className="text-xs text-white m-0 mb-2">We build meaningful relationships with our suppliers, especially the farmers who bring us the finest and freshest seasonal produce. We prize heirloom vegetables and pasture raised meats. We are driven by a passion to create dishes that burst with rich, wholesome flavor.</p>
                                        <Link href="/about" className="text-YellowSecondery uppercase font-agd tracking-[1px] flex flex-row items-center justify-start gap-1 hover:text-colorPrimary ">About Restaurant <ArrowRight size={18}/></Link>
                                    </div>
                                    <div className="email-content mb-4">
                                        <h5 className="text-lg text-YellowSecondery uppercase font-agd tracking-[2px] p-0 m-0 ">EMAIL</h5>
                                        <Link href={""} className="font-pop text-sm text-white  tracking-[1px] font-light">Support@senseoflanka.com</Link>
                                    </div>
                                    <div className="email-content mb-4">
                                        <h5 className="text-lg text-YellowSecondery uppercase font-agd tracking-[2px] p-0 m-0 ">Call</h5>
                                        <Link href={""} className="font-pop text-sm text-white  tracking-[1px] font-light">+31 6 42032432</Link>
                                    </div>
                                    <div className="button-grup inline-flex flex-row  items-center relative w-full md:w-auto">
                                        <Link href={""} className="reservation-button bg-colorPrimary text-white pl-4 py-3 rounded-s-3xl pr-4 font-agd  uppercase hover:bg-YellowSecondery hover:text-DarkPrimary  relative z-0 inline-block w-1/2 md:w-auto text-center">Make a reservation</Link>
                                        <div className="divider bg-colorPrimary h-[48px] flex items-center relative after:absolute after:w-[1px] after:h-full after:border-l after:border-l-white after:border-dashed after:left-0 after:right-0 after:m-auto">
                                            <span className="flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-solid rounded-full font-agd bg-colorPrimary relative z-10" >OR</span>
                                        </div>
                                        <Link href={""} className="order-button bg-colorPrimary text-white pr-4 py-3 rounded-e-3xl pl-4 font-agd uppercase  hover:bg-GreenSecondery w-1/2 md:w-auto text-center">
                                        <span className="relative z-10">ORDER ONLINE</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-food">
                    <Image src="/images/single-food-plate.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <div className=" absolute top-auto bottom-0 left-0  right-0 m-auto w-full h-[15%]" >
                    <Image src="/images/mobile-vagis.png" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                </div>
            </section>
            {/* poplar-dish-section*/}                        
            <section className="poplar-dish-section relative">
                <div className="floating-flower absolute left-36 top-12 floating-image hidden md:flex">
                    <Image src="/images/floting-flower.svg" alt="Image" width={113} height={113} className=" relative p-0" unoptimized />
                </div>
                <header className="text-center mb-5 md:mb-10 px-5 md:px-0">
                    <h4 className="p-0 m-0 text-sm md:text-lg text-colorPrimary uppercase tracking-[1.5px]  relative inline-block arrow-afret-before mb-0 md:mb-2">SPECIALS CHOICE</h4>
                    <h2 className="p-0 m-0 text-xl md:text-xxl text-DarkPrimary uppercase tracking-[1.5px]">Popular dishes</h2>
                </header>
                <div className="slider-body overflow-x-hidden">
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                            className="_custome-carosul relative pb-8 md:pb-16"
                            plugins={[
                                Autoplay({
                                delay: 3000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {dishes.map((item: any) =>{
                                    return (
                                    <CarouselItem className="basis-1/2 lg:basis-1/5 ">
                                        <DishcircleCard uri={item.url} title={item.title} description={item.description} price={item.price}/>
                                    </CarouselItem>
                                    );
                                })}
                                
                            </CarouselContent>
                            <div className=" z-20 absolute w-[80px] h-[25px] -top-16 md:top-auto bottom-auto md:bottom-3 left-0  right-[21%] md:right-0 ml-auto md:m-auto text-center items-center justify-center hidden md:flex">
                                <CarouselPrevious className="_cust-arrow_left" />
                                <CarouselNext className="_cust-arrow_right"/>
                            </div>
                            
                        </Carousel>
                </div>
                <div className="floating-flower absolute right-36 bottom-8 floating-image hidden md:flex">
                    <Image src="/images/floting-flower.svg" alt="Image" width={113} height={113} className=" relative p-0" unoptimized />
                </div>
                
            </section>
            {/* testimonial-section section*/}                
            <section className="testimonial-section relative pt-28 pb-20 md:pb-8 z-10">
                <div className="scroll-wrapper flex flex-row relative -mt-44">
                    <div className="scroll-text flex flex-row gap-4">
                        <h2 className="text-white text-4xl  md:text-5xl p-0 m-0 text-stroke">Delicious</h2><h2 className="text-DarkPrimary text-4xl  md:text-5xl p-0 m-0">Cuisine</h2><h2 className="text-white text-4xl  md:text-5xl p-0 m-0 text-stroke">Awesome</h2><h2 className="text-DarkPrimary text-4xl md:text-5xl p-0 m-0">Experience</h2><h2 className="text-white text-4xl  md:text-5xl p-0 m-0 text-stroke">Delicious</h2> 
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-7 pt-6 md:pt-12">
                            <div className="heading text-center flex flex-col items-center mb-0 md:mb-5">
                                <h2 className="text-xxl md:text-4xl text-DarkPrimary p-0 m-0">Testimonials</h2>
                                <div className="testi-icon w-[50px] md:w-[80px]  h-[50px] md:h-[80px] bg-colorPrimary rounded-full flex items-center justify-center p-1 md:p-3 ">
                                    <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center w-10 h-10 md:w-full md:h-full" unoptimized />
                                </div>
                            </div>
                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem className="text-center">
                                        <p className="w-[84%] md:w-[85%] my-0 mx-auto mt-3 md:mt-8 font-agd text-lg md:text-xl text-DarkPrimary uppercase tracking-[1px] leading-6 md:leading-normal">Variety of food with food taste and quantity. Parking is nearby on the street and infant friendly chairs are also provided.</p>
                                        <div className="user-info m-auto flex flex-col items-center mt-5">
                                            <span className="font-pop text-sm text-colorPrimary p-0 m-0 mb-2">Shivam Chandna</span>
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage src="/images/user.png" />
                                                <AvatarFallback>SC</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="text-center">
                                        <p className="w-[84%] md:w-[85%] my-0 mx-auto mt-3 md:mt-8 font-agd text-lg md:text-xl text-DarkPrimary uppercase tracking-[1px] leading-6 md:leading-normal">Variety of food with food taste and quantity. Parking is nearby on the street and infant friendly chairs are also provided.</p>
                                        <div className="user-info m-auto flex flex-col items-center mt-5">
                                            <span className="font-pop text-sm text-colorPrimary p-0 m-0 mb-2">Shivam Chandna</span>
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage src="/images/user.png" />
                                                <AvatarFallback>SC</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="text-center">
                                        <p className="w-[84%] md:w-[85%] my-0 mx-auto mt-3 md:mt-8 font-agd text-lg md:text-xl text-DarkPrimary uppercase tracking-[1px] leading-6 md:leading-normal">Variety of food with food taste and quantity. Parking is nearby on the street and infant friendly chairs are also provided.</p>
                                        <div className="user-info m-auto flex flex-col items-center mt-5">
                                            <span className="font-pop text-sm text-colorPrimary p-0 m-0 mb-2">Shivam Chandna</span>
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage src="/images/user.png" />
                                                <AvatarFallback>SC</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious  className="cust-arrow-left"/>
                                <CarouselNext className="cust-arrow-right justify-end"/>
                            </Carousel>
                        </div>
                        <div className="md:col-span-5 hidden md:flex justify-end pr-10 ">
                            <div className="testi-food-plate flex items-center justify-center floating-image">
                                <Image src="/images/food-plate.svg" alt="food-plate" width={100} height={100} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                        </div>
                    </div>
                    <div className="testi-footer-content flex  
                    items-center justify-center relative -mb-28  md:-mb-14 ">
                        <div className="body-content inline-flex flex-row gap-2 items-center justify-center bg-white p-2 px-4 rounded-3xl mt-5">
                            <div className="star inline-flex flex-row gap-1 items-center justify-center bg-[#FECF0A] p-2 rounded-3xl">
                                <Star size={15} className="text-white" fill="#fff"/>
                                <Star size={15} className="text-white" fill="#fff"/>
                                <Star size={15} className="text-white" fill="#fff"/>
                                <Star size={15} className="text-white" fill="#fff"/>
                                <Star size={15} className="text-white" fill="#fff"/>
                            </div>
                            <p className="text-xxs md:text-sm text-DarkPrimary"><strong className="text-colorPrimary">25,000+</strong> happy food lovers visited our authentic restaurant.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* instagram-sec section*/}  
            <section className="instagram-sec py-14 pb-24 md:py-20">
                <header className="text-center flex flex-col items-center justify-center gap-2 mb-5 md:mb-12">
                    <div className="insta-icon">
                        <Image src="/images/instagram-icon.svg" alt="instagram-icon" width={45} height={45} className=" relative p-0" unoptimized />
                    </div>
                    <h3 className="p-0 m-0 text-sm md:text-xl text-DarkPrimary uppercase tracking-[1px]">Follow us on Instagram</h3>
                    <h2 className="p-0 m-0 font-pop font-bold text-lg md:text-xl text-colorPrimary tracking-[1px] uppercase">#senseoflanka</h2>
                </header>
                <div className="flex flex-row w-[100%] max-w-[1600px] my-0 mx-auto  insta-gallery gap-2 text-center justify-center items-center flex-wrap">
                    <Link href="" className="insta-photo flex flex-col justify-center items-center">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta1.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta2.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta3.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta4.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta5.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta6.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta7.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta8.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta1.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                    <Link href="" className="insta-photo">
                        <Eye className="hover-icon" />
                        <Image src="/images/insta2.jpg" alt="instagram-photo" width={200} height={200} className=" relative p-0" unoptimized />
                    </Link>
                </div>

            </section>
        </div>
    );
};
export default HomePage;
