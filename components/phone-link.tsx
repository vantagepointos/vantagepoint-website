import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_HREF } from "@/lib/site";

/** Quiet telephone link. The number lives in lib/site.ts. */
export function PhoneLink({
  onNavy = false,
  leadIn = "Or call",
}: {
  onNavy?: boolean;
  leadIn?: string;
}) {
  const color = onNavy ? "text-mist" : "text-ink";
  return (
    <p className={`text-sm ${color}`}>
      {leadIn}{" "}
      <a
        href={BUSINESS_PHONE_HREF}
        className="rounded-sm underline decoration-current/30 underline-offset-4 hover:decoration-current"
      >
        {BUSINESS_PHONE_DISPLAY}
      </a>
    </p>
  );
}
