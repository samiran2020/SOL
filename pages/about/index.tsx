import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Eye, Star } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const About = () => {
    return (
       <div className="about-page-body">
            <div className="inner-banner-section">
                <div className="slider-banner flex justify-center items-center relative">
                    <div className="caption absolute w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                        text-center flex-col ">
                            <h4 className="text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">We’re about </h4>  
                            <h1 className="text-3xl text-white uppercase tracking-[2px] leading-[60px] p-0 m-0">great food culture</h1> 
                        <Button asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button mt-5">
                            <Link href="" className="relative z-10 inline-flex" >View Our Menu</Link>
                        </Button>
                    </div>
                    <Image src="/images/inner-banner-image.webp" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
            </div>
            <div className="container pt-4">
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
                            <BreadcrumbPage className="font-pop textsm font-medium text-gray-500">About Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <section className="story-section py-20 pt-0 relative">
                <div className="flower w-[120px] h-[110] absolute top-10 left-12 z-10 floating-image">
                    <Image src="/images/flower.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-8 items-center">
                        <div className="col-span-5 flex justify-center">
                            <div className="about-story flex items-center justify-center  rounded-t-full overflow-hidden">
                                <Image src="/images/about-story.webp" alt="food-plate" width={100} height={100} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className="story-content">
                                <h3 className="p-0 m-0 text-colorPrimary  w-[85%]  uppercase tracking-[1px] text-xl mb-4 leading-7">" We wanted to bring Srilankan food and Middle Eastern food in a way that wasn't presented before..."</h3>
                                <p className="p-0 m-0 text-DarkPrimary  w-[90%]   tracking-[0.5px] text-xs mb-4 leading-6">we turn transactions into best-in-class experiences that are kind, wholesome and nourishing. We believe this is true in everything we do, from cooking food to serving guests to building our culture of transparent communication and teamwork. It is our responsibility to hold ourselves to the highest standards, as individuals and as members of a broader community.</p>
                                <h2 className="p-0 m-0 text-DarkPrimary  w-[85%]  uppercase tracking-[1px] text-xxl mt-8 leading-7 mb-4 ">Our Values</h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex flex-row gap-2 items-center"> <IoIosCheckmarkCircleOutline size={16} color="#0FB201"/> <p className="p-0 m-0 text-DarkPrimary tracking-[0.5px] text-xs">Include and empower people</p></li>
                                    <li className="flex flex-row gap-2 items-center"> <IoIosCheckmarkCircleOutline size={16} color="#0FB201"/> <p className="p-0 m-0 text-DarkPrimary tracking-[0.5px] text-xs">Foster connection through food</p></li>
                                    <li className="flex flex-row gap-2 items-center"> <IoIosCheckmarkCircleOutline size={16} color="#0FB201"/> <p className="p-0 m-0 text-DarkPrimary tracking-[0.5px] text-xs">No detail is too small</p></li>
                                    <li className="flex flex-row gap-2 items-center"> <IoIosCheckmarkCircleOutline size={16} color="#0FB201"/> <p className="p-0 m-0 text-DarkPrimary tracking-[0.5px] text-xs">Make a real impact</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spyce absolute bottom-[20px] right-[50px] ">
                    <Image src="/images/spyci.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
            </section>
            <section className="testimonial-section after-sec relative py-16  z-10">
                <div className="container">
                    <div className="flex w-[70%] mx-auto flex-col text-center">
                    <h2 className="p-0 m-0 text-DarkPrimary   uppercase  text-xxl mb-5  ">If we haven't met you yet, we hope to soon.</h2>
                    <p className="p-0 m-0 text-DarkPrimary tracking-[0.5px] text-sm">At Folk, we aim to be more than just a place to eat. We aspire to be a gathering spot where familiar faces come together and new visiting friends find warmth and conversation over great food. Whether you’re a longtime neighbor or new to Nashville, we invite you to make every visit a moment to remember.</p>
                    <Button asChild className="py-2 px-4 bg-colorPrimary text-sm text-white ml-3 rounded-3xl border-0 outline-none cmn-button mt-5 w-[150px] mx-auto">
                        <Link href="" className="relative z-10 inline-flex" >Make a reservation</Link>
                    </Button>
                    </div>
                </div>
            </section>
            <section className="team-sec relative py-16  z-10">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-5">
                        <div className="content col-span-3 pr-4">
                            <h2 className="p-0 m-0 text-DarkPrimary   uppercase  text-xxl mb-2  ">The Team</h2>
                            <h4 className="p-0 m-0 text-DarkPrimary   uppercase text-md leading-6">Our team is a blend of passion, expertise, and collaboration — working together to bring ideas to life.</h4>
                        </div>
                        <div className="team-box-body col-span-9 px-24 pl-28 ">
                            <Carousel
                                opts={{
                                    align: "end",
                                    loop: false,
                                }}
                                className="_custome-carosul relative"
                                // plugins={[
                                //     Autoplay({
                                //     delay: 2000,
                                //     }),
                                // ]}
                            >
                                <CarouselContent>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                        <Card className="p-0 overflow-hidden">
                                            <CardHeader className="p-0 w-[100%]">
                                                <Image src="/images/team.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                            </CardHeader>
                                            <CardContent className="p-2 text-center">
                                                <CardTitle className="p-0 m-0 text-lg text-DarkPrimary uppercase  tracking-[0.8px] mb-1">Chef Name</CardTitle>
                                                <CardDescription className="p-0 m-0 text-xs text-DarkPrimary tracking-[0.5px]">Chef Description</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                        <Card className="p-0 overflow-hidden">
                                            <CardHeader className="p-0 w-[100%]">
                                                <Image src="/images/team.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                            </CardHeader>
                                            <CardContent className="p-2 text-center">
                                                <CardTitle className="p-0 m-0 text-lg text-DarkPrimary uppercase tracking-[0.8px] mb-1">Chef Name</CardTitle>
                                                <CardDescription className="p-0 m-0 text-xs text-DarkPrimary tracking-[0.5px]">Chef Description</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 ">
                                        <Card className="p-0 overflow-hidden">
                                            <CardHeader className="p-0 w-[100%]">
                                                <Image src="/images/team.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                            </CardHeader>
                                            <CardContent className="p-2 text-center">
                                                <CardTitle className="p-0 m-0 text-lg text-DarkPrimary uppercase  tracking-[0.8px] mb-1">Chef Name</CardTitle>
                                                <CardDescription className="p-0 m-0 text-xs text-DarkPrimary tracking-[0.5px]">Chef Description</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 ">
                                        <Card className="p-0 overflow-hidden">
                                            <CardHeader className="p-0 w-[100%]">
                                                <Image src="/images/team.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                            </CardHeader>
                                            <CardContent className="p-2 text-center">
                                                <CardTitle className="p-0 m-0 text-lg text-DarkPrimary uppercase  tracking-[0.8px] mb-1">Chef Name</CardTitle>
                                                <CardDescription className="p-0 m-0 text-xs text-DarkPrimary tracking-[0.5px]">Chef Description</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/4 ">
                                        <Card className="p-0 overflow-hidden">
                                            <CardHeader className="p-0 w-[100%]">
                                                <Image src="/images/team.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                            </CardHeader>
                                            <CardContent className="p-2 text-center">
                                                <CardTitle className="p-0 m-0 text-lg text-DarkPrimary uppercase tracking-[0.8px] mb-1">Chef Name</CardTitle>
                                                <CardDescription className="p-0 m-0 text-xs text-DarkPrimary tracking-[0.5px]">Chef Description</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="flex z-20 absolute w-[80px] h-[25px] bottom-3 -left-[325px] right-auto m-auto text-center items-center justify-center">
                                    <CarouselPrevious className="_cust-arrow_left" />
                                    <CarouselNext className="_cust-arrow_right"/>
                                </div>
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="vagis absolute bottom-0 -left-10 ">
                    <Image src="/images/vages.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
            </section>
            <section className="schedule-section relative overflow-hidden py-20">
                <div className="container">
                    <header className="flex justify-center items-center w-[70%] mx-auto text-center">
                        <div className="right-content ">
                            <div className="flex flex-row items-center gap-4 justify-center">
                                <div className="star inline-flex flex-row gap-1 items-center justify-center bg-[#FECF0A] p-2 rounded-3xl">
                                    <Star size={15} className="text-white" fill="#fff"/>
                                    <Star size={15} className="text-white" fill="#fff"/>
                                    <Star size={15} className="text-white" fill="#fff"/>
                                    <Star size={15} className="text-white" fill="#fff"/>
                                    <Star size={15} className="text-white" fill="#fff"/>
                                </div>
                                <h5 className="p-0 m-0 text-white uppercase tracking-[1px]">4.5 stars from 134 reviews</h5>
                            </div>
                            
                            <p className="p-0 m-0 text-white text-xs tracking-[1px] w-[70%] mx-auto mt-4"> All reviews are from Thuisbezorgd.nl customers who ordered from Sense of Lanka. Want to know more? Discover more</p>
                        </div>
                    </header>
                    <div className="google-review grid grid-cols-4 gap-4 mt-10">
                        <div className="review-box mb-5 bg-[rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col justify-between">
                            <div className="testi-icon w-[40px]  h-[40px] bg-colorPrimary rounded-full flex items-center justify-center p-2 relative -mt-9">
                                <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                            <div className="review-content pt-3">
                                <p className="p-0 m-0 text-white text-xs tracking-[1px]">first time and the food was very tasty and surprising. for the more sensitive stomach it would be useful if there was a degree of spiciness indicated. otherwise top</p>
                            </div>
                            <div className="_users-info text-right mt-3">
                                <p className="p-0 m-0 text-YellowSecondery text-xs leading-4">Amanda</p>
                                <small className="p-0 m-0 text-white">11 jun 2025 om 11:31</small>
                            </div>
                        </div>
                        <div className="review-box mb-5 bg-[rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col justify-between">
                            <div className="testi-icon w-[40px]  h-[40px] bg-colorPrimary rounded-full flex items-center justify-center p-2 relative -mt-9">
                                <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                            <div className="review-content pt-3">
                                <p className="p-0 m-0 text-white text-xs tracking-[1px]">We had a very tasty meal and the food was still nice and warm when we got it!</p>
                            </div>
                            <div className="_users-info text-right mt-3">
                                <p className="p-0 m-0 text-YellowSecondery text-xs leading-4">Koen</p>
                                <small className="p-0 m-0 text-white">8 jun 2025 om 1:14</small>
                            </div>
                        </div>
                        <div className="review-box mb-5 bg-[rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col justify-between">
                            <div className="testi-icon w-[40px]  h-[40px] bg-colorPrimary rounded-full flex items-center justify-center p-2 relative -mt-9">
                                <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                            <div className="review-content pt-3">
                                <p className="p-0 m-0 text-white text-xs tracking-[1px]">Tasty food. But expensive, and portion sizes small.</p>
                            </div>
                            <div className="_users-info text-right mt-3">
                                <p className="p-0 m-0 text-YellowSecondery text-xs leading-4">Will</p>
                                <small className="p-0 m-0 text-white">4 jun 2025 om 23:03</small>
                            </div>
                        </div>
                        <div className="review-box mb-5 bg-[rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col justify-between">
                            <div className="testi-icon w-[40px]  h-[40px] bg-colorPrimary rounded-full flex items-center justify-center p-2 relative -mt-9">
                                <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                            <div className="review-content pt-3">
                                <p className="p-0 m-0 text-white text-xs tracking-[1px]">Delicious food as Indian tastes in India. Highly recommended.</p>
                            </div>
                            <div className="_users-info text-right mt-3">
                                <p className="p-0 m-0 text-YellowSecondery text-xs leading-4">Roel</p>
                                <small className="p-0 m-0 text-white">31 mei 2025 om 21:44</small>
                            </div>
                        </div>
                        <div className="review-box mb-5 bg-[rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col justify-between">
                            <div className="testi-icon w-[40px]  h-[40px] bg-colorPrimary rounded-full flex items-center justify-center p-2 relative -mt-9">
                                <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                            <div className="review-content pt-3">
                                <p className="p-0 m-0 text-white text-xs tracking-[1px]">first time and the food was very tasty and surprising. for the more sensitive stomach it would be useful if there was a degree of spiciness indicated. otherwise top</p>
                            </div>
                            <div className="_users-info text-right mt-3">
                                <p className="p-0 m-0 text-YellowSecondery text-xs leading-4">Amanda</p>
                                <small className="p-0 m-0 text-white">11 jun 2025 om 11:31</small>
                            </div>
                        </div>
                        <div className="review-box mb-5 bg-[rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col justify-between">
                            <div className="testi-icon w-[40px]  h-[40px] bg-colorPrimary rounded-full flex items-center justify-center p-2 relative -mt-9">
                                <Image src="/images/Quote.svg" alt="Icon" width={60} height={30} className=" relative p-0 object-contain object-center" unoptimized />
                            </div>
                            <div className="review-content pt-3">
                                <p className="p-0 m-0 text-white text-xs tracking-[1px]">first time and the food was very tasty and surprising. for the more sensitive stomach it would be useful if there was a degree of spiciness indicated. otherwise top</p>
                            </div>
                            <div className="_users-info text-right mt-3">
                                <p className="p-0 m-0 text-YellowSecondery text-xs leading-4">Amanda</p>
                                <small className="p-0 m-0 text-white">11 jun 2025 om 11:31</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="instagram-sec py-10">
                <header className="text-center flex flex-col items-center justify-center gap-2 mb-12">
                    <div className="insta-icon">
                        <Image src="/images/instagram-icon.svg" alt="instagram-icon" width={45} height={45} className=" relative p-0" unoptimized />
                    </div>
                    <h3 className="p-0 m-0 text-xl text-DarkPrimary uppercase tracking-[1px]">Follow us on Instagram</h3>
                    <h2 className="p-0 m-0 font-pop font-bold text-xl text-colorPrimary tracking-[1px] uppercase">#senseoflanka</h2>
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
export default About;
