"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Eye, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Güven Odaklı Yaklaşım",
    desc: "Başarı ve güven kriterlerini birlikte ele alır; değerlendirme çıktıları güven tazeleyici dokunuşlara dönüşür.",
  },
  {
    icon: Scale,
    title: "Bağımsız & Tarafsız",
    desc: "Her kategori ve büyüklükteki işletme ve iş insanları için bağımsız ve tarafsız bir değerlendirme yaklaşımı sunar.",
  },
  {
    icon: Eye,
    title: "Şeffaf Metodoloji",
    desc: "Kriter seti; rakamsal veriler, algısal analizler ve müşteri geri dönüşlerinin harmanlandığı bir çerçeveye dayanır.",
  },
  {
    icon: BadgeCheck,
    title: "Kurumsal Etki",
    desc: "Endeks çıktıları; genel, sektörel ve kurumsal gelişim adına sürdürülebilir itibar katkısı hedefler.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* üst küçük etiket */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Yaklaşımımız
          </span>
        </div>

        <h2 className="mt-6 text-center text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Güven odaklı değerlendirme mimarisi
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600 leading-relaxed">
          İş dünyasının güvenilirlik skalasını; rakamsal veriler, algısal analizler ve müşteri geri dönüşleri ile
          harmanlayarak endekse dönüştürüyoruz.
        </p>

        {/* kartlar */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
