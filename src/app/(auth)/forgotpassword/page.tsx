import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Mail, Phone} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function ForgotPassword() {
    return (
        <main className="min-h-screen py-4 flex flex-col justify-center items-center bg-[#edebe4]">
            <Link href="/" className="text-3xl font-bold text-primary text-center mb-2">
                UrbanPestMaster
            </Link>
            <p className="text-gray-600 text-base text-center max-w-76 pb-6">
                Professional pest control solutions for your home and business
            </p>
            <Card className="w-88">
                <CardHeader>
                    <CardTitle>Forgot password</CardTitle>
                    <CardDescription>Enter your credentials to reset password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="email"><Mail className="h-4 w-4"/>Email or<Phone className="h-4 w-4"/>Phone
                                number</Label>
                            <Input type="text"
                                   id="email"
                                   placeholder="Enter your email or phone number"
                                   pattern="^([^\s@]+@[^\s@]+\.[^\s@]+|\+?\d{10,15})$"
                                   title="Please enter a valid email or phone number"
                                   required/>
                        </div>
                        <Link href="/forgotpassword/reset-email-confirmation">
                            <Button type="submit" variant="default" className="w-full">Send reset link</Button>
                        </Link>
                        <Link href="/signin" className="text-center text-primary font-semibold">Back to Sign in</Link>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}