"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    Clipboard,
    ClipboardCopy,
    ExternalLink,
    QrCode,
    Share,
} from "lucide-react";

export default function QuickActions() {
    return (
        <div className="flex w-full flex-wrap items-center gap-2 my-2 *:flex *:items-center *:gap-1 *:text-[12px]">
            {/* redirect */}
            <Button asChild variant={"secondary"}>
                <Link href="#">
                    {"Visit"}
                    <ExternalLink className="size-3" />
                </Link>
            </Button>

            {/* QR code */}
            <Button variant={"secondary"}>
                {"QR Code"}
                <QrCode className="size-3" />
            </Button>

            {/* share */}
            <Button variant={"secondary"}>
                {"Share"}
                <Share className="size-3" />
            </Button>

            {/* copy */}
            <Button
                variant={"secondary"}
                // onClick={() => navigator.clipboard.read()}
            >
                {"Copy"}
                <Clipboard className="size-3" />
            </Button>
        </div>
    );
}
