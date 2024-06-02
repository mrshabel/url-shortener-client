"use client";

import React from "react";
import { Button } from "./ui/button";
import { QrCode } from "lucide-react";
import { encodeQRCode } from "@/actions/encode-qrcode";
import QRCodeDialog from "./qrcode-dialog";

export default function GenerateQRCode({ link }: { link: string }) {
    const [isPending, startTransition] = React.useTransition();
    const [open, setOpen] = React.useState(false);
    const [qrCodeURL, setQRCodeURL] = React.useState<string | null>(null);

    return (
        <>
            <Button
                variant={"secondary"}
                disabled={isPending}
                onClick={() => {
                    startTransition(async () => {
                        const bufferString = await encodeQRCode(link);
                        setQRCodeURL(bufferString.data);
                        setOpen(true);
                    });
                }}
            >
                {"QR Code"}
                <QrCode className="size-3" />
            </Button>

            <QRCodeDialog open={open} setOpen={setOpen} qrCodeURL={qrCodeURL} />
        </>
    );
}
