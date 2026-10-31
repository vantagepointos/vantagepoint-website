import {
  LeadVignette,
  PulseVignette,
  ScaleVignette,
} from "@/components/product-preview";

const vignette = {
  pulse: PulseVignette,
  scale: ScaleVignette,
  lead: LeadVignette,
} as const;

export function PlatformPanel({
  platform,
}: {
  platform: keyof typeof vignette;
}) {
  const Vignette = vignette[platform];
  return (
    <figure>
      <div className="rounded-[24px] border border-gold/30 bg-night p-4 shadow-[0_0_48px_-20px_rgba(214,164,69,0.55)] sm:p-5">
        <Vignette />
      </div>
      <figcaption className="mt-3 text-center text-xs text-ink">
        <span className="sr-only">
          Illustrative preview. The figures and rows are sample layout, not a
          clinic&apos;s data.
        </span>
        <span aria-hidden="true">Illustrative data.</span>
      </figcaption>
    </figure>
  );
}
