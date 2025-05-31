import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Eye,
    Mail,
    Phone,
    Calendar,
    Clock,
    Shield,
    Building,
    User
} from "lucide-react";

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
    user: any;
}

const UserDetailsModal = ({ isOpen, onClose, user }: UserDetailsModalProps) => {
    if (!user) return null;

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "Active":
                return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
            case "Inactive":
                return <Badge className="bg-red-100 text-red-800 border-red-200">Inactive</Badge>;
            case "Pending":
                return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const getRoleBadge = (role: string) => {
        switch (role) {
            case "Administrator":
                return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Administrator</Badge>;
            case "Sales Manager":
                return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Sales Manager</Badge>;
            case "Agent":
                return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Agent</Badge>;
            default:
                return <Badge variant="outline">{role}</Badge>;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5 text-google-blue" />
                        User Details: {user.name}
                    </DialogTitle>
                    <DialogDescription>
                        Comprehensive view of user information and permissions
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Basic Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Full Name</label>
                                <p className="text-sm font-medium">{user.name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">User ID</label>
                                <p className="text-sm font-medium">{user.id}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Email Address</label>
                                <p className="text-sm font-medium flex items-center gap-1">
                                    <Mail className="h-4 w-4" />
                                    {user.email}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Phone Number</label>
                                <p className="text-sm font-medium flex items-center gap-1">
                                    <Phone className="h-4 w-4" />
                                    {user.phone}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Role & Department */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Building className="h-5 w-5" />
                            Role & Department
                        </h3>
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Role</label>
                                <div className="mt-1">{getRoleBadge(user.role)}</div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Department</label>
                                <p className="text-sm font-medium">{user.department}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Status</label>
                                <div className="mt-1">{getStatusBadge(user.status)}</div>
                            </div>
                        </div>
                    </div>

                    {/* Account Activity */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            Account Activity
                        </h3>
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Created Date</label>
                                <p className="text-sm font-medium flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {user.createdDate}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Last Login</label>
                                <p className="text-sm font-medium flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {user.lastLogin}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Permissions */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Permissions
                        </h3>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex flex-wrap gap-2">
                                {user.permissions.map((permission: string, index: number) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                        {permission}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={() => onClose(false)}>
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UserDetailsModal;