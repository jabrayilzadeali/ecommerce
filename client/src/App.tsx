import { useState } from "react"
import "./App.css"
import { ThemeProvider } from "@/components/theme-provider"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./components/ui/button"
import {
    ArrowRight,
    ChevronDown,
    Heart,
    Menu,
    MessageCircle,
    MessageCircleMore,
    Scale,
    Scale3D,
    Search,
    ShoppingCart,
    Star,
    UserRound,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "./components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "./components/mode-toggle"
import { Input } from "./components/ui/input"
import { ProductCard } from "./components/custom/ProductCard"
import { cn } from "./lib/utils"

function App() {
    const [open, setOpen] = useState(false)
    const [categoryIsOpen, setCategoryIsOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [showNavbarOnMobile, setShowNavbarOnMobile] = useState(false)

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <header className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden px-4">
                    <Button
                        onClick={() =>
                            setShowNavbarOnMobile(!showNavbarOnMobile)
                        }
                        variant={"ghost"}
                        className="md:hidden"
                    >
                        <Menu />
                    </Button>

                    <ul className="hidden md:flex items-center gap-3">
                        <li className="px-2">
                            <a href="">Link 1</a>
                        </li>
                        <li className="px-2">
                            <a href="">Link 2</a>
                        </li>
                        <li className="px-2">
                            <a href="">Link 3</a>
                        </li>
                        <li className="px-2">
                            <a href="">Link 4</a>
                        </li>
                        <li className="px-2">
                            <DropdownMenu open={open} onOpenChange={setOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost">
                                        Actions
                                        <ChevronDown
                                            className={
                                                open
                                                    ? "rotate-180 duration-300 transition-transform"
                                                    : "transition-transform duration-300"
                                            }
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>link1</DropdownMenuItem>
                                    <DropdownMenuItem>link2</DropdownMenuItem>
                                    <DropdownMenuItem>link3</DropdownMenuItem>
                                    <DropdownMenuItem>link4</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-2">
                        <ModeToggle />
                    </div>
                </div>
                <div
                    className={cn(
                        "w-full h-dvh bg-white z-10",
                        showNavbarOnMobile ? "block" : "hidden"
                    )}
                >
                    <h2 className="font-bold my-3">Sayt üzrə naviqasiya</h2>
                    <div className="flex justify-center gap-3 items-center">
                        <Button className="h-full md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                            <Scale className="w-full h-full" />
                        </Button>
                        <Button className="h-full md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                            <ShoppingCart />
                        </Button>
                        <Button className="h-full md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                            <Heart />
                        </Button>
                        <Button className="h-full md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                            <UserRound />
                        </Button>
                    </div>
                    <ul className="flex mt-5 flex-col gap-3">
                        <li className="bg-gray-100 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                            <a href="">Link 1</a>
                            <ArrowRight size={16} />
                        </li>
                        <li className="bg-gray-100 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                            <a href="">Link 2</a>
                            <ArrowRight size={16} />
                        </li>
                        <li className="bg-gray-100 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                            <a href="">Link 3</a>
                            <ArrowRight size={16} />
                        </li>
                        <li className="bg-gray-100 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                            <a href="">Link 4</a>
                            <ArrowRight size={16} />
                        </li>
                        <Button
                            variant={"ghost"}
                            className="bg-gray-100 flex justify-between font-semibold py-2 !px-4 rounded-2xl"
                        >
                            <span className="text-[16px]">Actions</span>
                            <ArrowRight />
                        </Button>
                        {/* <li className="px-2">
                            <DropdownMenu open={open} onOpenChange={setOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost">
                                        Actions
                                        <ChevronDown
                                            className={
                                                open
                                                    ? "rotate-180 duration-300 transition-transform"
                                                    : "transition-transform duration-300"
                                            }
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>link1</DropdownMenuItem>
                                    <DropdownMenuItem>link2</DropdownMenuItem>
                                    <DropdownMenuItem>link3</DropdownMenuItem>
                                    <DropdownMenuItem>link4</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li> */}
                    </ul>
                </div>
                <div className="flex w-full mt-5 h-12 gap-3">
                    <img
                        src="https://placehold.co/200"
                        className="rounded-full h-12 w-12"
                        alt=""
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="h-full px-6 rounded-3xl bg-zinc-900 hover:bg-zinc-800 text-white">
                                Katalog
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>link1</DropdownMenuItem>
                            <DropdownMenuItem>link2</DropdownMenuItem>
                            <DropdownMenuItem>link3</DropdownMenuItem>
                            <DropdownMenuItem>link4</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="relative flex-1 col-span-6">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            className="h-full pl-3 pr-8"
                            placeholder="Search..."
                        />
                    </div>

                    <Button className="h-full hidden md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                        <Scale className="w-full h-full" />
                    </Button>
                    <Button className="h-full hidden md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                        <ShoppingCart />
                    </Button>
                    <Button className="h-full hidden md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                        <Heart />
                    </Button>
                    <Button className="h-full hidden md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white">
                        <UserRound />
                    </Button>
                </div>
            </header>
            <section className="mx-auto w-full mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
                <Carousel
                    className="w-full rounded-4xl overflow-hidden"
                    opts={{ align: "start" }}
                >
                    <CarouselContent className="">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-[70%]"
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
            </section>
            <main className="mx-auto w-full mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h5 className="text-sm text-red-600 dark:text-zinc-400">
                    Ən çox satılanlar
                </h5>
                <h1 className="text-2xl font-bold">
                    Bu məhsullar hər kəsin sevimlisidir!
                </h1>
                <div className="grid mt-16 md:mt-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ProductCard />
                </div>
            </main>
        </ThemeProvider>
    )
}

export default App
