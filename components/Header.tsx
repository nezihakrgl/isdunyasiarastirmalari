"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Info, Mail } from "lucide-react";

const navItems = [
  { label: "Ne Yapıyoruz?", href: "#ne-yapiyoruz" },
  { label: "Endeks", href: "#endeks" },
  { label: "Hakkımızda", href: "#hakkimizda" },
   { label: "Başkan’dan Mesaj", href: "#baskandan-mesaj" },
  { label: "SSS", href: "#sss" },

];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Mobil menü açıkken sayfayı kilitle (scroll olmasın)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo / Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 min-w-0"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white">
            İDA
          </div>

          {/* mobilde taşmayı engelle */}
          <div className="leading-tight min-w-0">
            <div className="text-sm font-semibold text-slate-900 truncate">
              İş Dünyası Araştırmaları
            </div>
            <div className="text-xs text-slate-500 truncate">
              Başarı ve güven odaklı değerlendirme
            </div>
          </div>
        </a>

        {/* Desktop Nav (lg ve üstünde göster) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#hakkimizda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hakkimizda");
            }}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <Info className="h-4 w-4" />
            Bilgi
          </a>

          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#iletisim");
            }}
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <Mail className="h-4 w-4" />
            İletişim
          </a>

          <a
            href="#endeks"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#endeks");
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            Endeksi İncele <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle (lg altı) */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel + overlay */}
      {open && (
        <div className="lg:hidden">
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="fixed left-0 right-0 top-14 border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobil ek kısa aksiyonlar */}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href="#hakkimizda"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#hakkimizda");
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <Info className="h-4 w-4" /> Bilgi
                  </a>

                  <a
                    href="#iletisim"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#iletisim");
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <Mail className="h-4 w-4" /> İletişim
                  </a>
                </div>

                <a
                  href="#endeks"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#endeks");
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Endeksi İncele <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
