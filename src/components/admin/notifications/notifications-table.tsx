import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import NotificationsTablePagination from "@/components/admin/notifications/notifications-table-pagination";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

const allNotifications = [
    {
        notificationId: 1,
        subject: 'Service Reminder - Cockroach Treatment',
        recipients: 'Amit Sharma',
        type: 'Service Reminder',
        method: 'Email, Push',
        status: 'Delivered',
        dateTime: 'Today, 9:30 AM',
        actions: 'View details',
    },
    {
        notificationId: 2,
        subject: 'Payment Due Reminder',
        recipients: 'All Customers(124)',
        type: 'Payment Due',
        method: 'Email, Push, SMS',
        status: 'Sending',
        dateTime: 'Yesterday, 10:00 AM',
        actions: 'View Progress',
    },
    {
        notificationId: 3,
        subject: 'Service completion confirmation',
        recipients: 'Rajesh Kumar',
        type: 'Service Completion',
        method: 'Email, Push',
        status: 'Delivered',
        dateTime: 'Yesterday, 2:15 PM',
        actions: 'View details',
    },
    {
        notificationId: 4,
        subject: 'New Service Offer - Termite Control',
        recipients: 'Priya Sharma',
        type: 'Promotional',
        method: 'Email, Push, SMS',
        status: 'Delivered',
        dateTime: 'Today, 11:00 AM',
        actions: 'View details',
    },
    {
        notificationId: 5,
        subject: 'Service Feedback Request',
        recipients: 'Amit Patel',
        type: 'Feedback Request',
        method: 'Email, Push',
        status: 'Sending',
        dateTime: 'Today, 12:30 PM',
        actions: 'View Progress',
    },
    {
        notificationId: 6,
        subject: 'Service Reminder - Pest Control',
        recipients: 'All Customers(124)',
        type: 'Service Reminder',
        method: 'Email, Push, SMS',
        status: 'Delivered',
        dateTime: 'Today, 1:00 PM',
        actions: 'View details',
    },
    {
        notificationId: 7,
        subject: 'Payment Confirmation',
        recipients: 'Rajesh Kumar',
        type: 'Payment Confirmation',
        method: 'Email, Push',
        status: 'Delivered',
        dateTime: 'Today, 3:00 PM',
        actions: 'View details',
    },
    {
        notificationId: 8,
        subject: 'Service Feedback Request',
        recipients: 'Priya Sharma',
        type: 'Feedback Request',
        method: 'Email, Push, SMS',
        status: 'Sending',
        dateTime: 'Today, 4:00 PM',
        actions: 'View Progress',
    },
    {
        notificationId: 9,
        subject: 'New Service Offer - Pest Control',
        recipients: 'Amit Patel',
        type: 'Promotional',
        method: 'Email, Push',
        status: 'Scheduled',
        dateTime: 'Tomorrow, 5:00 PM',
        actions: 'Edit, Cancel',
    },
    {
        notificationId: 10,
        subject: 'Service Reminder - Termite Control',
        recipients: 'All Customers(124)',
        type: 'Service Reminder',
        method: 'Email, Push, SMS',
        status: 'Scheduled',
        dateTime: 'May 15, 2025, 6:00 PM',
        actions: 'Edit, Cancel',
    },
    {
        notificationId: 11,
        subject: 'Payment Due Reminder',
        recipients: 'Rajesh Kumar',
        type: 'Payment Due',
        method: 'Email, Push',
        status: 'Delivered',
        dateTime: 'Today, 7:00 PM',
        actions: 'View details',
    },
    {
        notificationId: 12,
        subject: 'Service Completion Confirmation',
        recipients: 'Priya Sharma',
        type: 'Service Completion',
        method: 'Email, Push, SMS',
        status: 'Sending',
        dateTime: 'Today, 8:00 PM',
        actions: 'View Progress',
    }
]

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Delivered':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Scheduled':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'Sending':
            return 'text-orange-600 border-orange-400 bg-orange-100'
        default:
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
    }
}

const renderRecentNotificationsTable = () => {
    const recentNotifications = allNotifications.filter(notification => notification.status !== 'Scheduled');
    if (recentNotifications.length === 0) {
        return <p>No notifications match the current filters.</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">Subject</TableHead>
                    <TableHead className="font-semibold">Recipients</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">Method</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-wrap whitespace-normal">Sent date & time</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentNotifications.map((notification) => (
                    <TableRow key={notification.notificationId}>
                        <TableCell className="text-wrap whitespace-normal">{notification.subject}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.recipients}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.type}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.method}</TableCell>
                        <TableCell>
                            <span
                                className={`px-2 py-0.5 border rounded-full font-semibold ${getStatusColor(notification.status)}`}>
                                {notification.status}
                            </span>
                        </TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.dateTime}</TableCell>
                        <TableCell>
                            <Button variant={"outline"} size={"sm"}>{notification.actions}</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

const renderScheduledNotificationsTable = () => {
    const scheduledNotifications = allNotifications.filter(notification => notification.status !== 'Delivered' && notification.status !== 'Sending');
    if (scheduledNotifications.length === 0) {
        return <p>No notifications match the current filters.</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">Subject</TableHead>
                    <TableHead className="font-semibold">Recipients</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">Method</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-wrap whitespace-normal">Sent date & time</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {scheduledNotifications.map((notification) => (
                    <TableRow key={notification.notificationId}>
                        <TableCell className="text-wrap whitespace-normal">{notification.subject}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.recipients}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.type}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.method}</TableCell>
                        <TableCell>
                            <span
                                className={`px-2 py-0.5 border rounded-full font-semibold ${getStatusColor(notification.status)}`}>
                                {notification.status}
                            </span>
                        </TableCell>
                        <TableCell className="text-wrap whitespace-normal">{notification.dateTime}</TableCell>
                        <TableCell>
                            {notification.actions.split(',').map(action => (
                                <Button key={action.trim()} variant={"outline"} size={"sm"} className="mr-2 last:mr-0">
                                    {action.trim()}
                                </Button>
                            ))}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

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
                        {renderRecentNotificationsTable()}
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
                        {renderScheduledNotificationsTable()}
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