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
import GenerateQRCode from "./generate-qrcode";

export default function QuickActions({ link }: { link: string }) {
    return (
        <div className="flex w-full flex-wrap items-center gap-2 my-2 *:flex *:items-center *:gap-1 *:text-[12px]">
            {/* redirect */}
            <Button asChild variant={"secondary"}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {"Visit"}
                    <ExternalLink className="size-3" />
                </a>
            </Button>

            {/* QR code */}
            <GenerateQRCode link={link} />

            {/* share */}
            <Button variant={"secondary"} disabled>
                {"Share"}
                <Share className="size-3" />
            </Button>

            {/* copy */}
            <Button
                variant={"secondary"}
                onClick={() => navigator.clipboard.writeText(link)}
            >
                {"Copy"}
                <Clipboard className="size-3" />
            </Button>
        </div>
    );
}
