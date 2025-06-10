import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {HandPlatter, Settings as SettingsIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import SettingsTablePagination from "@/components/admin/settings/settings-table-pagination";
import SettingsServiceConfigurationTable from "@/components/admin/settings/settings-service-configuration-table";
import NotificationsSettings from "@/components/admin/settings/notifications-settings";

const allServiceConfigurations = [
    {
        serviceId: 1,
        serviceType: 'Cockroach Treatment',
        serviceDuration: '30 minutes',
        servicePrice: '₹50',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 2,
        serviceType: 'Termite Control',
        serviceDuration: '45 minutes',
        servicePrice: '₹75',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 3,
        serviceType: 'Bed Bug Treatment',
        serviceDuration: '60 minutes',
        servicePrice: '₹100',
        serviceStatus: 'Inactive',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 4,
        serviceType: 'Pest Inspection',
        serviceDuration: '20 minutes',
        servicePrice: '₹30',
        serviceStatus: 'Seasonal',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 5,
        serviceType: 'Mosquito Control',
        serviceDuration: '40 minutes',
        servicePrice: '₹60',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    },
    {
        serviceId: 6,
        serviceType: 'Rodent Control',
        serviceDuration: '50 minutes',
        servicePrice: '₹80',
        serviceStatus: 'Active',
        serviceActions: 'Edit | Delete',
    }
];

export default function Settings() {


    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">Manage system settings and configurations</p>
                </div>
            </div>
            <hr/>
            {/* Settings content goes here */}
            <section className={"grid gap-4 grid-cols-1 md:grid-cols-2"}>
                <Card>
                    <CardHeader>
                        <CardTitle className={"flex gap-1"}>
                            <SettingsIcon size={18} color={"oklch(62.3% 0.214 259.815)"}/>General settings</CardTitle>
                        <CardDescription>Configure general system preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <Button type={"submit"} className={"w-full"}>Save changes</Button>
                    </CardFooter>
                </Card>

                <NotificationsSettings/>
            </section>

            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-1"}>
                        <HandPlatter size={18} color={"oklch(65.6% 0.241 354.308)"}/>Service configuration</CardTitle>
                    <CardDescription>Configure service types and pricing</CardDescription>
                </CardHeader>
                <CardContent>
                    <SettingsServiceConfigurationTable serviceConfigurations={allServiceConfigurations}/>
                </CardContent>
                <CardFooter>
                    <SettingsTablePagination/>
                </CardFooter>
            </Card>
        </main>
    );
}