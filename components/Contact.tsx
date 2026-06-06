"use client";
import { MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-primary text-4xl md:text-5xl font-bold text-[var(--color-brand-black)] mb-2">
              Programează o Vizită.
            </h2>
            <p className="text-xl text-[var(--color-brand-black)]/80 mb-10">
              Ai grija de zambetul familiei tale in siguranță.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="text-[var(--color-brand-teal)] w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm uppercase tracking-wider text-gray-500">Adresa</div>
                  <div className="font-bold text-[var(--color-brand-black)]">{CONTACT_INFO.address}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Phone className="text-[var(--color-brand-teal)] w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm uppercase tracking-wider text-gray-500">Telefon</div>
                  <div className="font-bold text-[var(--color-brand-black)]">{CONTACT_INFO.phone}</div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10861!2d28.8598!3d47.0303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97df6e11c7e1d%3A0xb8d6f7e2c5b9a3f!2sStrada%20Andrei%20Doga%2026%2FA%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2smd!4v1717000000000!5m2!1sen!2smd" 
                className="absolute inset-0 w-full h-full border-0" 
                loading="lazy" 
              />
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[var(--color-brand-muted)] shadow-md">
            <h3 className="font-primary text-2xl font-bold text-[var(--color-brand-black)] mb-2">Trimite o Cerere</h3>
            <p className="text-[var(--color-brand-black)]/80 mb-8">Completează formularul și te contactăm noi în cel mai scurt timp.</p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-brand-black)] mb-1.5">Nume Complet*</label>
                <input 
                  type="text" 
                  className="w-full border border-[var(--color-brand-muted)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--color-brand-teal)] focus:ring-2 focus:ring-[var(--color-brand-teal)]/20 transition-all bg-[#F9FAFB]" 
                  placeholder="Ex: Ion Popescu" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-brand-black)] mb-1.5">Număr de Telefon*</label>
                <input 
                  type="tel" 
                  className="w-full border border-[var(--color-brand-muted)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--color-brand-teal)] focus:ring-2 focus:ring-[var(--color-brand-teal)]/20 transition-all bg-[#F9FAFB]" 
                  placeholder="Ex: +373 6X XXX XXX" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-brand-black)] mb-1.5">Doresc o programare pentru:*</label>
                <select 
                  className="w-full border border-[var(--color-brand-muted)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--color-brand-teal)] focus:ring-2 focus:ring-[var(--color-brand-teal)]/20 transition-all bg-[#F9FAFB] appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Selectează tipul consultației</option>
                  <option value="orl">Consultație ORL</option>
                  <option value="stomatologie">Consultație Stomatologie / Ortodonție</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[var(--color-brand-teal)] text-white px-8 py-4 rounded-xl uppercase font-semibold hover:brightness-90 transition-all mt-2 shadow-md shadow-[var(--color-brand-teal)]/20"
              >
                Solicită Programarea
              </button>
              <p className="text-xs text-gray-400 text-center">Te vom contacta în maxim 24 de ore.</p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}