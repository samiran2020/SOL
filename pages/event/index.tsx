import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, MailOpen, PhoneIncoming, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Event = () => {
    return (
       <div className="event-page-body">
            <div className="inner-banner-section">
                <div className="slider-banner flex justify-center items-center relative">
                    <div className="caption absolute w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                        text-center flex-col ">
                        <h4 className="text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">Happy hosts</h4>  
                        <h1 className="text-3xl text-white uppercase tracking-[2px] leading-[60px] p-0 m-0">Tasteful Gatherings</h1> 
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
                            <BreadcrumbPage className="font-pop textsm font-medium text-gray-500">Events</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <section className="py-20 pt-0">
                <div className="container">
                    <div className="recent-event flex items-center justify-center flex-col py-16 px-10">
                        <h2 className="text-xxl text-DarkPrimary p-0 m-0 uppercase">Events</h2>
                        <p>Check back soon for new events!</p>
                    </div>
                    <div className="past-event  ">
                        <h2 className="text-xxl text-DarkPrimary p-0 m-0 uppercase mb-5">Past Events</h2>
                        <div className="grid grid-cols-4 gap-5">
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                            <Card className=" overflow-hidden">
                                <div className="event-image w-full h-[200px]">
                                    <Image src="/images/event-img.jpg" alt="Image" width={100} height={100} className=" relative p-0 object-cover object-center w-full h-full" unoptimized />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-DarkPrimary p-0 m-0 uppercase tracking-[1px] mb-2">Family style menu of mezze and dishes crafted by our chefs</CardTitle>
                                    <CardDescription className="text-gray-300 text-xxs ">Gather around and enjoy a curated selection of vibrant mezze and flavorful mains, served family style for sharing and connection. </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-0">
                                    <Link href="#" className="flex flex-row items-center gap-1 p-0 m-0 hover:text-colorPrimary">Read More <ArrowRight size={14} className="relative top-[3px]"/></Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
       </div>
    );
};
export default Event;
