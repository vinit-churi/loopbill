import Pricing from "@/components/customer/home/pricing";
import About from "@/components/customer/home/about";
import Contact from "@/components/customer/home/contact";
import Features from "@/components/customer/home/features";
import Hero from "@/components/customer/home/hero";
import CallToAction from "@/components/customer/home/callToAction";
import Footer from "@/components/customer/home/footer";

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            {/* Hero Section */}
            <Hero/>

            <main>
                {/* Features Section */}
                <Features/>

                {/* CTA(Call to Action) Section */}
                <CallToAction/>

                {/* about section */}
                <About/>

                {/* pricing section */}
                <Pricing/>

                {/* contact section */}
                <Contact/>
            </main>

            <Footer/>
        </div>
    );
}
