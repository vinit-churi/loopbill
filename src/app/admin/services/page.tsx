import {Button} from "@/components/ui/button";
import {Calendar, Plus} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

export default function Services() {
    return (
        <main className="w-full flex flex-col gap-4">
            {/*Heading and Description*/}
            <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
                    <p className="text-muted-foreground">Manage all pest control services</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" className="cursor-pointer"><Calendar/>Calendar view</Button>
                    <Button className="cursor-pointer"><Plus/>New service</Button>
                </div>
            </div>

            {/*Services table*/}
            <Tabs defaultValue="All services" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="All services">All services</TabsTrigger>
                    <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="Completed">Completed</TabsTrigger>
                    <TabsTrigger value="Redo services">Redo services</TabsTrigger>
                    <TabsTrigger value="Expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="All services">
                    <Card>
                        <CardHeader>
                            <CardTitle>All services</CardTitle>
                            <CardDescription>
                                View and manage all pest control services
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Select>
                                <SelectTrigger className="w-auto">
                                    <SelectValue placeholder="Filter by service type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Filter</SelectLabel>
                                        <SelectItem value="general">General pest control</SelectItem>
                                        <SelectItem value="ant">Ant control</SelectItem>
                                        <SelectItem value="bedbug">Bed bug control</SelectItem>
                                        <SelectItem value="bird">Bird control</SelectItem>
                                        <SelectItem value="cockroach">Cockroach control</SelectItem>
                                        <SelectItem value="fleaandtick">Flea and Tick control</SelectItem>
                                        <SelectItem value="fly">Fly control</SelectItem>
                                        <SelectItem value="insect">Insect control</SelectItem>
                                        <SelectItem value="mosquito">Mosquito control</SelectItem>
                                        <SelectItem value="rodent">Rodent</SelectItem>
                                        <SelectItem value="mosquito">Mosquito treatment</SelectItem>
                                        <SelectItem value="termite">Termite control</SelectItem>
                                        <SelectItem value="wildlife">Wildlife control</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#"/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#"/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="Upcoming">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password"/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value={"Completed"}><Card>
                    <CardHeader>
                        <CardTitle>All services</CardTitle>
                        <CardDescription>
                            View and manage all pest control services
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
                </TabsContent>
                <TabsContent value={"Redo services"}><Card>
                    <CardHeader>
                        <CardTitle>All services</CardTitle>
                        <CardDescription>
                            View and manage all pest control services
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte"/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
                </TabsContent>
                <TabsContent value={"Expired"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>All services</CardTitle>
                            <CardDescription>
                                View and manage all pest control services
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte"/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}