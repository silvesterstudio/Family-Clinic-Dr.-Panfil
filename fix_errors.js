const fs = require('fs');

let layout = fs.readFileSync('app/layout.tsx', 'utf8');
layout = layout.replace(/className=\{/, 'className={\');
layout = layout.replace(/ antialiased scroll-smooth/, ' antialiased scroll-smooth\');
fs.writeFileSync('app/layout.tsx', layout);

let contact = fs.readFileSync('components/Contact.tsx', 'utf8');
contact = contact.replace(/Telefon, Mail \}/, 'Phone, Mail }');
contact = contact.replace(/<Telefon /g, '<Phone ');
fs.writeFileSync('components/Contact.tsx', contact);
