'use client';

import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {HandPlatter, Plus, Trash, Trash2} from "lucide-react";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod/v4";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

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
                <div className={"flex flex-row justify-between"}>
                    <h4 className={"font-semibold mt-4 text-pink-500"}>Services</h4>
                    <Button variant={"outline"} className={"cursor-pointer"}>
                        <Plus/>Add service
                    </Button>
                </div>
                <hr className={"my-4"}/>
                <Card>
                    <CardHeader>
                        <CardTitle className={"text-pink-500"}>Service 1</CardTitle>
                        <CardAction>
                            <Button variant={"outline"} className={"cursor-pointer"}>
                                <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                        <div className={"space-y-2"}>
                            <Label htmlFor={"service-name"}>Service name</Label>
                            <Input id={"service-name"} type={"text"} placeholder={"Service name"}/>
                        </div>

                        <div className={"space-y-2"}>
                            <Label htmlFor={"service-duration-type"}>Service duration type</Label>
                            <Select defaultValue={"one-time"}>
                                <SelectTrigger id={"service-duration-type"} className="w-full cursor-pointer">
                                    <SelectValue placeholder="Service duration type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="one-time">One time</SelectItem>
                                    <SelectItem value="one-year">1 Year</SelectItem>
                                    <SelectItem value="two-years">2 Years</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className={"space-y-2"}>
                            <Label htmlFor={"price-per-100sqft"}>Price per 100 Square Feet(₹)</Label>
                            <Input id={"price-per-100sqft"} type={"number"}
                                   placeholder={"Price per 100 Square Feet(₹)"}/>
                        </div>

                        <div className={"space-y-2"}>
                            <Label htmlFor={"delivery-charge-per-km"}>Delivery charge per Km(₹)</Label>
                            <Input id={"delivery-charge-per-km"} type={"number"}
                                   placeholder={"Delivery charge per Km(₹)"}/>
                        </div>

                        <div className={"space-y-2"}>
                            <Label htmlFor={"service-status"}>Service status</Label>
                            <Select defaultValue={"active"}>
                                <SelectTrigger id={"service-status"} className="w-full cursor-pointer">
                                    <SelectValue placeholder="Service status"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
            <CardFooter>
                <Button type={"submit"} className={"w-full cursor-pointer"}>Save changes</Button>
            </CardFooter>
        </Card>
    );
}