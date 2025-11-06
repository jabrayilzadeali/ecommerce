import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, MessageCircleMore, Scale, Star } from "lucide-react"

export const ProductCard= () => {
  return (
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
                  Smartfon Apple iPhone 16 PRO MAX 512GB DESERT TITANIUM
              </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
              <div>
                  <p className="line-through font-medium text-sm text-zinc-500">
                      1479.99 ₼
                  </p>
                  <p className="text-xl font-semibold">3799.99 ₼</p>
              </div>
              <Separator orientation="vertical" />
              <div>
                  <p className="text-sm font-medium text-zinc-500">6 ay</p>
                  <p className="text-xl font-semibold">633.33 ₼</p>
              </div>
          </CardContent>
          <CardFooter className="flex gap-2">
              <Button className="flex-3/4">Səbətə əlavə et</Button>
              <Button>
                  <Heart />
              </Button>
          </CardFooter>
      </Card>
  )
}
