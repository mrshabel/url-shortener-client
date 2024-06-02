import { ThemeToggler } from "@/components/ui/theme-toggler";
import URLForm from "@/components/url-form";
import { Fuggles } from "next/font/google";

const fuggles = Fuggles({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <header className="h-[6vh] w-full px-2 flex justify-between items-center backdrop-blur-sm">
                <p className={`${fuggles.className}`}>Sha.Bel</p>
                <div>
                    <ThemeToggler />
                </div>
            </header>
            <main className="flex flex-col items-center justify-between py-16 px-6 md:p-24">
                <section className="w-full max-w-lg">
                    <h1 className="font-mono font-bold text-xl sm:text-3xl">
                        Link Shortening Made Simple!
                    </h1>
                    <section className="mt-10 sm:my-16">
                        <URLForm />
                    </section>
                </section>
            </main>
        </>
    );
}
