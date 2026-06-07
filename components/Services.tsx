import Image from "next/image";
import { Ear, Smile } from "lucide-react";

export default function Servicii() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:col-start-2 md:row-start-1">
            <h2 className="font-primary text-4xl md:text-5xl font-bold text-[var(--color-brand-black)] mb-0 md:mb-8 leading-tight">
              Servicii Medicale Integrate pentru <span className="text-[var(--color-brand-teal)]">Toate Vârstele</span>
            </h2>
          </div>

          <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2 relative w-full aspect-[16/9] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/under1-hero.png"
              alt="Servicii Medicale"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-3 md:col-start-2 md:row-start-2">
            {/* Card 1: ORL */}
            <div className="bg-[var(--color-brand-grey)] rounded-2xl p-6 mb-4 border border-[var(--color-brand-muted)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-teal)]/20 flex items-center justify-center">
                  <Ear className="w-5 h-5 text-[var(--color-brand-teal)]" />
                </div>
                <h3 className="font-primary text-lg font-bold text-[var(--color-brand-black)]">
                  Otorinolaringologie (ORL)
                </h3>
              </div>
              <p className="text-[var(--color-brand-black)]/70 text-sm leading-relaxed">
                Tratamente moderne pentru sforăit, chirurgie endoscopică și adenotomie cu recuperare rapidă, realizate de <strong>Dr. Andrei Panfil</strong>.
              </p>
            </div>

            {/* Card 2: Stomatologie */}
            <div className="bg-[var(--color-brand-grey)] rounded-2xl p-6 border border-[var(--color-brand-muted)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-teal)]/20 flex items-center justify-center">
                  <Smile className="w-5 h-5 text-[var(--color-brand-teal)]" />
                </div>
                <h3 className="font-primary text-lg font-bold text-[var(--color-brand-black)]">
                  Ortodonție & Pedodonție
                </h3>
              </div>
              <p className="text-[var(--color-brand-black)]/70 text-sm leading-relaxed">
                Aparate dentare și stomatologie fără frică pentru copii și adulți, sub îndrumarea <strong>Dr. Angela Panfil</strong>.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#beforeafter"
                className="border-2 border-[var(--color-brand-teal)] text-[var(--color-brand-teal)] px-8 py-3 rounded-full uppercase font-semibold text-center inline-block hover:bg-[var(--color-brand-teal)] hover:text-white transition-all"
              >
                Citește mai mult
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
