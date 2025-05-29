import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import ContractsTablePagination from "@/components/admin/contracts/contracts-table-pagination";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Download, Eye} from "lucide-react";

const allContracts = [
    {
        contractId: 1,
        customerName: "Rajesh Kumar",
        customerAddress: "B-101, Sunflower Apartments, MG Road, Bangalore, Karnataka 560001",
        serviceType: "Comprehensive Pest Control",
        contractValue: 25000,
        paymentStatus: "Paid",
        nextPayment: "15-07-2025",
        contractDate: "15-04-2025",
        expiryDate: "14-07-2025",
        status: "Active",
        paymentFrequency: "Quarterly"
    },
    {
        contractId: 2,
        customerName: "Priya Sharma",
        customerAddress: "Flat 205, Green Valley Society, Sector 12, Noida, UP 201301",
        serviceType: "Termite Treatment",
        contractValue: 15000,
        paymentStatus: "Pending",
        nextPayment: "20-07-2025",
        contractDate: "20-01-2025",
        expiryDate: "19-07-2025",
        status: "Active",
        paymentFrequency: "Half-yearly"
    },
    {
        contractId: 3,
        customerName: "Amit Patel",
        customerAddress: "301, Business Tower, SG Highway, Ahmedabad, Gujarat 380015",
        serviceType: "Cockroach Control",
        contractValue: 8000,
        paymentStatus: "Overdue",
        nextPayment: "30-05-2025",
        contractDate: "30-04-2025",
        expiryDate: "29-05-2025",
        status: "Expiring Soon",
        paymentFrequency: "Monthly"
    }
]

const getPaymentStatusColor = (paymentStatus: string) => {
    switch (paymentStatus) {
        case 'Paid':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Pending':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'Overdue':
            return 'text-red-600 border-red-400 bg-red-100'
        default:
            return 'text-red-600 border-red-400 bg-red-100'
    }
}

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Active':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Expiring soon':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'Expired':
            return 'text-red-600 border-red-400 bg-red-100'
        default:
            return 'text-red-600 border-red-400 bg-red-100'
    }
}

const renderContracts = () => {
    if (allContracts.length === 0) {
        return <p>No contracts match the current filters.</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Contract Id</TableHead>
                    <TableHead>Customer details</TableHead>
                    <TableHead>Service type</TableHead>
                    <TableHead>Contract value</TableHead>
                    <TableHead>Payment status</TableHead>
                    <TableHead>Next payment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {allContracts.map((contract) => (
                    <TableRow key={contract.contractId}>
                        <TableCell>{contract.contractId}</TableCell>
                        <TableCell className="flex flex-row">{contract.customerName}{contract.customerAddress}</TableCell>
                        <TableCell>{contract.serviceType}</TableCell>
                        <TableCell>{contract.contractValue}</TableCell>
                        <TableCell>
                            <span className={`px-2 py-0.5 border rounded-full font-semibold ${getPaymentStatusColor(contract.paymentStatus)}`}>
                                {contract.paymentStatus}
                            </span>
                        </TableCell>
                        <TableCell>{contract.nextPayment}</TableCell>
                        <TableCell>
                            <span className={`px-2 py-0.5 border rounded-full font-semibold ${getStatusColor(contract.status)}`}>
                                {contract.status}
                            </span>
                        </TableCell>
                        <TableCell className="flex gap-1">
                            <Button variant={"outline"} size={"sm"}><Eye/></Button>
                            <Button size={"sm"}><Download/></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default function ContractsTable() {
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
                        {renderContracts()}
                    </CardContent>
                    <CardFooter>
                        <ContractsTablePagination/>
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
                        {renderContracts()}
                    </CardContent>
                    <CardFooter>
                        <ContractsTablePagination/>
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
                        {renderContracts()}
                    </CardContent>
                    <CardFooter>
                        <ContractsTablePagination/>
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
                        {renderContracts()}
                    </CardContent>
                    <CardFooter>
                        <ContractsTablePagination/>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}