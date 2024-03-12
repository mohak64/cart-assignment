import { ReactNode } from "react";

interface PriceTagProps {
  currency?: string;
  price: number;
  salePrice?: number;
  rootClassName?: string;
  priceClassName?: string;
  salePriceClassName?: string;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(
  value: number,
  opts: { locale?: string; currency?: string } = {}
) {
  const { locale = "en-US", currency = "INR" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
  const {
    price,
    currency,
    salePrice,
    rootClassName,
    priceClassName,
    salePriceClassName,
  } = props;
  return (
    <div className={`flex space-x-1 ${rootClassName}`}>
      <Price isOnSale={!!salePrice} className={priceClassName}>
        {formatPrice(price, { currency })}
      </Price>
      {salePrice && (
        <SalePrice className={salePriceClassName}>
          {formatPrice(salePrice, { currency })}
        </SalePrice>
      )}
    </div>
  );
};

interface PriceProps {
  children?: ReactNode;
  isOnSale?: boolean;
  className?: string;
}

const Price = (props: PriceProps) => {
  const { isOnSale, children, className } = props;
  const defaultColor = "text-gray-700";
  const onSaleColor = "text-gray-400";
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <span
      className={`font-medium ${color} ${
        isOnSale ? "line-through" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
};

const SalePrice = (props: { children?: ReactNode; className?: string }) => (
  <span className={`font-semibold text-gray-800 ${props.className}`}>
    {props.children}
  </span>
);
