import { useState } from "react"
import "./App.css"
import { ThemeProvider } from "@/components/theme-provider"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import HomeLayout from "@/layouts/HomeLayout.tsx"
import { ProductCard } from "@/components/custom/ProductCard"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PieChart, ShieldCheck, TruckElectric, TruckElectricIcon, Wallet } from "lucide-react"
import { buttonVariants } from "./components/ui/button"
import Container from "./components/Container"

function App() {
    return (
        <>
            <section>
                <Container>
                    <Carousel
                        className="w-full rounded-4xl overflow-hidden"
                        opts={{ align: "start" }}
                    >
                        <CarouselContent className="">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-[75%]"
                                >
                                    <div className="p-1">
                                        <div>
                                            <div className="flex rounded-2xl h-96 items-center justify-center bg-red-500 p-6">
                                                <span className="text-4xl font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-10" />
                        <CarouselNext className="mr-10" />
                    </Carousel>
                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
                        <Card className="block">
                            <CardHeader>
                                <CardTitle className="bg-zinc-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">
                                    <ShieldCheck size={40} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-2xl">
                                    Arxayın al!
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>30 günə qədər dəyiş, qaytar.</p>
                            </CardFooter>
                        </Card>
                        <Card className="block">
                            <CardHeader>
                                <CardTitle className="bg-zinc-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">
                                    <PieChart size={40} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-2xl">
                                    Arxayın al!
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>30 günə qədər dəyiş, qaytar.</p>
                            </CardFooter>
                        </Card>
                        <Card className="block">
                            <CardHeader>
                                <CardTitle className="bg-zinc-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">
                                    <TruckElectric size={40} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-2xl">
                                    Arxayın al!
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>30 günə qədər dəyiş, qaytar.</p>
                            </CardFooter>
                        </Card>
                        <Card className="block">
                            <CardHeader>
                                <CardTitle className="bg-zinc-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">
                                    <Wallet size={40} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-2xl">
                                    Arxayın al!
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>30 günə qədər dəyiş, qaytar.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </Container>
            </section>
            <main>
                <Container>
                    <h5 className="text-sm text-red-600 dark:text-zinc-400">
                        Ən çox satılanlar
                    </h5>
                    <h1 className="text-2xl font-bold">
                        Bu məhsullar hər kəsin sevimlisidir!
                    </h1>
                    <div className="grid mt-16 md:mt-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                            <ProductCard key={i} />
                        ))}
                    </div>
                </Container>
            </main>
        </>
    )
}

export default App
