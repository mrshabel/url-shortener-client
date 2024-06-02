"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [isPending, startTransition] = React.useTransition();

    return (
        <Button size={"icon"} variant={"ghost"} className="hover-none">
            {theme === "light" ? (
                <Sun
                    className="size-4"
                    onClick={() => startTransition(() => setTheme("dark"))}
                />
            ) : (
                <Moon
                    className="size-4"
                    onClick={() => startTransition(() => setTheme("light"))}
                />
            )}
        </Button>
    );
}
