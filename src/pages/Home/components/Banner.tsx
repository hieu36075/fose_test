import { BackgroundPartImage, PartImage } from "@/assets";
import ProductCarousel from "@/featured/Product/ProductCarousel";

export const Banner = () => {
  return (
    <div className="flex flex-col mt-8 w-full max-w-[1440px] mx-auto">
      <section className="relative z-0 overflow-hidden starburst-custom w-full h-[500px]">
        <span className="absolute top-10 left-0 bg-gradient-to-r from-lighter to-light uppercase text-2xl/8 tracking-[5%] py-2.5 px-12 rounded-r-full font-bold text-darker">
          mới cực hot!
        </span>
        <div className="absolute top-1/2 left-[42px] -translate-y-1/2 flex flex-col z-1 ">
          <p className="uppercase font-extrabold text-epilogue text-white text-4xl md:text-[80px]/[100%] [text-shadow:_-2px_-2px_0_#0155c6,_2px_-2px_0_#0155c6,_-2px_2px_0_#0155c6,_2px_2px_0_#0155c6,_0px_0px_1px_#0155c6,_0px_0px_2px_#0155c6]">
            tải app nhận quà
          </p>

          <p className="text-light text-2xl md:text-[32px]/[48px] font-medium">
            Tích điểm ngay trên app{" "}
            <span className="font-extrabold">SUNFIL1</span>
            *100K = 10 điểm
          </p>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 z-2 ">
          <div className="relative  w-[950px] h-[515px] ">
            <img
              className=" absolute top-0  -translate-y-19 -right-65 rotate-y-180 rotate-z-30 w-[850px] h-full object-contain"
              src={BackgroundPartImage}
              alt="part"
            />
            <img
              className=" absolute top-1/2 -translate-y-1/2  right-14 w-[500px] h-[400px] object-cover"
              src={PartImage}
              alt="part"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mt-8">
        <div className="flex flex-col w-full">
          <ProductCarousel />
        </div>
      </section>
    </div>
  );
};
