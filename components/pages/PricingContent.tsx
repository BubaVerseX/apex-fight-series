"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import AngularButton from "@/components/ui/AngularButton";

export default function PricingContent() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-grain relative overflow-hidden bg-apex-black pb-16 pt-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(220,38,38,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-white sm:text-6xl">
            {t.pricing.pageHeading}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-apex-gray sm:text-lg">
            {t.pricing.pageIntro}
          </p>
        </div>
      </section>

      <section className="bg-apex-black-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {t.pricing.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`clip-card relative flex flex-col border p-8 ${
                  tier.featured
                    ? "border-apex-red bg-apex-black lg:-translate-y-4 lg:shadow-[0_0_50px_rgba(220,38,38,0.25)]"
                    : "border-white/10 bg-apex-black"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-8 bg-apex-red px-3 py-1 font-heading text-xs uppercase tracking-wider text-white">
                    {tier.badge}
                  </span>
                )}
                <span className="inline-block w-fit border border-apex-gray-dark px-2.5 py-1 font-heading text-[10px] uppercase tracking-wider text-apex-gray">
                  {t.pricing.placeholderNote}
                </span>
                <h2 className="mt-5 font-heading text-2xl uppercase tracking-wide text-white">
                  {tier.name}
                </h2>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-apex-red-bright">
                    {tier.price}
                  </span>
                  <span className="text-sm text-apex-gray">{tier.period}</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-apex-gray">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-apex-red-bright" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <AngularButton
                  href="/contact"
                  variant={tier.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {tier.cta}
                </AngularButton>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-xs uppercase tracking-wider text-apex-gray-dark">
            {t.pricing.footNote}
          </p>
        </div>
      </section>
    </div>
  );
}
