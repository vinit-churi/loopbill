'use client';

import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Building2, Plus, Trash2} from "lucide-react";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod/v4";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

// Accepts “9:00 AM”, “02:15 pm”, “12:00 PM”, etc
const TIME_12H_REGEX = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;

// hh:mm AM/PM -> minutes-since-midnight (for ordering check)
const toMinutes = (time: string) => {
    const [, hh, mm, meridiem] = time.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i)!

    let h = Number(hh) % 12
    if (meridiem.toUpperCase() === 'PM') h += 12
    return h * 60 + Number(mm)
}

// “9:00 AM – 6:00 PM” validator
const timeRangeSchema = z
    .object(
        {
            open: z.string().regex(TIME_12H_REGEX, 'Use hh:mm AM/PM'),
            close: z.string().regex(TIME_12H_REGEX, 'Use hh:mm AM/PM')
        }
    )
    .refine(
        ({open, close}) => toMinutes(open) < toMinutes(close),
        {
            message: 'Close time must be after open time', path: ['close']
        },
    )

// For each weekday: either a range or the word “Closed”
const daySchema = z.union([timeRangeSchema, z.literal('Closed'), z.literal('closed')]).default('Closed')

const formSchema = z.object({
    companyName: z.string().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
    companyAddress: z.string().min(1, "Company address is required").max(500, "Address must be less than 500 characters"),
    companyPhone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
    companyEmail: z.email("Invalid email address").max(320, "Email must be less than 320 characters"),
    mainOfficeHours: z.object({
        monday: daySchema,
        tuesday: daySchema,
        wednesday: daySchema,
        thursday: daySchema,
        friday: daySchema,
        saturday: daySchema,
        sunday: daySchema,
    }),
    branchName: z.string().min(1, "Branch name is required").max(200, "Branch name must be less than 200 characters"),
    branchAddress: z.string().min(1, "Branch address is required").max(500, "Address must be less than 500 characters"),
    branchPhone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
    branchEmail: z.email("Invalid email address").max(320, "Email must be less than 320 characters"),
    branchOfficeHours: z.object({
        monday: daySchema,
        tuesday: daySchema,
        wednesday: daySchema,
        thursday: daySchema,
        friday: daySchema,
        saturday: daySchema,
        sunday: daySchema,
    }),
})

export default function CompanyInformation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"flex gap-1"}>
                    <Building2 size={18} color={"oklch(62.3% 0.214 259.815)"}/>Company & Branch Information
                </CardTitle>
                <CardDescription>Configure company and branch details in one place</CardDescription>
            </CardHeader>
            <CardContent className={"space-y-4"}>
                <h4 className={"font-semibold text-blue-500 mb-2"}>Main Company</h4>
                <hr/>
                <div className={"space-y-2"}>
                    <Label htmlFor={"company-name"}>Company name</Label>
                    <Input id={"company-name"} type={"text"} placeholder={"Registered Company name"}/>
                </div>
                <div className={"space-y-2"}>
                    <Label htmlFor={"company-address"}>Company address</Label>
                    <Textarea id={"company-address"} placeholder={"Type your company address here"}/>
                </div>
                <div className={"flex flex-row items-center justify-between"}>
                    <h4 className={"text-sm font-semibold"}>Phone</h4>
                    <Button variant={"outline"}><Plus/>Add phone</Button>
                </div>
                <div className={"flex flex-row gap-2"}>
                    <Input id={"phone-type"} type={"text"} placeholder={"Phone type"} className={"w-30"}/>
                    <Input id={"phone-number"} type={"tel"} placeholder={"Phone number"}/>
                    <Button variant={"outline"} className={"cursor-pointer"}>
                        <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                    </Button>
                </div>
                <div className={"flex flex-row items-center justify-between"}>
                    <h4 className={"text-sm font-semibold"}>Email</h4>
                    <Button variant={"outline"}><Plus/>Add email</Button>
                </div>
                <div className={"flex flex-row gap-2"}>
                    <Input id={"email-type"} type={"text"} placeholder={"Email type"} className={"w-30"}/>
                    <Input id={"email-address"} type={"tel"} placeholder={"Email address"}/>
                    <Button variant={"outline"} className={"cursor-pointer"}>
                        <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                    </Button>
                </div>
                <h4 className={"text-sm font-semibold"}>Main office hours</h4>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"monday"} className={"w-30"}>Monday:</Label>
                        <Input id={"monday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"tuesday"} className={"w-30"}>Tuesday:</Label>
                        <Input id={"tuesday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"wednesday"} className={"w-30"}>Wednesday:</Label>
                        <Input id={"wednesday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"thursday"} className={"w-30"}>Thursday:</Label>
                        <Input id={"thursday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"friday"} className={"w-30"}>Friday:</Label>
                        <Input id={"friday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"saturday"} className={"w-30"}>Saturday:</Label>
                        <Input id={"saturday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <Label htmlFor={"sunday"} className={"w-30"}>Sunday:</Label>
                        <Input id={"sunday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                    </div>
                </div>

                <div className={"flex flex-row items-center justify-between"}>
                    <h4 className={"font-semibold text-green-500 mb-2"}>Branches</h4>
                    <Button variant={"outline"}><Plus/>Add branch</Button>
                </div>
                <hr/>
                <Card>
                    <CardHeader>
                        <CardTitle>Branch 1</CardTitle>
                        <CardAction><Button variant={"outline"}>
                            <Trash2 color={"oklch(63.7% 0.237 25.331)"}/></Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className={"space-y-4"}>
                        <div className={"space-y-2"}>
                            <Label htmlFor={"branch-name"}>Branch name</Label>
                            <Input id={"branch-name"} type={"text"} placeholder={"Branch name"}/>
                        </div>
                        <div className={"space-y-2"}>
                            <Label htmlFor={"branch-address"}>Branch address</Label>
                            <Textarea id={"branch-address"} placeholder={"Type your branch address here"}/>
                        </div>
                        <div className={"flex flex-row items-center justify-between"}>
                            <h4 className={"text-sm font-semibold"}>Phone</h4>
                            <Button variant={"outline"}><Plus/>Add phone</Button>
                        </div>
                        <div className={"flex flex-row gap-2"}>
                            <Input id={"phone-type"} type={"text"} placeholder={"Phone type"} className={"w-30"}/>
                            <Input id={"phone-number"} type={"tel"} placeholder={"Phone number"}/>
                            <Button variant={"outline"} className={"cursor-pointer"}>
                                <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                            </Button>
                        </div>
                        <div className={"flex flex-row items-center justify-between"}>
                            <h4 className={"text-sm font-semibold"}>Email</h4>
                            <Button variant={"outline"}><Plus/>Add email</Button>
                        </div>
                        <div className={"flex flex-row gap-2"}>
                            <Input id={"email-type"} type={"text"} placeholder={"Email type"} className={"w-30"}/>
                            <Input id={"email-address"} type={"tel"} placeholder={"Email address"}/>
                            <Button variant={"outline"} className={"cursor-pointer"}>
                                <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                            </Button>
                        </div>
                        <h4 className={"text-sm font-semibold"}>Branch office hours</h4>
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"monday"} className={"w-30"}>Monday:</Label>
                                <Input id={"monday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"tuesday"} className={"w-30"}>Tuesday:</Label>
                                <Input id={"tuesday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"wednesday"} className={"w-30"}>Wednesday:</Label>
                                <Input id={"wednesday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"thursday"} className={"w-30"}>Thursday:</Label>
                                <Input id={"thursday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"friday"} className={"w-30"}>Friday:</Label>
                                <Input id={"friday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"saturday"} className={"w-30"}>Saturday:</Label>
                                <Input id={"saturday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
                            <div className={"flex flex-row gap-2"}>
                                <Label htmlFor={"sunday"} className={"w-30"}>Sunday:</Label>
                                <Input id={"sunday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                            </div>
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