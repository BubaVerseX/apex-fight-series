"use client";

import { MapPin, Phone, Mail, Send, MapPinned } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import AngularButton from "@/components/ui/AngularButton";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-grain relative overflow-hidden pb-16 pt-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(220,38,38,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-white sm:text-6xl">
            {t.contact.pageHeading}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-apex-gray sm:text-lg">
            {t.contact.pageIntro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Contact info + map */}
          <div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-apex-red/40 bg-apex-red/10">
                  <MapPin className="h-5 w-5 text-apex-red-bright" />
                </span>
                <div>
                  <p className="font-heading text-xs uppercase tracking-wider text-apex-gray">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-1 text-white">{t.contact.addressValue}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-apex-red/40 bg-apex-red/10">
                  <Phone className="h-5 w-5 text-apex-red-bright" />
                </span>
                <div>
                  <p className="font-heading text-xs uppercase tracking-wider text-apex-gray">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-1 text-white">{t.contact.phoneValue}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-apex-red/40 bg-apex-red/10">
                  <Mail className="h-5 w-5 text-apex-red-bright" />
                </span>
                <div>
                  <p className="font-heading text-xs uppercase tracking-wider text-apex-gray">
                    {t.contact.emailLabel}
                  </p>
                  <p className="mt-1 text-white">{t.contact.emailValue}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-apex-red/40 bg-apex-red/10">
                  <InstagramIcon className="h-5 w-5 text-apex-red-bright" />
                </span>
                <div>
                  <p className="font-heading text-xs uppercase tracking-wider text-apex-gray">
                    {t.contact.instagramLabel}
                  </p>
                  <a
                    href="https://www.instagram.com/apex_fightseries/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-white hover:text-apex-red-bright"
                  >
                    {t.contact.instagramValue}
                  </a>
                </div>
              </li>
            </ul>

            <div className="clip-card mt-8 flex aspect-[4/3] flex-col items-center justify-center gap-3 border border-white/10 bg-[repeating-linear-gradient(135deg,#1c1c1c,#1c1c1c_10px,#141414_10px,#141414_20px)] text-center">
              <MapPinned className="h-8 w-8 text-apex-red/70" strokeWidth={1.5} />
              <span className="max-w-xs px-4 font-heading text-xs uppercase tracking-[0.15em] text-apex-gray">
                {t.contact.mapPlaceholder}
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="clip-card border border-white/10 bg-apex-black p-6 sm:p-8">
            <h2 className="font-heading text-xl uppercase tracking-wide text-white">
              {t.contact.formHeading}
            </h2>
            <form
              className="mt-6 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-heading text-xs uppercase tracking-wider text-apex-gray"
                >
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  type="text"
                  className="clip-card-sm w-full border border-white/15 bg-apex-black-soft px-4 py-3 text-white outline-none placeholder:text-apex-gray-dark focus:border-apex-red"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-heading text-xs uppercase tracking-wider text-apex-gray"
                >
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  type="email"
                  className="clip-card-sm w-full border border-white/15 bg-apex-black-soft px-4 py-3 text-white outline-none placeholder:text-apex-gray-dark focus:border-apex-red"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-heading text-xs uppercase tracking-wider text-apex-gray"
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="clip-card-sm w-full resize-none border border-white/15 bg-apex-black-soft px-4 py-3 text-white outline-none placeholder:text-apex-gray-dark focus:border-apex-red"
                />
              </div>
              <AngularButton type="submit" className="w-full">
                <Send className="h-4 w-4" />
                {t.contact.formSubmit}
              </AngularButton>
              <p className="text-center text-xs uppercase tracking-wider text-apex-gray-dark">
                {t.contact.formNote}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
