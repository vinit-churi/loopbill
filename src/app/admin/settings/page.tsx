import CompanyInformation from "@/components/admin/settings/company-information";
import ServiceConfiguration from "@/components/admin/settings/service-configuration";
import NotificationsSettings from "@/components/admin/settings/notifications-settings";

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
        </main>
    );
}