import React, { useRef } from "react";
import { cn } from "@/lib/cn";
import { Label, Desc, Message } from "@/Components/ui/shared";

export const Input = ({ name, label, desc, message, className, ...props }) => {
    return (
        <div className={cn("grid", className)}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <input
                id={name}
                name={name}
                {...props}
                className={cn(
                    "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm",
                    props.value && "border-gray-500"
                )}
            />
            {message && <Message>{message}</Message>}
            {desc && <Desc>{desc}</Desc>}
        </div>
    );
};
