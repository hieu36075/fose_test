import { CountryVNIcon } from "@/assets";
import { ArrowDownIcon } from "@/assets/svg";

export default function FooterLanguageSelector() {
  return (
    <div className="flex gap-2 text-base/6 font-semibold w-full items-center justify-end">
      <CountryVNIcon className="w-6 h-6" />
      <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
        VI
      </span>
      <ArrowDownIcon className="w-4 h-4" />
    </div>
  );
}
