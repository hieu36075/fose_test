import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
  ProductImage4,
} from "@/assets";
import {
  DeliveryIcon,
  MoneyIcon,
  PackageIcon,
  SupportCustomerIcon,
} from "@/assets/svg";
import type { Product } from "@/featured/Product/product.type";

export const products: Product[] = [
  {
    id: 1,
    image: ProductImage1,
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
    oldPrice: 329000,
    discount: "-10%",
    tag: "Giá cực shock",
    brand: "Hyundai",
    category: "Lọc gió Động cơ - Air Filter",
    year: "2021",
    origin: "Nhật Bản",
  },
  {
    id: 2,
    image: ProductImage2,
    name: "Bộ lọc dầu – Toyota Fortuner (90915-YZZE1)",
    price: 150000,
    oldPrice: 180000,
    discount: "-17%",
    tag: "Khuyến mãi HOT",
    brand: "Bosch",
    category: "Bộ lọc dầu",
    year: "2020",
    origin: "Đức",
  },
  {
    id: 3,
    image: ProductImage3,
    name: "Má phanh trước – Honda Civic (45022-TR0-A01)",
    price: 450000,
    oldPrice: 500000,
    discount: "-10%",
    tag: "Ưu đãi tháng 5",
    brand: "Asakashi",
    category: "Má phanh trước",
    year: "2019",
    origin: "Trung Quốc",
  },
  {
    id: 4,
    image: ProductImage4,
    name: "Má phanh trước – Honda Civic (45022-TR0-A01)",
    price: 450000,
    oldPrice: 500000,
    discount: "-10%",
    tag: "Ưu đãi tháng 5",
    brand: "Hyundai",
    category: "Má phanh trước",
    year: "2018",
    origin: "Nhật Bản",
  },
];

export const categoryProducts = [
  {
    id: 1,
    value: "Lọc gió Động cơ - Air Filter",
    quantity: 24,
  },
  {
    id: 2,
    value: "Lọc Nhiên Liệu - Fuel Filter",
    quantity: 24,
  },
  {
    id: 3,
    value: "Bộ lọc dầu",
    quantity: 24,
  },
  {
    id: 4,
    value: "Chưa phân loại",
    quantity: 24,
  },
  {
    id: 5,
    value: "Khác",
    quantity: 24,
  },
];

export const brandDataFilter = [
  {
    id: 1,
    value: "Asakashi",
    quantity: 24,
  },
  {
    id: 2,
    value: "Bosch",
    quantity: 24,
  },
  {
    id: 3,
    value: "Hyundai",
    quantity: 24,
  },
];

export const priceRangeDataFilter = [
  {
    id: 1,
    value: "Dưới 500.000đ",
  },
  {
    id: 2,
    value: "Từ 100.000đ - 300.000đ",
  },
  {
    id: 3,
    value: "Từ 300.000đ - 500.000đ",
  },
  {
    id: 4,
    value: "Trên 500.000đ",
  },
];

export const yearDataFilter = [
  {
    id: 1,
    value: "2021",
    quantity: 24,
  },
  {
    id: 2,
    value: "2020",
    quantity: 24,
  },
  {
    id: 3,
    value: "2019",
    quantity: 24,
  },
  {
    id: 4,
    value: "2018",
    quantity: 24,
  },
];

export const originDataFilter = [
  {
    id: 1,
    value: "Đức",
    quantity: 24,
  },
  {
    id: 2,
    value: "Nhật Bản",
    quantity: 24,
  },
  {
    id: 3,
    value: "Trung Quốc",
    quantity: 24,
  },
];

export const serviceData = [
  {
    id: 1,
    title: "Miễn phí vận chuyển",
    description: "Với hoá đơn từ 1 triệu",
    Icon: MoneyIcon,
  },
  {
    id: 2,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    Icon: SupportCustomerIcon,
  },
  {
    id: 3,
    title: "Giao hàng nhanh 2h",
    description: "Trong vòng bán kính 10km nội thành TP HCM",
    Icon: DeliveryIcon,
  },
  {
    id: 4,
    title: "30 ngày đổi trả",
    description:
      "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    Icon: PackageIcon,
  },
];
