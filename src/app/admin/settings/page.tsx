import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Settings as SettingsIcon} from "lucide-react";

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
                    <CardTitle className={"flex gap-1"}><SettingsIcon size={18} color={"oklch(62.3% 0.214 259.815)"}/>General settings</CardTitle>
                    <CardDescription>Configure general system preferences</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </main>
    );
}