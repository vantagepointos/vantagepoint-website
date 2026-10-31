import type { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import { Logo } from "@/components/logo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "In 2014 Gabe Harter and his wife opened their first physical therapy clinic. VantagePoint OS is what they built so other outpatient PT owners don't have to figure the practice out alone.",
});

export default function OurStoryPage() {
  return (
    <>
      <main id="main" className="bg-paper">
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Our story
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy text-balance md:text-6xl md:leading-[1.05]">
            Why we built VantagePoint OS.
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink md:text-xl">
            <p>
              In 2014, my wife and I opened our first physical therapy clinic
              with one goal: take exceptional care of our patients and the
              community we call home. We were focused on the people
              walking through our doors, and we still are. But running a PT
              practice is hard, and for a few years we had more patients to be
              proud of than profits to show for it.
            </p>
            <p>
              In 2018 we opened a second clinic, and in 2022 a third. Three
              clinics, three communities.
            </p>
            <p>
              What we learned is what VantagePoint OS is built on. Own the numbers. Keep
              marketing on a steady rhythm. Put leadership at the center of the
              team.
            </p>
            <p>
              If the business side is what keeps you up at night, those three
              things are how you get back to the work you opened the clinic to
              do: making people better.
            </p>
          </div>
          <footer className="mt-14 border-t border-navy/10 pt-8">
            <Logo variant="light" className="h-8 w-auto" />
            <p className="mt-6 text-lg font-semibold text-navy">Gabe Harter, PT</p>
            <p className="text-ink">Founder</p>
          </footer>
        </article>
        <ClosingCta supporting="If our story sounds familiar, let us show you how VantagePoint OS fits." />
      </main>
    </>
  );
}
