import { ArrowLeft, ArrowRight } from "@/assets/svg";
import { Button } from "@/components/ui/Button";
import { products } from "@/constants";
import { useRef } from "react";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "./product.type";
import { ProductCard } from "./ProductCard";

const ProductCarousel = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="relative w-full">
      <Swiper
        className="w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        spaceBetween={10}
        slidesPerView={5}
      >
        {products?.map((product: Product) => (
          <SwiperSlide className="relative" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {products.length > 5 && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between z-1   w-full">
          <Button className="!p-2" shape="pill" type="button">
            <ArrowLeft />
          </Button>
          <Button className="!p-2" shape="pill" type="button">
            <ArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
