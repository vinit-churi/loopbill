import {Button} from "@/components/ui/button";
import {Calendar, Plus} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const allServices = [
    {
        id: 1,
        customer: 'Amit Sharma',
        serviceType: 'Cockroach control',
        date: 'May 11, 2025',
        agent: 'Raj Kumar',
        status: 'Completed'
    },
    {
        id: 2,
        customer: 'Priya Patel',
        serviceType: 'Rodent control',
        date: 'May 11, 2025',
        agent: 'Sanjay Singh',
        status: 'Completed'
    },
    {
        id: 3,
        customer: 'Neha Kapoor',
        serviceType: 'Mosquito control',
        date: 'May 11, 2025',
        agent: 'Raj Kumar',
        status: 'Completed'
    },
    {
        id: 4,
        customer: 'Vikram Malhotra',
        serviceType: 'Termite control',
        date: 'May 11, 2025',
        agent: 'Anita Desai',
        status: 'In progress'
    },
    {
        id: 5,
        customer: 'Rahul Verma',
        serviceType: 'Ant control',
        date: 'May 11, 2025',
        agent: 'Raj Kumar',
        status: 'Scheduled'
    },
    {
        id: 6,
        customer: 'Suresh Menon',
        serviceType: 'Mosquito treatment',
        date: 'May 29, 2025',
        agent: 'Unassigned',
        status: 'Unscheduled'
    },
    {
        id: 7,
        customer: 'Ananya Singh',
        serviceType: 'Basic pest control',
        date: 'June 1, 2025',
        agent: 'Unassigned',
        status: 'Unscheduled'
    },
    {
        id: 8,
        customer: 'Rahul Verma',
        serviceType: 'Ant control',
        date: 'June 1, 2025',
        agent: 'Unassigned',
        status: 'Unscheduled'
    },
    {
        id: 9,
        customer: 'Suresh Menon',
        serviceType: 'Mosquito treatment',
        date: 'June 1, 2025',
        agent: 'Sanjay Singh',
        status: 'Redo required'
    },
    {
        id: 10,
        customer: 'Ananya Singh',
        serviceType: 'Basic pest control',
        date: 'April 1, 2025',
        agent: 'Raj Kumar',
        status: 'Expired'
    }
]

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Scheduled':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'In progress':
            return 'text-blue-600 border-blue-400 bg-blue-100'
        case 'Unscheduled':
            return 'text-orange-600 border-orange-400 bg-orange-100'
        case 'Redo required':
            return 'text-red-600 border-red-400 bg-red-100'
        case 'Completed':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Expired':
            return 'text-gray-600 border-gray-400 bg-gray-100'
        default:
            return 'text-gray-600 border-gray-400 bg-gray-100'
    }
}

const filterServicesStatus = (staus: string) => {
    switch (staus) {
        case 'upcoming-services':
            return allServices.filter((service) => service.status === 'Scheduled' || service.status === 'In progress' || service.status === 'Unscheduled')
        case 'completed-services':
            return allServices.filter((service) => service.status === 'Completed')
        case 'redo-services':
            return allServices.filter((service) => service.status === 'Redo required')
        case 'expired-services':
            return allServices.filter((service) => service.status === 'Expired')
        default:
            return allServices
    }
}

const renderServices = (services: any[]) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {services.map((service) => (
                    <TableRow key={service.id}>
                        <TableCell>{service.id}</TableCell>
                        <TableCell>{service.customer}</TableCell>
                        <TableCell>{service.serviceType}</TableCell>
                        <TableCell>{service.date}</TableCell>
                        <TableCell>{service.agent}</TableCell>
                        <TableCell>
                            <span
                                className={`px-2 py-0.5 border rounded-full font-semibold ${getStatusColor(service.status)}`}>{service.status}
                            </span>
                        </TableCell>
                        <TableCell><Button variant={"outline"} size={"sm"}>View details</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default function Services() {
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">Manage all pest control services</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" className="cursor-pointer"><Calendar/>Calendar view</Button>
                    <Button className="cursor-pointer"><Plus/>New service</Button>
                </div>
            </div>

            {/*Services table*/}
            <Tabs defaultValue="all-services" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="all-services">All services</TabsTrigger>
                    <TabsTrigger value="upcoming-services">Upcoming services</TabsTrigger>
                    <TabsTrigger value="completed-services">Completed services</TabsTrigger>
                    <TabsTrigger value="redo-services">Redo services</TabsTrigger>
                    <TabsTrigger value="expired-services">Expired services</TabsTrigger>
                </TabsList>
                <TabsContent value="all-services">
                    <Card>
                        <CardHeader>
                            <CardTitle>All services</CardTitle>
                            <CardDescription>
                                View and manage all pest control services
                            </CardDescription>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by service type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filter</SelectLabel>
                                        <SelectItem value="general">General pest control</SelectItem>
                                        <SelectItem value="ant">Ant control</SelectItem>
                                        <SelectItem value="bedbug">Bed bug control</SelectItem>
                                        <SelectItem value="bird">Bird control</SelectItem>
                                        <SelectItem value="cockroach">Cockroach control</SelectItem>
                                        <SelectItem value="fleaandtick">Flea and Tick control</SelectItem>
                                        <SelectItem value="fly">Fly control</SelectItem>
                                        <SelectItem value="insect">Insect control</SelectItem>
                                        <SelectItem value="mosquito">Mosquito control</SelectItem>
                                        <SelectItem value="rodent">Rodent</SelectItem>
                                        <SelectItem value="mosquito">Mosquito treatment</SelectItem>
                                        <SelectItem value="termite">Termite control</SelectItem>
                                        <SelectItem value="wildlife">Wildlife control</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            {renderServices(allServices)}
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Id</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Service Type</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Agent</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {allServices.map((service) => (
                                        <TableRow key={service.id}>
                                            <TableCell>{service.id}</TableCell>
                                            <TableCell>{service.customer}</TableCell>
                                            <TableCell>{service.serviceType}</TableCell>
                                            <TableCell>{service.date}</TableCell>
                                            <TableCell>{service.agent}</TableCell>
                                            <TableCell>
                                                <span
                                                    className={`px-2 py-0.5 border rounded-full font-semibold ${getStatusColor(service.status)}`}>
                                                    {service.status}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <Button variant={"outline"} size={"sm"}>
                                                    View details
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="upcoming-services">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming services</CardTitle>
                            <CardDescription>
                                Services scheduled or in progress
                            </CardDescription>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by service type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filter</SelectLabel>
                                        <SelectItem value="general">General pest control</SelectItem>
                                        <SelectItem value="ant">Ant control</SelectItem>
                                        <SelectItem value="bedbug">Bed bug control</SelectItem>
                                        <SelectItem value="bird">Bird control</SelectItem>
                                        <SelectItem value="cockroach">Cockroach control</SelectItem>
                                        <SelectItem value="fleaandtick">Flea and Tick control</SelectItem>
                                        <SelectItem value="fly">Fly control</SelectItem>
                                        <SelectItem value="insect">Insect control</SelectItem>
                                        <SelectItem value="mosquito">Mosquito control</SelectItem>
                                        <SelectItem value="rodent">Rodent</SelectItem>
                                        <SelectItem value="mosquito">Mosquito treatment</SelectItem>
                                        <SelectItem value="termite">Termite control</SelectItem>
                                        <SelectItem value="wildlife">Wildlife control</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            {renderServices(filterServicesStatus('upcoming-services'))}
                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value={"completed-services"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Completed services</CardTitle>
                            <CardDescription>
                                Services that have been completed successfully
                            </CardDescription>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by service type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filter</SelectLabel>
                                        <SelectItem value="general">General pest control</SelectItem>
                                        <SelectItem value="ant">Ant control</SelectItem>
                                        <SelectItem value="bedbug">Bed bug control</SelectItem>
                                        <SelectItem value="bird">Bird control</SelectItem>
                                        <SelectItem value="cockroach">Cockroach control</SelectItem>
                                        <SelectItem value="fleaandtick">Flea and Tick control</SelectItem>
                                        <SelectItem value="fly">Fly control</SelectItem>
                                        <SelectItem value="insect">Insect control</SelectItem>
                                        <SelectItem value="mosquito">Mosquito control</SelectItem>
                                        <SelectItem value="rodent">Rodent</SelectItem>
                                        <SelectItem value="mosquito">Mosquito treatment</SelectItem>
                                        <SelectItem value="termite">Termite control</SelectItem>
                                        <SelectItem value="wildlife">Wildlife control</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            {renderServices(filterServicesStatus('completed-services'))}
                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value={"redo-services"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Redo services</CardTitle>
                            <CardDescription>
                                Services that need to be redone due to complaints
                            </CardDescription>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by service type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filter</SelectLabel>
                                        <SelectItem value="general">General pest control</SelectItem>
                                        <SelectItem value="ant">Ant control</SelectItem>
                                        <SelectItem value="bedbug">Bed bug control</SelectItem>
                                        <SelectItem value="bird">Bird control</SelectItem>
                                        <SelectItem value="cockroach">Cockroach control</SelectItem>
                                        <SelectItem value="fleaandtick">Flea and Tick control</SelectItem>
                                        <SelectItem value="fly">Fly control</SelectItem>
                                        <SelectItem value="insect">Insect control</SelectItem>
                                        <SelectItem value="mosquito">Mosquito control</SelectItem>
                                        <SelectItem value="rodent">Rodent</SelectItem>
                                        <SelectItem value="mosquito">Mosquito treatment</SelectItem>
                                        <SelectItem value="termite">Termite control</SelectItem>
                                        <SelectItem value="wildlife">Wildlife control</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            {renderServices(filterServicesStatus('redo-services'))}
                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value={"expired-services"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Expired services</CardTitle>
                            <CardDescription>
                                Services that have expired without completion
                            </CardDescription>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by service type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filter</SelectLabel>
                                        <SelectItem value="general">General pest control</SelectItem>
                                        <SelectItem value="ant">Ant control</SelectItem>
                                        <SelectItem value="bedbug">Bed bug control</SelectItem>
                                        <SelectItem value="bird">Bird control</SelectItem>
                                        <SelectItem value="cockroach">Cockroach control</SelectItem>
                                        <SelectItem value="fleaandtick">Flea and Tick control</SelectItem>
                                        <SelectItem value="fly">Fly control</SelectItem>
                                        <SelectItem value="insect">Insect control</SelectItem>
                                        <SelectItem value="mosquito">Mosquito control</SelectItem>
                                        <SelectItem value="rodent">Rodent</SelectItem>
                                        <SelectItem value="mosquito">Mosquito treatment</SelectItem>
                                        <SelectItem value="termite">Termite control</SelectItem>
                                        <SelectItem value="wildlife">Wildlife control</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            {renderServices(filterServicesStatus('expired-services'))}
                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}