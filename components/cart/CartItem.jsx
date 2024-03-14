"use client"

import { useState } from "react";
import { TrashIcon } from 'lucide-react';
import Image from "next/image";

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
        <div className="flex flex-col md:flex-row justify-between ">


            <li li key={name} className="flex flex-col py-6 sm:flex-row sm:justify-between" >
                <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                    <Image
                        className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                        src={imageUrl}
                        alt={title}
                        width={2000}
                        height={2000}
                    />
                    <div className="flex w-full flex-col m-auto  ">
                        <div className="flex w-full justify-between space-x-2 pb-2">
                            <div className="space-y-1 align-middle flex items-center">
                                <p className="text-sm">{title}</p>
                            </div>

                        </div>
                        <div className="flex w-full justify-between  pb-2">
                            <div className="text-right">
                                <p className="text-lg font-semibold">${price}</p>
                            </div>
                        </div>
                        <div className="flex divide-x text-sm">
                            <div className="flex items-center space-x-2 px-2 py-1 pl-0">


                                <span>Quantity - {quantity}</span>


                            </div>

                        </div>
                    </div>

                </div>
            </li >
        </div >
    );
};

export default CartItem;
