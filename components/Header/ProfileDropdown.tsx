
import { CircleUserRound } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import UserLoginAuthForm from "../auth/login";
const ProfileMenu = () => {
  return (
      <div className="profile-popup pt-[6px]">
        <Dialog>
          <DialogTrigger >
            <CircleUserRound className="text-DarkPrimary" size={20} />
          </DialogTrigger>
          <UserLoginAuthForm/>
        </Dialog>
      </div>
  );
}
export default  ProfileMenu