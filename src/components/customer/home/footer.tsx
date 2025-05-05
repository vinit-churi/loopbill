import Link from "next/link";

export default function Footer() {
    return (
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
                                    href={{pathname: "/", hash: "about"}}
                                    scroll={true}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{pathname: "/", hash: "pricing"}}
                                    scroll={true}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={{pathname: "/", hash: "contact"}}
                                    scroll={true}
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
    );
}