import { CartIcon, CountryVNIcon, UserIcon } from "@/assets";
import {
  ArrowDownIcon,
  DevicesIcon,
  HandMoneyIcon,
  MenuIcon,
  PhoneIcon,
  RefreshCircleIcon,
  SaleIcon,
  TimeIcon,
  TrunkIcon,
} from "@/assets/svg";
import { useCallback, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const navItemsData = [
  { Icon: CountryVNIcon, label: "VI" },
  { Icon: CartIcon, label: "Giỏ hàng" },
  { Icon: UserIcon, label: "Tài khoản" },
];

const menuItemDate = [
  {
    label: "Về chúng tối",
    link: "#",
  },
  {
    label: "Bài viết",
    link: "#",
  },
  {
    label: "Catalog",
    link: "#",
  },
  {
    label: "Liên hệ",
    link: "#",
  },
];

const munuItemWithIconData = [
  {
    Icon: TimeIcon,
    label: "Hỗ trợ 24/7",
  },
  {
    Icon: HandMoneyIcon,
    label: "Miễn Phí Vận Chuyển",
  },
  {
    Icon: TrunkIcon,
    label: "Giao Hành Nhanh 2h",
  },
  {
    Icon: RefreshCircleIcon,
    label: "30 ngày đổi trả",
  },
];

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleSetHoveredIndex = useCallback(
    (index: number) => {
      setHoveredIndex(index);
    },
    [setHoveredIndex]
  );

  return (
    <header className="flex flex-col">
      <div className="bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] p-1.5 w-full">
        <div className="flex w-full justify-between max-w-[1440px] mx-auto">
          <div className="hidden md:flex text-white items-center gap-2">
            <SaleIcon className="w-4 h-4" />
            <p className="text-xs/4  ">
              Nhập mã{" "}
              <span className="text-sm/5 text-yellow-primary">NEWBIE</span> giảm
              ngay 10% cho lần đầu mua hàng.
            </p>
          </div>
          <div className="flex gap-6 justify-center md:justify-start w-full md:w-auto ">
            <div className="hidden md:flex items-center text-white gap-2">
              <PhoneIcon className="w-4 h-4" />
              <p className="text-white/50 text-sm/5 font-normal">
                Hotline{" "}
                <span className="text-yellow-primary text-xs/4 font-bold">
                  0283 760 7607
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <DevicesIcon className="w-4 h-4 text-white" />
              <p className="text-white/50 text-sm/5 font-normal text-center">
                Tải ứng dụng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-h-28 justify-between md:justify-start items-center max-w-[1440px] mx-auto mt-1 md:mt-0  md:w-full w-[calc(100vw-48px)]">
        <MenuIcon className="w-6 h-6 flex-shrink-0 text-blue-700 md:hidden" />
        <Logo />
        <div className="flex-1 hidden md:flex  mx-4 lg:mx-12 w-full">
          <SearchBar />
        </div>
        <div className="flex gap-8">
          {navItemsData.map(({ Icon, label }, index) => (
            <NavItem
              className={`${
                index === navItemsData.length - 1 ? "flex" : "hidden"
              }`}
              key={label}
              Icon={Icon}
              label={label}
            />
          ))}
        </div>
      </div>
      <div className="flex w-[calc(100vw-48px)]  mx-auto my-3 md:hidden">
        <SearchBar />
      </div>
      <div className="hidden md:flex mt-6 w-[calc(100vw-48px)] md:w-full max-w-[1440px] mx-auto  ">
        <div className="flex relative items-center gap-2 p-4 bg-[#0373f3] [&:hover>.category-dropdown]:block text-white rounded-lg group  ">
          <MenuIcon className="w-6 h-6 flex-shrink-0" />
          <span className="flex-grow min-w-0 truncate">Danh mục sản phẩm</span>
          <ArrowDownIcon className="w-5 h-5 flex-shrink-0 transition-transform duration-300 delay-250 ease-in-out  group-hover:-rotate-180" />
          <DropdownMenu
            hoveredIndex={hoveredIndex}
            setHoveredIndex={handleSetHoveredIndex}
          />
        </div>
        <div className="flex justify-between w-full">
          <ul className="[list-style:none] flex items-center gap-8 ml-8">
            {menuItemDate.map((item, index) => (
              <li className="text-base/6 font-medium" key={index}>
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="[list-style:none] hidden relative md:flex items-center gap-8 ml-8 [&>.cart-dropdown]:hover:block">
            {munuItemWithIconData.map(({ Icon, label }, index) => (
              <li key={index} className="flex gap-2 text-base/6 font-semibold">
                <Icon className="w-6 h-6" />
                <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
