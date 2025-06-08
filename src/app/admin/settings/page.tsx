'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Bell, HandPlatter, Settings as SettingsIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import SettingsTablePagination from "@/components/admin/settings/settings-table-pagination";
import SettingsServiceConfigurationTable from "@/components/admin/settings/settings-service-configuration-table";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod/v4";
import {Checkbox} from "@/components/ui/checkbox";
import {useMemo, useEffect} from "react";

const allServiceConfigurations = [
    {
        serviceId: 1,
        serviceType: 'Cockroach Treatment',
        serviceDuration: '30 minutes',
        servicePrice: '₹50',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 2,
        serviceType: 'Termite Control',
        serviceDuration: '45 minutes',
        servicePrice: '₹75',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 3,
        serviceType: 'Bed Bug Treatment',
        serviceDuration: '60 minutes',
        servicePrice: '₹100',
        serviceStatus: 'Inactive',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 4,
        serviceType: 'Pest Inspection',
        serviceDuration: '20 minutes',
        servicePrice: '₹30',
        serviceStatus: 'Seasonal',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 5,
        serviceType: 'Mosquito Control',
        serviceDuration: '40 minutes',
        servicePrice: '₹60',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 6,
        serviceType: 'Rodent Control',
        serviceDuration: '50 minutes',
        servicePrice: '₹80',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    }
];

const formSchema = z.object(
    {
        notificationsEnabled: z.boolean(),
        emailNotifications: z.boolean(),
        smsNotifications: z.boolean(),
        pushNotifications: z.boolean()
    }
).refine(
    (data) => {
        if (!data.notificationsEnabled) {
            return (!data.emailNotifications && !data.smsNotifications && !data.pushNotifications)
        }
        return (data.emailNotifications || data.smsNotifications || data.pushNotifications)
    }, {
        error:
            "If notifications are disabled, email, SMS, and push must be false. If enabled, at least one must be true.",
        path: ["notificationsEnabled"],
    }
)

export default function Settings() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            notificationsEnabled: true,
            emailNotifications: true,
            smsNotifications: false,
            pushNotifications: true,
        },
    })

    const notificationEnabled = form.watch("notificationsEnabled")
    const email = form.watch("emailNotifications")
    const sms = form.watch("smsNotifications")
    const push = form.watch("pushNotifications")

    const computedNotificationsEnabled = useMemo(() => {
        return email || sms || push;
    }, [email, sms, push]);

    useEffect(() => {
        if (form.getValues("notificationsEnabled") !== computedNotificationsEnabled) {
            form.setValue("notificationsEnabled", computedNotificationsEnabled);
        }
    }, [computedNotificationsEnabled, form])

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">Manage system settings and configurations</p>
                </div>
            </div>
            <hr/>
            {/* Settings content goes here */}
            <section className={"grid gap-4 grid-cols-1 md:grid-cols-2"}>
                <Card>
                    <CardHeader>
                        <CardTitle className={"flex gap-1"}>
                            <SettingsIcon size={18} color={"oklch(62.3% 0.214 259.815)"}/>General settings</CardTitle>
                        <CardDescription>Configure general system preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <Button type={"submit"} className={"w-full"}>Save changes</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className={"flex gap-1"}>
                            <Bell size={18} color={"oklch(72.3% 0.219 149.579)"}/>Notification settings</CardTitle>
                        <CardDescription>Configure notification preferences</CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent className={"grid gap-4 mb-4"}>
                                <FormField
                                    control={form.control}
                                    name={"notificationsEnabled"}
                                    render={({field}) => (
                                        <FormItem className={"flex items-center gap-2 justify-between"}>
                                            <div className={"flex flex-col gap-1"}>
                                                <FormLabel>All notifications</FormLabel>
                                                <FormDescription>Receive all notifications</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => field.onChange(checked)}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"emailNotifications"}
                                    render={({field}) => (
                                        <FormItem className={"flex items-center gap-2 justify-between"}>
                                            <div className={"flex flex-col gap-1"}>
                                                <FormLabel>Email notifications</FormLabel>
                                                <FormDescription>Receive notifications by email</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Checkbox
                                                    disabled={!notificationEnabled}
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => field.onChange(checked)}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"smsNotifications"}
                                    render={({field}) => (
                                        <FormItem className={"flex items-center gap-2 justify-between"}>
                                            <div className={"flex flex-col gap-1"}>
                                                <FormLabel>SMS notifications</FormLabel>
                                                <FormDescription>Receive notifications by SMS</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Checkbox
                                                    disabled={!notificationEnabled}
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => field.onChange(checked)}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"pushNotifications"}
                                    render={({field}) => (
                                        <FormItem className={"flex items-center gap-2 justify-between"}>
                                            <div className={"flex flex-col gap-1"}>
                                                <FormLabel>Push notifications</FormLabel>
                                                <FormDescription>Receive push notifications</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Checkbox
                                                    disabled={!notificationEnabled}
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => field.onChange(checked)}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button type={"submit"} className={"w-full"}>Update preferences</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </section>

            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-1"}>
                        <HandPlatter size={18} color={"oklch(65.6% 0.241 354.308)"}/>Service configuration</CardTitle>
                    <CardDescription>Configure service types and pricing</CardDescription>
                </CardHeader>
                <CardContent>
                    <SettingsServiceConfigurationTable serviceConfigurations={allServiceConfigurations}/>
                </CardContent>
                <CardFooter>
                    <SettingsTablePagination/>
                </CardFooter>
            </Card>
        </main>
    );
}