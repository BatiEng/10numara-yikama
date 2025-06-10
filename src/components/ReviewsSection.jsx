import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="w-full max-w-[80vw] sm:w-80 p-4 bg-card rounded-lg border border-border shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-white">{name}</h3>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground text-white">{review}</p>
  </div>
);

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Ömer Buğra KARAKOÇ",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=micheal",
      rating: 5,
      review:
        "Arabayla ilgileri olsun muhabbetleri sıcakkanlılıkları olsun çok mükemmel insanlar. Her yer kapalıyken açık olmaları ayrı bir avantaj. Fiyatları keza öyle müşteriyi yoracak fiyatlarda değil, allah bereket versin hepsine",
    },
    {
      id: 2,
      name: "Ali Batıkan Öcal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      review:
        "Güler yüz temiz hizmet kalitenin adresi. Detaylı temizlik + pasta cila yaptırdım çok memnun kaldım",
    },
    {
      id: 3,
      name: "Merve Kaplan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Araba yıkama yaptırıp memnun kaldığım bir yer bulamıyordum. Çalışan arkadaşların hepsinin ilgi alakası ve işerinde titiz olmaları beni çok mutlu etti. Hepsine ayrı ayrı teşekkürler🙏🏼",
    },
    {
      id: 4,
      name: "Efe Gezer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Isprtada gerçekten güvenilir ve işinin hakkını veren bi işletme gözünüz kapalı aracınızın eksiklerini yaptırabilirsiniz",
    },
    {
      id: 5,
      name: "Bedrettin Demir",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Erkan kardeşim kötü durumda olan arabamızla bizzat ilgilendi. Söylememize rağmen detaylı girmiş işe. Ücret de uygundu hizmet adı gibi 10 numara. Teşekkürler tüm çalışanlara.",
    },
    {
      id: 6,
      name: "İsmail Kurdoğanlı",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Aracıma yapılan seramik uygulaması sonucunda satmak istediğim arabama binmeye devam ediyorum özenli işçilikleri ve güler yüzlü hizmetleri için erkan ve oğuzhan beye teşekkür ediyorum 👍",
    },
    {
      id: 7,
      name: "Hüseyin Gül",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Seramik kaplama konusunda işinde çok iyi bir işletme işçilik ilgi alaka 10 numara tüm ekibe teşekkürler",
    },
    {
      id: 8,
      name: "MELİKE ÖZDAMAR",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Özenli yıkamanın Isparta'da ki adresi i, zorlu her kirlenmede aracımızı güvenle emanet ediyoruz☺️",
    },
    {
      id: 9,
      name: "Altunay Bayındır",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Aracıma yıkama yaptırdım bu zamana kadar aracımın temiz bir şekilde yıkanmadığını anladım",
    },
  ];
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild?.offsetWidth || 0;
      containerRef.current.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full overflow-hidden">
      <h2 className="text-4xl text-white font-semibold text-center text-yellow-500 mb-20">
        Google'da Bizi Nasıl Değerlendirdiler?
      </h2>
      <div
        ref={containerRef}
        className="flex flex-row gap-4 p-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
      >
        {reviews.map((review) => (
          <div key={review.id} className="flex-shrink-0">
            <ReviewCard
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
