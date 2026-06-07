"use client";

import { useEffect, useRef, useState } from "react";

const reelUrls = [
  "https://www.instagram.com/reel/DWnrhvaCNu7/embed",
  "https://www.instagram.com/reel/DYjbu67I4ji/embed",
  "https://www.instagram.com/reel/DWOOvZkiC3B/embed",
];

const EMBED_WIDTH = 389;
const EMBED_HEIGHT = 530;
/** Start loading embeds ~2.5 screens before the reviews section enters view */
const PREFETCH_ROOT_MARGIN = "250vh 0px";
/** Stagger iframe requests so they don't compete on first paint */
const STAGGER_MS = 350;

function InstagramEmbed({ url, load }: { url: string; load: boolean }) {
  return (
    <div className="absolute inset-0" style={{ top: "0%", height: "108%" }}>
      {load ? (
        <iframe
          src={url}
          className="h-full w-full"
          scrolling="no"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
          style={{ border: 0, overflow: "hidden", pointerEvents: "none" }}
          title="Recenzie Instagram"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-900">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/70" />
        </div>
      )}
    </div>
  );
}

function InstagramCard({
  url,
  load,
  className,
}: {
  url: string;
  load: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-300 ${className ?? ""}`}
      style={{ height: EMBED_HEIGHT }}
    >
      <InstagramEmbed url={url} load={load} />
    </div>
  );
}

function MobileInstagramCard({ url, load }: { url: string; load: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      setScale(Math.min(1, el.offsetWidth / EMBED_WIDTH));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full overflow-hidden rounded-2xl bg-gray-900 border border-gray-300"
        style={{ height: EMBED_HEIGHT * scale }}
      >
        <div
          className="relative origin-top-left"
          style={{
            width: EMBED_WIDTH,
            height: EMBED_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          <InstagramEmbed url={url} load={load} />
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let started = false;

    const startPrefetch = () => {
      if (started) return;
      started = true;

      reelUrls.forEach((_, index) => {
        timers.push(
          setTimeout(() => {
            setLoadedIndices((prev) => {
              if (prev.has(index)) return prev;
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          }, index * STAGGER_MS)
        );
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPrefetch();
          observer.disconnect();
        }
      },
      { rootMargin: PREFETCH_ROOT_MARGIN, threshold: 0 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const shouldLoad = (index: number) => loadedIndices.has(index);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 pb-10 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center text-[var(--color-brand-black)] mb-10 md:mb-14">
          Recenziile pacienților <span className="text-[var(--color-brand-teal)]">clinicii</span>
        </h2>

        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {reelUrls.map((url, i) => (
              <div
                key={i}
                className="shrink-0 snap-center w-[calc(100vw-2rem)] max-w-[389px]"
              >
                <MobileInstagramCard url={url} load={shouldLoad(i)} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reelUrls.map((url, i) => (
            <InstagramCard key={i} url={url} load={shouldLoad(i)} className="w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
