'use client'

import Link from "next/link";
import {useState} from "react";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#edebe4]">
            <div className="flex md:justify-between items-center p-4 md:py-3.5 md:px-8 relative justify-center">
                {/* Mobile Menu Button */}
                <button className="md:hidden absolute start-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <img className="h-6 w-6" src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="menu"/>
                </button>

                <Link href="/" className="hidden md:flex text-2xl font-bold text-primary">
                    LoopBill
                </Link>

                <Link href="/" className="md:hidden text-2xl font-bold text-primary">
                    LoopBill
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href={{pathname: '/', hash: 'about'}} scroll={true} className="nav-link">About</Link>
                    <Link href={{pathname: '/', hash: 'pricing'}} scroll={true} className="nav-link">Pricing</Link>
                    <Link href={{pathname: '/', hash: 'contact'}} scroll={true} className="nav-link">Contact</Link>
                    <Button className="btn-primary cursor-pointer">Get Started</Button>
                </nav>


            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href={{pathname: '/', hash: 'about'}} scroll={true} className="nav-link">About</Link>
                        <Link href={{pathname: '/', hash: 'pricing'}} scroll={true} className="nav-link">Pricing</Link>
                        <Link href={{pathname: '/', hash: 'contact'}} scroll={true} className="nav-link">Contact</Link>
                        <Button className="btn-primary w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;