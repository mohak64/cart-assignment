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
        fullName: "",
        address: "",
        zipCode: "",
        city: "",
        phoneNumber: "",
        email: "",
    },

    setAddress: (newAddress) => {
        set({ address: newAddress });
    },
}));

export default useAddress;
