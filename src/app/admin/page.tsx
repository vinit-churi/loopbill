import {Button} from "@/components/ui/button";
import {Activity, Calendar} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function Admin() {
    return (
        <main className="p-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-muted-foreground">Overview of UrbanPestMaster operations</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline">Export</Button>
                    <Button><Calendar className="h-4 w-4"/> Schedule Service</Button>
                </div>
            </div>

            <div>
                <Card className="hover:shadow-md border-l-4 border-l-blue-500 ">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">Total Packages</CardTitle>
                        <div className="h-8 w-8 flex justify-center items-center bg-blue-100 rounded-full">
                            <Activity color="#4387f4" size={18}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">1,248</h1>
                    </CardContent>
                    <CardFooter>
                        <CardDescription className="text-xs">+20% from last month</CardDescription>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}