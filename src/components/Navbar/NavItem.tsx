import { products } from "@/constants";
import { ProductCard } from "@/featured/Product/ProductCard";
import { cn } from "@/untils/cn";
import React from "react";

interface NavItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = React.memo(
  ({ Icon, label, className }) => {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          label === "Giỏ hàng" ? "relative [&:hover>.cart-dropdown]:block" : "",
          className
        )}
      >
        <Icon className="w-9 h-9" />
        <p className="hidden md:inline text-primary text-base/4 font-medium">{label}</p>
        {label === "Giỏ hàng" && (
          <div className="hidden absolute top-[100%] translate-y-0 bg-white -left-0 z-20 cart-dropdown p-6 shadow-lg ">
            <ProductCard
              className="shadow-xs shadow-blue-500/30"
              product={products[0]}
            />
          </div>
        )}
      </div>
    );
  }
);

export default NavItem;
