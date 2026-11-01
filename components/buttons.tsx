import Link from "next/link";
import { BOOK_PATH } from "@/lib/site";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors";

export function BookWalkthrough({
  tone = "gold",
  className = "",
}: {
  tone?: "gold" | "navy";
  className?: string;
}) {
  const styles =
    tone === "gold"
      ? "bg-gold text-navy hover:bg-[#c9963a]"
      : "bg-navy text-white hover:bg-[#243656]";
  return (
    <Link href={BOOK_PATH} className={`${base} ${styles} ${className}`}>
      Book a walkthrough
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  onNavy = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavy?: boolean;
}) {
  const color = onNavy
    ? "text-mist hover:text-white"
    : "text-navy hover:text-ink";
  const classNames = `inline-flex rounded-sm underline decoration-current/30 underline-offset-4 hover:decoration-current ${color} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classNames}>
      {children}
    </a>
  );
}
