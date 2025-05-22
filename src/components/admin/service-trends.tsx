import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ServiceTrends() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Service Trends</CardTitle>
                <CardDescription>Scheduled vs Completed Services (Last 1 Year)</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}