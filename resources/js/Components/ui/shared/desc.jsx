import React from "react";
import { cn } from "@/lib/cn";

export const Desc = ({ children, className, ...props }) => {
    return (
        <p className={cn("text-sm text-gray-500", className)} {...props}>
            {children}
        </p>
    );
};
