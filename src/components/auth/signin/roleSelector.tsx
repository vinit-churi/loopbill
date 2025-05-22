'use client'

import {RadioGroup} from "@/components/ui/radio-group";
import {RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";

type Role = "consumer" | "admin" | "salesperson" | "agent";

interface RoleSelectorProps {
    selectedRole: Role;
    onRoleChangeAction: (role: Role) => void;
}

export function RoleSelector({ selectedRole, onRoleChangeAction }: RoleSelectorProps) {
    return (
        <div className="mt-4">
            <RadioGroup
                value={selectedRole}
                onValueChange={(value) => onRoleChangeAction(value as Role)}
                className="grid grid-cols-2 gap-4"
            >
                <div className="flex items-center space-x-2 rounded-md border border-gray-200 p-3 hover:bg-pest-light transition-colors">
                    <RadioGroupItem value="consumer" id="consumer" />
                    <Label htmlFor="consumer" className="flex-1 cursor-pointer">Consumer</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-200 p-3 hover:bg-pest-light transition-colors">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin" className="flex-1 cursor-pointer">Admin</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-200 p-3 hover:bg-pest-light transition-colors">
                    <RadioGroupItem value="salesperson" id="salesperson" />
                    <Label htmlFor="salesperson" className="flex-1 cursor-pointer">Salesperson</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-200 p-3 hover:bg-pest-light transition-colors">
                    <RadioGroupItem value="agent" id="agent" />
                    <Label htmlFor="agent" className="flex-1 cursor-pointer">Agent</Label>
                </div>
            </RadioGroup>
        </div>
    );
}