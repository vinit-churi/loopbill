'use client'

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
import {useState} from "react";

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
        serviceType: 'General pest control',
        date: 'April 1, 2025',
        agent: 'Raj Kumar',
        status: 'Expired'
    },
    {
        id: 11,
        customer: 'Rahul Verma',
        serviceType: 'Ant control',
        date: 'July 1, 2025',
        agent: 'Raj Kumar',
        status: 'Redo required'
    },
    {
        id: 12,
        customer: 'Suresh Menon',
        serviceType: 'Mosquito treatment',
        date: 'July 10, 2025',
        agent: 'Sanjay Singh',
        status: 'Redo required'
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

interface FilterByServiceTypeProps {
    value: string;
    onValueChange: (value: string) => void;
}

const FilterByServiceType = ({value, onValueChange}: FilterByServiceTypeProps) => {
    const serviceTypes = [
        'Ant control',
        'Bed bug control',
        'Bird control',
        'Cockroach control',
        'Flea and Tick control',
        'Fly control',
        'General pest control',
        'Insect control',
        'Mosquito control',
        'Rodent',
        'Mosquito treatment',
        'Termite control',
        'Wildlife control'
    ]

    return (
        <Select defaultValue="all" value={value} onValueChange={onValueChange}>
            <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Filter by service type"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Filter</SelectLabel>
                    <SelectItem value="all">Filter by service type(All)</SelectItem>
                    {serviceTypes.map((serviceType, index) => (
                        <SelectItem key={index} value={serviceType}>{serviceType}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const renderServices = (services: {
    id: number;
    customer: string;
    serviceType: string;
    date: string;
    agent: string;
    status: string;
}[]) => {
    if (services.length === 0) {
        return <p>No services match the current filters.</p>;
    }

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

const RenderPagination = () => {
    return (
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
    )
}

export default function Services() {
    // State for the 'upcoming-services' tab's service type filter
    const [upcomingSelectedServiceType, setUpcomingSelectedServiceType] = useState<string>("all");
    // Add similar states for other tabs if they need independent filtering
    const [allServicesSelectedServiceType, setAllServicesSelectedServiceType] = useState<string>("all");
    const [completedSelectedServiceType, setCompletedSelectedServiceType] = useState<string>("all");
    const [redoSelectedServiceType, setRedoSelectedServiceType] = useState<string>("all");
    const [expiredSelectedServiceType, setExpiredSelectedServiceType] = useState<string>("all");


    // Logic for 'all-services' tab
    const allServicesByStatus = filterServicesStatus('all-services');
    const allServicesFilteredByType = allServicesSelectedServiceType === "all"
        ? allServicesByStatus
        : allServicesByStatus.filter(service => service.serviceType === allServicesSelectedServiceType);

    // Logic for 'upcoming-services' tab
    const upcomingServicesByStatus = filterServicesStatus('upcoming-services');
    const upcomingServicesFilteredByType = upcomingSelectedServiceType === "all"
        ? upcomingServicesByStatus
        : upcomingServicesByStatus.filter(service => service.serviceType === upcomingSelectedServiceType);

    // Logic for 'completed-services' tab
    const completedServicesByStatus = filterServicesStatus('completed-services');
    const completedServicesFilteredByType = completedSelectedServiceType === "all"
        ? completedServicesByStatus
        : completedServicesByStatus.filter(service => service.serviceType === completedSelectedServiceType);

    // Logic for 'redo-services' tab
    const redoServicesByStatus = filterServicesStatus('redo-services');
    const redoServicesFilteredByType = redoSelectedServiceType === "all"
        ? redoServicesByStatus
        : redoServicesByStatus.filter(service => service.serviceType === redoSelectedServiceType);

    // Logic for 'expired-services' tab
    const expiredServicesByStatus = filterServicesStatus('expired-services');
    const expiredServicesFilteredByType = expiredSelectedServiceType === "all"
        ? expiredServicesByStatus
        : expiredServicesByStatus.filter(service => service.serviceType === expiredSelectedServiceType);

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
                            <FilterByServiceType value={allServicesSelectedServiceType} onValueChange={setAllServicesSelectedServiceType}/>
                        </CardHeader>
                        <CardContent>
                            {renderServices(allServicesFilteredByType)}
                        </CardContent>
                        <CardFooter>
                            <RenderPagination/>
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
                            <FilterByServiceType value={upcomingSelectedServiceType} onValueChange={setUpcomingSelectedServiceType}/>
                        </CardHeader>
                        <CardContent>
                            {renderServices(upcomingServicesFilteredByType)}
                        </CardContent>
                        <CardFooter>
                            <RenderPagination/>
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
                            <FilterByServiceType value={completedSelectedServiceType} onValueChange={setCompletedSelectedServiceType}/>
                        </CardHeader>
                        <CardContent>
                            {renderServices(completedServicesFilteredByType)}
                        </CardContent>
                        <CardFooter>
                            <RenderPagination/>
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
                            <FilterByServiceType value={redoSelectedServiceType} onValueChange={setRedoSelectedServiceType}/>
                        </CardHeader>
                        <CardContent>
                            {renderServices(redoServicesFilteredByType)}
                        </CardContent>
                        <CardFooter>
                            <RenderPagination/>
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
                            <FilterByServiceType value={expiredSelectedServiceType} onValueChange={setExpiredSelectedServiceType}/>
                        </CardHeader>
                        <CardContent>
                            {renderServices(expiredServicesFilteredByType)}
                        </CardContent>
                        <CardFooter>
                            <RenderPagination/>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}