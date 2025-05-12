import {Button} from "@/components/ui/button";
import {Activity, Calendar, CalendarClock, ShieldCheck, TriangleAlert} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Admin() {
    return (
        <main className="flex flex-col gap-4 p-4">
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

            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <Card className="hover:shadow-md border-l-4 border-l-blue-500 ">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">Total Packages</CardTitle>
                        <div className="h-8 w-8 flex justify-center items-center bg-blue-100 rounded-full">
                            <Activity color="oklch(62.3% 0.214 259.815)" size={18}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">1,248</h1>
                        <CardDescription className="text-xs py-2">+20% from last month</CardDescription>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-md border-l-4 border-l-green-500 ">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">Active Services</CardTitle>
                        <div className="h-8 w-8 flex justify-center items-center bg-green-100 rounded-full">
                            <ShieldCheck color="oklch(72.3% 0.219 149.579)" size={18}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">892</h1>
                        <CardDescription className="text-xs py-2">147 completed this month</CardDescription>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-md border-l-4 border-l-yellow-500 ">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">Expiring Soon</CardTitle>
                        <div className="h-8 w-8 flex justify-center items-center bg-yellow-100 rounded-full">
                            <CalendarClock color="oklch(79.5% 0.184 86.047)" size={18}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">68</h1>
                        <CardDescription className="text-xs py-2">Within next 15 days</CardDescription>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-md border-l-4 border-l-red-500 ">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">Pending Complaints</CardTitle>
                        <div className="h-8 w-8 flex justify-center items-center bg-red-100 rounded-full">
                            <TriangleAlert color="oklch(63.7% 0.237 25.331)" size={18}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">23</h1>
                        <CardDescription className="text-xs py-2">12 require immediate attention</CardDescription>
                    </CardContent>
                </Card>
            </div>

            <hr />

            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Services</CardTitle>
                    <CardDescription>Services scheduled for the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest system activities</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Services at Risk</CardTitle>
                    <CardDescription>Services approaching expiration dates</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Pending Complaints</CardTitle>
                    <CardDescription>Customers not happy with service</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Agent Performance</CardTitle>
                    <CardDescription>Top performing agents this month</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Complaint status breakdown</CardTitle>
                    <CardDescription>Pie chart representation of complaints</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Service Trends</CardTitle>
                    <CardDescription>Scheduled vs Completed Services (Last 1 Year)</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>
        </main>
    );
}