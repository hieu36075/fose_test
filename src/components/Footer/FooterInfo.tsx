import { ImageLogoFooter } from "@/assets";

export default function FooterInfo() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 ">
      <h2 className="text-base/7 font-semibold text-blue-800 uppercase w-max">
        Viet Hung Auto Production Trading Joint Stock Company
      </h2>
      <ul className="space-y-2 text-secondary text-base/7">
        <li>
          Mã số thuế: <strong>0305094228</strong>
        </li>
        <li>
          Địa chỉ:{" "}
          <strong>
            13 Nghĩa Thục, Phường 05, Quận 5, TP. Hồ Chí Minh, Việt Nam
          </strong>
        </li>
        <li>
          Điện thoại:{" "}
          <strong>
            <a href="tel:02837607607">0283 760 7607</a>
          </strong>
        </li>
        <li>
          Giờ mở cửa: <strong>09:00 - 22:00 (Thứ 2 đến Thứ 6)</strong>
        </li>
      </ul>
      <a href="#" className="max-w-[200px] max-h-20">
        <img
          src={ImageLogoFooter}
          alt="bộ công thương"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
}
