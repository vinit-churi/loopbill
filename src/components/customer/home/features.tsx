export default function Features() {
  return (
      <section className="bg-[#eeebe4] py-20">
        {/* Heading and subheading */}
        <header className="mx-auto mb-16 max-w-2xl text-center px-4">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Loopbill?</h2>
          <p className="text-gray-600">Expert pest control services you can trust</p>
        </header>

        {/* Feature cards */}
        <ul className="mx-auto grid max-w-7xl gap-4 px-4 grid-cols-1 md:grid-cols-3">
          {[
            {
              title: 'Expert Team',
              description:
                  'Our certified professionals have years of experience in pest control.',
            },
            {
              title: '24/7 Service',
              description:
                  'Emergency pest control services available around the clock.',
            },
            {
              title: 'Guaranteed Results',
              description:
                  'We stand behind our work with a 100% satisfaction guarantee.',
            },
          ].map(({ title, description }) => (
              <li
                  key={title}
                  className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </li>
          ))}
        </ul>
      </section>
  );
}
