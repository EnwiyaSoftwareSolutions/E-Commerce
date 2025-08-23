import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, ShoppingCart as CartIcon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
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
import shoppingCart from '../../../store/useShoppingCart'

type CartItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
};

export function ShoppingCart() {
    const { cartItems } = shoppingCart();
    const cartCount = cartItems ? cartItems.length : 0; 
    console.log(cartItems);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className={Styles.shoppingCartButtonMain}>
          <Button variant="outline" size="icon" className="relative" aria-label="Shopping cart">
            {/* <CartIcon className="w-6 h-6 text-gray-800" /> */}
            <CartIcon style={{ color: "var(--color-foreground)" }} className="w-6 h-6" />

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
          <SheetDescription className="text-center text-gray-500 mb-2">Review your selected products and proceed to checkout.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[55vh] w-[380px] rounded-md border p-.5">
        
      {cartItems && cartItems.map((item: any, index: number) => (
        // Example product card, replace with dynamic cart items
        <div key={index} className="grid gap-6 px-2 py-2">
          <div style={{background:"var(--color-card)"}} className="flex items-center gap-4 rounded-lg shadow p-4">
            <img src="https://placehold.co/80x80" alt="Product" className="rounded-lg w-20 h-20 object-cover" />
            <div className="flex-1">
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-gray-500 text-sm">{item.brand}</div>
              <div className="text-pink-600 font-bold mt-1">${item.price}</div>
            </div>
            <Button variant="outline" size="sm">Remove</Button>
          </div>
        </div>
        // End example product card
      ))}
        
         </ScrollArea>
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
