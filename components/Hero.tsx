"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] sm:min-h-[78vh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt="Şehir ve iş dünyası"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Blue overlays */}
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/35 via-blue-900/55 to-blue-950/70" />
      </div>

      {/* SOL ÜST – ÇOK YAKINDA (RESPONSIVE) */}
      <div className="
  relative z-20
  mx-auto max-w-7xl px-4 pt-4
  md:absolute md:left-6 md:top-6 md:px-0 md:pt-0
">

        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-gradient-to-br from-[#0B1F3B] via-[#0E2A52] to-[#102F5E]
            px-5 py-4
            shadow-2xl shadow-[#0B1F3B]/50
            ring-1 ring-white/15
            backdrop-blur
            w-[min(92vw,320px)]
          "
        >
          {/* Lacivert Glow */}
          <div className="absolute inset-0 -z-10 bg-[#0B1F3B]/40 blur-2xl" />

          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
              Çok Yakında
            </span>

            <span className="text-sm font-semibold text-white">
              Başarı &amp; Güven Endeksi
            </span>

            <span className="text-xs text-white/70 leading-snug">
              Yılın işletmeleri ve iş insanları için güven endeksi verileri çok
              yakında açıklanıyor.
            </span>
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] sm:min-h-[78vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div className="mb-4 text-[10px] sm:text-xs font-semibold tracking-[0.32em] sm:tracking-[0.35em] text-white/80">
          İŞ DÜNYASI ARAŞTIRMALARI TOPLULUĞU
        </div>

        <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          İş Dünyasında Güven ve Başarıyı Ölçüyoruz
        </h1>

        <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 px-1">
          İşletmeler ve iş insanları üzerinden yürütülen güven temelli
          araştırmalarla, başarı ve güven odaklı bağımsız ve tarafsız bir
          değerlendirme sunuyoruz.
        </p>

        {/* Mobilde alt alta, sm'de yan yana */}
        <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href="#ne-yapiyoruz"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white/90"
          >
            Ne Yapıyoruz? <span className="ml-2">→</span>
          </a>

          <a
            href="#endeks"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            Endeksi İncele
          </a>
        </div>

        {/* Alt mini bilgi satırı */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-white/70">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
            Bağımsız &amp; Tarafsız
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
            Veri + Algı + Geri Bildirim
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
            Sektörel &amp; Kurumsal analiz
          </span>
        </div>
      </div>
    </section>
  );
}
