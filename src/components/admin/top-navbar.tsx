import {Input} from "@/components/ui/input";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, Calendar, CircleUserRound, LogOut, Settings} from "lucide-react";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function TopNavbar() {
    return (
        <header className="flex h-16 items-center bg-white border-b sticky top-0 z-30 px-4 gap-2">
            <SidebarTrigger/>

            {/*Search bar*/}
            <Input
                placeholder="Search..."
                className="flex flex-1 items-center bg-[#f7f6f0] border-none"
            />

            {/*Notifications*/}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="w-10 h-10 rounded-full border border-gray-200
                    flex items-center justify-center cursor-pointer">
                        <Bell size={18}/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-90">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                </DropdownMenuContent>
            </DropdownMenu>

            {/*Upcoming services*/}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="w-10 h-10 rounded-full border border-gray-200
                    flex items-center justify-center cursor-pointer">
                        <Calendar size={18}/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-90">
                    <DropdownMenuLabel>Upcoming Services</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                </DropdownMenuContent>
            </DropdownMenu>

            {/*Authentication and authorization*/}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="w-10 h-10 rounded-full border border-gray-200
            flex items-center justify-center overflow-hidden cursor-pointer">
                        <Image src="/profile_image.png" width={38} height={38} alt="Profile image"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-90">
                    <DropdownMenuLabel>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center
                            justify-center overflow-hidden">
                                <Image src="/profile_image.png" width={64} height={64} alt="Profile image"/>
                            </div>
                            <div>
                                <h4 className="max-w-64 text-lg text-primary font-bold truncate">Jean McMaster</h4>
                                <p className="max-w-64 text-sm text-muted-foreground truncate">admin.pestmaster@gmail.com</p>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <CircleUserRound size={24}/>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings size={24}/>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <LogOut size={24}/>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};
