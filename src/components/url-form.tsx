"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { ShortenURL } from "@/types/shorten-url";
import { shortenURL } from "@/actions/shorten-url";
import { Input } from "./ui/input";
import { Clipboard } from "lucide-react";
import QuickActions from "./quick-actions";

const initialState: ShortenURL = {
    status: "idle",
    message: "",
};
export function URLSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            Submit
        </Button>
    );
}

export default function URLForm() {
    const [state, formAction] = useFormState(shortenURL, initialState);

    return (
        <>
            <form action={formAction} className="flex items-center gap-2">
                <Input id="long-url" name="url" placeholder="Enter url here" />
                <URLSubmitButton />
            </form>

            {/* form states */}
            <p className="my-3 mx-1 text-green-500 text-sm">
                {state.status === "success" && state.message}
            </p>
            <p className="my-3 mx-1 text-red-500 text-sm">
                {state.status === "error" && state.message}
            </p>

            {/* url */}
            {state.status === "success" && state.data && (
                <>
                    <div className=" mt-4 mb-2 flex justify-between items-center h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        {state.data || ""}
                        <Button
                            size={"icon"}
                            variant="ghost"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    state.data as string
                                )
                            }
                        >
                            <Clipboard className="size-4" />
                        </Button>
                    </div>
                    <section className="my-12">
                        <h2 className=" font-medium font-mono">
                            Quick Actions
                        </h2>
                        <QuickActions link={state.data} />
                    </section>
                </>
            )}
        </>
    );
}
