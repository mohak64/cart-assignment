"use client";
import { create } from "zustand";

interface Address {
    fullName: string;
    address: string;
    zipCode: string;
    city: string;
    phoneNumber: string;
    email: string;
}

interface AddressStore {
    address: Address;
    setAddress: (newAddress: Address) => void;
}

const useAddress = create<AddressStore>((set) => ({
    address: {
        fullName: localStorage.getItem("fullName") || "",
        address: localStorage.getItem("address") || "",
        zipCode: localStorage.getItem("zipCode") || "",
        city: localStorage.getItem("city") || "",
        phoneNumber: localStorage.getItem("phoneNumber") || "",
        email: localStorage.getItem("email") || "",
    },

    setAddress: (newAddress) => {
        set((state: AddressStore) => {
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
