import Image from "next/image";
import Navbar, { MobileNavbar } from "./navbar";
import { Separator } from "@/components/ui/separator";

export default function Header() {
    return (
    <header className="text-foreground py-4 shadow-2xl shadow-black">
        <div className="container mx-auto px-4 my-2 flex items-end max-md:justify-between gap-3">
            <div className="flex items-end gap-1">
            <Image src="/logo.png" alt="TSV-TEC" className="w-8 h-8 sm:w-16 sm:h-16" width={100} height={100} />
            <h1 className="sm:text-3xl text-2xl font-extrabold">TSV-TEC</h1>
            </div>
            <MobileNavbar />
            <p className="hidden md:block text-foreground/70 text-sm font-thin max-w-lg">
                Excelência em Soluções para Sistemas de Vapor e Vasos de Pressão, 
                especialista em manutenção, calibração e inspeções para sistemas industriais.
            </p>
        </div>
        <Separator className="hidden md:block" />
        <Navbar />
    </header>
    )
}