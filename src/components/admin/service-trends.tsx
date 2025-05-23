import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ServiceTrends() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Service Trends</CardTitle>
                <CardDescription>Monthly service counts and revenue⟨₹⟩ (Last 1 Year)</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}