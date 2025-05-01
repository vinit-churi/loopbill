import {
Sheet,
SheetContent,
SheetDescription,
SheetHeader,
SheetTitle,
SheetTrigger,
} from "@/components/ui/sheet"
                <Sheet>
                    <SheetTrigger className="absolute start-4 cursor-pointer">
                        <img className="h-6 w-6" src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="menu"/>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>