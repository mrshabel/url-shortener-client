export type ShortenURL = {
    status: "success" | "idle" | "error";
    message: string;
    data?: string;
};
