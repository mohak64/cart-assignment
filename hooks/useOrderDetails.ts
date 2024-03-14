
"use client"
import { useEffect, useState } from "react";
import { fetchOrderDetails } from "@/api";
import useCart from "@/(store)/store";

export interface OrderDetails {
    products: {
        id: number;
        title: string;
        price: number;
        image: string;
        quantity: number;
    }[];
    paymentMethods: string[];
}

export const useOrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState<OrderDetails | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const hookCart = useCart();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!localStorage.getItem("cart")) {
                    const data = await fetchOrderDetails();
                    localStorage.setItem("cart", JSON.stringify(data.products));
                    hookCart.setCart(data.products);
                    hookCart.setPaymentMethods(data.paymentMethods);
                    setOrderDetails(data);
                } else {
                    const cart = JSON.parse(localStorage.getItem("cart")!);
                    hookCart.setCart(cart);
                    setOrderDetails({ products: cart, paymentMethods: hookCart.paymentMethods });
                }
            } catch (error: any) {
                setError(error.message || "Error fetching order details");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [hookCart]);

    return {
        orderDetails,
        loading,
        error,
    };
};
