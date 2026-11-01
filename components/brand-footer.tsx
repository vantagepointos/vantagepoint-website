import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
} from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function BrandFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mist">
          &copy; {new Date().getFullYear()} VantagePoint OS
        </p>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href="mailto:gabe@vantagepointos.com"
            className={`w-fit text-mist hover:text-white ${focusRing} rounded-sm`}
          >
            gabe@vantagepointos.com
          </a>
          <a
            href={BUSINESS_PHONE_HREF}
            className={`w-fit text-mist hover:text-white ${focusRing} rounded-sm`}
          >
            {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
