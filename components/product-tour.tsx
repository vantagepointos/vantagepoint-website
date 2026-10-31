"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { OverviewPreview } from "@/components/product-preview";
import { PRODUCT_VIDEO_POSTER, PRODUCT_VIDEO_URL } from "@/lib/site";

function subscribeToReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function reducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-gold/30 bg-deep p-1.5 shadow-[0_0_70px_-24px_rgba(214,164,69,0.55)] sm:p-2">
      <div className="relative aspect-video overflow-hidden rounded-[18px] bg-night">
        {children}
      </div>
    </div>
  );
}

function TourMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/vantagepoint-icon-white.svg"
      alt=""
      width={72}
      height={72}
      className="h-16 w-16"
    />
  );
}

export function ProductTour() {
  const url = PRODUCT_VIDEO_URL.trim();
  const poster = PRODUCT_VIDEO_POSTER.trim();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    reducedMotionSnapshot,
    () => false,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !url) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, [reduceMotion, url]);

  if (!url) {
    return (
      <figure className="mx-auto w-full max-w-4xl">
        <Frame>
          <OverviewPreview />
        </Frame>
        <figcaption className="mt-4 text-center text-xs tracking-wide text-mist">
          <span className="sr-only">
            Illustrative preview of an executive overview and provider
            scoreboard in VantagePoint OS. The figures are sample data, not a
            clinic.
          </span>
          <span aria-hidden="true">Illustrative data.</span>
        </figcaption>
      </figure>
    );
  }

  function play() {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setStarted(true)).catch(() => setStarted(false));
  }

  const showPlay = reduceMotion && !started;

  return (
    <figure className="mx-auto w-full max-w-4xl">
    <Frame>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={url}
        poster={poster || undefined}
        muted
        loop
        playsInline
        preload="metadata"
        controls={reduceMotion && started}
        aria-label="VantagePoint OS product tour"
      />
      {showPlay ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-night">
          <TourMark />
          <button
            type="button"
            onClick={play}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.5 1.5v9l8-4.5-8-4.5z" fill="currentColor" />
            </svg>
            Play product tour
          </button>
        </div>
      ) : null}
    </Frame>
    </figure>
  );
}
