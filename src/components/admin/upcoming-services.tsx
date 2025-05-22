import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function UpcomingServices() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Services</CardTitle>
                <CardDescription>Services scheduled for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}