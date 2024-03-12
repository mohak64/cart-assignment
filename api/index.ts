export const fetchOrderDetails = async () => {
    let BASE_URL =
        "https://groww-intern-assignment.vercel.app/v1/api/order-details";
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching order details:", error);
        throw error;
    }
};
