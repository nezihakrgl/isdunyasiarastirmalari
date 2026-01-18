import Image from "next/image";
import { Quote } from "lucide-react";

export default function PresidentMessage() {
  return (
    <section id="baskandan-mesaj" className="py-14 sm:py-16 md:py-20 bg-white scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Başlık şeridi */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-blue-600/10 flex items-center justify-center">
            <Quote className="h-5 w-5 text-blue-700" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-slate-500">Kurumsal bakış</p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Başkan’dan Mesaj
            </h2>
          </div>
        </div>

        {/* Ana blok */}
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 shadow-sm">
          {/* Dekor blur */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-slate-900/5 blur-3xl" />

          {/* ✅ Responsive padding + tek kolon / lg 2 kolon */}
          <div className="relative grid gap-6 sm:gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:p-10">
            {/* SOL: Profil */}
            <aside className="h-full min-w-0">
              <div className="h-full rounded-2xl border border-slate-200 bg-white/80 p-5 sm:p-6 backdrop-blur flex flex-col">
                <div className="flex items-center gap-4 min-w-0">
                  {/* ✅ Foto responsive */}
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden ring-2 ring-slate-100 shrink-0">
                    <Image
                      src="/oguzhan-gurhani.png"
                      alt="Oğuzhan Gürhani"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80px, 96px"
                      priority
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-blue-700">BAŞKAN</p>
                    <h3 className="truncate text-base sm:text-lg font-semibold text-slate-900">
                      Oğuzhan Gürhani
                    </h3>
                    <p className="text-sm text-slate-600">Ekonomist</p>
                  </div>
                </div>

                {/* Sol kartın içeriği esneyip imzayı alta iter */}
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700 flex-1">
                  <p>
                    2023 genel seçimlerinde Sn. C.başkanımız tarafından Adana
                    m.vekili adayı olarak gösterilmiştir.
                  </p>
                  <p>
                    Halen Gençlik ve Spor Bakanlığı Çukurova Üniversitesi Genç Ofis
                    ’in başındadır. Aynı zamanda da bu güzide kamu kuruluşumuzun
                    kurucu sorumlusudur. 7 yıldır aynı görevi sürdürmektedir.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Oğuzhan Gürhani</p>
                  <p className="text-sm text-slate-600">Başkan</p>
                </div>
              </div>
            </aside>

            {/* SAĞ: Mesaj */}
            <div className="h-full min-w-0">
              <div className="h-full rounded-2xl border border-slate-200 bg-white/70 p-6 sm:p-8 backdrop-blur">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <Quote className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                      Güven, iş dünyasının en güçlü sermayesidir.
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                      İşletmelerin ve iş insanlarının başarı hikâyeleri kadar, bu başarıyı
                      taşıyan güven algısı da ölçülebilir ve geliştirilebilir bir değerdir.
                      Bu endeks; rakamsal veriler, algısal analizler ve geri bildirimleri
                      aynı potada buluşturarak daha şeffaf, daha anlaşılır ve daha güçlü
                      bir değerlendirme çerçevesi sunmayı hedefler.
                    </p>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                      Amacımız; elde edilen çıktıları yalnızca bir “sonuç” olarak değil,
                      işletmeler ve iş insanları için kurumsal gelişimi destekleyen, itibarı
                      güçlendiren ve güven tazeleyen somut dokunuşlara dönüştürmektir.
                    </p>
                  </div>
                </div>

                {/* KALDIRILDI: Alttaki 3 kart */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
