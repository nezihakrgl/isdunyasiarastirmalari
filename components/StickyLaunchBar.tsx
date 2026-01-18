"use client";

import { Sparkles, TrendingUp, X } from "lucide-react";
import { useState } from "react";

export default function StickyLaunchBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4">
        {/* Sol */}
        <div className="flex items-center gap-3 text-sm text-slate-700">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-semibold text-slate-900">
              Yılın İşletmeleri / İş İnsanları
            </span>
            <span className="text-blue-600 font-semibold">
              Başarı & Güven Endeksi
            </span>
            <span className="hidden sm:inline text-slate-500">
              ·
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              Veriler çok yakında açıklanıyor
            </span>
            <span className="ml-2 inline-flex items-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
              Yakında
            </span>
          </div>
        </div>

        {/* Sağ */}
        <div className="flex items-center gap-3">
          <a
            href="#endeks"
            className="hidden sm:inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Endeksi Gör
          </a>

          <button
            onClick={() => setVisible(false)}
            className="rounded-md p-2 text-slate-400 hover:text-slate-600 transition"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
