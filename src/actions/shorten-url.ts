"use server";

import { ShortenURL } from "@/types/shorten-url";

export async function shortenURL(
    prevState: any,
    formData: FormData
): Promise<ShortenURL> {
    let url = formData.get("url") as string;
    if (!url) {
        return {
            status: "error",
            message: "No url provided",
        };
    }

    // add default url protocol as https
    if (!(url.startsWith("https://") || url.startsWith("http://"))) {
        url = "https://" + url;
    }

    // validate url
    try {
        new URL(url as string);
    } catch (error) {
        return {
            status: "error",
            message: "Invalid url provided",
        };
    }
    // make request to server
    try {
        const res = await fetch(process.env.URL_SHORTENER_BACKEND_HOST!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
        });

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await res.json();
        return {
            status: "success",
            message: "Link shortened successfully",
            data: data.data,
        };
    } catch (error: any) {
        return {
            status: "error",
            message: error.message,
        };
    }
}
