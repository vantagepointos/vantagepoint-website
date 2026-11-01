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
            Why we built VantagePoint&nbsp;OS.
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink md:text-xl">
            <p>
              In 2014, we opened our own physical therapy practice.
              We started our first clinic with one goal: take
              exceptional care of our patients in the community we call home.
              We were focused on the people walking through our doors, and
              before long, those patients felt like family. Our reputation
              grew.
            </p>
            <p>
              But running a physical therapy practice is hard. So is managing
              growth, and knowing when and how to scale. For our first ten
              years, we struggled. Our margins were lower than we&apos;d like
              to admit, and that strain showed up in our culture too. We
              couldn&apos;t reward our team the way we wanted to. Our time went
              toward putting out fires. We were always doing our best, and never
              quite feeling like we were succeeding at any of it. No matter how
              hard we worked, nothing seemed to change.
            </p>
            <p>
              In 2018 we opened a second clinic, and in 2022 a third. Three
              clinics, three communities. Some things we did well, and some we
              didn&apos;t. Through all of it, we worked hard, learned a lot, and
              studied everything we could about what makes a practice healthy.
            </p>
            <p className="text-xl font-medium leading-snug text-navy md:text-2xl">
              The lessons we learned are what VantagePoint&nbsp;OS is built on.
            </p>
            <div>
              <p>They come down to three pillars:</p>
              <ul className="mt-5 space-y-3 border-y border-navy/10 py-5 text-navy">
                {[
                  "Own your metrics.",
                  "Build your brand with meaningful, consistent marketing and outreach.",
                  "Grow your culture, with leadership training for the whole team, owners included.",
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
              our whole team was happier, and because we kept showing up in our
              community, new referral sources followed.
            </p>
            <p>
              If the business side is what keeps you up at night, those three
              pillars are how you get back on track. Less stress and more
              confidence. A clear picture of what&apos;s going on, without
              spending all your time chasing it. Stronger financials, and real
              support.
            </p>
            <p>
              We&apos;ve sat in your chair, and we know how hard it can be. We
              persevered, and we finally built the practice we always wanted.
              VantagePoint&nbsp;OS is here to help you do the same.
            </p>
          </div>
          <footer className="mt-14 border-t border-navy/10 pt-8">
            <Logo variant="light" className="h-8 w-auto" />
            <p className="mt-6 text-lg font-semibold text-navy">Gabe &amp; Amanda Harter</p>
            <p className="text-ink">Founders</p>
          </footer>
        </article>
        <ClosingCta
          supporting={
            <>
              If our story sounds familiar, let us show you{" "}
              <br className="hidden sm:block" />
              how <span className="whitespace-nowrap">VantagePoint&nbsp;OS</span> fits.
            </>
          }
        />
      </main>
    </>
  );
}
