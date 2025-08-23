import {create} from 'zustand';

type CartItem = {
  id: string;
  // add other properties as needed, e.g. name, price, etc.
};

type ShoppingCartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
};

const useShoppingCart = create<ShoppingCartState>((set) => ({
  cartItems: [],
  addToCart: (item: CartItem) => set((state) => ({
    cartItems: [...state.cartItems, item],
  })),
  removeFromCart: (itemId: string) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== itemId),
  })),
  clearCart: () => set({ cartItems: [] }),
}));

export default useShoppingCart;
