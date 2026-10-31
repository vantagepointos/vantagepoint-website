/**
 * Preview-only stand-in where a real founding-clinic story will go.
 * Remove this block before any public launch. There is no real story here yet.
 */
export function FoundingPlaceholder() {
  return (
    <section aria-label="Preview placeholder" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="rounded-3xl border border-dashed border-navy/20 bg-white px-6 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Preview only
          </p>
          <p className="mt-4 text-lg text-navy md:text-xl">
            [Placeholder: founding clinic story]
          </p>
        </div>
      </div>
    </section>
  );
}
