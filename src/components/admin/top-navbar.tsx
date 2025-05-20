import {Input} from "@/components/ui/input";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, Calendar, Settings} from "lucide-react";
import Image from "next/image";

export default function TopNavbar() {
    return (
        <header className="flex h-16 items-center bg-white border-b sticky top-0 z-30 px-4 gap-2">
            <SidebarTrigger/>
            <Input
                placeholder="Search..."
                className="flex flex-1 items-center bg-[#f7f6f0] border-none"
            />
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <Bell size={18}/>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <Calendar size={18}/>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <Settings size={18}/>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <Image src="/next.svg" width={38} height={38} alt="Profile image"/>
            </div>
        </header>
    );
};
