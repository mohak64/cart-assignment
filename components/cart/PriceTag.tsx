import { ReactNode } from "react";

interface PriceTagProps {
  currency?: string;
  price: number;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(
  value: number,
  opts: { locale?: string; currency?: string } = {}
) {
  const { locale = "en-US", currency = "USD" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
  const { price, currency } = props;
  return (
    <div className="flex space-x-1">
      <Price>{formatPrice(price, { currency })}</Price>
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
