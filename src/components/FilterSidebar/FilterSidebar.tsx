import { FilterIcon } from "@/assets/svg";
import {
  brandDataFilter,
  categoryProducts,
  originDataFilter,
  priceRangeDataFilter,
  yearDataFilter,
} from "@/constants";
import { useFilter } from "@/context/ProductContext";
import { Accordion, AccordionItem } from "../ui/Accordion";
import { Checkbox } from "../ui/Checkbox/Checkbox";
import { Divider } from "../ui/Divider";

export const FilterSidebar = () => {
  const { state, dispatch } = useFilter();
  console.log(state.selectedYears);
  const handleToggleCategory = (brand: string) => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: brand });
  };

  const handleToggleBrand = (brand: string) => {
    dispatch({ type: "TOGGLE_BRAND", payload: brand });
  };

  const handleToggleYeard = (year: string) => {
    console.log("first");
    dispatch({ type: "TOGGLE_YEAR", payload: year });
  };

  const handleToggleOrigin = (origin: string) => {
    dispatch({ type: "TOGGLE_ORIGIN", payload: origin });
  };
  return (
    <div className="hidden md:flex flex-col w-1/5 bg-white rounded-lg shadow-xs">
      <div className="flex w-full gap-3 p-3">
        <FilterIcon className="w-8 h-8" />
        <h2 className="text-xl font-bold">Left Sidebar</h2>
      </div>
      <Divider />
      <div className="flex flex-col">
        <Accordion allowMultipleOpen>
          <AccordionItem defaultOpen id="price" title="Danh mục sản phẩm">
            <div className="flex flex-col gap-3 pb-3">
              {categoryProducts.map((item) => (
                <div
                  className="flex gap-3 items-center"
                  key={item.id}
                  onClick={() => handleToggleCategory(item.value)}
                >
                  <Checkbox
                    checked={state.selectedCategories.includes(item.value)}
                  />
                  <p className="text-primary text-sm/5 font-medium">
                    {item.value}
                    <span className="text-secondary font-normal">
                      {`(${item.quantity})`}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem defaultOpen id="priceRange" title="Khoảng giá">
            <div className="flex flex-col gap-3  pb-3">
              {priceRangeDataFilter.map((item) => (
                <div
                  className="flex gap-3 items-center justify-center border border-[#919EAB3D] rounded-1 py-2"
                  key={item.id}
                >
                  <p className="text-primary text-sm/5 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem defaultOpen id="brand" title="Thương hiệu">
            <div className="flex flex-col gap-3  pb-3">
              {brandDataFilter.map((item) => (
                <div
                  className="flex gap-3"
                  key={item.id}
                  onClick={() => handleToggleBrand(item.value)}
                >
                  <Checkbox
                    checked={state.selectedBrands.includes(item.value)}
                  />
                  <p className="text-primary text-sm/5 font-medium">
                    {item.value}
                    <span className="text-secondary font-normal">
                      {`(${item.quantity})`}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem
            defaultOpen
            isOpen={true}
            id="year"
            title="Năm sản xuất"
          >
            <div className="flex flex-col gap-3  pb-3">
              {yearDataFilter.map((item) => (
                <div
                  className="flex gap-3"
                  key={item.id}
                  onClick={() => handleToggleYeard(item.value)}
                >
                  <Checkbox
                    checked={state.selectedYears.includes(item.value)}
                  />
                  <p className="text-primary text-sm/5 font-medium">
                    {item.value}
                    <span className="text-secondary font-normal">
                      {`(${item.quantity})`}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem defaultOpen isOpen={true} id="made" title="Xuất xứ">
            <div className="flex flex-col gap-3  pb-3">
              {originDataFilter.map((item) => (
                <div
                  className="flex gap-3"
                  key={item.id}
                  onClick={() => handleToggleOrigin(item.value)}
                >
                  <Checkbox
                    checked={state.selectedOrigins.includes(item.value)}
                  />
                  <p className="text-primary text-sm/5 font-medium">
                    {item.value}
                    <span className="text-secondary font-normal">
                      {`(${item.quantity})`}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
