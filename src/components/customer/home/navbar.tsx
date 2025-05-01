import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <>
            {/* Desktop View */}
            <nav
                className="hidden md:flex relative top-0 z-50 items-center md:justify-between md:py-3.5 md:px-8 bg-[#edebe4]">
                <Link href="/" className=" text-2xl font-bold text-primary">LoopBill</Link>
                <div className="items-center space-x-8">
                    <Link href={{pathname: '/', hash: 'about'}} scroll={true}>About</Link>
                    <Link href={{pathname: '/', hash: 'pricing'}} scroll={true}>Pricing</Link>
                    <Link href={{pathname: '/', hash: 'contact'}} scroll={true}>Contact</Link>
                    <Button className="btn-primary cursor-pointer">Get Started</Button>
                </div>
            </nav>

            {/* Mobile View */}
            <nav className="md:hidden relative top-0 z-50 p-4 flex justify-center items-center bg-[#edebe4]">
                <Link href="/" className="text-2xl font-bold text-primary">LoopBill</Link>
            </nav>
        </>
    );
}