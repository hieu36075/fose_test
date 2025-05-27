import { CartIcon, CountryVNIcon, UserIcon } from "@/assets";
import {
  ArrowDownIcon,
  HandMoneyIcon,
  MunuIcon,
  RefreshCircleIcon,
  TimeIcon,
  TrunkIcon,
} from "@/assets/svg";
import { products } from "@/constants";
import { ProductCard } from "@/featured/Product/ProductCard";
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
    <header className="flex flex-col w-full max-w-[1440px] mx-auto ">
      <div className="flex max-h-28 w-full items-center">
        <Logo />
        <div className="flex-1 mx-12 w-full">
          <SearchBar />
        </div>
        <div className="flex gap-8">
          {navItemsData.map(({ Icon, label }) => (
            <NavItem key={label} Icon={Icon} label={label} />
          ))}
        </div>
      </div>
      <div className="mt-6 flex w-full">
        <div className="flex relative items-center gap-2 p-4 bg-[#0373f3] [&:hover>.category-dropdown]:block text-white rounded-lg group  ">
          <MunuIcon className="w-6 h-6 flex-shrink-0" />
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

          <ul className="[list-style:none] relative flex items-center gap-8 ml-8 [&>.cart-dropdown]:hover:block">
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
