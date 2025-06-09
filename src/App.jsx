import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Galery from "./pages/Galery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resimler" element={<Galery />} />
      </Routes>
      <Footer />

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
      <a
        href="https://wa.me/905555555555" // replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.85 11.85 0 0012 0C5.38 0 0 5.38 0 12a11.92 11.92 0 001.62 6l-1.06 3.87 3.96-1.04A11.87 11.87 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.88 9.88 0 01-5.06-1.4l-.36-.22-2.35.62.62-2.3-.23-.38A9.88 9.88 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.34-7.66c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8.1 8.1 0 01-2.37-1.47 8.9 8.9 0 01-1.65-2.06c-.17-.3 0-.47.13-.62.13-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52s-.65-1.57-.9-2.15c-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.5.07-.77.37s-1 1-1 2.45 1 2.84 1.13 3.04c.15.2 1.98 3.03 4.83 4.25.68.3 1.22.47 1.63.6.68.22 1.3.2 1.78.12.54-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42s-.27-.22-.57-.37z" />
        </svg>
        <span className="text-sm font-medium">
          WhatsApp üzerinden iletişime geçin
        </span>
      </a>
    </>
  );
}

export default App;
