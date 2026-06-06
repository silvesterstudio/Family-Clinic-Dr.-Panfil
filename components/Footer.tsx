import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#7a9a8a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="mb-6">
              <Image src="/white.svg" alt="Dr. Panfil" width={200} height={48} className="object-contain h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Family-Clinic-Dr-Panfil-61558394932274/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"><FacebookIcon className="w-4 h-4"/></a>
              <a href="https://www.instagram.com/familyclinic_dr.panfil" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"><InstagramIcon className="w-4 h-4"/></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-white/90">Legături Rapide</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Acasă</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">Servicii</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors text-sm">Despre Noi</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-white/90">Informații de Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm leading-relaxed">{CONTACT_INFO.address}</li>
              <li className="text-white/80 text-sm"><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-white/90">Program de Lucru</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex justify-between"><span>Luni - Vineri:</span> <span>09:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sâmbătă:</span> <span>09:00 - 14:00</span></li>
              <li className="flex justify-between font-bold text-white"><span>Duminică:</span> <span>Închis</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-xs">&copy; 2026 Panfil Clinic | Toate drepturile rezervate</p>
        </div>
      </div>
    </footer>
  );
}