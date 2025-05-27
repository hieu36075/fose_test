import { serviceData } from "@/constants";

const ServiceSection = () => {
  return (
    <section className="grid grid-cols-4 mt-5 place-items-center gap-8 py-10 w-full max-w-[1440px] mx-auto ">
      {serviceData.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 py-6.5 px-2.5 bg-white shadow-lg rounded-xl w-full "
        >
          <item.Icon className="w-12 h-12 text-primary" />
          <div className="flex flex-col">
            <p className="text-base/[120%] font-bold text-primary">
              Miễn phí vận chuyển
            </p>
            <p className="text-secondary">Với hoá đơn từ 1 triệu</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
