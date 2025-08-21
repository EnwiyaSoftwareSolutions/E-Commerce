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
          <Button variant="outline" size="icon" className="relative" aria-label="Shopping cart">
            <CartIcon className="w-6 h-6 text-gray-800" />
            {cartCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -bottom-1 -left-1 px-1.5 py-0 text-xs rounded-full"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-center mb-2">Your Shopping Cart</SheetTitle>
          <SheetDescription className="text-center text-gray-500 mb-4">Review your selected products and proceed to checkout.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 px-2 py-2">
          {/* Example product card, replace with dynamic cart items */}
          <div className="flex items-center gap-4 bg-gray-50 rounded-lg shadow p-4">
            <img src="https://placehold.co/80x80" alt="Product" className="rounded-lg w-20 h-20 object-cover" />
            <div className="flex-1">
              <div className="font-semibold text-lg">Product Name</div>
              <div className="text-gray-500 text-sm">Brand Name</div>
              <div className="text-pink-600 font-bold mt-1">$Product Price</div>
            </div>
            <Button variant="outline" size="sm">Remove</Button>
          </div>
          {/* End example product card */}
        </div>
        <div className="flex justify-between items-center px-4 py-2 border-t mt-4">
          <span className="font-semibold text-lg">Subtotal</span>
          <span className="text-xl font-bold text-pink-600">$Total</span>
        </div>
        <SheetFooter className="flex flex-col gap-2 mt-4">
          <Button type="submit" className="w-full bg-pink-600 text-white hover:bg-pink-700">Check Out</Button>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">Continue Shopping</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
