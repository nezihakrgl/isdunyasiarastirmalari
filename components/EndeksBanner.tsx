export default function EndeksBanner() {
  return (
    <section className="w-full bg-[#123C8C] relative overflow-hidden">
      {/* Arka plan çizgileri (hafif) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/graph-pattern.svg')] bg-repeat" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
        {/* Üst başlık */}
        <h2 className="text-lg md:text-xl font-medium tracking-wide">
          Yılın İşletmeleri / İş İnsanları
        </h2>

        {/* Ana başlık */}
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#8EC3FF]">
          Başarı ve Güven Endeksi
        </h1>

        {/* Alt açıklama */}
        <p className="mt-6 text-base md:text-lg text-white/90">
          Veriler çok yakında kamuoyuyla paylaşılacaktır.
        </p>

        {/* Alt çizgi */}
        <div className="mt-8 flex justify-center">
          <span className="block w-24 h-1 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
