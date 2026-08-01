"use client";

import { Swords, HandFist, Flame, HandGrab, Dumbbell, Baby, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import AngularButton from "@/components/ui/AngularButton";

const CLASS_ICONS = [Swords, HandFist, Flame, HandGrab, Dumbbell, Baby];

export default function ClassesContent() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-grain relative overflow-hidden bg-apex-black pb-20 pt-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(220,38,38,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-white sm:text-6xl">
            {t.classes.pageHeading}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-apex-gray sm:text-lg">
            {t.classes.pageIntro}
          </p>
          <p className="mx-auto mt-4 inline-block border border-apex-red/40 bg-apex-red/10 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.15em] text-apex-red-bright">
            {t.classes.placeholderScheduleNote}
          </p>
        </div>
      </section>

      <section className="bg-apex-black-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.classes.items.map((item, i) => {
              const Icon = CLASS_ICONS[i % CLASS_ICONS.length];
              return (
                <div
                  key={item.name}
                  className="clip-card flex flex-col border border-white/10 bg-apex-black transition-colors hover:border-apex-red/50"
                >
                  <PhotoPlaceholder label={item.name} aspect="video" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-7 w-7 text-apex-red-bright" strokeWidth={1.75} />
                      <h2 className="font-heading text-xl uppercase tracking-wide text-white">
                        {item.name}
                      </h2>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-apex-gray">
                      {item.description}
                    </p>
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
                      <div className="flex items-center gap-2 text-apex-gray">
                        <TrendingUp className="h-4 w-4 text-apex-red" />
                        <span className="font-heading uppercase tracking-wider text-white/70">
                          {t.classes.levelLabel}:
                        </span>
                        <span>{item.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-apex-gray">
                        <Clock className="h-4 w-4 text-apex-red" />
                        <span className="font-heading uppercase tracking-wider text-white/70">
                          {t.classes.scheduleLabel}:
                        </span>
                        <span>{item.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <AngularButton href="/pricing">{t.nav.pricing}</AngularButton>
          </div>
        </div>
      </section>
    </div>
  );
}
