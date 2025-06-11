import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Active':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Inactive':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'Seasonal':
            return 'text-orange-600 border-orange-400 bg-orange-100'
        default:
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
    }
}

interface ServiceConfiguration {
    serviceId: number,
    serviceType: string,
    serviceDuration: string,
    servicePrice: string,
    serviceStatus: string,
    serviceActions: string,
}

interface SettingsServiceConfigurationTableProps {
    serviceConfigurations: ServiceConfiguration[];
}

export default function SettingsServiceConfigurationTable({serviceConfigurations}: SettingsServiceConfigurationTableProps) {
    if (serviceConfigurations.length === 0) {
        return <p>No service configurations available.</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold text-wrap whitespace-normal">Service type</TableHead>
                    <TableHead className="font-semibold">Duration(Hours)</TableHead>
                    <TableHead className="font-semibold">Price</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {serviceConfigurations.map((serviceConfiguration) => (
                    <TableRow key={serviceConfiguration.serviceId}>
                        <TableCell className="text-wrap whitespace-normal">{serviceConfiguration.serviceType}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{serviceConfiguration.serviceDuration}</TableCell>
                        <TableCell className="text-wrap whitespace-normal">{serviceConfiguration.servicePrice}</TableCell>
                        <TableCell>
                            <span
                                className={`px-2 py-0.5 border rounded-full font-semibold ${getStatusColor(serviceConfiguration.serviceStatus)}`}>
                                {serviceConfiguration.serviceStatus}
                            </span>
                        </TableCell>
                        <TableCell>
                            <Button variant={"outline"} size={"sm"}>{serviceConfiguration.serviceActions.split('|')[0].trim()}</Button>
                            <Button className={"ml-2"} variant={"outline"} size={"sm"}>{serviceConfiguration.serviceActions.split('|')[1]?.trim()}</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}