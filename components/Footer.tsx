import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Üst kısım */}
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Kurum */}
          <div>
            <h3 className="text-xl font-semibold">
              İş Dünyası Araştırmaları Topluluğu
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Güven ve başarı odaklı bağımsız değerlendirme ve araştırmalar
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">İletişim</h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>Çalışma Ofisi: +90 531 426 98 88</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+90 531 625 08 99</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+90 542 113 64 03</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:isdunyasiarastirmalari@gmail.com"
                  className="hover:text-white transition"
                >
                  isdunyasiarastirmalari@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Adres */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Adres</h4>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="mt-1 h-4 w-4 text-blue-400" />
              <p>
                Balcalı Mah. Çuk. Üniv. Kuzey Çarşı Bölgesi No:32
                <br />
                Sarıçam / Adana
              </p>
            </div>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 İş Dünyası Araştırmaları Topluluğu. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
