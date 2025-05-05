export default function About() {
  return (
      <section id="about">
        {/* Hero */}
        <header className="bg-gray-50 py-20 text-center">
          <div className="mx-auto max-w-3xl px-4">
            <h1 className="mb-6 text-4xl font-bold heading-gradient">
              About Loopbill
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in pest control services since 2010.
            </p>
          </div>
        </header>

        {/* Story */}
        <article className="bg-[#edebe4] py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-6 text-gray-600">
              Founded in 2010, Loopbill has been at the forefront of innovative pest
              control solutions. We started with a simple mission: to provide
              effective, environmentally conscious pest control services that protect
              both homes and businesses.
            </p>
            <p className="text-gray-600">
              Today, we&apos;re proud to be one of the leading pest control companies,
              serving thousands of satisfied customers across the region. Our
              commitment to excellence and customer satisfaction remains at the heart
              of everything we do.
            </p>
          </div>
        </article>

        {/* Values */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-12 text-3xl font-bold">Our Values</h2>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for excellence in every service we provide.',
                },
                {
                  title: 'Integrity',
                  description:
                      'Honest, transparent, and ethical business practices.',
                },
                {
                  title: 'Innovation',
                  description:
                      'Continuously improving our methods and solutions.',
                },
              ].map(({ title, description }) => (
                  <li
                      key={title}
                      className="rounded-lg bg-white p-6 shadow-sm"
                  >
                    <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
  );
}
