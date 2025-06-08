import { Phone, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <div className="bg-black py-16 px-6 sm:px-12 ">
      <h3 className="text-yellow-500 text-4xl font-semibold sm:text-4xl text-center mb-20">
        İletişim ve Ulaşım Bilgilerimiz
      </h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40 text-center md:text-left">
        <div className="flex flex-col  items-center md:items-start">
          <Phone className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
          <h3 className="text-lg font-semibold text-yellow-500 mb-2">
            Bizimle iletişime geçin
          </h3>
          <p className="text-white">0 507 898 6888</p>
          <p className="text-white">0 507 898 6888</p>
          <p className="text-white">softlinekaplama@hotmail.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start">
          <MapPin className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
          <h3 className="text-lg font-semibold text-yellow-500 mb-2">
            Adresimiz
          </h3>
          <p className="text-white">Sanayi Mah. 3232 Sokak No:47</p>
          <p className="text-white">Isparta/Merkez</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Clock className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
          <h3 className="text-lg font-semibold text-yellow-500 mb-2">
            Çalışma saatlerimiz
          </h3>
          <p className="text-white">Monday – Friday: 8 am - 6 pm</p>
          <p className="text-white">Saturday: 8 am - 3 pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
