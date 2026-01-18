"use client";

import { features } from "@/data/features";
import { motion } from "framer-motion";

export default function FeatureCards() {
  return (
    <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <motion.article
          key={f.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: i * 0.12 }}
          className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl hover:bg-slate-50"
        >
          <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden">
            <img src={f.image} alt={f.title} className="h-full w-full object-cover" />

            {/* Sadece Endeks kartında grafik hissi için overlay */}
            {f.title === "Endeks" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
                <svg
                  className="absolute inset-0 h-full w-full opacity-70"
                  viewBox="0 0 600 240"
                  preserveAspectRatio="none"
                >
                  {/* grid */}
                  <path
                    d="M0 200 H600 M0 160 H600 M0 120 H600 M0 80 H600 M0 40 H600"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1"
                  />
                  {/* line chart */}
                  <path
                    d="M0 170 C80 120, 140 180, 220 130 C300 80, 360 150, 440 110 C520 70, 560 90, 600 60"
                    fill="none"
                    stroke="rgba(59,130,246,0.95)"
                    strokeWidth="3"
                  />
                  {/* points */}
                  <circle cx="220" cy="130" r="4" fill="rgba(255,255,255,0.9)" />
                  <circle cx="440" cy="110" r="4" fill="rgba(255,255,255,0.9)" />
                  <circle cx="600" cy="60" r="4" fill="rgba(255,255,255,0.9)" />
                </svg>
              </>
            )}
          </div>

          <div className="p-6 sm:p-8 md:p-10 text-slate-900">
            <f.Icon className="h-12 w-12 sm:h-14 sm:w-14 text-blue-600" />

            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold text-slate-900">
              {f.title}
            </h3>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-700">
              {f.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
