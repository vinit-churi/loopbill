import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import NotificationsTablePagination from "@/components/admin/notifications/notifications-table-pagination";

export default function NotificationsTable() {
    return (
        <Tabs defaultValue="recent-notifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="recent-notifications" className="cursor-pointer">Recent notifications</TabsTrigger>
                <TabsTrigger value="scheduled" className="cursor-pointer">Scheduled</TabsTrigger>
                <TabsTrigger value="templates" className="cursor-pointer">Templates</TabsTrigger>
                <TabsTrigger value="analytics" className="cursor-pointer">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="recent-notifications">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Notifications</CardTitle>
                        <CardDescription>
                            Recently sent notifications and their delivery status
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/*{renderContracts()}*/}
                    </CardContent>
                    <CardFooter>
                        <NotificationsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="scheduled">
                <Card>
                    <CardHeader>
                        <CardTitle>Scheduled Notifications</CardTitle>
                        <CardDescription>
                            Notifications scheduled for future delivery
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/*{renderContracts()}*/}
                    </CardContent>
                    <CardFooter>
                        <NotificationsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value={"templates"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications templates</CardTitle>
                        <CardDescription>
                            Predefined templates for common notifications
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/*{renderContracts()}*/}
                    </CardContent>
                    <CardFooter>
                        <NotificationsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value={"analytics"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Notification analytics</CardTitle>
                        <CardDescription>
                            Insights into notification delivery and engagement
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/*{renderContracts()}*/}
                    </CardContent>
                    <CardFooter>
                        <NotificationsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}