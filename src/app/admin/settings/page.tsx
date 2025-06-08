import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Bell, HandPlatter, Settings as SettingsIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Settings() {
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
            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-1"}><SettingsIcon size={18} color={"oklch(62.3% 0.214 259.815)"}/>General
                        settings</CardTitle>
                    <CardDescription>Configure general system preferences</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button type={"submit"}>Save changes</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-1"}><Bell size={18} color={"oklch(72.3% 0.219 149.579)"}/>Notification
                        settings</CardTitle>
                    <CardDescription>Configure notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button type={"submit"}>Update preferences</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-1"}><HandPlatter size={18} color={"oklch(65.6% 0.241 354.308)"}/>Service
                        configuration</CardTitle>
                    <CardDescription>Configure service types and pricing</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    Pager
                </CardFooter>
            </Card>
        </main>
    );
}