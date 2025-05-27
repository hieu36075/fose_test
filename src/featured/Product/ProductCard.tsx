import { HotIcon } from "@/assets/svg";
import { cn } from "@/untils/cn";
import React from "react";
import type { Product } from "./product.type";

interface ProductCardProps {
  product: Product;
  hot?: boolean;
  size?: "small" | "medium";
  className?: string;
}

export const ProductCard = React.memo(
  ({ product, hot = true, size = "medium", className }: ProductCardProps) => {
    const sizeText = size === "small" ? "px-3 py-4" : "py-4 px-6";
    if (!product) return null;
    return (
      <div className={cn("flex flex-col w-full bg-white shadow-xs rounded-lg", className)}>
        <div className="p-2">
          <img
            className="w-full h-full aspect-[1/1] object-contain bg-transparent"
            src={product.image}
            alt="product"
          />
        </div>
        <div className={`flex flex-col ${sizeText} gap-4`}>
          {hot && (
            <div className="flex items-center justify-between bg-gradient-to-r from-light to-warning w-max rounded-full py-1.5 px-3 gap-2">
              <HotIcon />
              <p className="text-darker text-sm">{product.tag}</p>
            </div>
          )}
          <p className="text-primary text-base line-clamp-2 font-semibold">
            {product.name}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-dark text-xl/6 font-semibold">
              {product.price.toLocaleString()} đ
            </p>
            <p className="text-disable">
              {product.oldPrice.toLocaleString()} đ
              <span className="text-dark ml-1.5">{product.discount}</span>
            </p>
            <button className="bg-brand-50 text-blue-600 font-bold text-sm/[24px] py-1.5 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-[1.02]">
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
    );
  }
);
