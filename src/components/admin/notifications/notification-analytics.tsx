import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {MailOpen, MailX, Percent, Send} from "lucide-react";

export default function NotificationAnalytics() {
    return (
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <Card className="hover:shadow-md border-l-4 border-l-blue-500 ">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm">Total sent</CardTitle>
                    <div className="h-8 w-8 flex justify-center items-center bg-blue-100 rounded-full">
                        <Send color="oklch(62.3% 0.214 259.815)" size={18}/>
                    </div>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl font-bold">2,847</h1>
                    <CardDescription className="text-xs py-2">+12% from last month</CardDescription>
                </CardContent>
            </Card>

            <Card className="hover:shadow-md border-l-4 border-l-green-500 ">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm">Delivery rate</CardTitle>
                    <div className="h-8 w-8 flex justify-center items-center bg-green-100 rounded-full">
                        <Percent color="oklch(72.3% 0.219 149.579)" size={18}/>
                    </div>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl font-bold">98.5%</h1>
                    <CardDescription className="text-xs py-2">+0.3% from last month</CardDescription>
                </CardContent>
            </Card>

            <Card className="hover:shadow-md border-l-4 border-l-yellow-500 ">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm">Open rate</CardTitle>
                    <div className="h-8 w-8 flex justify-center items-center bg-yellow-100 rounded-full">
                        <MailOpen color="oklch(79.5% 0.184 86.047)" size={18}/>
                    </div>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl font-bold">74.2%</h1>
                    <CardDescription className="text-xs py-2">+5.1% from last month</CardDescription>
                </CardContent>
            </Card>

            <Card className="hover:shadow-md border-l-4 border-l-red-500 ">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm">Failed deliveries</CardTitle>
                    <div className="h-8 w-8 flex justify-center items-center bg-red-100 rounded-full">
                        <MailX color="oklch(63.7% 0.237 25.331)" size={18}/>
                    </div>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl font-bold">43</h1>
                    <CardDescription className="text-xs py-2">-8 from last month</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}