import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function RecentActivities() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest system activities</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}