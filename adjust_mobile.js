const fs = require('fs');

// Contact info mobile friendly display
let nav = fs.readFileSync('components/Navbar.tsx', 'utf8');

// For mobile display, we'll make standard phone smaller if needed
nav = nav.replace(/<a href=\{\	el:\$\{CONTACT_INFO\.phone\}\\} className="flex items-center gap-1 text-\[var\(--color-brand-teal\)\] text-sm font-semibold">/s, 
'<a href={	el:\} className="flex items-center gap-1 text-[var(--color-brand-teal)] text-xs sm:text-sm font-bold bg-[var(--color-brand-teal)]/10 px-2 py-1.5 rounded-full">');

// We also make sure the logo is more responsive in desktop as requested:
nav = nav.replace(/className="object-contain w-\[130px\] md:w-\[160px\] h-auto"/s, 'className="object-contain w-[140px] md:w-[180px] lg:w-[220px] h-auto transition-all"');

fs.writeFileSync('components/Navbar.tsx', nav);
