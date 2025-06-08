import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const Marquee = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={`flex min-w-full gap-4`}
        style={{
          transform: `translateX(${direction === "left" ? "-" : ""}${
            isPaused ? contentWidth / 4 : 0
          }px)`,
          animation: `scroll-${direction} ${
            contentWidth / speed
          }s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="w-80 p-4 bg-card rounded-lg border border-border shadow-sm">
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

export default function Testimonial() {
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
      rating: 4,
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
      name: "Mustafa Aykurt",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review:
        "Yol üzerinde Tesadüfün girdiğim bir esnaf kardeşim güler yüzü,samimiyeti,esnaflığı ile aldığı parayı hak eden bir kardeşim. Hizmeti konusunda gözünüz arkada kalmasın.",
    },
  ];

  return (
    <div className=" bg-black p-8 flex flex-col gap-8 items-center justify-center">
      <div className="w-full max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl text-white font-semibold text-center text-yellow-500 mb-20">
            Google'da Bizi Nasıl Değerlendirdiler?
          </h2>
          <Marquee direction="left" className="py-4" speed={200}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                avatar={review.avatar}
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
