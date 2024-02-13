import React from "react";
import { cn } from "@/lib/cn";

export const Label = ({ children, className, ...props }, ref) => {
    return (
        <label
            className={cn("block text-sm font-medium text-gray-700", className)}
            {...props}
        >
            {children}
        </label>
    );
};
