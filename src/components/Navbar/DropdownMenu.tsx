import { CategoryImage1 } from "@/assets";
import { ArrowRight } from "@/assets/svg";
import { products } from "@/constants";
import { ProductCard } from "@/featured/Product/ProductCard";
import React from "react";
import { Divider } from "../ui/Divider";

const categoryData = [
  {
    id: 1,
    name: "Bộ Lọc Dầu",
    image: CategoryImage1,
  },
  {
    id: 2,
    name: "Bộ Lọc Không Khí",
    image: CategoryImage1,
  },
  {
    id: 3,
    name: "Bộ Lọc Nhiên Liệu",
    image: CategoryImage1,
  },
];
interface DropdownMenuProps {
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
}
const DropdownMenu = React.memo(
  ({ hoveredIndex, setHoveredIndex }: DropdownMenuProps) => {
    return (
      <div className="hidden absolute top-[100%] left-0  z-99 w-[calc(100vw-400px)] rounded-xl bg-gray-backgroud shadow-lg category-dropdown">
        <div className="flex w-full text-primary">
          <div className="felx flex-col w-1/4 ">
            {categoryData.map((category, index) => (
              <div
                className={`flex w-full py-3  cursor-pointer ${
                  index === hoveredIndex ? "bg-transparent" : "bg-white"
                }`}
                key={category.id}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <img
                  className="w-10 aspect-[1/1]"
                  src={category.image}
                  alt={category.name}
                />
                <div className="flex  justify-between items-center w-full">
                  <p>{category.name}</p>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-1 p-6">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white py-3 px-4 rounded-xl"
                >
                  <img
                    className="w-full h-full max-w-17.5 max-h-17.5"
                    src={CategoryImage1}
                    alt="name"
                  />
                  <span className="ml-2">Bộ lọc dầu</span>
                </div>
              ))}
            </div>
            <Divider className="mb-6 mt-7" />
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl/8 font-semibold">Sản phẩm bán chạy</h2>
              <a href="#" className="flex gap-2 items-center">
                <span className="text-blue-500">Xem tất cả</span>
                <div className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <ArrowRight className="w-4 h-4 text-blue-500 -ml-3" />
                </div>
              </a>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {products.slice(0, 5).map((product, index) => (
                <ProductCard
                  size="small"
                  hot={false}
                  product={product}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default DropdownMenu;
