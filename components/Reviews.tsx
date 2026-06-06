"use client";

const reelUrls = [
  "https://www.instagram.com/reel/DWnrhvaCNu7/embed",
  "https://www.instagram.com/reel/DYjbu67I4ji/embed",
  "https://www.instagram.com/reel/DWOOvZkiC3B/embed",
];

export default function Reviews() {
  return (
    <section className="py-16 md:py-20 pb-10 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center text-[var(--color-brand-black)] mb-10 md:mb-14">
          Recenziile pacienților <span className="text-[var(--color-brand-teal)]">clinicii</span>
        </h2>

        {/* Instagram Reel Embeds */}
        <div className="grid md:grid-cols-3 gap-6">
          {reelUrls.map((url, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-300" style={{ height: "530px" }}>
                <div className="absolute inset-0" style={{ top: "0%", height: "108%" }}>
                  <iframe
                    src={url}
                    className="w-full h-full"
                    scrolling="no"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                    style={{ border: 0, overflow: "hidden", pointerEvents: "none" }}
                  />
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}