const fs = require('fs');

let layout = fs.readFileSync('app/layout.tsx', 'utf8');
layout = layout.replace(/Montserrat, Open_Sans/g, 'Plus_Jakarta_Sans, Inter');
layout = layout.replace(/const montserrat = Montserrat\(\{/g, 'const jakarta = Plus_Jakarta_Sans({');
layout = layout.replace(/variable: "--font-montserrat",/g, 'variable: "--font-jakarta",');
layout = layout.replace(/subsets: \["latin"\]/g, 'subsets: ["latin", "latin-ext"]');

layout = layout.replace(/const openSans = Open_Sans\(\{/g, 'const inter = Inter({');
layout = layout.replace(/variable: "--font-open-sans",/g, 'variable: "--font-inter",');
layout = layout.replace(/\$\{montserrat\.variable\}/g, '\');
layout = layout.replace(/\$\{openSans\.variable\}/g, '\');

fs.writeFileSync('app/layout.tsx', layout);

let globals = fs.readFileSync('app/globals.css', 'utf8');
globals = globals.replace(/var\(--font-montserrat\)/g, 'var(--font-jakarta)');
globals = globals.replace(/var\(--font-open-sans\)/g, 'var(--font-inter)');
fs.writeFileSync('app/globals.css', globals);

let navbar = fs.readFileSync('components/Navbar.tsx', 'utf8');
navbar = navbar.replace(/logo\.png/g, 'logo.jpg');
fs.writeFileSync('components/Navbar.tsx', navbar);
