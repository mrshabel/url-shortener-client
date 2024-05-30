import QuickActions from "@/components/quick-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import URLForm from "@/components/url-submit-form";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <header className="h-[6vh] w-full px-2 flex justify-between items-center backdrop-blur-sm">
                <p className="font-light font-mono">Sha.Bel</p>
                <div>
                    <ThemeToggler />
                </div>
            </header>
            <main className="flex flex-col items-center justify-between py-16 px-6 md:p-24">
                <section className="w-full max-w-lg">
                    <h1 className="font-mono font-bold text-xl sm:text-3xl">
                        Link Shortening Made Simple!
                    </h1>
                    <section className="mt-10 mb-12 sm:my-16">
                        <URLForm />
                    </section>
                    <section className="">
                        <h2 className=" font-medium font-mono">
                            Quick Actions
                        </h2>
                        <QuickActions />
                    </section>
                </section>
            </main>
        </>
    );
}
