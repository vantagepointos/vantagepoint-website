/**
 * Sample figures for the marketing preview. They are not a clinic's
 * numbers and they are not taken from the product screenshots.
 */

export const PREVIEW_CAPTION =
  "Illustrative data. Your team logs a few numbers each week, and VantagePulse turns them into goals and pace.";

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
    <div aria-hidden="true" className="absolute inset-0 flex flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-4">
      <div className="flex shrink-0 items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold tracking-tight text-white sm:text-xl">
            Executive Overview
          </p>
          <p className="text-[10px] font-medium text-mist sm:text-xs">
            Your Company&apos;s VantagePoint
          </p>
        </div>
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

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
        <div className={`flex flex-col justify-between rounded-xl border bg-deep px-2 py-2 sm:px-3 ${BORDER.met}`}>
          <div className="flex items-start justify-between gap-1">
            <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-mist sm:text-[10px]">
              Profit Margin
            </span>
            <span className="shrink-0 text-[8px] font-semibold text-gold sm:text-[10px]">Target &gt; 20%</span>
          </div>
          <p className={`text-xl font-bold leading-none sm:text-3xl ${TONE.met}`}>22.4% YTD</p>
          <p className="text-[9px] text-mist sm:text-[11px]">This quarter 21.1% · This month 19.4%</p>
        </div>
        <div className={`flex flex-col justify-between rounded-xl border bg-deep px-2 py-2 sm:px-3 ${BORDER.met}`}>
          <div className="flex items-start justify-between gap-1">
            <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-mist sm:text-[10px]">
              Revenue Multiple
            </span>
            <span className="shrink-0 text-[8px] font-semibold text-gold sm:text-[10px]">Target &gt; 3.0x</span>
          </div>
          <p className={`text-xl font-bold leading-none sm:text-3xl ${TONE.met}`}>3.2x</p>
          <p className="text-[9px] text-mist sm:text-[11px]">Illustrative</p>
        </div>
        <div className={`hidden flex-col justify-between rounded-xl border bg-deep px-2 py-2 sm:flex sm:px-3 ${BORDER.close}`}>
          <div className="flex items-start justify-between gap-1">
            <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-mist sm:text-[10px]">
              Monthly Eval Target
            </span>
            <span className="shrink-0 text-[8px] font-semibold text-gold sm:text-[10px]">To hit margin</span>
          </div>
          <p className={`text-xl font-bold leading-none sm:text-3xl ${TONE.close}`}>150 evals</p>
          <p className="text-[9px] leading-tight text-mist sm:text-[11px]">
            This month 96 · YTD 1,104. Evals needed to hit the profit margin target.
          </p>
        </div>
        <div className={`hidden flex-col justify-between rounded-xl border bg-deep px-2 py-2 sm:flex sm:px-3 ${BORDER.met}`}>
          <div className="flex items-start justify-between gap-1">
            <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-mist sm:text-[10px]">
              Schedule Utilization
            </span>
            <span className="shrink-0 text-[8px] font-semibold text-gold sm:text-[10px]">Target &gt; 85%</span>
          </div>
          <p className={`text-xl font-bold leading-none sm:text-3xl ${TONE.met}`}>87%</p>
          <p className="text-[9px] text-mist sm:text-[11px]">Illustrative</p>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-[#FB7185]/40 bg-deep px-2.5 py-2 sm:px-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-mist">Visit Pace</span>
        <span className="text-xs font-semibold text-white sm:text-sm">Day 14 of 22</span>
        <span className="text-xs text-white sm:text-sm">Evals 96 / 150</span>
        <span className="rounded-full bg-[#FB7185]/15 px-2 py-0.5 text-[10px] font-semibold text-[#FB7185]">
          Behind 6
        </span>
        <span className="text-[10px] text-mist sm:text-xs">Need 7/day · 8 days left</span>
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

const MY_PERFORMANCE: { label: string; value: string; goal: string; tone: Tone }[] = [
  { label: "Rev Multiple", value: "3.2x", goal: "Goal: >= 3.0", tone: "met" },
  { label: "Efficiency", value: "91%", goal: "Goal: >= 85%", tone: "met" },
  { label: "Units/Visit", value: "3.2", goal: "Goal: >= 3.5", tone: "below" },
  { label: "Cancel Rate", value: "6%", goal: "Goal: <= 8%", tone: "met" },
  { label: "NPS Score", value: "74", goal: "Goal: >= 70", tone: "met" },
];

export function PulseVignette() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      <Label>My Performance</Label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {MY_PERFORMANCE.map((card) => (
          <div key={card.label} className={`rounded-xl border bg-deep px-2.5 py-3 shadow-[0_0_28px_-16px_rgba(214,164,69,0.9)] ${BORDER[card.tone]}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mist">
              {card.label}
            </p>
            <p className={`mt-1 text-2xl font-bold tracking-tight ${TONE[card.tone]}`}>
              {card.value}
            </p>
            <p className="mt-1 text-[10px] text-mist">{card.goal}</p>
          </div>
        ))}
      </div>
      <div className={`${quietCard} px-3 py-3`}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-mist">
            Week-to-Date Progress
          </p>
          <p className="text-xs text-mist">Goal: 80 WCUs</p>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-gold" />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-white">Estimated Bonus $180</span>
          <span className="text-mist">22 WCUs to go</span>
        </div>
      </div>
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
        "Welcome to VantagePoint\u00A0OS",
      ]}
    />
  );
}
