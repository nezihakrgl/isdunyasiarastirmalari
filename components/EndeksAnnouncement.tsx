import Image from "next/image";
import { Newspaper, BadgeCheck, Sparkles } from "lucide-react";

export default function EndeksAnnouncement() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Üst başlık */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/10">
            <Newspaper className="h-5 w-5 text-blue-700" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-slate-500">Duyuru</p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Endeks Değerlendirme Duyurusu
            </h2>
          </div>
        </div>

        {/* Haber kartı */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* Görsel */}
            <div className="relative h-56 sm:h-72 lg:col-span-5 lg:h-full min-h-[280px]">
              <Image
                src="https://im.haberturk.com/l/2022/12/22/ver1671697211/3549562/jpg/1200x628"
                alt="Baykar ve Selçuk Bayraktar – Endeks Değerlendirme Duyurusu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Hafif overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
              {/* Etiket */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 ring-1 ring-white/40 backdrop-blur">
                <Sparkles className="h-4 w-4 text-blue-700" />
                İlk açıklama
              </div>
            </div>

            {/* Metin */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              <p className="text-sm text-slate-500">
                Başarı ve güven odaklı değerlendirme
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                2026 Dönemi İlk Endeks Değerlendirmesi
              </h3>

              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700">
                <p>
                  Başarı ve güven odaklı endeks değerlendirmemiz kapsamında; ilgili
                  kategori kriterleri, veri temelli analizler, algısal ölçümler ve geri
                  bildirimler birlikte ele alınmıştır. Bu çerçevede{" "}
                  <span className="font-semibold text-slate-900">
                    Selçuk Bayraktar
                  </span>{" "}
                  için{" "}
                  <span className="font-semibold text-slate-900">
                    “Yılın Zirvedekiler Global İş İnsanı Prestij Ödülü”
                  </span>{" "}
                  uygun görülürken,{" "}
                  <span className="font-semibold text-slate-900">Baykar</span>{" "}
                  için{" "}
                  <span className="font-semibold text-slate-900">
                    “Yılın Küresel Milli Gurur”
                  </span>{" "}
                  unvanı değerlendirme sonucu uygun görülmüştür.
                </p>

                <p className="text-sm text-slate-500">
                  Bu duyuru; endeks metodolojisi kapsamında yürütülen çok boyutlu
                  değerlendirme çıktılarının kamuoyuna bilgilendirme amacıyla
                  paylaşılmasıdır.
                </p>
              </div>

              {/* Ödül etiketleri */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                      <BadgeCheck className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Yılın İş İnsanı
                      </p>
                      <p className="text-sm text-slate-600">
                        Yılın Zirvedekiler Global İş İnsanı Prestij Ödülü
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                      <BadgeCheck className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Yılın İşletmesi
                      </p>
                      <p className="text-sm text-slate-600">
                        Yılın Küresel Milli Gurur
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt mini çizgi */}
              <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
                <span>İş Dünyası Araştırmaları Topluluğu</span>
                <span>Güncelleme: 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
