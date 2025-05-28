'use client'

import {Button} from "@/components/ui/button";
import {Calendar, Plus} from "lucide-react";
import ServiceScheduleTimeline from "@/components/admin/services/service-schedule-timeline";
import ServicesTable, {allServices} from "@/components/admin/services/services-table";
import {useState} from "react";
import NewServiceModal from "@/components/admin/services/new-service";
import CalendarView from "@/components/admin/services/calendar-view";

export default function Services() {
    const [isCalendarViewOpen, setIsCalendarViewOpen] = useState(false)
    const [isNewServiceOpen, setIsNewServiceOpen] = useState(false)

    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">Manage all pest control services</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        variant="outline"
                        className="cursor-pointer"
                        onClick={() => setIsCalendarViewOpen(true)}>
                        <Calendar/>Calendar view
                    </Button>
                    <Button
                        className="cursor-pointer"
                        onClick={() => setIsNewServiceOpen(true)}>
                        <Plus/>New service
                    </Button>
                </div>
            </div>
            <ServicesTable/>
            <ServiceScheduleTimeline/>

            <NewServiceModal
                isOpen={isNewServiceOpen}
                onClose={() => setIsNewServiceOpen(false)}
            />

            <CalendarView
                isOpen={isCalendarViewOpen}
                onClose={() => setIsCalendarViewOpen(false)}
                services={allServices}
            />
        </main>
    );
}