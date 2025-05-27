import { CheckedIcon } from "@/assets/svg";
import React from "react";
import type { FilterTabProps } from "./filterTab.type";

const options = [
  { label: "Liên quan", value: "relevant" },
  { label: "Bán chạy", value: "best_seller" },
  { label: "Mới nhất", value: "newest" },
  { label: "Nổi bật", value: "featured" },
];

export const FilterTabs = React.memo(
  ({ selected, onChange }: FilterTabProps) => {
    return (
      <div className="flex gap-3 ml-auto md:ml-0">
        {options.map((option) => {
          const isActive = selected === option.value;
          return (
            <div
              key={option.value}
              onClick={() => onChange(option.value)}
              className={`relative px-4 py-2 text-xs rounded-lg md:text-sm/6 font-bold border transition-all bg-white cursor-pointer
              ${
                isActive
                  ? "text-blue-600 border-blue-500 "
                  : "text-primary border-transparent hover:opacity-70 "
              }
            `}
            >
              {option.label}
              {isActive && (
                <span className="absolute top-0 right-0 w-6 h-6 bg-blue-500  [clip-path:polygon(100%_0,_0_0,_100%_100%)] rotate-0 origin-top-right rounded-tr-md">
                  <CheckedIcon className="absolute top-0 right-0 w-3 h-3 text-white m-0.5 " />
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
