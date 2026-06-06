const fs = require('fs');

let about = fs.readFileSync('components/About.tsx', 'utf8');
about = about.replace(/Welcome to/i, 'Bine a?i venit la');
about = about.replace(/My Dental Clinic/ig, 'Clinica Familiei Dr. Panfil');
about = about.replace(/We are one of the largest and most modern dental clinics, equipped with the latest generation technology\. We offer complex dental services, from prevention and dental aesthetics to implantology and complete rehabilitations\./g, 'Suntem o clinica dedicata intregii familii, orientata spre siguran?a ?i confortul tau. Oferim ingrijire stomatologica prietenoasa copiilor, beneficiind de sedare sigura (anestezie generala) ?i tratamente terapeutice de top pentru intreaga familie.');
about = about.replace(/Own Hotel/g, 'Mediu Prietenos');
about = about.replace(/Transformed Smiles/g, 'Fara Durere');
about = about.replace(/Careers/g, 'Despre Noi');
about = about.replace(/Free Consultation/g, 'Programa?i o vizita');
fs.writeFileSync('components/About.tsx', about);

let whyus = fs.readFileSync('components/WhyUs.tsx', 'utf8');
whyus = whyus.replace(/why <span/g, 'de ce <span');
whyus = whyus.replace(/"Empathy"/g, '"Grija pentru Familie"');
whyus = whyus.replace(/"Transparency"/g, '"Siguran?a absoluta"');
whyus = whyus.replace(/"Latest Generation Technology"/g, '"Excelen?a Medicala"');
whyus = whyus.replace(/"Dedicated Team"/g, '"Empatie ?i Rabdare"');
whyus = whyus.replace(/"Complex Services"/g, '"Anestezie Fara Stres"');
fs.writeFileSync('components/WhyUs.tsx', whyus);

let services = fs.readFileSync('components/Services.tsx', 'utf8');
services = services.replace(/dental services/g, 'servicii stomatologice');
services = services.replace(/for all ages/g, 'pentru toate varstele');
services = services.replace(/We offer comprehensive care starting from the first baby teeth up to complex complete rehabilitations\. Our specialized doctors use modern technology and empathy to treat each patient\./g, 'Oferim ingrijire blanda, de la primii din?i?ori pana la tratamente complexe pentru adul?i. Specializarea noastra premiera in stomatologia pediatrica sub anestezie generala asigura proceduri complet lipsite de stres pentru copii.');
services = services.replace(/Services/g, 'Servicii');
services = services.replace(/Free Consultation/g, 'Afla mai mult');
fs.writeFileSync('components/Services.tsx', services);
