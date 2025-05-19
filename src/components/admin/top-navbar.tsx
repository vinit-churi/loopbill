import {Input} from "@/components/ui/input";
import {SidebarTrigger} from "@/components/ui/sidebar";

export default function TopNavbar() {
    return (
        <header className="flex h-16 items-center bg-white border-b sticky top-0 z-30 px-4 gap-2">
            <SidebarTrigger/>
            <Input
                placeholder="Search..."
                className="flex flex-1 items-center bg-[#f7f6f0] border-none"
            />
        </header>
    );
};
