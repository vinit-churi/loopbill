'use client';

import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Building2, Plus, Trash2} from "lucide-react";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useFieldArray, useForm} from "react-hook-form";
import {z} from "zod/v4";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const phoneSchema = z.object(
    {
        type: z.string().min(1, "Phone type is required").max(50, "Phone type must be less than 50 characters").default("Phone"),
        number: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits").regex(/^\+?[0-9\s-]+$/, "Phone number must be a valid format")
    }
)

const phonesSchema = z.object({phones: z.array(phoneSchema).min(1, "At least one phone number is required")})

const emailSchema = z.object(
    {
        type: z.string().min(1, "Email type is required").max(50, "Email type must be less than 50 characters").default("Email"),
        address: z.email("Invalid email address").max(320, "Email must be less than 320 characters")
    }
)

const emailsSchema = z.object({emails: z.array(emailSchema).min(1, "At least one email address is required")});

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
            message: 'Close time must be after open time',
            path: ['close']
        },
    )

// For each weekday: either a range or the word “Closed”
const daySchema = z.union([timeRangeSchema, z.literal('Closed'), z.literal('closed')]).default('Closed')

const officeHoursSchema = z.object(
    {
        monday: daySchema,
        tuesday: daySchema,
        wednesday: daySchema,
        thursday: daySchema,
        friday: daySchema,
        saturday: daySchema,
        sunday: daySchema
    }
)

const branchSchema = z.object(
    {
        branchName: z.string().min(1, "Branch name is required").max(200, "Branch name must be less than 200 characters"),
        branchAddress: z.string().min(1, "Branch address is required").max(500, "Address must be less than 500 characters"),
        phones: z.array(phoneSchema).min(1, "At least one phone number is required"),
        emails: z.array(emailSchema).min(1, "At least one email address is required"),
        branchOfficeHours: officeHoursSchema
    }
)

const formSchema = z.object({
    companyName: z.string().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
    companyAddress: z.string().min(1, "Company address is required").max(500, "Address must be less than 500 characters"),
    phones: z.array(phoneSchema).min(1, "At least one phone number is required"),
    emails: z.array(emailSchema).min(1, "At least one email address is required"),
    mainOfficeHours: officeHoursSchema,
    branches: z.array(branchSchema).min(0, "Branches cannot be negative")
})

type FormValues = z.infer<typeof formSchema>
type FormInput = z.input<typeof formSchema>
type FormOutput = z.output<typeof formSchema>
type PhoneValues = z.infer<typeof phonesSchema>
type PhoneInputValues = z.input<typeof phonesSchema>
type PhoneOutputValues = z.output<typeof phonesSchema>
type EmailValues = z.infer<typeof emailsSchema>
type EmailInputValues = z.input<typeof emailsSchema>
type EmailOutputValues = z.output<typeof emailsSchema>

// Default values for phones
const defaultPhone: PhoneValues["phones"][0] = {
    type: "Phone",
    number: ""
}

// Default values for emails
const defaultEmail: EmailValues["emails"][0] = {
    type: "Email",
    address: ""
}

export default function CompanyInformation() {
    const form = useForm<FormInput, any, FormOutput>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                companyName: "UrbanPestMaster",
                companyAddress: "Kandivali East, Mumbai, Maharashtra",
                phones: [defaultPhone],
                emails: [defaultEmail],
                mainOfficeHours: {
                    monday: "Closed",
                    tuesday: "Closed",
                    wednesday: "Closed",
                    thursday: "Closed",
                    friday: "Closed",
                    saturday: "Closed",
                    sunday: "Closed"
                },
                branches: []
            }
        }
    )

    const phones = useFieldArray(
        {
            control: form.control,
            name: "phones"
        }
    )

    const emails = useFieldArray(
        {
            control: form.control,
            name: "emails"
        }
    )

    const branches = useFieldArray(
        {
            control: form.control,
            name: "branches"
        }
    )

    // For phones
    const {fields: phoneFields, append: appendPhone, remove: removePhone} = useFieldArray({
        control: form.control,
        name: "phones"
    })

    // For emails
    const {fields: emailFields, append: appendEmail, remove: removeEmail} = useFieldArray({
        control: form.control,
        name: "emails"
    })

    // For branches (if you're using it)
    const {fields: branchFields, append: appendBranch, remove: removeBranch} = useFieldArray({
        control: form.control,
        name: "branches"
    })

    const onSubmit = (values: FormValues) => {
        console.log("Form submitted with values:", values);
        // Here you would typically send the data to your backend or API
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                        <FormField
                            control={form.control}
                            name={"companyName"}
                            render={({field}) => (
                                <FormItem className={"space-y-2"}>
                                    <FormLabel htmlFor={"company-name"}>Company name</FormLabel>
                                    <FormControl>
                                        <Input {...field} id={"company-name"} type={"text"}
                                               placeholder={"Registered Company name"}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"companyAddress"}
                            render={({field}) => (
                                <FormItem className={"space-y-2"}>
                                    <FormLabel htmlFor={"company-address"}>Company address</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} id={"company-address"}
                                                  placeholder={"Type your company address here"}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className={"flex flex-row items-center justify-between"}>
                            <h4 className={"text-sm font-semibold"}>Phone</h4>
                            <Button
                                type={"button"}
                                variant={"outline"}
                                className={"cursor-pointer"}
                                onClick={() => appendPhone(defaultPhone)}
                            >
                                <Plus/>Add phone
                            </Button>
                        </div>
                        <section className={"space-y-4"}>
                            {phoneFields.map((field, index) => (
                                <div className={"flex flex-row gap-2"} key={field.id}>
                                    <FormField
                                        control={form.control}
                                        name={`phones.${index}.type`}
                                        render={({field: phoneTypeField}) => (
                                            <FormItem className={"w-30"}>
                                                <FormControl>
                                                    <Input {...phoneTypeField} type={"text"}
                                                           placeholder={"Phone type"}/>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={`phones.${index}.number`}
                                        render={({field: phoneNumberField}) => (
                                            <FormItem className={"w-full"}>
                                                <FormControl>
                                                    <Input {...phoneNumberField} type={"tel"}
                                                           placeholder={"Phone number"}/>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type={"button"}
                                        variant={"outline"}
                                        className={"cursor-pointer"}
                                        disabled={phoneFields.length === 1}
                                        onClick={() => removePhone(index)}
                                    >
                                        <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                                    </Button>
                                </div>
                            ))}
                        </section>
                        <div className={"flex flex-row items-center justify-between"}>
                            <h4 className={"text-sm font-semibold"}>Email</h4>
                            <Button
                                type={"button"}
                                variant={"outline"}
                                className={"cursor-pointer"}
                                onClick={()=>appendEmail(defaultEmail)}
                            >
                                <Plus/>Add email
                            </Button>
                        </div>
                        <section className={"space-y-4"}>
                            {emailFields.map((field, index) => (
                                <div className={"flex flex-row gap-2"} key={field.id}>
                                    <FormField
                                        control={form.control}
                                        name={`emails.${index}.type`}
                                        render={({field: emailTypeField}) => (
                                            <FormItem className={"w-30"}>
                                                <FormControl>
                                                    <Input
                                                        {...emailTypeField}
                                                        type={"text"}
                                                        placeholder={"Email type"}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={`emails.${index}.address`}
                                        render={({field: emailAddressField}) => (
                                            <FormItem className={"w-full"}>
                                                <FormControl>
                                                    <Input
                                                        {...emailAddressField}
                                                        type={"email"}
                                                        placeholder={"Email address"}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type={"button"}
                                        variant={"outline"}
                                        className={"cursor-pointer"}
                                        disabled={emailFields.length === 1}
                                        onClick={() => removeEmail(index)}
                                    >
                                        <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                                    </Button>
                                </div>
                            ))}
                        </section>
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
                            <Button variant={"outline"} className={"cursor-pointer"}><Plus/>Add branch</Button>
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
                                    <Button variant={"outline"} className={"cursor-pointer"}><Plus/>Add phone</Button>
                                </div>
                                <div className={"flex flex-row gap-2"}>
                                    <Input id={"phone-type"} type={"text"} placeholder={"Phone type"}
                                           className={"w-30"}/>
                                    <Input id={"phone-number"} type={"tel"} placeholder={"Phone number"}/>
                                    <Button variant={"outline"} className={"cursor-pointer"}>
                                        <Trash2 color={"oklch(63.7% 0.237 25.331)"}/>
                                    </Button>
                                </div>
                                <div className={"flex flex-row items-center justify-between"}>
                                    <h4 className={"text-sm font-semibold"}>Email</h4>
                                    <Button variant={"outline"} className={"cursor-pointer"}><Plus/>Add email</Button>
                                </div>
                                <div className={"flex flex-row gap-2"}>
                                    <Input id={"email-type"} type={"text"} placeholder={"Email type"}
                                           className={"w-30"}/>
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
                                        <Input id={"tuesday"} type={"text"}
                                               placeholder={"Opening time - Closing time"}/>
                                    </div>
                                    <div className={"flex flex-row gap-2"}>
                                        <Label htmlFor={"wednesday"} className={"w-30"}>Wednesday:</Label>
                                        <Input id={"wednesday"} type={"text"}
                                               placeholder={"Opening time - Closing time"}/>
                                    </div>
                                    <div className={"flex flex-row gap-2"}>
                                        <Label htmlFor={"thursday"} className={"w-30"}>Thursday:</Label>
                                        <Input id={"thursday"} type={"text"}
                                               placeholder={"Opening time - Closing time"}/>
                                    </div>
                                    <div className={"flex flex-row gap-2"}>
                                        <Label htmlFor={"friday"} className={"w-30"}>Friday:</Label>
                                        <Input id={"friday"} type={"text"} placeholder={"Opening time - Closing time"}/>
                                    </div>
                                    <div className={"flex flex-row gap-2"}>
                                        <Label htmlFor={"saturday"} className={"w-30"}>Saturday:</Label>
                                        <Input id={"saturday"} type={"text"}
                                               placeholder={"Opening time - Closing time"}/>
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
            </form>
        </Form>
    );
}