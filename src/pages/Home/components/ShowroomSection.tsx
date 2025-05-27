import { ArrowRight, LocationIcon } from "@/assets/svg";
import { Button } from "@/components/ui/Button";

const ShowroomSection = () => {
  return (
    <section className="flex w-full bg-brand-50 py-8 ">
      <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 max-w-[1440px] mx-auto justify-between items-center">
        <div className="flex gap-4 items-center">
          <LocationIcon className="w-8 h-8 md:w-12 md:h-12" />
          <a href="#" className="text-xl md:text-[28px]/8 font-medium">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </a>
        </div>
        <Button
          size="md"
          variant="primary"
          shape="pill"
          className="flex items-center gap-3 md:!py-4 md:!px-6 bg-white hover:bg-white group"
        >
          <span className="font-semibold text-lg md:text-2xl  ">Xem ngay</span>
          <ArrowRight className="h-5 w-5 md:h-8 md:w-8 transform transition-transform duration-300 group-hover:translate-x-1 " />
        </Button>
      </div>
    </section>
  );
};

export default ShowroomSection;
