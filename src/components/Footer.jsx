import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white ">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-yellow-500">10 numara</span> car detailing
            </h2>
            <p className="text-sm text-gray-300">
              Detaylı oto yıkama, iç dış temizlik, boya koruma ve daha fazlası.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Ulaşım
                </a>
              </li>
              <li>
                <a href="/book" className="hover:underline">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media (Optional) */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              {/* Replace # with real links */}
              <a
                href="https://instagram.com/10numara_car_detailing"
                target="_blank"
                className="hover:text-yellow-400"
              >
                Instagram
              </a>
              <a href="#" className="hover:text-yellow-400">
                Facebook
              </a>
              <a href="#" className="hover:text-yellow-400">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} 10 Numara Car Detailing. Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
