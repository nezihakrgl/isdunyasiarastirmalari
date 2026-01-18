"use client";

import { motion } from "framer-motion";
import {
  ClipboardSignature,
  SearchCheck,
  Gauge,
  Award,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Başvuru",
    highlight: "Doğal adaylık başlar",
    desc:
      "İşletmeniz/ kendiniz adına ilgili kategoride güven endeksine girme adayı olarak başvurunuzu gerçekleştirirsiniz.",
    icon: ClipboardSignature,
  },
  {
    no: "02",
    title: "Analiz",
    highlight: "Parametre bazlı inceleme",
    desc:
      "Değerlendirmeye alınan başvurunuz (tercihinize göre işletmeniz/şirketiniz/kendiniz) belirlenmiş bir çok parametre üzerinden analiz edilir.",
    icon: SearchCheck,
  },
  {
    no: "03",
    title: "Skorlama",
    highlight: "Başarı & güven ölçümü",
    desc:
      "Başarı ve güven kriterlerine göre ölçümleme yapılarak güven endeksine girme hakkına sahip olup olamayacağı(nız) belirlenir.",
    icon: Gauge,
  },
  {
    no: "04",
    title: "Endeks & Ödül",
    highlight: "Rozet / sertifika",
    desc:
      "Değerlendirme sürecini başarıyla geçip endekse girmeye hak kazananların tamamına kategori ve başarısına göre özel ödül verilir.",
    icon: Award,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Timeline() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Süreç
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Başvurudan endeks/ödüle uzanan akış; net, anlaşılır ve ölçeklenebilir bir çerçevede yürütülür.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, idx) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.no}
                variants={item}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md"
              >
                {/* top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-blue-600/80 opacity-60 group-hover:opacity-100 transition" />

                {/* step row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 shrink-0">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500">
                        ADIM {s.no}
                      </div>
                      <h3 className="mt-1 text-base sm:text-lg font-semibold text-slate-900">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* small index dot */}
                  <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                </div>

                <p className="mt-4 text-sm font-medium text-blue-800">
                  {s.highlight}
                </p>

                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {s.desc}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                  <span>Detaylı değerlendirme</span>
                  <span className="inline-flex items-center gap-1 font-medium text-blue-700 opacity-0 transition group-hover:opacity-100">
                    İncele <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* connector (only desktop) */}
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block pointer-events-none absolute -right-3 top-10 h-px w-6 bg-slate-200" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
