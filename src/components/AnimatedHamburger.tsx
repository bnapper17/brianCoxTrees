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
  import { PhoneIcon } from "lucide-react"
  

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
                            <Link href="/" title="Services">
                                <h2 className=" hover:underline">Home</h2>
                            </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Link href="/services" title="Services">
                                <h2 className=" hover:underline">Services</h2>
                            </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Link href="/estimate" title="Estimate">
                                <h2 className=" hover:underline">Free Quote</h2>
                            </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <a href="tel:812-738-8463"><PhoneIcon size={34}/></a>
                        </DrawerClose>
                    </div>
            </DrawerContent>
        </Drawer>
    )
}