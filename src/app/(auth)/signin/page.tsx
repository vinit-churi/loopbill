// import {AuthForm} from "@/components/auth/signin/authForm";

export default function SignIn() {
    return (
        <div className="min-h-screen flex flex-col bg-pest-main">
            <main className="flex-1 flex flex-col md:flex-row items-stretch">
                {/* Left side - Auth form */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 px-4">
                    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-pest-accent text-center mb-2">
                                UrbanPestMaster
                            </h1>
                            <p className="text-gray-600 text-sm text-center">
                                Professional pest control solutions for your home and business
                            </p>
                        </div>
                        {/*<AuthForm />*/}
                    </div>
                </div>

                {/* Right side - Illustration */}
                <div className="hidden md:flex md:w-1/2 bg-pest-accent relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800')"
                        }}
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center text-white p-8 w-full">
                        <div className="max-w-md text-center">
                            <h2 className="text-4xl font-bold mb-6">Effective Pest Management Solutions</h2>
                            <div className="flex justify-center mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="120"
                                    height="120"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 5h1a2 2 0 0 1 2 2v9.5a2.5 2.5 0 0 1-2.5 2.5h-13a2.5 2.5 0 0 1-2.5-2.5V7a2 2 0 0 1 2-2h1"/>
                                    <path d="m12 2 4 3-4 3-4-3z"/>
                                    <path d="m12 8 4 3-4 3-4-3z"/>
                                    <path d="m12 14 4 3-4 3-4-3z"/>
                                </svg>
                            </div>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Professional, certified technicians
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Eco-friendly pest control solutions
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Customized service plans
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Guaranteed results or your money back
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}