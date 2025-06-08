const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Tuş Yenileme",
      desc: "Zamanla araç anahtarları yıpranabilir, tuş takımı silinebilir ya da plastik yüzeyler zarar görebilir. Bu hem estetik açıdan kötü bir görüntü oluşturur hem de kullanım zorluğu yaratabilir. Tuş yenileme hizmetimizle, anahtarınızı baştan sona elden geçiriyor, yeni tuş takımı ve dış kaplama ile ilk günkü gibi şık ve sağlam hale getiriyoruz.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Pasta Cila",
      desc: "Aracınızın boyasında zamanla oluşan çizikler, matlıklar ve güneş yanıkları hem estetik görünümü bozar hem de aracın değerini düşürür. Pasta-cila uygulamamız, bu yüzey kusurlarını ortadan kaldırarak aracınıza yepyeni bir parlaklık ve derinlik kazandırır.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Seramik Kaplama",
      desc: "Aracınızın boyasını uzun süre boyunca dış etkenlerden korumak ve kalıcı bir parlaklık kazandırmak mı istiyorsunuz? Seramik kaplama, aracınızın yüzeyine uygulanan nano teknolojik bir koruma tabakasıdır. Bu uygulama sayesinde boya, çizilmelere, kimyasallara, güneş ışınlarına ve kuş pisliği gibi dış etkenlere karşı maksimum korunma sağlar.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "PPF Kaplama",
      desc: "Aracınızın boyasını taş çarpmaları, çizikler, kuş pisliği, yol tuzu, UV ışınları ve diğer dış etkenlerden en üst düzeyde korumak istiyorsanız, PPF kaplama en etkili çözümdür. PPF, şeffaf ve yüksek dayanıklılığa sahip özel bir film tabakasıdır. Aracınızın görünümünü değiştirmeden, boyasını fiziksel darbelere karşı kalkan gibi korur.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Deri Boyama",
      desc: "Zamanla araç içindeki deri döşemelerde renk solmaları, çatlaklar ve yüzey deformasyonları oluşabilir. Bu hem estetik görüntüyü bozar hem de aracın iç mekan kalitesini düşürür. Deri boyama hizmetimizle, yıpranmış veya solmuş deri yüzeyleri özel boyalarla yeniliyor, aracınıza ilk günkü şıklığını ve konforunu geri kazandırıyoruz.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Detaylı İç-Dış Yıkama",
      desc: "Aracınızın hem dış görünümünü hem de iç mekan hijyenini önemsiyoruz. Detaylı iç-dış yıkama hizmetimiz, sadece yüzey temizliğiyle sınırlı kalmaz; aracınızın en ulaşılması zor noktalarına kadar titizlikle temizlik sağlar. Böylece hem estetik hem de hijyenik bir sürüş keyfi sunarız.",
    },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-screen-xl  mx-auto px-4 text-center text-gray-600 md:px-8 ">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-yellow-500 text-4xl font-semibold sm:text-4xl">
            Hizmetlerimiz
          </h3>
        </div>
        <div className="mt-12 ">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2  lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3 mb-20">
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-yellow-500 font-semibold">
                  {item.title}
                </h4>
                <p className="text-white">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
