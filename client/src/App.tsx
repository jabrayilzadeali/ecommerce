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
import { Button } from "./components/ui/button"
import { ChevronDown, Heart, Menu, MessageCircle, MessageCircleMore, Scale, Scale3D, Search, ShoppingCart, Star, UserRound } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "./components/ui/label"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "./components/mode-toggle"
import { Input } from "./components/ui/input"

function App() {
    const [open, setOpen] = useState(false)
    const [categoryIsOpen, setCategoryIsOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <header className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden px-4">
                    <Button variant={"ghost"} className="md:hidden">
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
            <main className="mx-auto w-full mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h5 className="text-sm text-red-600 dark:text-zinc-400">
                    Ən çox satılanlar
                </h5>
                <h1 className="text-2xl font-bold">
                    Bu məhsullar hər kəsin sevimlisidir!
                </h1>
                <div className="grid mt-72 md:mt-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Card className="relative pt-0 max-w-80">
                        <div className="relative mx-auto -mt-10 w-[90%] aspect-square">
                            <img
                                className="rounded-2xl object-cover w-full h-full"
                                src="https://placehold.co/600x600"
                                alt=""
                            />
                            <span className="absolute top-3 left-3 py-1 px-2 rounded-2xl bg-red-500 text-white text-sm">
                                -140 ₼
                            </span>
                            <Button
                                size="icon-sm"
                                className="absolute top-3 right-3 py-1 px-2 rounded-2xl bg-red-500 text-white"
                            >
                                <Scale />
                            </Button>
                        </div>
                        <CardHeader className="">
                            <CardDescription className="flex gap-3">
                                <div className="flex gap-1">
                                    <Star size={20} />
                                    <span>0</span>
                                </div>
                                <div className="flex gap-1">
                                    <MessageCircleMore size={20} />
                                    <span>0 rəy</span>
                                </div>
                            </CardDescription>
                            <CardTitle className="col-span-2 text-sm font-normal">
                                Smartfon Apple iPhone 16 PRO MAX 512GB DESERT
                                TITANIUM
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between">
                            <div>
                                <p className="line-through font-medium text-sm text-zinc-500">
                                    1479.99 ₼
                                </p>
                                <p className="text-xl font-semibold">
                                    3799.99 ₼
                                </p>
                            </div>
                            <Separator orientation="vertical" />
                            <div>
                                <p className="text-sm font-medium text-zinc-500">
                                    6 ay
                                </p>
                                <p className="text-xl font-semibold">
                                    633.33 ₼
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button className="flex-3/4">
                                Səbətə əlavə et
                            </Button>
                            <Button>
                                <Heart />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </ThemeProvider>
    )
}

export default App
