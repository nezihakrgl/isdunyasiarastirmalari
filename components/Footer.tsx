import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Üst kısım */}
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Kurum */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              İş Dünyası Araştırmaları Topluluğu
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Güven ve başarı odaklı bağımsız değerlendirme ve araştırmalar
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="mb-4 text-base sm:text-lg font-semibold">
              İletişim
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span>Çalışma Ofisi: +90 531 426 98 88</span>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <a
                  href="mailto:isdunyasiarastirmalari@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  isdunyasiarastirmalari@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Adres */}
          <div>
            <h4 className="mb-4 text-base sm:text-lg font-semibold">
              Adres
            </h4>
            <div className="flex items-start justify-center md:justify-start gap-3 text-sm text-white/70">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
              <p className="leading-relaxed">
                Balcalı Mah. Çuk. Üniv. Kuzey Çarşı Bölgesi No:32
                <br />
                Sarıçam / Adana
              </p>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 text-center text-xs sm:text-sm text-white/50">
          © 2026 İş Dünyası Araştırmaları Topluluğu. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
