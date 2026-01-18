"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, LineChart, Users } from "lucide-react";

const cards = [
  {
    title: "Net amaç",
    desc: "Güven ve başarıyı birlikte ölçen bir değerlendirme yaklaşımı.",
    icon: Target,
  },
  {
    title: "İtibar etkisi",
    desc: "Güven vurgusu ile markanız için güçlü bir konumlandırma.",
    icon: ShieldCheck,
  },
  {
    title: "Analitik altyapı",
    desc: "Rakamsal + algısal analiz + geri bildirim harmanı.",
    icon: LineChart,
  },
  {
    title: "Geniş kapsama",
    desc: "Her ölçek ve kategoriden işletme ve iş insanları.",
    icon: Users,
  },
];

export default function WhySection() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* SOL */}
          <div className="lg:col-span-6 flex flex-col">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs sm:text-sm text-slate-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Endeks yaklaşımı
              </span>

              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Neden Bu Çalışma?
              </h2>

              <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
                Mevcut endeksler genellikle piyasa ve şirket verilerine odaklanmaktadır.
                Bu çalışma, iş insanları ve şirketleri birlikte ele alan güven temelli bir yaklaşım sunar.
              </p>
            </div>

            {/* Büyük kutu: sağ grid ile hizalansın diye aşağı oturtuyoruz */}
            <div className="mt-6 sm:mt-8 lg:mt-auto">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-7 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  İşletmeler / İş İnsanları Başarı ve Güven Endeksi
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Her kategori ve büyüklükteki işletme ve iş insanları üzerinden, başarı ve güven odaklı araştırmalarla
                  bağımsız ve tarafsız bir değerlendirme sunuyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* SAĞ */}
          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {cards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: i * 0.04 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
                        <Icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                          {c.title}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
