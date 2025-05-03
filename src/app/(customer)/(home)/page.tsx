import {Button} from "@/components/ui/button";

export default function Home() {
    return (
    <div className="flex flex-col justify-center">
      {/* Hero Section */}
      <header className="relative min-h-screen bg-gradient-to-b from-[#edebe4] to-[#f7f6f0] flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
              Professional Pest Control Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect your home and business from unwanted pests with our expert services.
              Professional, reliable, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">Get Free Quote</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Loopbill?</h2>
            <p className="text-gray-600">Expert pest control services you can trust</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our certified professionals have years of experience in pest control."
              },
              {
                title: "24/7 Service",
                description: "Emergency pest control services available around the clock."
              },
              {
                title: "Guaranteed Results",
                description: "We stand behind our work with a 100% satisfaction guarantee."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
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
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today for a free inspection and quote. Protect your property from pests!
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
    );
}