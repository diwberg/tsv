"use client"
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

    return (
        <>
        <NavigationMenu className="hidden md:block container mx-auto px-3 md:px-10 mt-2">
            <NavigationMenuList>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/services">Serviços</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/about">Sobre</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact">Contato</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </>
    )
}


export function MobileNavbar() {

    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;
    return (
        <Sheet>
            <SheetTrigger className="md:hidden flex items-end">
                <MenuIcon className="size-8" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-end gap-1">
                    <Image src="/logo.png" alt="TSV-TEC" className="w-8 h-8 sm:w-16 sm:h-16" width={100} height={100} />
                        TSV-TEC
                    </SheetTitle>
                    <SheetDescription className="text-foreground/70 text-sm font-thin max-w-lg">
                    Excelência em Soluções para Sistemas de Vapor, 
                    especialista em manutenção, calibração e inspeções para sistemas industriais.
                    </SheetDescription>
                <Separator />
                </SheetHeader>

                <div className="grid gap-2 p-2">
                    <Link href="/">
                        <Button variant="outline" className={cn("w-full", isActive("/") && "bg-primary text-primary-foreground")}>Home</Button>
                    </Link>

                    <Link href="/services">
                        <Button variant="outline" className={cn("w-full", isActive("/") && "bg-primary text-primary-foreground")}>Serviços</Button>
                    </Link>

                    <Link href="/about">
                        <Button variant="outline" className={cn("w-full", isActive("/") && "bg-primary text-primary-foreground")}>Sobre</Button>
                    </Link>

                    <Link href="/contact">
                        <Button variant="outline" className={cn("w-full", isActive("/") && "bg-primary text-primary-foreground")}>Contato</Button>
                    </Link>

                </div>

            </SheetContent>
        </Sheet>
    )
}