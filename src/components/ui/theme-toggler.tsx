"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();

    return (
        <Button size={"icon"} variant={"ghost"} className="hover-none">
            {theme === "light" ? (
                <Sun className="size-4" onClick={() => setTheme("dark")} />
            ) : (
                <Moon className="size-4" onClick={() => setTheme("light")} />
            )}
        </Button>
    );
}
