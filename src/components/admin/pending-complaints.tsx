import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function PendingComplaints() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Pending Complaints</CardTitle>
                <CardDescription>Customers not happy with service</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}