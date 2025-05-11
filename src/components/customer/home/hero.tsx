import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <header className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-gradient-to-b from-[#edebe4] to-[#f7f6f0]">
            {/*<section className="flex flex-col items-center mx-auto max-w-3xl px-4 text-center"></section>*/}
            <Image alt="pest image" src="sprayman.svg" width={300} height={300} />
            <h1 className="max-w-3xl px-4 md:text-6xl text-3xl text-center font-bold text-primary mb-4">
                Professional Pest Control Solutions
            </h1>
            <p className="max-w-3xl px-4 md:text-xl text-base text-center text-gray-600 mb-12">
                Protect your home and business from unwanted pests with our expert
                services. Professional, reliable, and guaranteed results.
            </p>
            <div className="w-full px-4 sm:w-auto flex sm:flex-row flex-col justify-center gap-4">
                <Button className="btn-primary">Get Free Quote</Button>
                <Button variant="outline">Learn More</Button>
            </div>
        </header>
    );
}