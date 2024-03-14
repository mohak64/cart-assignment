import { create } from "zustand";

interface CreditCardDetails {
    name: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    securityCode: string;
}

interface CreditCardStore {
    creditCardDetails: CreditCardDetails;
    setCreditCardDetails: (details: CreditCardDetails) => void;
}

const useCreditCard = create<CreditCardStore>((set) => ({
    creditCardDetails: {
        name: "",
        cardNumber: "",
        expirationMonth: "",
        expirationYear: "",
        securityCode: "",
    },
    setCreditCardDetails: (details) => {
        set((state) => ({
            ...state,
            creditCardDetails: details,
        }));
    },
}));

export default useCreditCard;
