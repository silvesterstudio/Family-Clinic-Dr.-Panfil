const fs = require('fs');

let nav = fs.readFileSync('components/Navbar.tsx', 'utf8');
nav = nav.replace(/<Image src="\/logo\.jpg" alt="Clinica Familiei Dr\. Panfil" width=\{160\} height=\{36\} className="object-contain w-\[130px\] md:w-\[160px\] h-auto" \/>/, 
'<Image src="/logo.jpg" alt="Clinica Familiei Dr. Panfil" width={220} height={50} className="object-contain w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] h-auto transition-all" />');

nav = nav.replace(/<div className="flex md:hidden items-center gap-4">[\s\S]*?<\/div>\s*<\/div>/, 
\<div className="flex md:hidden items-center gap-3">
          <a href={\\\	el:\\\\} className="flex items-center gap-1 text-[var(--color-brand-teal)] text-xs sm:text-sm font-bold bg-[var(--color-brand-teal)]/10 px-3 py-1.5 rounded-full">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">\</span>
            <span className="sm:hidden">Suna</span>
          </a>
          <button
            className="text-[var(--color-brand-black)] p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>\);

fs.writeFileSync('components/Navbar.tsx', nav);
