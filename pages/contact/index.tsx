import Link from "next/link";
import Image from "next/image";
import { Eye, MailOpen, PhoneIncoming, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Contact = () => {
    return (
       <div className="about-page-body">
            <div className="inner-banner-section">
                <div className="slider-banner flex justify-center items-center relative">
                    <div className="caption absolute w-[50%] h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-[1]
                        text-center flex-col ">
                        <h4 className="text-lg text-YellowSecondery uppercase tracking-[1px] p-0 m-0">Let’s talk. We’d love to hear from you.</h4>  
                        <h1 className="text-3xl text-white uppercase tracking-[2px] leading-[60px] p-0 m-0">Contact Us</h1> 
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
                            <BreadcrumbPage className="font-pop textsm font-medium text-gray-500">Contact Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <section className="relative  py-20 pt-0">
                <div className="flower w-[120px] h-[110] absolute top-16 left-20 z-10 floating-image">
                    <Image src="/images/flower.svg" alt="Image" width={100} height={100} className=" relative p-0" unoptimized />
                </div>
                <div className="container">
                    <h4 className="p-0 m-0 text-xxl uppercase text-DarkPrimary  tracking-[1px] mt-5 font-sheep w-[40%] mb-8 text-center mx-auto">Bredalaan 63, 5652 JB Eindhoven, Netherlands</h4>
                    <Link href={""} className="p-0 m-0 text-md text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary mb-8 w-full text-center flex items-center justify-center underline">Get Directions </Link>

                    <div className="grid grid-cols-12 items-center">
                        <div className="emal-info col-span-4 text-center flex flex-col justify-center items-center">
                            <MailOpen  size={45} className="text-DarkPrimary"  strokeWidth={1}/>
                            <h5 className="p-0 m-0 text-xxl uppercase text-DarkPrimary mb-3 tracking-[1px] mt-5">EMAIL</h5>
                            <Link href={""} className="p-0 m-0 text-md text-DarkPrimary  font-pop font-normal tracking-[1px] hover:text-colorPrimary">Email: Support@senseoflanka.com </Link>
                        </div>
                        <div className=" schedule-box-body bg-[#fff] col-span-4 border-DarkPrimary border-4 border-solid  rounded-2xl p-4">
                            <div className="  bg-DarkPrimary  rounded-2xl min-h-[445px]">
                                <header className="py-4 text-center">
                                    <h3 className="text-[35px] text-white uppercase tracking-[1.5px] font-sheep after-class p-0 m-0">HOURS</h3>
                                </header>
                                <ul className="p-4 flex flex-col gap-2 mb-5">
                                    <li className="flex flex-row  items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0 w-[69%] after-divider relative">Tue</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                    </li>
                                    <li className="flex flex-row  items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[69%] after-divider relative">Wed</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0 ">8:00am-10:00pm</h5>
                                    </li>
                                    <li className="flex flex-row  items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[69%] after-divider relative">Thurs</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                    </li>
                                    <li className="flex flex-row  items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[69%] after-divider relative">Fri</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                    </li>
                                    <li className="flex flex-row items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[69%] after-divider relative">Sat</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                    </li>
                                    <li className="flex flex-row items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[69%] after-divider relative">Sun</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">8:00am-10:00pm</h5>
                                    </li>
                                    <li className="flex flex-row  items-center w-full">
                                        <h4 className="text-[25px] text-white uppercase tracking-[1.5px]  p-0 m-0  w-[69%] after-divider relative">Mon</h4>
                                        <h5 className="text-sm text-white uppercase tracking-[1.5px]  p-0 m-0">Close</h5>
                                    </li>
                                </ul>

                                <p className="text-xs text-white w-full text-center tracking-[1.5px] p-0 m-0">First Come, First Serve!</p>
                                <p className="text-xs text-YellowSecondery w-full text-center tracking-[1.5px] p-0 m-0">Online Reservations Available.</p>
                            </div>
                        </div>
                        <div className="call-info col-span-4 flex flex-col justify-center items-center">
                            <PhoneIncoming size={45} className="text-DarkPrimary"  strokeWidth={1}/>
                            <h5 className="p-0 m-0 text-xxl uppercase text-DarkPrimary mb-3 tracking-[1px] mt-5">LET'S TALK</h5>
                            <Link href={""} className="p-0 m-0 text-md text-DarkPrimary font-pop font-normal tracking-[1px] hover:text-colorPrimary">Phone: +31 6 42032432</Link>
                        </div>
                    </div>
                </div>
                <div className="floating-flower absolute right-36 bottom-8 floating-image">
                    <Image src="/images/floting-flower.svg" alt="Image" width={113} height={113} className=" relative p-0" unoptimized />
                </div>
            </section>
            <div  className="w-[100%] h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.056279909809!2d5.4414940000000005!3d51.4387603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d97baad2ca1b%3A0x84a44138249145e5!2sBredalaan%2063%2C%205652%20JB%20Eindhoven%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1749652171279!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
            <section className="py-20">
                <div className="container">
                    <div className="w-[70%] mx-auto">
                        <h2 className="mb-8 text-xxl text-DarkPrimary p-0 uppercase w-full text-center">Frequently Asked Questions</h2>
                        <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className=" uppercase text-DarkPrimary text-xl tracking-[1px] accordian">Are you able to accommodate allergies?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="text-DarkPrimary">
                                Yes! We do our best to accommodate most dietary restrictions. We do not, however, offer gluten-free pizza.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className=" uppercase text-DarkPrimary text-xl tracking-[1px] accordian">What's your cancellation policy?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="text-DarkPrimary">
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                            <p className="text-DarkPrimary">
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className=" uppercase text-DarkPrimary text-xl tracking-[1px] accordian">Do you have parking?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="text-DarkPrimary">
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p className="text-DarkPrimary">
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

       </div>
    );
};
export default Contact;
