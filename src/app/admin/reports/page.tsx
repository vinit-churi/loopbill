import {Button} from "@/components/ui/button";
import {Calendar} from "lucide-react";
import TopStatisticsCards from "@/components/admin/reports/top-statistics-cards";
import AgentPerformance from "@/components/admin/reports/agent-performance";
import ComplaintStatusBreakdown from "@/components/admin/reports/complaint-status-breakdown";
import ServiceTrends from "@/components/admin/reports/service-trends";

export default function Reports() {
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Reports</h1>
                    <p className="text-muted-foreground">Overview of UrbanPestMaster operations</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" className="cursor-pointer">Export</Button>
                    <Button className="cursor-pointer"><Calendar className="h-4 w-4"/>Schedule Service</Button>
                </div>
            </div>
            <TopStatisticsCards/>
            <hr/>
            <AgentPerformance/>
            <ComplaintStatusBreakdown/>
            <ServiceTrends/>
        </main>
    );
}