import { categoryProducts } from "@/constants";
import { AccordionItem } from "../ui/Accordion";
import { Checkbox } from "../ui/Checkbox/Checkbox";

const CategoryFilter = () => {
  return (
    <>
      <AccordionItem id="price" title="Filter by Price">
        {categoryProducts.map((item) => (
          <div className="flex gap-3" key={item.id}>
            <Checkbox checked={true} />
            <p>option 1</p>
          </div>
        ))}
      </AccordionItem>
    </>
  );
};

export default CategoryFilter;
