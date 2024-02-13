import React from "react";
import { cn } from "@/lib/cn";

export const Message = ({ children, className, ...props }, ref) => {
    return (
        <span className={cn("text-sm text-gray-700", className)} {...props}>
            {children}
        </span>
    );
};
