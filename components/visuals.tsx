function Device({
  children,
  label,
  onNavy = false,
}: {
  children: React.ReactNode;
  label: string;
  onNavy?: boolean;
}) {
  return (
    <figure className="motion-rise">
      <div className="rounded-[28px] bg-white p-2.5 shadow-[0_40px_80px_-48px_rgba(25,43,69,0.7)] ring-1 ring-navy/10">
        <div className="overflow-hidden rounded-[20px] bg-[#f7f6f3]">{children}</div>
      </div>
      <figcaption
        className={`mt-4 text-center text-xs tracking-wide ${
          onNavy ? "text-mist" : "text-ink"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}

export function PracticeBoard() {
  return (
    <Device onNavy label="Illustrative layout. Not a clinic's numbers.">
      <div className="bg-navy px-5 py-4 text-white sm:px-6" aria-hidden="true">
        <div className="flex items-center gap-3">
          {/* One-color white mark, for a busy navy screen. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/vantagepoint-icon-white.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <p className="text-sm font-medium tracking-tight">The practice</p>
        </div>
      </div>
      <div className="grid gap-px bg-navy/10 sm:grid-cols-3" aria-hidden="true">
        <Metric label="Visits" width="72%" />
        <Metric label="Arrivals" width="54%" />
        <Metric label="Plans of care" width="63%" />
      </div>
      <div className="grid gap-6 px-5 py-6 sm:grid-cols-2 sm:px-6" aria-hidden="true">
        <Cadence />
        <Lesson />
      </div>
    </Device>
  );
}

function Metric({ label, width }: { label: string; width: string }) {
  return (
    <div className="bg-[#f7f6f3] px-5 py-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
        {label}
      </p>
      <div className="mt-4 h-1.5 rounded-full bg-navy/10">
        <div className="h-1.5 rounded-full bg-navy" style={{ width }} />
      </div>
    </div>
  );
}

function Cadence() {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
        This month
      </p>
      <div className="mt-4 flex gap-2">
        {["1", "2", "3", "4"].map((week, index) => (
          <div key={week} className="flex-1">
            <div className="flex h-14 items-end justify-center rounded-xl bg-white ring-1 ring-navy/10">
              <span
                className={`mb-3 h-2 w-2 rounded-full ${
                  index === 1 || index === 3 ? "bg-navy" : "bg-navy/15"
                }`}
              />
            </div>
            <p className="mt-2 text-center text-[11px] text-ink">Wk {week}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Lesson() {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
        Team
      </p>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-navy/10">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold">
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M2 1.5v7l6-3.5-6-3.5z" fill="currentColor" />
          </svg>
        </span>
        <span className="text-sm font-medium text-navy">
          Welcome to VantagePoint OS
        </span>
      </div>
    </div>
  );
}

export function PulseVisual() {
  return (
    <Device label="A shared picture of the practice. Illustrative only.">
      <div className="px-6 py-7" aria-hidden="true">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
          North Star
        </p>
        <ul className="mt-6 space-y-5">
          {[
            ["Visits", "78%"],
            ["Arrivals", "61%"],
            ["Plans of care", "70%"],
            ["Owner view", "48%"],
          ].map(([label, width]) => (
            <li key={label}>
              <div className="flex items-baseline justify-between text-sm text-navy">
                <span>{label}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-navy/10">
                <div className="h-1.5 rounded-full bg-navy" style={{ width }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Device>
  );
}

export function ScaleVisual() {
  return (
    <Device label="A publishing rhythm. Illustrative only.">
      <div className="px-6 py-7" aria-hidden="true">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
          Cadence
        </p>
        <ol className="mt-6 space-y-3">
          {[
            ["Monday", "Social"],
            ["Wednesday", "Email"],
            ["Friday", "Newsletter"],
          ].map(([day, kind]) => (
            <li
              key={day}
              className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-navy/10"
            >
              <span className="text-sm font-medium text-navy">{day}</span>
              <span className="text-sm text-ink">{kind}</span>
            </li>
          ))}
        </ol>
      </div>
    </Device>
  );
}

export function LeadVisual() {
  return (
    <Device label="The first three films. Illustrative only.">
      <ol className="divide-y divide-navy/10" aria-hidden="true">
        {[
          "Front Office Onboarding",
          "Provider Onboarding",
          "Welcome to VantagePoint OS",
        ].map((title, index) => (
          <li key={title} className="flex items-center gap-4 px-6 py-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
              {index + 1}
            </span>
            <span className="text-sm font-medium text-navy">{title}</span>
          </li>
        ))}
      </ol>
    </Device>
  );
}
