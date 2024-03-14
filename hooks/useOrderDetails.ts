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
                const data = await fetchOrderDetails();
                hookCart.setCart(data.products);
                hookCart.setPaymentMethods(data.paymentMethods);
                setOrderDetails(data);
            } catch (error: any) {
                setError(error.message || "Error fetching order details");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        orderDetails,
        loading,
        error,
    };
};
