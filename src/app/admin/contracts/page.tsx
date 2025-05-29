'use client'

import {Download, Plus} from "lucide-react";
import {useState} from "react";
import NewContractModal from "@/components/admin/contracts/new-contract-modal";
import {Button} from "@/components/ui/button"
import ContractsTable from "@/components/admin/contracts/contracts-table";

export default function Contracts() {
    const [isNewContractOpen, setIsNewContractOpen] = useState(false)
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Contracts management</h1>
                    <p className="text-muted-foreground">
                        Manage customer contracts, payments, and subscription details
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        variant="outline"
                        className="cursor-pointer">
                        <Download/>Export contracts
                    </Button>
                    <Button
                        className="cursor-pointer"
                        onClick={() => setIsNewContractOpen(true)}>
                        <Plus/>New Contract
                    </Button>
                </div>
            </div>
            <ContractsTable/>

            <NewContractModal
                isOpen={isNewContractOpen}
                onClose={() => setIsNewContractOpen(false)}
            />
        </main>
    );
}