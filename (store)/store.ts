import { create } from "zustand";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartStore {
    cart: Product[];
    paymentMethods: string[];
    openModal: boolean;
    setCart: (cart: Product[]) => void;
    setOpenModal: () => void;
    setPaymentMethods: (newPaymentMethods: string[]) => void;
    addItemToCart: (newItem: Product) => void;
    removeItemFromCart: (itemIndex: number) => void;
    emptyCart: () => void;
}

const useCart = create<CartStore>((set) => ({
    cart: [],
    paymentMethods: [],
    openModal: false,

    setOpenModal: () => {
        set((state) => ({ ...state, openModal: !state.openModal }));
    },

    setPaymentMethods: (newPaymentMethods) => {
        set((state) => ({ ...state, paymentMethods: newPaymentMethods }));
    },

    setCart: (cart: Product[]) => {
        set((state) => ({ ...state, cart: cart }));
    },

    addItemToCart: (newItem) => {
        set((state) => ({ ...state, cart: [...state.cart, newItem] }));
    },
    removeItemFromCart: (itemIndex) => {
        set((state) => ({
            ...state,
            cart: state.cart.filter((_, index) => index !== itemIndex),
        }));
    },
    emptyCart: () => {
        set((state) => ({ ...state, cart: [] }));
    },
}));

export default useCart;
