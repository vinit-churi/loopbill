import {Button} from "@/components/ui/button";
import {Calendar} from "lucide-react";

export default function Admin() {
    return (
        <main>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Overview of UrbanPestMaster operations</p>
            </div>
            <div className="flex gap-2 items-center">
                <Button variant="outline">Export</Button>
                <Button><Calendar className="h-4 w-4"/> Schedule Service</Button>
            </div>
        </main>
    );
}