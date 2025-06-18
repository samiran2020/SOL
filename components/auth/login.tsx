
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";


const UserLoginAuthForm = () => {
    return (
        <DialogContent className="bg-[#f5ebdc] p-0 overflow-hidden border-none shadow-none">
          <DialogHeader>
            <DialogTitle className="pt-4">
                <div className="logo-section w-[7rem] h-[7rem] bg-white rounded-full p-2 my-0 mx-auto ">
                    <Image src="../images/SOL-brand.svg" alt="Image" width={130} height={134} className=" relative top-[-5px]" />
                </div>
            </DialogTitle>
            <div className="text-center p-0 flex flex-col px-5">
                <h3 className="p-0 m-0 text-colorPrimary uppercase tracking-[1px]">Login</h3>
                <small className="p-0 m-0 text-DarkPrimary tracking-[1px] text-xs font-pop">Enter your mobile number to proceed</small>
                <div className="input-box-sec flex flex-col  w-full text-left mt-5 mb-3 gap-2">
                  <Label className="p-0 m-0 text-DarkPrimary tracking-[1px] font-pop">Phone/E-mail*</Label>
                  <Input placeholder="Enter your phone or email" className=" rounded-sm" divclassName="w-full border-none h-12 rounded-sm"/>
                </div>
                <Button variant="outline" className="border-none outline-none bg-DarkPrimary h-12 p-0 m-0 w-auto  rounded-3xl
                 text-white relative font-pop hover:bg-colorPrimary hover:text-white mb-4">
                    Request OTP
                </Button>
                <Label className="font-pop text-xxs traking-[1px] text-GreenSecondery font-normal flex w-full justify-center">
                  Enter login details or  
                   <Button variant="outline" className="border-none outline-none bg-transparent p-0 m-0 w-auto h-auto relative text-DarkPrimary underline hover:text-colorPrimary hover:bg-transparent ml-2">create an account </Button>
                </Label>
            </div>
          </DialogHeader>
          <div className="pop-footer bg-[#6f3c2f] border-t-2 border-t-[#e70] text-center px-5 py-5">
            <p className=" text-xxs text-white font-pop">By continuing, you agree for our <u className="hover:text-YellowSecondery cursor-pointer">Terms Conditions,</u> <u className="hover:text-YellowSecondery cursor-pointer">Privacy Policy,</u> and <u className="hover:text-YellowSecondery cursor-pointer">Promotional T&amp;C</u></p>
          </div>
        </DialogContent>
    );
};
export default UserLoginAuthForm;
