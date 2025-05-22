import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ComplaintStatusBreakdown() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Complaint status breakdown</CardTitle>
                <CardDescription>Pie chart representation of complaints</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}