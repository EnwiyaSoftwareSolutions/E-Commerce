import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, ShoppingCart as CartIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Styles from "./shoppingCart.module.css"

export function ShoppingCart() {
    const cartCount = 1; // Replace with actual cart count logic

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className={Styles.shoppingCartButtonMain}>
        <Button variant="outline"  size="icon"
          className="relative"
          aria-label="Shopping cart">   
          <CartIcon className="w-6 h-6 text-gray-800" />
          {cartCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -bottom-1 -left-1 px-1.5 py-0 text-xs rounded-full"
            >
              {cartCount}
            </Badge>
          )}</Button>
          </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            {/* <Input id="sheet-demo-name" defaultValue="Pedro Duarte" /> */}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            {/* <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
