import { PlatformMark } from "@/components/logo";

export function PlatformPanel({
  platform,
}: {
  platform: "pulse" | "scale" | "lead";
}) {
  return (
    <div className="flex aspect-video items-center justify-center rounded-[28px] bg-navy px-8 shadow-[0_40px_80px_-48px_rgba(25,43,69,0.55)] ring-1 ring-navy/10 sm:px-12">
      <PlatformMark
        platform={platform}
        variant="dark"
        className="h-auto max-h-16 w-auto max-w-[88%]"
      />
    </div>
  );
}
