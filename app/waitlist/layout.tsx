export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-night font-brand text-mist selection:bg-gold selection:text-navy">
      {children}
    </div>
  );
}
