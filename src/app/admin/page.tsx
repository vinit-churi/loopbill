import {Button} from "@/components/ui/button";
import {Calendar} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import TopStatisticsCards from "@/components/admin/top-statistics-cards";

export default function Admin() {
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground">Overview of UrbanPestMaster operations</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" className="cursor-pointer">Export</Button>
                    <Button className="cursor-pointer"><Calendar className="h-4 w-4"/> Schedule Service</Button>
                </div>
            </div>
            <TopStatisticsCards/>

            {/*Divider line separating statistics from cards*/}
            <hr/>

            {/*Upcoming Services*/}
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Services</CardTitle>
                    <CardDescription>Services scheduled for the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            {/*Recent Activities*/}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest system activities</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            {/*Services at Risk*/}
            <Card>
                <CardHeader>
                    <CardTitle>Services at Risk</CardTitle>
                    <CardDescription>Services approaching expiration dates</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            {/*Pending Complaints*/}
            <Card>
                <CardHeader>
                    <CardTitle>Pending Complaints</CardTitle>
                    <CardDescription>Customers not happy with service</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            {/*Agent Performance*/}
            <Card>
                <CardHeader>
                    <CardTitle>Agent Performance</CardTitle>
                    <CardDescription>Top performing agents this month</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            {/*Complaint Status Breakdown*/}
            <Card>
                <CardHeader>
                    <CardTitle>Complaint status breakdown</CardTitle>
                    <CardDescription>Pie chart representation of complaints</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>

            {/*Service Trends*/}
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