"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import AngularButton from "@/components/ui/AngularButton";

const NAV_ITEMS: { key: "home" | "classes" | "pricing" | "about" | "contact"; href: string }[] = [
  { key: "home", href: "/" },
  { key: "classes", href: "/classes" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-apex-black/95 backdrop-blur-sm border-b border-white/10"
          : "bg-gradient-to-b from-black/70 to-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="APEX Fight Series"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-xl tracking-wide text-white">
            APEX
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`font-heading text-sm uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-apex-red-bright" : "text-white/85 hover:text-apex-red-bright"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle lang={lang} setLang={setLang} />
          <AngularButton href="/contact" className="text-sm">
            {t.nav.joinNow}
          </AngularButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="p-1.5 text-white"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-apex-black px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`border-b border-white/5 py-3 font-heading text-base uppercase tracking-[0.12em] ${
                    active ? "text-apex-red-bright" : "text-white/85"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </div>
          <AngularButton href="/contact" className="mt-5 w-full">
            {t.nav.joinNow}
          </AngularButton>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "en" | "ka";
  setLang: (lang: "en" | "ka") => void;
}) {
  return (
    <div className="flex items-center border border-white/20 font-heading text-xs uppercase tracking-wider">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "en" ? "bg-apex-red text-white" : "text-white/70 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ka")}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "ka" ? "bg-apex-red text-white" : "text-white/70 hover:text-white"
        }`}
        aria-pressed={lang === "ka"}
      >
        GE
      </button>
    </div>
  );
}
