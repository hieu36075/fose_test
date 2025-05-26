import { BackgroundPartImage, PartImage, ProductImage1 } from "@/assets/image";
import { HotIcon } from "@/assets/svg";
import { Navbar } from "@/components/Navbar/Navbar";
import Swiper from 'swiper';
import 'swiper/css';
function App() {
  return (
    <div className="w-full flex flex-col h-screen max-w-[1440px] mx-auto ">
      <Navbar />
      <div className="flex flex-col mt-8">
        <section className="relative z-0 overflow-hidden starburst-custom w-full h-[500px]">
          <span className="absolute top-10 left-0 bg-gradient-to-r from-lighter to-light uppercase text-2xl/8 tracking-[5%] py-2.5 px-12 rounded-r-full font-bold text-[##7A0916]">
            mới cực hot!
          </span>
          <div className="absolute top-1/2 left-[42px] -translate-y-1/2 flex flex-col z-1 ">
            <p className="uppercase font-extrabold text-epilogue text-white text-[80px]/[100%] [text-shadow:_-2px_-2px_0_#0155c6,_2px_-2px_0_#0155c6,_-2px_2px_0_#0155c6,_2px_2px_0_#0155c6,_0px_0px_1px_#0155c6,_0px_0px_2px_#0155c6]">
              tải app nhận quà
            </p>

            <p className="text-light text-[32px]/[48px] font-medium">
              Tích điểm ngay trên app{" "}
              <span className="font-extrabold">SUNFIL1</span>
              *100K = 10 điểm
            </p>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-2 ">
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

          <div className="flex flex-col w-[252px]">
            <div className="p-2 ">
              <img
                className="w-full h-full aspect-[1/1] object-contain"
                src={ProductImage1}
                alt="product"
              />
            </div>
            <div className="flex flex-col py-4 px-6 gap-4 ">
              <div className="flex items-center justify-between bg-gradient-to-r from-light  to-warning w-max rounded-full py-1.5 px-3 gap-2 ">
                <HotIcon />
                <p className="text-darker text-sm">Giá cực shock</p>
              </div>
              <p className="text-primary text-base line-clamp-2 font-semibold">
                Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer
                (52046262)
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl/6 font-semibold">299,000 đ</p>
                <p className="text-disable">
                  329,000 đ <span className="text-dark ml-1.5">-10%</span>
                </p>
                <button className="bg-brand-50 text-blue-600 font-bold text-sm/[24px] py-1.5 rounded-lg">Mua Ngay</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
