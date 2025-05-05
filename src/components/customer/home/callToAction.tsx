import {Button} from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section className="relative bg-primary py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Contact us today for a free inspection and quote. Protect your
                        property from pests!
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-gray-100"
                    >
                        Contact Us Now
                    </Button>
                </div>
            </div>
        </section>
    );
}