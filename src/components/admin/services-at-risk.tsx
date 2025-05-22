import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ServicesAtRisk() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Services at Risk</CardTitle>
                <CardDescription>Services approaching expiration dates</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
}