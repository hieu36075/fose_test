import { ArrowTopIcon } from "@/assets/svg";
import { useEffect, useState } from "react";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={scrollToTop}
      className="fixed w-10 h-10 flex items-center justify-center bottom-22 right-12 border border-primary rounded-full cursor-pointer group bg-white shadow-md transition-opacity duration-300 hover:shadow-lg"
    >
      <ArrowTopIcon className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
    </div>
  );
};

export default ButtonToTop;
