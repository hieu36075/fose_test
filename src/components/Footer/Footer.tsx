import { BackgroundFooterImage } from "@/assets";
import FooterAppDownload from "./FooterAppDownload";
import FooterColumn from "./FooterColumn";
import FooterInfo from "./FooterInfo";
import FooterLanguageSelector from "./FooterLanguageSelector";

const legalFooterItems = [
  "- Private policy",
  "Cookie policy",
  "Delivery policy",
  "FAQs",
];
const sitemapFooterItems = ["About", "Article", "Cart", "Contact"];

export default function Footer() {
  return (
    <footer
      className="flex w-full bg-overlay bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BackgroundFooterImage})` }}
    >
      <div className="flex flex-col-reverse px-4 md:px-0 gap-4 md:gap-0 md:flex-row py-24 w-full justify-between max-w-[1440px] mx-auto md:flex-wrap">
        <FooterInfo />
        <FooterColumn title="Site Map" items={sitemapFooterItems} />
        <FooterColumn title="Legal" items={legalFooterItems} highlightFirst />
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="text-xl md:text-2xl/7.5 font-semibold text-blue-800">
            Download App
          </h2>
          <FooterAppDownload />
          <FooterLanguageSelector />
        </div>
      </div>
    </footer>
  );
}
