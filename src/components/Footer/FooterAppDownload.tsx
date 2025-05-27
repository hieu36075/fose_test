import { AppleStoreIcon, GoooglePlayIcon } from "@/assets/svg";

export default function FooterAppDownload() {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-primary py-2.5 px-5 rounded-xl">
        <a href="#" className="flex items-center gap-4">
          <GoooglePlayIcon className="w-7.5 h-7.5" />
          <span className="flex flex-col gap-1 text-white">
            <span className="text-sm/5 font-normal">Get It On</span>
            <span className="text-base/6 font-semibold">Google Play Store</span>
          </span>
        </a>
      </div>
      <div className="bg-blue-500 py-2.5 px-5 rounded-xl">
        <a href="#" className="flex items-center gap-4">
          <AppleStoreIcon className="w-8 h-8" />
          <span className="flex flex-col gap-1 text-white">
            <span className="text-sm/5 font-normal">Download from</span>
            <span className="text-base/6 font-semibold">Apple App Store</span>
          </span>
        </a>
      </div>
    </div>
  );
}
