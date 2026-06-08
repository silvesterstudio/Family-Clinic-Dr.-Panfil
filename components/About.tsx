import Image from "next/image";
import { Smile, Ear, ScanFace } from "lucide-react";

const introText =
  "Suntem o clinică de familie dedicată sănătății tale complete. Rezolvăm cauzele reale ale afecțiunilor, oferind grijă, siguranță și confort absolut.";

const sectionHeadingClass =
  "font-primary text-[1.65rem] leading-snug sm:text-4xl sm:leading-tight lg:text-4xl font-bold";

export default function About() {
  return (
    <section id="about" className="py-6 md:py-20 bg-[var(--color-brand-grey)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-4 items-start">
          <div className="order-1 md:col-start-1 md:row-start-1">
            <h2 className={`${sectionHeadingClass} text-[var(--color-brand-black)] mb-0`}>
              Clinica Familiei Dr. Panfil: ORL și Stomatologie sub același acoperiș
            </h2>
            <p className="hidden md:block mt-3 text-[var(--color-brand-black)]/80 leading-relaxed">
              {introText}
            </p>
          </div>

          <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/under-hero.jpg"
              alt="Clinica Familiei Dr. Panfil"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-3 md:col-start-1 md:row-start-2">
            <p className="md:hidden text-[var(--color-brand-black)]/80 mb-6 leading-relaxed">{introText}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Ear className="text-[var(--color-brand-teal)] w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-brand-black)]">Dr. Andrei Panfil</span>
                  <p className="text-sm text-[var(--color-brand-black)]/70">
                    Expertiză chirurgicală ORL de top — metode inovatoare și minim-invazive pentru eliberarea căilor
                    respiratorii
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smile className="text-[var(--color-brand-teal)] w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-brand-black)]">Dr. Angela Panfil</span>
                  <p className="text-sm text-[var(--color-brand-black)]/70">
                    Excelență în tratamente ortodontice complexe și stomatologie pediatrică blândă, fără frică
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ScanFace className="text-[var(--color-brand-teal)] w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-brand-black)]">Abordare Integrată</span>
                  <p className="text-sm text-[var(--color-brand-black)]/70">
                    Diagnostic și tratament interdisciplinar — respirație și dinți, pentru rezultate complete și stabile
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="border-2 border-[var(--color-brand-teal)] text-[var(--color-brand-teal)] px-6 py-3 rounded-full uppercase font-semibold text-center hover:bg-[var(--color-brand-teal)] hover:text-white transition-all"
              >
                Serviciile Noastre
              </a>
              <a
                href="#contact"
                className="bg-[var(--color-brand-teal)] text-white px-6 py-3 rounded-full uppercase font-semibold text-center hover:brightness-90 transition-all"
              >
                Programează o consultație
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
