import {Button} from "@/components/ui/button";
import {Calendar} from "lucide-react";
import TopStatisticsCards from "@/components/admin/top-statistics-cards";
import UpcomingServices from "@/components/admin/upcoming-services";
import RecentActivities from "@/components/admin/recent-activities";
import ServicesAtRisk from "@/components/admin/services-at-risk";
import PendingComplaints from "@/components/admin/pending-complaints";
import AgentPerformance from "@/components/admin/agent-performance";
import ComplaintStatusBreakdown from "@/components/admin/complaint-status-breakdown";
import ServiceTrends from "@/components/admin/service-trends";

export default function Admin() {
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground">Overview of UrbanPestMaster operations</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" className="cursor-pointer">Export</Button>
                    <Button className="cursor-pointer"><Calendar className="h-4 w-4"/> Schedule Service</Button>
                </div>
            </div>
            <TopStatisticsCards/>
            <hr/>
            <UpcomingServices/>
            <RecentActivities/>
            <ServicesAtRisk/>
            <PendingComplaints/>
            <AgentPerformance/>
            <ComplaintStatusBreakdown/>
            <ServiceTrends/>
        </main>
    );
}