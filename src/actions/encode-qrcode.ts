"use server";
import QrCode from "qrcode";
import { EncodedQRCode } from "@/types/encoded-qrcode";

export async function encodeQRCode(link: string): Promise<EncodedQRCode> {
    try {
        const bufferString = await QrCode.toDataURL(link);
        return { data: bufferString, message: "success" };
    } catch (error) {
        console.error(error);
        return { data: null, message: "error" };
    }
}
