'use client'

import {Button} from "@/components/ui/button";
import {Plus, Search} from "lucide-react";
import {useState} from "react";
import AddComplaintModal from "@/components/admin/complaints/add-complaint-modal";
import ComplaintsTable from "@/components/admin/complaints/complaints-table";

export default function Complaints() {
    const [isAddComplaintOpen, setIsAddComplaintOpen] = useState(false)
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Complaints</h1>
                    <p className="text-muted-foreground">Track and resolve customer complaints</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        variant="outline"
                        className="cursor-pointer">
                        <Search/>Search complaints
                    </Button>
                    <Button
                        className="cursor-pointer"
                        onClick={() => setIsAddComplaintOpen(true)}>
                        <Plus/>Add complaint
                    </Button>
                </div>
            </div>
            <ComplaintsTable/>

            <AddComplaintModal
                isOpen={isAddComplaintOpen}
                onClose={() => setIsAddComplaintOpen(false)}
            />
        </main>
    );
}