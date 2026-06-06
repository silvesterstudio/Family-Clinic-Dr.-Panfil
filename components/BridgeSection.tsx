import { Lightbulb } from "lucide-react";

export default function BridgeSection() {
  return (
    <section className="py-16 bg-[var(--color-brand-teal)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-primary text-2xl md:text-3xl font-bold text-white mb-4">
          Știai că respirația pe gură deformează dinții copiilor?
        </h3>
        <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
          Echipa noastră tratează mai întâi <strong className="text-white">cauza (obstrucția ORL)</strong>, 
          apoi corectează dinții — pentru un rezultat perfect și stabil pe viață.
        </p>
      </div>
    </section>
  );
}