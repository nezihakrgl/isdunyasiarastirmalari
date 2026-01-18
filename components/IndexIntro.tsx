"use client";

import { motion } from "framer-motion";

export default function IndexIntro() {
  return (
    <section className="bg-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl rounded-3xl bg-slate-50 p-10 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          İşletmeler / İş İnsanları <br />
          <span className="text-blue-600">
            Başarı ve Güven Endeksi
          </span>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Her kategori ve büyüklükteki işletme ve iş insanları üzerinden,
          başarı ve güven odaklı araştırmalarla bağımsız ve tarafsız bir
          değerlendirme sunuyoruz.
        </p>
      </motion.div>
    </section>
  );
}
