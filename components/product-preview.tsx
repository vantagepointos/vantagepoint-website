/**
 * Sample figures for the marketing preview. They are not a clinic's
 * numbers and they are not taken from the product screenshots.
 */

type Tone = "met" | "close" | "below";

const TONE: Record<Tone, string> = {
  met: "text-[#4ADE80]",
  close: "text-gold",
  below: "text-[#FB7185]",
};

const BORDER: Record<Tone, string> = {
  met: "border-[#4ADE80]/40",
  close: "border-gold/45",
  below: "border-[#FB7185]/45",
};

const KPIS: {
  label: string;
  value: string;
  goal: string;
  tone: Tone;
  icon: "pulse" | "calendar" | "cancel" | "heart" | "evals";
}[] = [
  {
    label: "Units/Visit",
    value: "3.2",
    goal: "Goal ≥ 3.5",
    tone: "close",
    icon: "pulse",
  },
  {
    label: "Schedule utilization",
    value: "84%",
    goal: "Goal ≥ 80%",
    tone: "met",
    icon: "calendar",
  },
  {
    label: "Cancel rate",
    value: "12%",
    goal: "Goal ≤ 8%",
    tone: "below",
    icon: "cancel",
  },
  {
    label: "NPS",
    value: "76",
    goal: "Goal ≥ 70",
    tone: "met",
    icon: "heart",
  },
  {
    label: "Monthly evals",
    value: "28",
    goal: "Goal ≥ 40",
    tone: "below",
    icon: "evals",
  },
];

const ROWS: {
  rank: number;
  name: string;
  units: string;
  unitsTone: Tone;
  cancel: string;
  cancelTone: Tone;
  nps: string;
  npsTone: Tone;
}[] = [
  {
    rank: 1,
    name: "Provider A",
    units: "4.0",
    unitsTone: "met",
    cancel: "5%",
    cancelTone: "met",
    nps: "84",
    npsTone: "met",
  },
  {
    rank: 2,
    name: "Provider D",
    units: "3.9",
    unitsTone: "met",
    cancel: "7%",
    cancelTone: "met",
    nps: "71",
    npsTone: "met",
  },
  {
    rank: 3,
    name: "Provider B",
    units: "3.3",
    unitsTone: "close",
    cancel: "9%",
    cancelTone: "close",
    nps: "66",
    npsTone: "close",
  },
  {
    rank: 4,
    name: "Provider C",
    units: "2.8",
    unitsTone: "below",
    cancel: "13%",
    cancelTone: "below",
    nps: "52",
    npsTone: "below",
  },
];

function MetricIcon({ name }: { name: (typeof KPIS)[number]["icon"] }) {
  const common = "h-3.5 w-3.5 shrink-0";
  if (name === "pulse") {
    return (
      <svg className={common} viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M1 8h3l1.5-4 3 8 1.5-4H15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg className={common} viewBox="0 0 16 16" aria-hidden="true">
        <rect x="2" y="3" width="12" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6.5h12M5 2v2.5M11 2v2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "cancel") {
    return (
      <svg className={common} viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5.5 5.5l5 5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg className={common} viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8 13s-4.5-2.8-4.5-6A2.5 2.5 0 0 1 8 5.2 2.5 2.5 0 0 1 12.5 7C12.5 10.2 8 13 8 13z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11" cy="7" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 13c.4-2 1.8-3 3.5-3s3.1 1 3.5 3M10 10.2c.8-.2 1.7 0 2.4.6.6.6.9 1.4.9 2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d={direction === "left" ? "M7.5 2.5L4 6l3.5 3.5" : "M4.5 2.5L8 6l-3.5 3.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function OverviewPreview() {
  return (
    <div aria-hidden="true" className="absolute inset-0 flex flex-col gap-2 p-2.5 sm:gap-3 sm:p-4">
      <div className="flex shrink-0 items-center justify-between gap-2">
        <p className="text-sm font-bold tracking-tight text-white sm:text-xl">
          Executive Overview
        </p>
        <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-deep px-1.5 py-1 text-[10px] text-mist sm:gap-1.5 sm:px-2.5 sm:text-xs">
          <Chevron direction="left" />
          <svg className="h-3 w-3" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="2" y="3" width="12" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M2 6.5h12M5 2v2.5M11 2v2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="whitespace-nowrap">October 2026</span>
          <Chevron direction="right" />
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5 sm:grid-cols-5 sm:gap-2">
        {KPIS.map((kpi, index) => (
          <div
            key={kpi.label}
            className={`flex h-full flex-col justify-between rounded-xl border bg-deep px-2 py-2 sm:px-3 sm:py-3 ${BORDER[kpi.tone]} ${
              index > 1 ? "hidden sm:flex" : ""
            }`}
          >
            <div className="flex items-center gap-1.5 text-mist">
              <MetricIcon name={kpi.icon} />
              <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] sm:text-[10px]">
                {kpi.label}
              </span>
            </div>
            <p className={`text-2xl font-bold leading-none tracking-tight sm:text-3xl ${TONE[kpi.tone]}`}>
              {kpi.value}
            </p>
            <p className="text-[9px] text-mist sm:text-[11px]">{kpi.goal}</p>
          </div>
        ))}
      </div>

      <div className="hidden shrink-0 items-center gap-3 rounded-lg border border-[#FB7185]/35 bg-deep px-3 py-2 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FB7185]">
          Pending stat entry (2)
        </span>
        <span className="text-xs text-mist">Provider B · 1 of 4 days</span>
        <span className="text-xs text-mist">Provider D · 2 of 5 days</span>
      </div>

      <div className="flex min-h-0 flex-[1.15] flex-col overflow-hidden rounded-xl border border-white/10 bg-deep">
        <div className="grid shrink-0 grid-cols-[2.75rem_1fr_4.5rem] gap-2 px-2 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-mist sm:grid-cols-[3.25rem_1.4fr_1fr_1fr_1fr] sm:px-3 sm:text-[10px]">
          <span>Rank</span>
          <span>Provider</span>
          <span>Units/Visit</span>
          <span className="hidden sm:block">Cancel rate</span>
          <span className="hidden sm:block">NPS</span>
        </div>
        <div className="grid min-h-0 flex-1 grid-rows-3 sm:grid-rows-4">
          {ROWS.map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-[2.75rem_1fr_4.5rem] items-center gap-2 border-t border-white/10 px-2 text-[11px] sm:grid-cols-[3.25rem_1.4fr_1fr_1fr_1fr] sm:px-3 sm:text-sm ${
                row.rank > 3 ? "hidden sm:grid" : ""
              }`}
            >
              <span>
                {row.rank === 1 ? (
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                    1
                  </span>
                ) : (
                  <span className="pl-1.5 text-mist">{row.rank}</span>
                )}
              </span>
              <span className="font-medium text-white">{row.name}</span>
              <span className={`font-semibold ${TONE[row.unitsTone]}`}>{row.units}</span>
              <span className={`hidden font-semibold sm:block ${TONE[row.cancelTone]}`}>
                {row.cancel}
              </span>
              <span className={`hidden font-semibold sm:block ${TONE[row.npsTone]}`}>
                {row.nps}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const quietCard =
  "rounded-xl border border-gold/30 bg-deep shadow-[0_0_28px_-16px_rgba(214,164,69,0.9)]";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs">
      {children}
    </p>
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
          <li key={row} className={`${quietCard} px-3 py-2.5 text-sm font-medium text-white`}>
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
          <div key={kpi.label} className={`rounded-xl border bg-deep px-2.5 py-3 shadow-[0_0_28px_-16px_rgba(214,164,69,0.9)] ${BORDER[kpi.tone]}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mist">
              {kpi.label}
            </p>
            <p className={`mt-1 text-2xl font-bold tracking-tight ${TONE[kpi.tone]}`}>
              {kpi.value}
            </p>
          </div>
        ))}
      </div>
      <ul className={`${quietCard} divide-y divide-white/10`}>
        {ROWS.slice(0, 3).map((row) => (
          <li key={row.name} className="flex items-center justify-between px-3 py-2 text-sm">
            <span className="text-white">{row.name}</span>
            <span className={`font-semibold ${TONE[row.unitsTone]}`}>{row.units}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ScaleVignette() {
  return <VignetteRows label="Cadence" rows={["Social", "Email", "Newsletter"]} />;
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
