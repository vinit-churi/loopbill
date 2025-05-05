import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#edebe4] py-12">
            <div className="mx-auto max-w-7xl px-4">
                {/* Columns */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="text-primary mb-4 text-2xl font-semibold font-stretch-expanded">UrbanPestMaster</h3>
                        <p className="text-gray-600">
                            Professional pest control services for your peace of mind.
                        </p>
                    </div>

                    {/* Company links */}
                    <nav aria-label="Company">
                        <h4 className="mb-4 text-lg font-semibold">Company</h4>
                        <ul className="space-y-2">
                            {['about', 'pricing', 'contact'].map((id) => (
                                <li key={id}>
                                    <Link
                                        href={{pathname: '/', hash: id}}
                                        scroll
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Services links */}
                    <nav aria-label="Services">
                        <h4 className="mb-4 text-lg font-semibold">Services</h4>
                        <ul className="space-y-2">
                            {['Residential', 'Commercial', 'Emergency'].map((svc) => (
                                <li key={svc}>
                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                        {svc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <address className="not-italic">
                        <h4 className="mb-4 text-lg font-semibold">Contact</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <strong>Kandivali Branch:<br/></strong>
                                Shop no. 1, Ram Bhagat Pandey Apartment,<br/>
                                Poisar, Kandivali (E) - 400 101
                            </li>
                            <li>
                                <strong>Virar Branch:<br/></strong>
                                Shop no. 10, Yashwant Nagar,<br/>
                                Virar (W) - 401 303
                            </li>
                            <li>
                                <a href="mailto:contact@urbanpestmaster.in">contact@urbanpestmaster.in</a>
                            </li>
                            <li>+91 74985 18198 / 86001 39094</li>
                        </ul>
                    </address>
                </div>

                {/* Copyright */}
                <p className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
                    &copy; {new Date().getFullYear()} UrbanPestMaster. All rights reserved.
                </p>
            </div>
        </footer>
    );
}