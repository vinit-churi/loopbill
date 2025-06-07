import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {MailOpen, MailX, Percent, Send} from "lucide-react";
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

const chartData = [
    { month: "Jan", sent: 2400, delivered: 2350, opened: 1800 },
    { month: "Feb", sent: 2100, delivered: 2050, opened: 1650 },
    { month: "Mar", sent: 2800, delivered: 2720, opened: 2100 },
    { month: "Apr", sent: 3200, delivered: 3150, opened: 2400 },
    { month: "May", sent: 2847, delivered: 2801, opened: 2112 },
    { month: "Jun", sent: 3000, delivered: 2950, opened: 2300 },
    { month: "Jul", sent: 3500, delivered: 3400, opened: 2700 },
    { month: "Aug", sent: 3700, delivered: 3600, opened: 2900 },
    { month: "Sep", sent: 4000, delivered: 3900, opened: 3100 },
    { month: "Oct", sent: 4200, delivered: 4100, opened: 3300 },
    { month: "Nov", sent: 4500, delivered: 4400, opened: 3600 },
    { month: "Dec", sent: 4800, delivered: 4700, opened: 3900 },
];

const chartConfig = {
    sent: {
        label: "Sent",
        color: "#4285f4",
    },
    delivered: {
        label: "Delivered",
        color: "#34a853",
    },
    opened: {
        label: "Opened",
        color: "#fbbc04",
    },
};

export default function NotificationAnalytics() {
    return (
        <main className="flex flex-col w-full h-full gap-4">
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
            <Card>
                <CardHeader>
                    <CardTitle>Notification performance</CardTitle>
                    <CardDescription>Delivery and engagement metrics over time</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="sent" stroke="var(--color-sent)" strokeWidth={2} />
                                <Line type="monotone" dataKey="delivered" stroke="var(--color-delivered)" strokeWidth={2} />
                                <Line type="monotone" dataKey="opened" stroke="var(--color-opened)" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </main>
    )
}