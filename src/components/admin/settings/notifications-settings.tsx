'use client'

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod/v4";
import {Checkbox} from "@/components/ui/checkbox";
import {useEffect} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Bell} from "lucide-react";
import {Button} from "@/components/ui/button";

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

export default function NotificationsSettings() {
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

    useEffect(() => {
        if (!email && !sms && !push && form.getValues("notificationsEnabled")) {
            form.setValue("notificationsEnabled", false);
        }
    }, [email, sms, push, form])

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
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
                        <Button type={"submit"} className={"w-full cursor-pointer"}>Update preferences</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}