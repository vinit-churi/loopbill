'use client'

import { useState } from "react";
import { Bell, Calendar, Menu, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

const TopNavbar = () => {
    const [activeRole, setActiveRole] = useState<string>("admin");

    const handleRoleChange = (role: string) => {
        setActiveRole(role);
    };

    return (
        <header className="border-b bg-white dark:bg-gray-950 sticky top-0 z-30">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <SidebarTrigger>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle sidebar</span>
                        </Button>
                    </SidebarTrigger>
                    <div className="relative hidden md:flex items-center w-60">
                        <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search..."
                            className="pl-8 bg-[#f7f6f0] border-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">Notifications</span>
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-google-red"></span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="max-h-96 overflow-auto">
                                <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                                    <div className="font-medium">Service Expiring</div>
                                    <div className="text-sm text-muted-foreground">
                                        Client #128 service will expire in 7 days
                                    </div>
                                    <div className="text-xs text-muted-foreground">5 min ago</div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                                    <div className="font-medium">Complaint Raised</div>
                                    <div className="text-sm text-muted-foreground">
                                        New complaint for service #329
                                    </div>
                                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Calendar className="h-5 w-5" />
                                <span className="sr-only">Calendar</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuLabel>Upcoming Services</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="max-h-96 overflow-auto">
                                <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                                    <div className="font-medium">Today (3)</div>
                                    <div className="text-sm text-muted-foreground">
                                        10:00 AM - Service #421 - Cockroach Treatment
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        2:30 PM - Service #422 - Ant Control
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                                    <div className="font-medium">Tomorrow (5)</div>
                                    <div className="text-sm text-muted-foreground">
                                        9:00 AM - Service #425 - Bed Bug Treatment
                                    </div>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Role Switcher</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className={activeRole === "admin" ? "bg-muted" : ""}
                                onClick={() => handleRoleChange("admin")}
                            >
                                Admin
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className={activeRole === "sales" ? "bg-muted" : ""}
                                onClick={() => handleRoleChange("sales")}
                            >
                                Salesperson
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className={activeRole === "agent" ? "bg-muted" : ""}
                                onClick={() => handleRoleChange("agent")}
                            >
                                Agent
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="hidden md:flex gap-2 pl-2 pr-3"
                            >
                                <div className="w-6 h-6 rounded-full bg-google-blue text-white grid place-items-center text-xs font-medium">
                                    A
                                </div>
                                <span>Admin</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default TopNavbar;