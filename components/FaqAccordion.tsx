"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck } from "lucide-react";
import { faq } from "@/data/faq";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sss" className="mx-auto max-w-4xl py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Başlık */}
      <div className="mb-8 sm:mb-10 flex flex-wrap items-center gap-3">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Sık Sorulan Sorular
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Süreç, değerlendirme ve endeks hakkında en çok merak edilenler
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {faq.map((item, i) => {
          const isOpen = open === i;

          return (
            <div key={i} className="border-t border-slate-200 first:border-t-0">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition"
              >
                <span className="min-w-0 break-words text-[15px] sm:text-[16px] md:text-[17px] font-semibold text-slate-900">
                  {item.q}
                </span>

                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                              ring-1 transition ${
                                isOpen
                                  ? "bg-blue-600 text-white ring-blue-600"
                                  : "bg-white text-slate-500 ring-slate-200 hover:ring-slate-300"
                              }`}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6">
                      <div className="rounded-xl bg-slate-50 p-4 sm:p-5 ring-1 ring-slate-100">
                        <p className="whitespace-pre-line text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
