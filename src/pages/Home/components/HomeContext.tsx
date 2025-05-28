import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductHeader } from "@/components/ProductHeader";
import { products } from "@/constants";
import { useFilter } from "@/context/ProductContext";
import { ProductCard } from "@/featured/Product/ProductCard";
import { useEffect, useRef, useState } from "react";

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

  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMore = () => {
    if (loading || visibleCount >= filteredProducts.length) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!observerRef.current) return;

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    });

    observer.current.observe(observerRef.current);

    return () => {
      if (observer.current && observerRef.current) {
        observer.current.unobserve(observerRef.current);
      }
    };
  }, [observerRef, visibleCount]);

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
          {filteredProducts.slice(0, visibleCount).map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
          {visibleCount < filteredProducts.length && (
            <div
              ref={observerRef}
              className="col-span-full flex justify-center py-4"
            >
              <div className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent h-8 w-8" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeContext;
