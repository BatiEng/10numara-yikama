import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import ContactInfoSection from "../components/ContactInfoSection";
import ReviewsSection from "../components/ReviewsSection";

function HomePage() {
  return (
    <>
      <div className="hero relative">
        <Navbar />
        <div className="absolute inset-0  bg-opacity-50 z-0" />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4 sm:px-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo Title */}
          <div className="flex-shrink-0 mb-8">
            <a
              href="/"
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight"
            >
              <span className="text-yellow-500">10 numara</span>{" "}
              <span className="text-white">car detailing</span>
            </a>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl mx-auto">
            Sıradan Yıkamanın Ötesinde: Premium Araç Bakımı
          </h1>

          {/* Subtitle */}
          <h3 className="text-sm sm:text-base md:text-lg mt-6 max-w-2xl mx-auto text-gray-200">
            Sıradan bir yıkama ile yetinmeyin, aracınıza hak ettiği premium
            bakımı sunun. Detaylı temizlik, koruma ve yenileme hizmetlerimizle
            aracınızı yeni gibi hissedin.
          </h3>
        </motion.div>
      </div>

      {/* <ServicesSection /> */}
      <div id="hizmetlerimiz" className="mt-10">
        <FeaturesSection />
      </div>
      {/* <Testimonial /> */}
      <ReviewsSection />

      <div id="iletisim" className="flex items-center justify-center bg-black">
        <ContactInfoSection />
      </div>
    </>
  );
}

export default HomePage;
