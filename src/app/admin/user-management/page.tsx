'use client'

import {Button} from "@/components/ui/button";
import {Download, UserPlus} from "lucide-react";
import {useState} from "react";
import AddNewUserModal from "@/components/admin/user-management/add-new-user-modal";
import UserManagementTable from "@/components/admin/user-management/user-management-table";
import UserDetailsModal from "@/components/admin/user-management/user-details-modal";
import EditUserDetailsModal from "@/components/admin/user-management/edit-user-details-modal";
import ManageUserRoleModal from "@/components/admin/user-management/manage-user-role-modal";

export default function UserManagement() {
    const [isAddNewUserOpen, setIsAddNewUserOpen] = useState(false)
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false)
    const [isEditUserDetailsModalOpen, setIsEditUserDetailsModalOpen] = useState(false)
    const [isManageUserRoleModalOpen, setIsManageUserRoleModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<any>(null)

    const handleUserDetails = (user: any) => {
        setSelectedUser(user)
        setIsUserDetailsModalOpen(true)
    }

    const handleEditUserDetails = (user: any) => {
        setSelectedUser(user)
        setIsEditUserDetailsModalOpen(true)
    }

    const handleManageUserRole = (user: any) => {
        setSelectedUser(user)
        setIsManageUserRoleModalOpen(true)
    }

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
            <UserManagementTable
                handleUserDetails={handleUserDetails}
                handleEditUserDetails={handleEditUserDetails}
                handleManageUserRole={handleManageUserRole}
            />

            <AddNewUserModal
                isOpen={isAddNewUserOpen}
                onClose={() => setIsAddNewUserOpen(false)}
            />

            <UserDetailsModal
                isOpen={isUserDetailsModalOpen}
                onClose={() => setIsUserDetailsModalOpen(false)}
                user={selectedUser}
            />

            <EditUserDetailsModal
                isOpen={isEditUserDetailsModalOpen}
                onClose={() => setIsEditUserDetailsModalOpen(false)}
                user={selectedUser}
            />

            <ManageUserRoleModal
                isOpen={isManageUserRoleModalOpen}
                onClose={() => setIsManageUserRoleModalOpen(false)}
                user={selectedUser}
            />
        </main>
    );
}