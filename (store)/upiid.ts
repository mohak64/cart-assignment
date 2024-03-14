import { create } from "zustand";

interface UpiIdDetails {
    upiId: string;
}

interface UpiIdStore {
    upiIdDetails: UpiIdDetails;
    setUpiIdDetails: (details: UpiIdDetails) => void;
}

const useUpiId = create<UpiIdStore>((set) => {
    const storedUpiIdDetails = JSON.parse(localStorage.getItem("upiIdDetails")) || {
        upiId: "",
    };

    return {
        upiIdDetails: storedUpiIdDetails,
        setUpiIdDetails: (details) => {
            localStorage.setItem("upiIdDetails", JSON.stringify(details));
            set((state) => ({
                ...state,
                upiIdDetails: details,
            }));
        },
    };
});

export default useUpiId;
