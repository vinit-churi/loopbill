import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import NotificationsTablePagination from "@/components/admin/notifications/notifications-table-pagination";

export default function NotificationsTable() {
    return (
        <Tabs defaultValue="all-contracts" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all-contracts" className="cursor-pointer">All contracts</TabsTrigger>
                <TabsTrigger value="active-contracts" className="cursor-pointer">Active contracts</TabsTrigger>
                <TabsTrigger value="payment-pending-contracts" className="cursor-pointer">Payment pending</TabsTrigger>
                <TabsTrigger value="expiring-contracts" className="cursor-pointer">Expiring soon</TabsTrigger>
            </TabsList>
            <TabsContent value="all-contracts">
                <Card>
                    <CardHeader>
                        <CardTitle>All customer contracts</CardTitle>
                        <CardDescription>
                            Complete list of all customer service contracts
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

            <TabsContent value="active-contracts">
                <Card>
                    <CardHeader>
                        <CardTitle>Active contracts</CardTitle>
                        <CardDescription>
                            Currently active customer service contracts
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

            <TabsContent value={"payment-pending-contracts"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Payment pending</CardTitle>
                        <CardDescription>
                            Contracts with pending or overdue payments
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

            <TabsContent value={"expiring-contracts"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Expiring soon</CardTitle>
                        <CardDescription>
                            Contracts that are expiring within the next 30 days
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