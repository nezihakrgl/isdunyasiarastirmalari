"use client";

import { motion } from "framer-motion";

export default function Announcement() {
  return (
    <section className="bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-6 text-center"
      >
        <p className="text-lg font-semibold text-blue-900">
          Yılın işletmeleri / iş insanları{" "}
          <span className="text-blue-600">
            güven endeksi verileri çok yakında
          </span>
        </p>
      </motion.div>
    </section>
  );
}
