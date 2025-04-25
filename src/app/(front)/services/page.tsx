import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

import Image from "next/image"
  


export default function Services() {
    return(
        <div className="bg-dark-back">
            {/* services on mobile */}
            <Carousel className="relative md:hidden" opts={{loop: true}}>
                <CarouselContent>
                    <CarouselItem className="relative h-150">
                        <Image
                            src='/images/storm_damage.jpeg'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "cover",
                            }}
                            alt="storm damage"
                        />
                        <p className="absolute bg-back/70 rounded-sm p-4 w-80 text-4xl text-white text-center top-2/3 right-1/2 translate-x-1/2">
                            Clean up any storm damage!
                        </p>
                        <p className="absolute bg-back/50 rounded-sm p-2 text-white bottom-1 right-1/2 translate-x-1/2">
                        {'<'}--- Swipe ---{'>'}
                        </p>
                    </CarouselItem>
                    <CarouselItem className="relative h-150">
                        <Image
                            src='/images/tree_trim.jpg'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "cover",
                            }}
                            alt="untrimmed tree"
                        />
                        <p className="absolute bg-back/70 rounded-sm p-4 w-80 text-4xl text-white text-center top-2/3 right-1/2 translate-x-1/2">
                            All your tree trimming needs!
                        </p>
                        <p className="absolute bg-back/50 rounded-sm p-2 text-white bottom-1 right-1/2 translate-x-1/2">
                        {'<'}--- Swipe ---{'>'}
                        </p>
                    </CarouselItem>
                    <CarouselItem className="relative h-150">
                        <Image
                            src='/images/stump_grinder.jpg'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "cover",
                            }}
                            alt="stump grinder"
                        />
                        <p className="absolute bg-back/70 rounded-sm p-4 w-80 text-4xl text-white text-center top-2/3 right-1/2 translate-x-1/2">
                            Stump Grinding Available!
                        </p>
                        <p className="absolute bg-back/50 rounded-sm p-2 text-white bottom-1 right-1/2 translate-x-1/2">
                        {'<'}--- Swipe ---{'>'}
                        </p>
                    </CarouselItem>
                    <CarouselItem className="relative h-150">
                        <Image
                            src='/images/ory_climbing.jpg'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "cover",
                            }}
                            alt="tree work in backyard"
                        />
                        <p className="absolute bg-back/70 rounded-sm p-4 w-80 text-2xl text-white text-center top-2/3 right-1/2 translate-x-1/2">
                            We will get the job done, Whatever It Takes!<br/>
                            Get your free quote today!
                        </p>
                        <p className="absolute bg-back/50 rounded-sm p-2 text-white bottom-1 right-1/2 translate-x-1/2">
                        {'<'}--- Swipe ---{'>'}
                        </p>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            
            {/* Services on large screens */}
            <div className="hidden md:block">
                <div className="flex flex-row gap-8 justify-evenly items-center px-20 py-10">
                    <div className="w-80">

                        <Image
                            src="/images/storm_damage.jpeg"
                            height={605}
                            width={454}
                            alt="strom damage"
                            style={{
                                borderRadius:'5%',
                                boxShadow: '5px 5px 5px gray'
                            }}
                        />
                    </div>
                    <p className="text-4xl text-white w-200 bg-gray-500/50 text-center py-10 xl:py-20 px-4 rounded-md shadow-md shadow-gray-800">
                        Storm damage is our specialty. We are fully insured and equipped to help with any of your strom damage needs!
                    </p>
                </div>
                <div className="flex flex-row gap-8 justify-evenly items-center px-20 py-10">
                    <p className="text-4xl text-white w-200 bg-gray-500/50 text-center py-10 xl:py-20 px-4 rounded-md shadow-md shadow-gray-800">
                        Trees just need a bit of trimming? We take care of that as well!
                    </p>
                    <Image
                        src="/images/tree_trim.jpg"
                        height={528}
                        width={457}
                        alt="strom damage"
                        style={{
                            borderRadius:'5%',
                            boxShadow: '5px 5px 5px gray'
                        }}
                        />
                </div>
                <div className="flex flex-row gap-8 justify-evenly items-center px-20 py-10">
                    <div className="w-100">

                        <Image
                            src="/images/stump_grinder.jpg"
                            height={558}
                            width={605}
                            alt="stump grinder"
                            style={{
                                borderRadius:'5%',
                                boxShadow: '5px 5px 5px gray'
                            }}
                        />
                    </div>
                    <p className="text-4xl text-white w-200 bg-gray-500/50 text-center py-10 xl:py-20 px-4 rounded-md shadow-md shadow-gray-800">
                        Tired of seeing that stump in your yard? We will make it look like it was never there!
                    </p>
                </div>
                <div className="flex flex-row gap-8 justify-evenly items-center px-20 py-10">
                    <p className="text-4xl text-white w-200 bg-gray-500/50 text-center py-10 xl:py-20 px-4 rounded-md shadow-md shadow-gray-800">
                        We will get the job done, Whatever It Takes!<br/>
                        Get your free quote today!
                    </p>
                    <div className="w-100">
                        <Image
                            src="/images/ory_climbing.jpg"
                            height={605}
                            width={454}
                            alt="backyard tree work"
                            style={{
                                borderRadius:'5%',
                                boxShadow: '5px 5px 5px gray'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}