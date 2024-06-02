// creates an interface to store the base64 string representation of the qrcode image buffer
export type EncodedQRCode = {
    data: string | null;
    message: "success" | "error";
};
