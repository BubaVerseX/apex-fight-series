"use client";

import { useLanguage } from "@/lib/i18n/context";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function AboutContent() {
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
            {t.about.pageHeading}
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="slash-accent font-display text-3xl text-white sm:text-4xl">
              {t.about.storyHeading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-apex-gray sm:text-lg">
              {t.about.storyBody}
            </p>
          </div>
          <PhotoPlaceholder label="Studio / Gym Floor" aspect="video" />
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <PhotoPlaceholder label="Coaching / Sparring" aspect="video" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <h2 className="slash-accent font-display text-3xl text-white sm:text-4xl">
              {t.about.missionHeading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-apex-gray sm:text-lg">
              {t.about.missionBody}
            </p>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              {t.about.coachesHeading}
            </h2>
            <p className="mt-4 inline-block border border-apex-red/40 bg-apex-red/10 px-4 py-1.5 font-heading text-xs uppercase tracking-[0.15em] text-apex-red-bright">
              {t.about.coachesNote}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.coaches.map((coach) => (
              <div
                key={coach.name}
                className="clip-card border border-white/10 bg-apex-black transition-colors hover:border-apex-red/50"
              >
                <PhotoPlaceholder label={coach.name} aspect="square" />
                <div className="p-5">
                  <h3 className="font-heading text-lg uppercase tracking-wide text-white">
                    {coach.name}
                  </h3>
                  <p className="mt-1 font-heading text-xs uppercase tracking-wider text-apex-red-bright">
                    {coach.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-apex-gray">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
