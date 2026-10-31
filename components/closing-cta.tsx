import { BookWalkthrough } from "@/components/buttons";
import { CLOSING_LINE } from "@/lib/site";

export function ClosingCta({
  supporting = "When you want to see it, we'll sit down with you. A walkthrough, owner to owner.",
}: {
  supporting?: string;
}) {
  return (
    <section className="on-navy bg-night text-white" aria-labelledby="closing-heading">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
        <h2
          id="closing-heading"
          className="text-4xl font-semibold tracking-[-0.035em] text-balance md:text-6xl md:leading-[1.05]"
        >
          {CLOSING_LINE}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
          {supporting}
        </p>
        <div className="mt-10">
          <BookWalkthrough />
        </div>
      </div>
    </section>
  );
}
