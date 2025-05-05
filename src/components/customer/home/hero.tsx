import {Button} from "@/components/ui/button";

export default function Hero() {
    return (
        <header className="relative min-h-screen bg-gradient-to-b from-[#edebe4] to-[#f7f6f0] flex items-center">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl text-primary md:text-6xl font-bold mb-6 heading-gradient">
                        Professional Pest Control Solutions
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Protect your home and business from unwanted pests with our expert
                        services. Professional, reliable, and guaranteed results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="btn-primary">Get Free Quote</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}