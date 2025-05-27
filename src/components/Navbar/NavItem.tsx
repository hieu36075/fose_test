import { products } from "@/constants";
import { ProductCard } from "@/featured/Product/ProductCard";
import React from "react";

interface NavItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const NavItem: React.FC<NavItemProps> = React.memo(({ Icon, label }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${
        label === "Giỏ hàng" ? "relative [&:hover>.cart-dropdown]:block" : ""
      }`}
    >
      <Icon className="w-9 h-9" />
      <p className="text-primary text-base/4 font-medium">{label}</p>
      {label === "Giỏ hàng" && (
        <div className="hidden absolute top-[100%] translate-y-6 bg-white -left-0 z-20 cart-dropdown p-6 shadow-lg ">
          <ProductCard
            className="shadow-xs shadow-blue-500/30"
            product={products[0]}
          />
        </div>
      )}
    </div>
  );
});

export default NavItem;
