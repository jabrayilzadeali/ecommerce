import { useState } from "react"
import { ROUTES } from '@/routes/paths'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button, buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
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

import { Link, NavLink } from "react-router";
import Container from "../Container"


export default function Navbar() {
    const [showNavbarOnMobile, setShowNavbarOnMobile] = useState(false)
    const [open, setOpen] = useState(false)
  return (
      <header>
          <Container>
              <div className="flex justify-between bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden px-4">
                  <Button
                      onClick={() => setShowNavbarOnMobile(!showNavbarOnMobile)}
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
                      "w-full h-dvh bg-transparent z-10",
                      showNavbarOnMobile ? "block" : "hidden"
                  )}
              >
                  <h2 className="font-bold my-3">Sayt üzrə naviqasiya</h2>
                  <div className="flex justify-center gap-3 items-center">
                      <NavLink
                          to={ROUTES.COMPARE}
                          className={buttonVariants({
                              variant: "ghost",
                              className:
                                  "h-full md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white",
                          })}
                      >
                          <Scale className="w-full h-full" />
                      </NavLink>
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
                      <li className="bg-zinc-100 dark:bg-zinc-900 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                          <a href="">Link 1</a>
                          <ArrowRight size={16} />
                      </li>
                      <li className="bg-zinc-100 dark:bg-zinc-900 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                          <a href="">Link 2</a>
                          <ArrowRight size={16} />
                      </li>
                      <li className="bg-zinc-100 dark:bg-zinc-900 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                          <a href="">Link 3</a>
                          <ArrowRight size={16} />
                      </li>
                      <li className="bg-zinc-100 dark:bg-zinc-900 text-md flex justify-between items-center font-semibold py-2 px-4 rounded-2xl">
                          <a href="">Link 4</a>
                          <ArrowRight size={16} />
                      </li>
                      <Button
                          variant={"ghost"}
                          className="bg-zinc-100 dark:bg-zinc-900 flex justify-between font-semibold py-2 !px-4 rounded-2xl"
                      >
                          <span className="text-[16px]">Actions</span>
                          <ArrowRight />
                      </Button>
                  </ul>
              </div>
              <div className="flex w-full mt-5 h-12 gap-3">
                  <Link to={ROUTES.HOME}>
                      <img
                          src="https://placehold.co/200"
                          className="rounded-full h-12 w-12"
                          alt=""
                      />
                  </Link>
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

                  <NavLink
                      to={ROUTES.COMPARE}
                      className={buttonVariants({
                          variant: "ghost",
                          className:
                              "h-full md:flex aspect-square bg-zinc-900 hover:bg-zinc-800 text-white",
                      })}
                  >
                      <Scale className="w-full h-full" />
                  </NavLink>
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
          </Container>
      </header>
  )
}
