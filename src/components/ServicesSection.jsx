import { motion } from "framer-motion";
import Service from "./Service";

const ServicesSection = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-10 lg:px-20 ">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        HİZMETLERİMİZ
      </h1>
      <Service />
    </div>
  );
};

export default ServicesSection;
