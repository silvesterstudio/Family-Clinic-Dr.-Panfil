"use client";
import Image from "next/image";
import { PLACEHOLDERS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src={PLACEHOLDERS.heroImage}
        alt="Dental Clinic Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Smaller gradient overlay to keep faces visible */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

      {/* Text positioned at bottom, more compact */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-primary text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight mb-2 drop-shadow-lg">
              Sănătate pentru familia ta: respirație liberă și un zâmbet perfect.
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-5 drop-shadow-md max-w-xl">
              Excelență în ORL și Stomatologie Pediatrică, sub același acoperiș. Tratamente sigure și fără stres.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="bg-[var(--color-brand-teal)] text-white px-7 py-2.5 rounded-full uppercase font-semibold text-sm text-center hover:brightness-90 transition-all shadow-lg"
              >
                Programează o consultație
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-7 py-2.5 rounded-full uppercase font-semibold text-sm text-center hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Descoperă Serviciile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}