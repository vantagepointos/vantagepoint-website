/**
 * Sample figures for the marketing preview. They are not a clinic's
 * numbers and they are not taken from the product screenshots.
 */
const KPIS = [
  { label: "Units/Visit", value: "3.4" },
  { label: "Schedule utilization", value: "81%" },
  { label: "Cancel rate", value: "9%" },
  { label: "NPS", value: "72" },
  { label: "Monthly evals", value: "42" },
] as const;

const PROVIDERS = [
  { name: "Provider A", units: "3.8", cancel: "8%", nps: "80" },
  { name: "Provider B", units: "3.2", cancel: "11%", nps: "68" },
  { name: "Provider C", units: "2.9", cancel: "6%", nps: "74" },
] as const;

const card =
  "rounded-xl border border-gold/30 bg-navy shadow-[0_0_28px_-16px_rgba(214,164,69,0.9)]";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs">
      {children}
    </p>
  );
}

export function OverviewPreview() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full flex-col justify-center gap-1.5 p-2.5 sm:gap-3 sm:p-5"
    >
      <Label>Executive overview</Label>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-5 sm:gap-2">
        {KPIS.map((kpi, index) => (
          <div
            key={kpi.label}
            className={`${card} px-2 py-1.5 sm:px-3 sm:py-3 ${
              index > 1 ? "hidden sm:block" : ""
            }`}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-mist sm:text-[10px]">
              {kpi.label}
            </p>
            <p className="mt-0.5 text-lg font-semibold tracking-tight text-white sm:mt-1 sm:text-2xl">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>
      <div>
        <Label>Scoreboard</Label>
        <div className={`${card} mt-1.5 overflow-hidden`}>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[9px] font-semibold uppercase tracking-[0.12em] text-mist sm:text-[10px]">
                <th className="px-2.5 py-1 font-semibold sm:px-3 sm:py-1.5">Provider</th>
                <th className="px-2 py-1 font-semibold sm:py-1.5">Units/Visit</th>
                <th className="hidden px-2 py-1.5 font-semibold sm:table-cell">
                  Cancel rate
                </th>
                <th className="hidden px-2 py-1.5 font-semibold sm:table-cell">
                  NPS
                </th>
              </tr>
            </thead>
            <tbody>
              {PROVIDERS.map((provider, index) => (
                <tr
                  key={provider.name}
                  className={`text-[11px] text-white sm:text-xs ${
                    index > 1 ? "hidden sm:table-row" : ""
                  } ${index > 0 ? "border-t border-gold/15" : ""}`}
                >
                  <td className="px-2.5 py-1 sm:px-3 sm:py-1.5">{provider.name}</td>
                  <td className="px-2 py-1 font-semibold text-gold sm:py-1.5">
                    {provider.units}
                  </td>
                  <td className="hidden px-2 py-1.5 sm:table-cell">
                    {provider.cancel}
                  </td>
                  <td className="hidden px-2 py-1.5 sm:table-cell">
                    {provider.nps}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function VignetteRows({
  label,
  rows,
}: {
  label: string;
  rows: readonly string[];
}) {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      <Label>{label}</Label>
      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row}
            className={`${card} px-3 py-2.5 text-sm font-medium text-white`}
          >
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PulseVignette() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      <Label>Clinic averages</Label>
      <div className="grid grid-cols-3 gap-2">
        {KPIS.slice(0, 3).map((kpi) => (
          <div key={kpi.label} className={`${card} px-2.5 py-3`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mist">
              {kpi.label}
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>
      <ul className={`${card} divide-y divide-gold/15`}>
        {PROVIDERS.map((provider) => (
          <li
            key={provider.name}
            className="flex items-center justify-between px-3 py-2 text-sm"
          >
            <span className="text-white">{provider.name}</span>
            <span className="font-semibold text-gold">{provider.units}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ScaleVignette() {
  return (
    <VignetteRows label="Cadence" rows={["Social", "Email", "Newsletter"]} />
  );
}

export function LeadVignette() {
  return (
    <VignetteRows
      label="Onboarding"
      rows={[
        "Front Office Onboarding",
        "Provider Onboarding",
        "Welcome to VantagePoint OS",
      ]}
    />
  );
}
