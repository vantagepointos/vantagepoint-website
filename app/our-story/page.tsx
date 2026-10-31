import type { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import { Logo } from "@/components/logo";
import { JsonLd } from "@/components/json-ld";
import { PAGE_SEO } from "@/lib/page-seo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: PAGE_SEO.story.title,
  path: "/our-story",
  description: PAGE_SEO.story.description,
});

export default function OurStoryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Story", path: "/our-story" },
        ])}
      />
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
              In 2014, my wife and I finally decided to open our own physical
              therapy practice. We started our first clinic with one goal: take
              exceptional care of our patients in the community we call home.
              We were focused on the people walking through our doors, and
              before long, those patients felt like family. Our reputation
              grew.
            </p>
            <p>
              But running a physical therapy practice is hard. For our first
              ten years, we struggled. Our margins were lower than we&apos;d
              like to admit, and that strain showed up in our culture too. No
              matter how hard we worked, nothing seemed to change.
            </p>
            <p>
              In 2018 we opened a second clinic, and in 2022 a third. Three
              clinics, three communities. Through all of it, we worked hard,
              learned a lot, and studied everything we could about what makes a
              practice healthy.
            </p>
            <p className="text-xl font-medium leading-snug text-navy md:text-2xl">
              The lessons we learned are what VantagePoint OS is built on.
            </p>
            <div>
              <p>They come down to three pillars:</p>
              <ul className="mt-5 space-y-3 border-y border-navy/10 py-5 text-navy">
                {[
                  "Own your metrics.",
                  "Market consistently.",
                  "Put leadership training at the center of your team.",
                ].map((pillar) => (
                  <li key={pillar} className="flex gap-4 font-medium">
                    <span
                      className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              Once we understood those three pillars and focused on them above
              everything else, our practice really took off. Our margins grew,
              our whole team was happier, and new referral sources seemed to
              show up every month.
            </p>
            <p>
              If the business side is what keeps you up at night, those three
              pillars are how you get back on track, and back to the work you
              opened the clinic to do: making people better.
            </p>
            <p>
              We&apos;ve been there. We&apos;ve struggled, and we&apos;ve been
              stressed. We persevered, and we finally built the practice we
              always wanted. VantagePoint OS is here to help you do the same.
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
