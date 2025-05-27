import { ArrowLeft, ArrowRight } from "@/assets/svg";
import { Button } from "@/components/ui/Button";
import { products } from "@/constants";
import { useRef, useState } from "react";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "./product.type";
import { ProductCard } from "./ProductCard";

const ProductCarousel = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [shouldShowNav, setShouldShowNav] = useState(false);
  const updateShouldShowNav = (swiper: SwiperCore) => {
    const visibleSlides = swiper.params.slidesPerView as number;
    setShouldShowNav(products.length > visibleSlides);
  };

  return (
    <div className="relative w-full px-4">
      <Swiper
        className="w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateShouldShowNav(swiper);
        }}
        onResize={(swiper) => updateShouldShowNav(swiper)}
        onSlideChange={(swiper) => updateShouldShowNav(swiper)}
        loop
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.map((product: Product) => (
          <SwiperSlide className="relative" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {shouldShowNav && (
        <div className="absolute md:px-0 top-1/2 left-0 -translate-y-1/2 flex justify-between z-10 w-full">
          <Button
            className="!p-2 group"
            shape="pill"
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft className="group-hover:text-white" />
          </Button>
          <Button
            className="!p-2 group"
            shape="pill"
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight className="group-hover:text-white" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
