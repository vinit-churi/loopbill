'use client'

import {Button} from "@/components/ui/button";
import {Download, UserPlus} from "lucide-react";
import {useState} from "react";
import AddNewUserModal from "@/components/admin/user-management/add-new-user-modal";
import UserManagementTable from "@/components/admin/user-management/user-management-table";

export default function UserManagement() {
    const [isAddNewUserOpen, setIsAddNewUserOpen] = useState(false)
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">User management</h1>
                    <p className="text-muted-foreground">
                        Manage system users, roles, permissions, and access control
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        variant="outline"
                        className="cursor-pointer">
                        <Download/>Export users
                    </Button>
                    <Button
                        className="cursor-pointer"
                        onClick={() => setIsAddNewUserOpen(true)}>
                        <UserPlus/>Add new user
                    </Button>
                </div>
            </div>
            <UserManagementTable/>

            <AddNewUserModal
                isOpen={isAddNewUserOpen}
                onClose={() => setIsAddNewUserOpen(false)}
            />
        </main>
    );
}