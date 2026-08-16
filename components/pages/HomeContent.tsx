"use client";

import Link from "next/link";
import {
  Swords,
  HandFist,
  Flame,
  HandGrab,
  Dumbbell,
  Baby,
  Users,
  Timer,
  Award,
  Trophy,
  Quote,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import AngularButton from "@/components/ui/AngularButton";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import LogoMark from "@/components/ui/LogoMark";

const CLASS_ICONS = [Swords, HandFist, Flame, HandGrab, Dumbbell, Baby];

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="bg-grain relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,38,38,0.16), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.3em] text-apex-red-bright">
              {t.home.heroEyebrow}
            </p>
            <h1 className="mt-4 font-display text-[15vw] leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              {t.home.heroHeadline1}
              <br />
              <span className="text-apex-red-bright">{t.home.heroHeadline2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-apex-gray sm:text-lg">
              {t.home.heroSubheadline}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <AngularButton href="/classes">{t.home.ctaPrimary}</AngularButton>
              <AngularButton href="/contact" variant="outline">
                {t.home.ctaSecondary}
              </AngularButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* width/height capped at 600 so the 2x srcset (1200px) stays below
                logo.png's native 1804px — at or above native size Next's WebP
                encoder drops the alpha channel and flattens transparency to black */}
            <LogoMark
              src="/logo.png"
              alt="APEX Fight Series logo"
              width={600}
              height={600}
              preload
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-apex-black-soft clip-diagonal-up" />
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <PhotoPlaceholder label="Training Session" aspect="video" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <h2 className="slash-accent font-display text-3xl text-white sm:text-4xl">
              {t.home.introHeading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-apex-gray sm:text-lg">
              {t.home.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* CLASS HIGHLIGHTS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              {t.home.highlightsHeading}
            </h2>
            <p className="mt-4 text-apex-gray">{t.home.highlightsSubheading}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.classes.items.map((item, i) => {
              const Icon = CLASS_ICONS[i % CLASS_ICONS.length];
              return (
                <div
                  key={item.name}
                  className="clip-card group border border-white/10 bg-apex-black-soft p-6 transition-colors hover:border-apex-red/50"
                >
                  <Icon className="h-8 w-8 text-apex-red-bright" strokeWidth={1.75} />
                  <h3 className="mt-4 font-heading text-lg uppercase tracking-wide text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-apex-gray">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/classes"
              className="inline-flex items-center gap-1 font-heading text-sm uppercase tracking-[0.15em] text-apex-red-bright hover:text-white"
            >
              {t.home.seeFullSchedule}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-apex-red py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Users, value: "500+", label: t.home.statsLabels.members },
            { icon: Timer, value: "12", label: t.home.statsLabels.weeklyClasses },
            { icon: Award, value: "6", label: t.home.statsLabels.coaches },
            { icon: Trophy, value: "8", label: t.home.statsLabels.years },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="h-6 w-6 text-white/80" strokeWidth={1.75} />
              <span className="mt-2 font-display text-4xl text-white sm:text-5xl">
                {value}
              </span>
              <span className="mt-1 font-heading text-xs uppercase tracking-[0.15em] text-white/85 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-apex-red-bright">
            {t.home.testimonialHeading}
          </p>
          <Quote className="mx-auto mt-6 h-8 w-8 text-apex-red/50" />
          <p className="mt-6 font-display text-2xl leading-snug text-white sm:text-3xl">
            &ldquo;{t.home.testimonialQuote}&rdquo;
          </p>
          <p className="mt-6 font-heading text-sm uppercase tracking-wider text-white">
            {t.home.testimonialName}
          </p>
          <p className="text-xs uppercase tracking-wider text-apex-gray-dark">
            {t.home.testimonialRole}
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-grain relative overflow-hidden py-24 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(220,38,38,0.18), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            {t.home.ctaBottomHeading}
          </h2>
          <p className="mt-5 text-apex-gray">{t.home.ctaBottomBody}</p>
          <div className="mt-9 flex justify-center">
            <AngularButton href="/pricing">{t.home.ctaBottomButton}</AngularButton>
          </div>
        </div>
      </section>
    </div>
  );
}
