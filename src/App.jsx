import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/10numara_car_detailing"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center gap-2 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.043.447-4.193 1.597C1.711 2.82 1.337 4.236 1.264 5.863c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.447 3.043 1.597 4.193 1.15 1.15 2.566 1.524 4.193 1.597 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.043-.447 4.193-1.597 1.15-1.15 1.524-2.566 1.597-4.193.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.447-3.043-1.597-4.193-1.15-1.15-2.566-1.524-4.193-1.597-1.28-.058-1.688-.072-4.947-.072z" />
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </svg>
        <span className="text-sm font-medium">
          Detaylı fotoğraflar için sayfamızı takip edin
        </span>
      </a>
    </>
  );
}

export default App;
