"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import InstagramIcon from "@/components/icons/InstagramIcon";

const NAV_ITEMS: { key: "home" | "classes" | "pricing" | "about" | "contact"; href: string }[] = [
  { key: "home", href: "/" },
  { key: "classes", href: "/classes" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-apex-black-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="APEX Fight Series"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg tracking-wide text-white">
                APEX
              </span>
            </Link>
            <p className="mt-4 font-heading text-sm uppercase tracking-[0.12em] text-apex-gray">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-apex-gray transition-colors hover:text-apex-red-bright"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-white">
              {t.footer.contactHeading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-apex-gray">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-apex-red" />
                <span>{t.footer.addressLine}</span>
              </li>
              <li>
                <a href="mailto:info@apexfightseries.ge" className="hover:text-apex-red-bright">
                  info@apexfightseries.ge
                </a>
              </li>
              <li>
                <a href="tel:+995555000000" className="hover:text-apex-red-bright">
                  +995 555 00 00 00
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-white">
              {t.footer.followHeading}
            </h3>
            <a
              href="https://www.instagram.com/apex_fightseries/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-apex-gray transition-colors hover:text-apex-red-bright"
            >
              <InstagramIcon className="h-4 w-4" />
              @apex_fightseries
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-apex-gray-dark sm:flex-row">
          <p>
            © {year} APEX Fight Series. {t.footer.rights}
          </p>
          <p className="font-heading uppercase tracking-[0.15em]">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
