import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="relative top-0 z-50 p-4 flex justify-center items-center md:justify-between md:py-3.5 md:px-8
        bg-[#edebe4]">

            {/* Mobile Menu */}
            <button type="button" className="md:hidden absolute start-4 cursor-pointer">
                <img className="h-6 w-6" src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="menu"/>
            </button>
            <Link href="/" className="md:hidden text-2xl font-bold text-primary">LoopBill</Link>

            {/* Desktop Menu */}
            <Link href="/" className="hidden md:flex text-2xl font-bold text-primary">LoopBill</Link>
            <div className="hidden md:flex items-center space-x-8">
                <Link href={{pathname: '/', hash: 'about'}} scroll={true}>About</Link>
                <Link href={{pathname: '/', hash: 'pricing'}} scroll={true}>Pricing</Link>
                <Link href={{pathname: '/', hash: 'contact'}} scroll={true}>Contact</Link>
                <Button className="btn-primary cursor-pointer">Get Started</Button>
            </div>
        </nav>
    );
}