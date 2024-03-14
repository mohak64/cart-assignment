import { create } from "zustand";

interface UpiIdDetails {
    upiId: string;
}

interface UpiIdStore {
    upiIdDetails: UpiIdDetails;
    setUpiIdDetails: (details: UpiIdDetails) => void;
}

const useUpiId = create<UpiIdStore>((set) => ({
    upiIdDetails: {
        upiId: "",
    },

    setUpiIdDetails: (details) => {
        set({ upiIdDetails: details });
    },
}));

export default useUpiId;
