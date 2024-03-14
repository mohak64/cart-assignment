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

const useCreditCard = create<CreditCardStore>((set) => {
    const storedCreditCardDetails = JSON.parse(localStorage.getItem("creditCardDetails")) || {
        name: "",
        cardNumber: "",
        expirationMonth: "",
        expirationYear: "",
        securityCode: "",
    };

    return {
        creditCardDetails: storedCreditCardDetails,
        setCreditCardDetails: (details) => {
            localStorage.setItem("creditCardDetails", JSON.stringify(details));
            set((state) => ({
                ...state,
                creditCardDetails: details,
            }));
        },
    };
});

export default useCreditCard;