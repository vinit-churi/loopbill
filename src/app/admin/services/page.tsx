import {Button} from "@/components/ui/button";
import {Calendar, Plus} from "lucide-react";

export default function Services() {
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">Manage all pest control services</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" className="cursor-pointer"><Calendar/>Calendar view</Button>
                    <Button className="cursor-pointer"><Plus/>New service</Button>
                </div>
            </div>
        </main>
    );
}