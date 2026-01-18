export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-10 md:p-14">
        
        {/* küçük vurgu çizgisi */}
        <div className="absolute top-0 left-10 h-1 w-24 bg-blue-600 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          Biz Kimiz?
        </h2>

        <p className="text-slate-600 leading-relaxed text-lg">
          İş Dünyası Araştırmaları; iş insanları, markalar, KOBİ’ler ve tüm
          sektörlerde faaliyet gösteren işletmeler için{" "}
          <strong className="text-slate-800">
            başarı ve güvenilirliği birlikte ölçen
          </strong>{" "}
          bağımsız bir değerlendirme ve endeksleme oluşumudur.
        </p>

        <p className="text-slate-600 leading-relaxed text-lg mt-5">
          Rakamsal veriler, algısal analizler ve gerçek kullanıcı geri
          bildirimleriyle desteklenen çok boyutlu metodolojimiz sayesinde,
          elde edilen veriler sektörel ve kurumsal düzeyde analiz edilerek
          <strong className="text-slate-800">
            {" "}
            başarı ve güven endekslerine
          </strong>{" "}
          dönüştürülür.
        </p>

        <p className="text-slate-600 leading-relaxed text-lg mt-5">
          Hedefimiz; işletmelerin ve iş insanlarının gelişimini destekleyen,
          güveni ölçülebilir hale getiren ve itibarı kalıcı bir değere
          dönüştüren referans sistemleri oluşturmaktır.
        </p>
      </div>
    </section>
  );
}
