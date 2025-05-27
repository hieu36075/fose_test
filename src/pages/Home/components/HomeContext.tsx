import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductHeader } from "@/components/ProductHeader";
import { products } from "@/constants";
import { useFilter } from "@/context/ProductContext";
import { ProductCard } from "@/featured/Product/ProductCard";

const HomeContext = () => {
  const { state } = useFilter();
  const filteredProducts = products.filter((product) => {
    const matchesBrand =
      state.selectedBrands.length === 0 ||
      state.selectedBrands.includes(product.brand);
    const matchesCategory =
      state.selectedCategories.length === 0 ||
      state.selectedCategories.includes(product.category);
    const matchesYear =
      state.selectedYears.length === 0 ||
      state.selectedYears.includes(product.year);
    const matchesOrigin =
      state.selectedOrigins.length === 0 ||
      state.selectedOrigins.includes(product.origin);

    return matchesBrand && matchesCategory && matchesYear && matchesOrigin;
  });

  // if (state.sortBy === "price_asc") {
  //   filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  // } else if (state.sortBy === "price_desc") {
  //   filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  // }
  return (
    <div className="flex w-full my-8 gap-5 max-w-[1440px] mx-auto">
      <FilterSidebar />
      <div className="flex flex-col flex-1 ">
        <ProductHeader
          selectedSort={state.sortBy}
          onChange={function (value: string): void {
            throw new Error(`Function not implemented. ${value}`);
          }}
        />
        <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-5 mt-5 px-4 md:px-0">
          {filteredProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContext;
