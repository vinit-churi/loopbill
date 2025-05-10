import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react";
import Link from "next/link";

export default function SignIn() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-[#edebe4]">
            <h1 className="text-3xl font-bold text-primary text-center mb-2">
                UrbanPestMaster
            </h1>
            <p className="text-gray-600 text-base text-center max-w-76 pb-6">
                Professional pest control solutions for your home and business
            </p>
            <Card className="w-88">
                <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>Enter your credentials to continue</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-2">
                        <Button type="submit" variant="default" className="w-full">Sign in</Button>
                        <span className="flex gap-1 justify-center">
                            Don't have an account?<Link href="/signup" className="text-primary">Sign up</Link>
                        </span>
                        <div className="w-full flex justify-between items-center gap-2 py-3">
                            <hr className="w-full"/>
                            <span className="flex-none text-xs">OR CONTINUE WITH</span>
                            <hr className="w-full"/>
                        </div>
                        <Button type="button" variant="outline" className="w-full"><Mail className="me-2 h-4 w-4"/>Continue
                            with Google</Button>
                    </form>
                </CardContent>
                <CardFooter className="text-xs">By signing in you accept Privacy Policy and Terms</CardFooter>
            </Card>
        </main>
    );
}