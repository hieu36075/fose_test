import { ArrowRight, LocationIcon } from "@/assets/svg";
import { Button } from "@/components/ui/Button";

const ShowroomSection = () => {
  return (
    <section className="flex w-full bg-brand-50 py-8 ">
      <div className="flex w-full max-w-[1440px] mx-auto justify-between items-center">
        <div className="flex gap-4 items-center">
          <LocationIcon className="w-12 h-12" />
          <a href="#" className="text-[28px]/8 font-medium">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </a>
        </div>
        <Button
          size="md"
          variant="primary"
          shape="pill"
          className="flex items-center gap-3 !py-4 !px-6 bg-white hover:bg-white group"
        >
          <span className="font-semibold text-2xl  ">Xem ngay</span>
          <ArrowRight className="h-8 w-8 transform transition-transform duration-300 group-hover:translate-x-1 " />
        </Button>
      </div>
    </section>
  );
};

export default ShowroomSection;
