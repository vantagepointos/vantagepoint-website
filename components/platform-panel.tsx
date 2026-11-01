import {
  LeadVignette,
  PREVIEW_CAPTION,
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
        {PREVIEW_CAPTION}
      </figcaption>
    </figure>
  );
}
