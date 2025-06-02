'use client'

import {Button} from "@/components/ui/button";
import {Bell, Plus} from "lucide-react";
import {useState} from "react";
import SendNewNotificationModal from "@/components/admin/notifications/send-new-notification-modal";
import NotificationsTabs from "@/components/admin/notifications/notifications-tabs";

export default function Notifications() {
    const [isSendNewNotificationOpen, setIsSendNewNotificationOpen] = useState(false)
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Notifications</h1>
                    <p className="text-muted-foreground">
                        Manage and send notifications to users and customers
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button
                        variant="outline"
                        className="cursor-pointer">
                        <Bell/>View templates
                    </Button>
                    <Button
                        className="cursor-pointer"
                        onClick={() => setIsSendNewNotificationOpen(true)}>
                        <Plus/>Send new notification
                    </Button>
                </div>
            </div>
            <NotificationsTabs/>

            <SendNewNotificationModal
                isOpen={isSendNewNotificationOpen}
                onClose={() => setIsSendNewNotificationOpen(false)}
            />
        </main>
    );
}