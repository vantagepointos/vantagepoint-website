import { BrandFooter } from "@/components/brand-footer";
import { BrandHeader } from "@/components/brand-header";

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-navy font-brand text-mist selection:bg-gold selection:text-navy">
      <BrandHeader />
      <div className="flex flex-1 flex-col">{children}</div>
      <BrandFooter />
    </div>
  );
}
