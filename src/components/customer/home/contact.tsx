"use client";

import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";

const Field: React.FC<{ label: string; children: React.ReactNode }> = (
    {
        label,
        children,
    }) => (
    <label className="block text-sm font-medium space-y-2">
        <span>{label}</span>
        {children}
    </label>
);

const Contact = () => {
    /* form state */
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        // Handle form submission
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phone,
                    message,
                }),
            });

            if (!res.ok) {
                // Try to read a JSON error from the API (e.g. { message: "…" })
                // ──❯  handle the “unsuccessful HTTP” branch right here
                let serverMessage: string | undefined;

                try {
                    // `res.json()` might fail if the body is not JSON, hence the extra try/catch.
                    const json = (await res.json()) as { message?: string };
                    serverMessage = json?.message;
                } catch {
                    /* body not JSON – ignore */
                }

                toast.error(
                    serverMessage ?? `Request failed: ${res.status} ${res.statusText}`
                );
                return; // <── early-exit, nothing thrown
            }

            toast.success("Message sent! We’ll be in touch soon.");
            /* reset form */
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("Unknown error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="flex flex-col bg-[#f7f6f0]">
            {/* Hero section */}
            <header className="py-20 max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 heading-gradient">
                    Get in Touch
                </h1>
                <p className="text-xl text-gray-600">
                    We&apos;re here to help with all your pest control needs
                </p>
            </header>

            {/* Contact section */}
            <div className="px-4 pb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Info */}
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold">Contact Information</h2>

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

                    <div>
                        <h3 className="font-semibold mb-2">Office Hours</h3>
                        <p className="text-gray-600">Monday – Friday: 8 am – 6 pm</p>
                        <p className="text-gray-600">Saturday: 9 am – 2 pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Emergency Service</h3>
                        <p className="text-gray-600">
                            24/7 emergency pest control services available
                        </p>
                    </div>
                </article>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-sm space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="First Name">
                            <Input placeholder="Johnny" value={firstName}
                                   onChange={(event) => setFirstName(event.target.value)}
                                   required/>
                        </Field>
                        <Field label="Last Name">
                            <Input placeholder="Walker"
                                   value={lastName}
                                   onChange={(event) => setLastName(event.target.value)}
                                   required/>
                        </Field>
                    </div>

                    <Field label="Email">
                        <Input type="email" placeholder="johnny@example.com" value={email}
                               onChange={(event) => setEmail(event.target.value)}
                               required/>
                    </Field>

                    <Field label="Phone">
                        <Input type="tel" placeholder="+91 00000 00000" value={phone}
                               onChange={(event) => setPhone(event.target.value)}
                               required/>
                    </Field>

                    <Field label="Message">
                        <Textarea
                            placeholder="Tell us about your pest control needs..."
                            className="h-32"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            required/>
                    </Field>

                    <Button type="submit" className="btn-primary w-full" disabled={loading}>
                        {loading ? "Sending…" : "Send Message"}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;