"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function AnticipationWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed bottom-6 right-6 z-50
        w-[300px]
        rounded-2xl
        bg-white
        border border-slate-200
        shadow-xl
        backdrop-blur
      "
    >
      <div className="p-5">
        {/* Üst küçük durum */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          Endeks hazırlanıyor
        </div>

        {/* Ana içerik */}
        <div className="mt-4">
          <div className="flex items-center gap-2 text-blue-600">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-semibold">
              Başarı & Güven Endeksi
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            Yılın <strong>İşletmeleri</strong> ve <strong>İş İnsanları</strong>
          </p>

          <div className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white">
            Çok Yakında
          </div>
        </div>
      </div>
    </motion.div>
  );
}
