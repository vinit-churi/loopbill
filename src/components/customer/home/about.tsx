export default function About() {
  return (
    <section id="about" className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
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
      <div className="bg-[#edebe4] py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Loopbill has been at the forefront of innovative
              pest control solutions. We started with a simple mission: to
              provide effective, environmentally conscious pest control services
              that protect both homes and businesses.
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
  );
}
