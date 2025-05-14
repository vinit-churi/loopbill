import React from "react";
import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/admin/app-sidebar";
import TopNav from "@/components/admin/top-navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AppSidebar />
                <section className="flex-1 flex flex-col">
                    <TopNav />
                    <main className="flex-1 p-4 md:p-6 overflow-auto">
                        {children}
                    </main>
                </section>
            </div>
        </SidebarProvider>
    );
};

export default Layout;