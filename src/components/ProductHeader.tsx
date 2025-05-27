import { ArrowDownIcon } from "@/assets/svg";
import { FilterTabs } from "./ui/FilterTab";
import { useFilter } from "@/context/ProductContext";

interface Props {
  selectedSort: string;
  onChange: (value: string) => void;
}

export const ProductHeader = ({ selectedSort, onChange }: Props) => {
  const { dispatch } = useFilter();

  const handleSortChange = (value: string) => {
    dispatch({ type: "SET_SORT", payload: value });
    onChange(value);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center px-4 md:px-0">
      <p className="text-primary font-semibold text-xl/7">Danh sách sản phẩm</p>
      <div className="flex flex-wrap items-center gap-6">
        <p className="text-base text-primary font-medium">Sắp xếp theo</p>
        <FilterTabs selected={selectedSort} onChange={handleSortChange} />
        <div className="flex items-center ml-auto md:ml-0 gap-2 group">
          <p className="text-primary font-medium text-xs md:text-sm">Giá: Thấp {"->"} Cao</p>
          <ArrowDownIcon className="group-hover:rotate-180 transition-transform ease-in delay-300" />
        </div>
      </div>
    </div>
  );
};
