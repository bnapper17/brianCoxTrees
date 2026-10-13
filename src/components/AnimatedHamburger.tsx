"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
    DrawerHeader,
    DrawerDescription
  } from "@/components/ui/drawer"

  import Link from "next/link"
  import { MailIcon, PhoneIcon } from "lucide-react"
  import { site } from "@/lib/site"
  

export default function AnimatedHamburger() {

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <div
                    className="flex md:hidden flex-col justify-center items-center mr-4"
                    >
                    <span
                        className={`bg-two block transition-all duration-300 ease-out h-1 w-8 rounded-sm`}
                        ></span>
                    <span
                        className={`bg-two block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-1.5`}
                        ></span>
                    <span
                        className={`bg-two block transition-all duration-300 ease-out h-1 w-8 rounded-sm`}
                        ></span>
                </div>
            </DrawerTrigger>
            <DrawerContent className="bg-back/70">
                <DrawerHeader className="hidden">
                    <DrawerTitle>
                        Menu
                    </DrawerTitle>
                    <DrawerDescription>
                        Navigation Links for Home, Services, Contact, and About
                    </DrawerDescription>
                </DrawerHeader>
                    <div className="flex flex-col justify-evenly gap-10 mt-20 ml-10 text-3xl text-two font-semibold md:mr-8">
                        <DrawerClose asChild>
                            <Link href="/" title="Home">
                                <span className="hover:underline">Home</span>
                            </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Link href="/services" title="Services">
                                <span className="hover:underline">Services</span>
                            </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Link href={site.quoteUrl} title="Free Quote">
                                <span className="hover:underline">Free Quote</span>
                            </Link>
                        </DrawerClose>
                        <div className="flex items-center gap-10">
                            <DrawerClose asChild>
                                <a href={site.phoneHref} aria-label="Call B.C. Trees"><PhoneIcon size={34}/></a>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <a href={`mailto:${site.email}`} aria-label="Email B.C. Trees"><MailIcon size={34}/></a>
                            </DrawerClose>
                        </div>
                    </div>
            </DrawerContent>
        </Drawer>
    )
}