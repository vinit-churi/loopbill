import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    return (
        <nav
            className="top-0 z-50 bg-[#edebe4] flex md:justify-between items-center p-4 md:py-3.5 md:px-8 relative justify-center">
            {/* Desktop Menu */}
            <Link href="/" className="hidden md:flex text-2xl font-bold text-primary">
                LoopBill
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
                <Link href={{pathname: '/', hash: 'about'}} scroll={true}>About</Link>
                <Link href={{pathname: '/', hash: 'pricing'}} scroll={true}>Pricing</Link>
                <Link href={{pathname: '/', hash: 'contact'}} scroll={true}>Contact</Link>
                <Button className="btn-primary cursor-pointer">Get Started</Button>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet>
                <SheetTrigger className="md:hidden absolute start-4 cursor-pointer">
                    <img className="h-6 w-6"
                         src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="menu"/>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>
                            <Link href={{pathname: '/', hash: 'about'}} scroll={true}>About</Link>
                        </SheetTitle>
                        <SheetTitle>
                            <Link href={{pathname: '/', hash: 'pricing'}} scroll={true}>Pricing</Link>
                        </SheetTitle>
                        <SheetTitle>
                            <Link href={{pathname: '/', hash: 'contact'}} scroll={true}>Contact</Link>
                        </SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Link href="/" className="md:hidden text-2xl font-bold text-primary">
                LoopBill
            </Link>
        </nav>
    );
}