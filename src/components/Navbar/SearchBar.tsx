import { CaremaIcon, SearchIcon } from "../../assets";

const PLACE_HOLDER_SEARCH = "Tìm sản phẩm";

export default function SearchBar() {
  return (
    <div className="flex items-center border-2 border-blue-500 rounded-full py-2 pl-5 pr-2 w-full">
      <div className="relative w-full">
        <input
          placeholder={PLACE_HOLDER_SEARCH}
          className="h-7 w-full text-base placeholder:text-disable focus:outline-none focus:ring-0"
        />
        <CaremaIcon className="w-5 h-5 md:w-7 md:h-7 absolute top-1/2 -translate-y-1/2 right-2 md:top-0 md:translate-y-0 md:right-6" />
      </div>
      <div className="flex items-center justify-center bg-blue-500 rounded-full py-1 px-4 md:py-2.5 md:px-6">
        <SearchIcon className="w-5 h-5 md:w-7 md:h-7" />
      </div>
    </div>
  );
}
