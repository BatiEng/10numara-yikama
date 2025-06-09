import { useState } from "react";
import Navbar from "../components/Navbar";
import tus1 from "../assets/tus3.jpeg";
import tus2 from "../assets/tus4.jpeg";
import yikama1 from "../assets/yikama.jpg";
import yikama2 from "../assets/yikama2.jpg";
import yikama3 from "../assets/yikama3.jpg";
import yikama4 from "../assets/yikama4.jpg";
import yikama5 from "../assets/yikama5.jpg";
import deri from "../assets/deri-boyama.jpeg";

const images = [
  { id: 1, url: tus1, category: "Tuş Yenileme" },
  { id: 2, url: tus2, category: "Tuş Yenileme" },
  { id: 3, url: yikama1, category: "Oto Yıkama" },
  { id: 4, url: yikama2, category: "Oto Yıkama" },
  { id: 5, url: yikama3, category: "Oto Yıkama" },
  { id: 6, url: yikama4, category: "Oto Yıkama" },
  { id: 7, url: yikama5, category: "Oto Yıkama" },
  { id: 8, url: deri, category: "Deri Boyama" },
];

const categories = ["Tuş Yenileme", "Oto Yıkama", "Deri Boyama", "Tümü"];

function Galery() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [activeImage, setActiveImage] = useState(null); // stores full-screen image

  const filteredImages =
    selectedCategory === "Tümü"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen ">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium border ${
                  selectedCategory === cat
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt=""
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setActiveImage(img.url)}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 text-white text-4xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <img
              src={activeImage}
              alt="Full preview"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Galery;
