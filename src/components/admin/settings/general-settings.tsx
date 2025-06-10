import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Settings as SettingsIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function GeneralSettings() {
    return (
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
                <Button type={"submit"} className={"w-full cursor-pointer"}>Save changes</Button>
            </CardFooter>
        </Card>
    );
}