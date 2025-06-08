import tus from "../assets/tus-yenileme.jpg";

function Service() {
  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        {/* Service Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-xl p-8 md:p-12">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={tus}
              alt="Tuş Yenileme"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Tuş Yenileme
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Anahtar tuş takımı aşınmış, lastik kısmı yıpranmış ya da görsel
              olarak kötü durumda olan araç kumandalarınızı yenileyerek hem
              kullanım kolaylığı sağlıyoruz hem de aracınıza şıklık katıyoruz.
              Marka bağımsız birçok model için uyumlu yedek parça desteğimizle,
              güvenli ve hızlı bir şekilde anahtarınızı yeniliyoruz.
            </p>
            <a
              href="/book"
              className="inline-block px-6 py-3 bg-yellow-500 text-blue-900 font-medium rounded-lg hover:bg-yellow-400 transition duration-300 text-center"
            >
              Hemen Randevu Al
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
