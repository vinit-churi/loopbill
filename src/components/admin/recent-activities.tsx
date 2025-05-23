import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {CalendarClock, Check, Ticket} from "lucide-react";

export default function RecentActivities() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest system activities</CardDescription>
            </CardHeader>
            <CardContent>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex items-center gap-4"}>
                        <div className={"w-10 h-10 flex justify-center items-center bg-green-100 rounded-full"}>
                            <Check size={24} color={"oklch(72.3% 0.219 149.579)"}/>
                        </div>
                        <div>
                            <p className={"text-sm"}>
                                Service #421 completed
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Raj Kumar completed cockroach treatment at Amit Sharma's location
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Today, 11:32 AM
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-4"}>
                        <div className={"w-10 h-10 flex justify-center items-center bg-yellow-100 rounded-full"}>
                            <CalendarClock size={24} color={"oklch(79.5% 0.184 86.047)"}/>
                        </div>
                        <div>
                            <p className={"text-sm"}>
                                Reschedule requested
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Customer unavailable for Service #425, rescheduling required
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Today, 10:15 AM
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-4"}>
                        <div className={"w-10 h-10 flex justify-center items-center bg-red-100 rounded-full"}>
                            <Ticket size={24} color={"oklch(63.7% 0.237 25.331)"}/>
                        </div>
                        <div>
                            <p className={"text-sm"}>
                                New complaint received
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Customer reported issues with Service #418, requires review
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Yesterday, 3:45 PM
                            </p>
                        </div>
                    </div>
                </div>
                <Button variant={"outline"} className="w-full mt-4 cursor-pointer">View all activities</Button>
            </CardContent>
        </Card>
    );
}