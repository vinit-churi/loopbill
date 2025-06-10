import SettingsServiceConfigurationTable from "@/components/admin/settings/settings-service-configuration-table";
import CompanyInformation from "@/components/admin/settings/company-information";
import ServiceConfiguration from "@/components/admin/settings/service-configuration";
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
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">Manage system settings and configurations</p>
                </div>
            </div>
            <hr/>

            <CompanyInformation/>
            <ServiceConfiguration/>
            <NotificationsSettings/>

            <SettingsServiceConfigurationTable serviceConfigurations={allServiceConfigurations}/>
        </main>
    );
}