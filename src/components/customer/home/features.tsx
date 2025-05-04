export default function Features() {
  return (
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
  );
}
