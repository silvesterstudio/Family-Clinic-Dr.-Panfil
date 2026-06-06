"use client";
import Image from "next/image";

const cases = [
  { before: "/1-before.jpg", after: "/1-after.jpg" },
  { before: "/2-before.jpg", after: "/2-after.jpg" },
  { before: "/3-before.jpg", after: "/3-after.jpg" },
  { before: "/4-before.jpg", after: "/4-after.jpg" },
];

export default function BeforeAfter() {
  return (
    <section id="beforeafter" className="py-20 bg-[var(--color-brand-grey)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center text-[var(--color-brand-black)] mb-16">
          Cazuri clinice rezolvate cu <span className="text-[var(--color-brand-teal)]">succes</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-[var(--color-brand-muted)]">
              <div className="flex justify-start items-center mb-4">
                <span className="text-xs uppercase font-bold text-black bg-gray-200 px-2 py-1 rounded">Înainte</span>
              </div>
              <div className="relative h-40 rounded-lg mb-4 overflow-hidden bg-gray-200">
                <Image src={c.before} alt={`Înainte cazul ${i + 1}`} fill className="object-cover" />
              </div>
              <div className="flex justify-start items-center mb-4">
                <span className="text-xs uppercase font-bold text-white bg-[var(--color-brand-teal)] px-2 py-1 rounded">După</span>
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden bg-gray-300">
                <Image src={c.after} alt={`După cazul ${i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}