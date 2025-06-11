'use client';

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {HandPlatter, Plus} from "lucide-react";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod/v4";

const formSchema = z.object({
    companyName: z.string().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
    companyEmail: z.email("Invalid email address").max(320, "Email must be less than 320 characters"),
    companyPhone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
})

export default function ServiceConfiguration() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"flex gap-1"}>
                    <HandPlatter size={18} color={"oklch(65.6% 0.241 354.308)"}/>Service configuration
                </CardTitle>
                <CardDescription>Configure service types and pricing</CardDescription>
            </CardHeader>
            <CardContent>
                <div className={"flex flex-row justify-between mb-2"}>
                    <h4 className={"font-semibold mt-4 text-pink-500"}>Services</h4>
                    <Button variant={"outline"} className={"cursor-pointer"}>
                        <Plus/>Add service
                    </Button>
                </div>
                <hr/>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button type={"submit"} className={"w-full cursor-pointer"}>Save changes</Button>
            </CardFooter>
        </Card>
    );
}