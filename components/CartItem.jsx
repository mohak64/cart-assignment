import { useState } from "react";
import QuantitySelect from "./QuantitySelect";

const CartItem = (props) => {
    const {
        isGiftWrapping,
        title,
        description,
        quantity,
        image: imageUrl,
        currency,
        price,
        onChangeQuantity,
        onClickDelete,
    } = props;

    const handleDeleteClick = () => {
        onClickDelete?.();
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
                {/* CartProductMeta component */}
                <div>
                    <img src={imageUrl} alt={title} className="w-16 h-16 mr-4" />
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        {description && <p className="text-sm">{description}</p>}
                    </div>
                </div>
                {/* End of CartProductMeta component */}
            </div>

            {/* Desktop */}
            <div className="hidden md:flex justify-between items-center w-full ml-8">
                <QuantitySelect
                    defaultQuantity={quantity}
                    onChangeQuantity={(newQuantity) => onChangeQuantity?.(newQuantity)}
                />
                <span className="text-lg">
                    {currency} {price}
                </span>
                <button
                    onClick={handleDeleteClick}
                    className="text-gray-500 hover:text-gray-700"
                >
                    Delete
                </button>
            </div>

            {/* Mobile */}
            <div className="flex mt-4 md:hidden justify-between w-full">
                <button
                    onClick={handleDeleteClick}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                >
                    Delete
                </button>
                <QuantitySelect
                    defaultQuantity={quantity}
                    onChangeQuantity={(newQuantity) => onChangeQuantity?.(newQuantity)}
                />
                <span className="text-sm">
                    {currency} {price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
