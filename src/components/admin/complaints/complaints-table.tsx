import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import ComplaintsTablePagination from "@/components/admin/complaints/complaints-table-pagination";

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Unscheduled':
            return 'text-red-600 border-red-400 bg-red-100'
        case 'Scheduled':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'In progress':
            return 'text-blue-600 border-blue-400 bg-blue-100'
        case 'Resolved':
            return 'text-green-600 border-green-400 bg-green-100'
        default:
            return 'text-gray-600 border-gray-400 bg-gray-100'
    }
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'High':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Normal':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'Low':
            return 'text-red-600 border-red-400 bg-red-100'
        default:
            return 'text-gray-600 border-gray-400 bg-gray-100'
    }
}

export default function ComplaintsTable() {
    return (
        <Tabs defaultValue="all-complaints" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all-complaints" className="cursor-pointer">All complaints</TabsTrigger>
                <TabsTrigger value="unscheduled-complaints" className="cursor-pointer">Unscheduled complaints</TabsTrigger>
                <TabsTrigger value="scheduled-complaints" className="cursor-pointer">Scheduled complaints</TabsTrigger>
                <TabsTrigger value="in-progress-complaints" className="cursor-pointer">In progress complaints</TabsTrigger>
                <TabsTrigger value="resolved-complaints" className="cursor-pointer">Resolved complaints</TabsTrigger>
            </TabsList>
            <TabsContent value="all-complaints">
                <Card>
                    <CardHeader>
                        <CardTitle>All complaints</CardTitle>
                        <CardDescription>
                            View and manage all pest control services
                        </CardDescription>
                        {/*<FilterByServiceType*/}
                        {/*    value={allServicesSelectedServiceType}*/}
                        {/*    onValueChange={setAllServicesSelectedServiceType}*/}
                        {/*/>*/}
                    </CardHeader>
                    <CardContent>
                        {/*{renderServices(allServicesFilteredByType)}*/}
                    </CardContent>
                    <CardFooter>
                        <ComplaintsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value="unscheduled-complaints">
                <Card>
                    <CardHeader>
                        <CardTitle>Unscheduled complaints</CardTitle>
                        <CardDescription>
                            Complaints unscheduled for investigation and resolution
                        </CardDescription>

                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter>
                        <ComplaintsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value={"scheduled-complaints"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Scheduled complaints</CardTitle>
                        <CardDescription>
                            Complaints scheduled for investigation and resolution
                        </CardDescription>

                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter>
                        <ComplaintsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value={"in-progress-complaints"}>
                <Card>
                    <CardHeader>
                        <CardTitle>In progress complaints</CardTitle>
                        <CardDescription>
                            Complaints currently being investigated and resolved
                        </CardDescription>

                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter>
                        <ComplaintsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>

            <TabsContent value={"resolved-complaints"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Resolved complaints</CardTitle>
                        <CardDescription>
                            Successfully resolved complaints
                        </CardDescription>

                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter>
                        <ComplaintsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}