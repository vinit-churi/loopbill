'use client'

import CollapsibleSection from "@/components/auth/signin/collapsible-section";
import {Label} from "@/components/ui/label";
import {RoleSelector} from "@/components/auth/signin/roleSelector";
import {useState} from "react";

type Role = "consumer" | "admin" | "salesperson" | "agent";

export default function AdvancedOptions() {
    const [selectedRole, setSelectedRole] = useState<Role>("consumer");

    return (
        <CollapsibleSection title="Advanced Options">
            <div className="space-y-2">
                <Label>Select Role</Label>
                <RoleSelector
                    selectedRole={selectedRole}
                    onRoleChange={setSelectedRole}
                />
            </div>
        </CollapsibleSection>
    );
}