import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Banner } from "./components/Banner";
import HomeContext from "./components/HomeContext";
import ServiceSection from "./components/ServiceSection";
import ShowroomSection from "./components/ShowroomSection";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col h-screen mx-auto lg:px-4 xl:px-0 ">
      <Navbar />
      <div className="flex flex-col bg-gray-backgroud">
        <Banner />
        <HomeContext />
      </div>
      <ServiceSection />
      <ShowroomSection />
      <Footer />
    </div>
  );
};

export default HomePage;
