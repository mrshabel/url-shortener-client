"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import React from "react";

export default function QRCodeDialog({
    open,
    setOpen,
    qrCodeURL,
}: {
    open: boolean;
    setOpen: (val: boolean) => void;
    qrCodeURL: string | null;
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle>Thanks for using my service</DialogTitle>
                    <DialogDescription>
                        Checkout my projects{" "}
                        <a
                            className="underline font-mono tracking-wider"
                            href="https://github.com/mrshabel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @mrshabel
                        </a>
                    </DialogDescription>
                </DialogHeader>
                {qrCodeURL ? (
                    <Image
                        className="object-cover"
                        width={200}
                        height={200}
                        src={qrCodeURL}
                        alt="QR Code"
                    />
                ) : (
                    <div className="">Sorry, try again later</div>
                )}
            </DialogContent>
        </Dialog>
    );
}
