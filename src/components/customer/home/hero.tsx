import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#edebe4] to-[#f7f6f0]">
            <section className="flex flex-col items-center mx-auto max-w-3xl px-4 text-center">
                <Image alt="pest image" src="sprayman.svg" width={300} height={300} />
                <h1 className="heading-gradient mb-6 text-4xl font-bold text-primary md:text-6xl">
                    Professional Pest Control Solutions
                </h1>
                <p className="mb-8 text-xl text-gray-600">
                    Protect your home and business from unwanted pests with our expert
                    services. Professional, reliable, and guaranteed results.
                </p>
                <div className="w-full sm:w-auto flex flex-col justify-center gap-4 sm:flex-row">
                    <Button className="btn-primary">Get Free Quote</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </section>
        </header>
    );
}