
import { create } from "zustand";

const useAddress = create((set) => ({
    address: {
        fullName: localStorage.getItem("fullName") || "",
        address: localStorage.getItem("address") || "",
        zipCode: localStorage.getItem("zipCode") || "",
        city: localStorage.getItem("city") || "",
        phoneNumber: localStorage.getItem("phoneNumber") || "",
        email: localStorage.getItem("email") || "",
    },

    setAddress: (newAddress) => {
        set((state) => {
            localStorage.setItem("fullName", newAddress.fullName);
            localStorage.setItem("address", newAddress.address);
            localStorage.setItem("zipCode", newAddress.zipCode);
            localStorage.setItem("city", newAddress.city);
            localStorage.setItem("phoneNumber", newAddress.phoneNumber);
            localStorage.setItem("email", newAddress.email);
            return { address: newAddress };
        });
    },
}));

export default useAddress;
