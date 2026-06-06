const fs = require('fs');

let navbar = fs.readFileSync('components/Navbar.tsx', 'utf8');
navbar = navbar.replace(/import \{ Phone, Menu, X, Smile \}/, 'import { Phone, Menu, X }');
navbar = navbar.replace(/import Link from "next\/link";/, 'import Link from "next/link";\nimport Image from "next/image";');
const oldTitle = /<Smile className="w-8 h-8 text-\[var\(--color-brand-teal\)\]" \/>\s*<span className="font-primary text-xl font-bold text-\[var\(--color-brand-black\)\]">\s*My Dental Clinic\s*<\/span>/s;
navbar = navbar.replace(oldTitle, '<Image src="/logo.png" alt="Clinica Familiei Dr. Panfil" width={180} height={40} className="object-contain" />');
navbar = navbar.replace(/"Home"/g, '"Acasa"');
navbar = navbar.replace(/"Services"/g, '"Servicii"');
navbar = navbar.replace(/"About"/g, '"Despre Noi"');
navbar = navbar.replace(/"Technology"/g, '"Tehnologie"');
navbar = navbar.replace(/"Team"/g, '"Echipa"');
navbar = navbar.replace(/Free Consultation/g, 'Consulta?ie Gratuita');
fs.writeFileSync('components/Navbar.tsx', navbar);

let hero = fs.readFileSync('components/Hero.tsx', 'utf8');
hero = hero.replace(/Everything, in one place/g, 'Zambete sanatoase, fara stres');
hero = hero.replace(/Diagnosis\. Treatment\. Impeccable Results\./g, 'Tratamente sigure ?i fara durere. Excelen?a medicala, cu blande?e.');
hero = hero.replace(/See Services/g, 'Desopera Serviciile');
hero = hero.replace(/Book Appointment/g, 'Programeaza-te');
fs.writeFileSync('components/Hero.tsx', hero);

let stats = fs.readFileSync('components/Stats.tsx', 'utf8');
stats = stats.replace(/"Empathy"/g, '"Empatie ?i Rabdare"');
stats = stats.replace(/"Treatment Rooms"/g, '"Sali de Tratament"');
stats = stats.replace(/"Qualified Doctors"/g, '"Medici Califica?i"');
stats = stats.replace(/"Patients \/ Day"/g, '"Pacien?i Fericiti / Zi"');
fs.writeFileSync('components/Stats.tsx', stats);
