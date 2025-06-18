import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/router';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { ChevronDown } from 'lucide-react';

export function UserNav() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLogOut = () => {
        setIsOpen(false);
        router.push('/auth/login');
    };

    return (
        <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
            <DropdownMenuTrigger asChild>
                <div className="flex flex-row items-center gap-1 cursor-pointer">
                    <Button
                        variant="ghost"
                        className="relative h-8 w-8 rounded-full hover:bg-inherit"
                    >
                        <Avatar className="w-7 h-7 cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Button>
                    <ChevronDown className="w-3 h-3 text-topbarForeground" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-32 p-0 border border-borderColor"
                align="end"
                forceMount
                style={{ zIndex: 998 }}
            >
                <DropdownMenuGroup>
                    <Button
                        variant="outline"
                        className="border-none outline-none rounded-none w-full justify-start font-normal px-2 bg-popover hover:text-pophover-foreground hover:bg-pophover"
                    >
                        Profile
                    </Button>
                    <Button
                        variant="outline"
                        className="border-none outline-none rounded-none w-full justify-start font-normal px-2 bg-popover hover:text-pophover-foreground hover:bg-pophover"
                        onClick={handleLogOut}
                    >
                        Logout
                    </Button>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
