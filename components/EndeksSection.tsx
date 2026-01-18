"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function EndeksSection() {
  return (
    <section id="endeks" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Lacivert - etkili başlık bandı (ilkel görünmesin diye modern kart + pattern) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-8 py-14 text-white shadow-2xl">
          {/* arka pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 400"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 250 C200 180, 300 320, 520 240 C740 160, 880 260, 1200 190"
                stroke="rgba(255,255,255,0.20)"
                strokeWidth="2"
              />
              <path
                d="M0 290 C220 210, 320 350, 560 260 C800 170, 930 300, 1200 210"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide">
               
              </div>

              <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Yılın İşletmeleri / İş İnsanları <br />
                <span className="text-blue-300">Başarı ve Güven Endeksi</span>
              </h2>

              <p className="mt-4 max-w-3xl text-base text-white/80 md:text-lg">
                Veriler çok yakında kamuoyuyla paylaşılacaktır.
              </p>

              <div className="mt-10 grid w-full gap-4 md:grid-cols-4">
                <StatCard
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Bağımsız & Tarafsız"
                  desc="Kamu yararı gözeten şeffaf yaklaşım."
                />
                <StatCard
                  icon={<TrendingUp className="h-5 w-5" />}
                  title="Algı + Veri + Geri Bildirim"
                  desc="Rakamsal ve algısal analizlerin sentezi."
                />
                <StatCard
                  icon={<BarChart3 className="h-5 w-5" />}
                  title="Sektörel & Kurumsal"
                  desc="Genel ve sektörel haritalama."
                />
                <StatCard
                  icon={<Sparkles className="h-5 w-5" />}
                  title="Güven Tazeleyici"
                  desc="İtibar ve prestije odaklı dokunuşlar."
                />
              </div>
            </div>
          </motion.div>
        </div>
 <div className="mt-10">
          <SectionTitle
            icon={TrendingUp}
            title="İşletmeler / İş İnsanları Başarı ve Güven Endeksi"
            subtitle="Her kategori ve büyüklükteki işletme ve iş insanları üzerinden, başarı ve güven odaklı araştırmalarla bağımsız ve tarafsız bir değerlendirme sunuyoruz."
          />

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Biz kimiz? / Hakkımızda</h3>
            <p className="mt-3 leading-7 text-slate-700">
              İş dünyasının, iş insanlarının, markaların, kobilerin ve her sektörde/ kategorideki işletmenin başarı ve
              güvenilirlik skalasını, haritasını çıkartan, ayrıntılı rakamsal, algısal analizleri müşteri geri dönüşleri
              ile harmanlayan, verileri bir endekse dökerek iş insanı ve/veya işletmenin genel, sektörel ve kurumsal
              gelişimi adına GÜVEN tazeleyici dokunuşlara dönüştüren bir derecelendirme oluşumuyuz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 text-left backdrop-blur-sm">
      <div className="flex items-center gap-2 text-white/90">
        {icon}
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}
