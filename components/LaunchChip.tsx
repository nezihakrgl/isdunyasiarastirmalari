"use client";

import { motion } from "framer-motion";

export default function LaunchChip() {
  return (
    <motion.a
      href="#endeks"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="
        fixed bottom-6 right-6 z-[55]
        rounded-2xl
        px-5 py-4
        bg-blue-600 text-white
        shadow-2xl
        border border-white/20
      "
    >
      <div className="text-xs uppercase tracking-[0.22em] text-white/80">
        Çok Yakında
      </div>
      <div className="mt-1 text-sm font-semibold">
        Başarı & Güven Endeksi
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[22px] bg-blue-500/25 blur-xl" />
    </motion.a>
  );
}
