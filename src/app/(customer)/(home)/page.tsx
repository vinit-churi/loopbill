import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 bg-[#eeebe4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Loopbill?</h2>
            <p className="text-gray-600">
              Expert pest control services you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our certified professionals have years of experience in pest control.",
              },
              {
                title: "24/7 Service",
                description:
                  "Emergency pest control services available around the clock.",
              },
              {
                title: "Guaranteed Results",
                description:
                  "We stand behind our work with a 100% satisfaction guarantee.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* about section */}
      <section className="flex flex-col bg-[#edebe4]">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 heading-gradient">
                About Loopbill
              </h1>
              <p className="text-xl text-gray-600">
                Your trusted partner in pest control services since 2010.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Loopbill has been at the forefront of
                innovative pest control solutions. We started with a simple
                mission: to provide effective, environmentally conscious pest
                control services that protect both homes and businesses.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of the leading pest control
                companies, serving thousands of satisfied customers across the
                region. Our commitment to excellence and customer satisfaction
                remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in every service we provide.",
                },
                {
                  title: "Integrity",
                  description:
                    "Honest, transparent, and ethical business practices.",
                },
                {
                  title: "Innovation",
                  description:
                    "Continuously improving our methods and solutions.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#edebe4]">
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Loopbill</h3>
              <p className="text-gray-600">
                Professional pest control services for your peace of mind.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Commercial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Emergency
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">1234 Pest Control St</li>
                <li className="text-gray-600">City, State 12345</li>
                <li className="text-gray-600">contact@loopbill.com</li>
                <li className="text-gray-600">(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Loopbill. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
