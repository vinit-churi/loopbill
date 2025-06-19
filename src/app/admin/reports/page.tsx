import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
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
                <Button className="cursor-pointer"><Download/>Export report</Button>
            </div>
            <TopStatisticsCards/>
            <hr/>
            <AgentPerformance/>
            <ComplaintStatusBreakdown/>
            <ServiceTrends/>
        </main>
    );
}