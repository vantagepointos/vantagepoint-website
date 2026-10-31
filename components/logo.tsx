type Lockup = "dark" | "light" | "white";

const LOCKUPS: Record<Lockup, string> = {
  dark: "/brand/vantagepoint-horizontal-dark.svg",
  light: "/brand/vantagepoint-horizontal-light.svg",
  white: "/brand/vantagepoint-horizontal-white.svg",
};

export function Logo({
  variant = "dark",
  className = "h-9 w-auto",
}: {
  variant?: Lockup;
  className?: string;
}) {
  return (
    // Official outlined SVG lockups. next/image does not optimize these.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOCKUPS[variant]}
      alt="VantagePoint OS"
      width={1146}
      height={250}
      className={className}
      decoding="async"
    />
  );
}

const PLATFORM_MARKS = {
  pulse: {
    alt: "VantagePulse",
    light: "/brand/vantagepulse-horizontal-light.svg",
    dark: "/brand/vantagepulse-horizontal-dark.svg",
    width: 1249,
    height: 215,
  },
  scale: {
    alt: "VantageScale",
    light: "/brand/vantagescale-horizontal-light.svg",
    dark: "/brand/vantagescale-horizontal-dark.svg",
    width: 1001,
    height: 255,
  },
  lead: {
    alt: "VantageLead",
    light: "/brand/vantagelead-horizontal-light.svg",
    dark: "/brand/vantagelead-horizontal-dark.svg",
    width: 1045,
    height: 290,
  },
} as const;

export function PlatformMark({
  platform,
  variant = "light",
  className = "h-11 w-auto",
}: {
  platform: keyof typeof PLATFORM_MARKS;
  variant?: "light" | "dark";
  className?: string;
}) {
  const mark = PLATFORM_MARKS[platform];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={mark[variant]}
      alt={mark.alt}
      width={mark.width}
      height={mark.height}
      className={className}
      decoding="async"
    />
  );
}
