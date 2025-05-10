import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function CollapsibleSection({ title, children, className }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={cn("w-full", className)}
        >
            <CollapsibleTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex w-full justify-between p-0 h-auto"
                >
                    <span className="text-sm text-muted-foreground">{title}</span>
                    {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}