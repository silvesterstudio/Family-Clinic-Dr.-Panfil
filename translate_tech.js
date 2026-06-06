const fs = require('fs');

let tech = fs.readFileSync('components/Technology.tsx', 'utf8');
tech = tech.replace(/latest generation/g, 'siguran?a ?i');
tech = tech.replace(/technology/g, 'confort');
tech = tech.replace(/"Laser Treatments"/g, '"Anestezie Generala"');
tech = tech.replace(/Precise, minimally invasive, pain-free procedures allowing for rapid healing\./g, 'Tratamente avansate in timpul somnului, eliminand complet frica ?i durerea pentru copii ?i adu?i anxio?i.');
tech = tech.replace(/"Microscope Treatments"/g, '"Tratamente Terapeutice"');
tech = tech.replace(/Up to 25x magnification for accurate diagnosis and safe root canal treatments\./g, 'Folosim tehnici micro-invazive ?i echipamente moderne pentru a asigura excelen?a profesionala.');
tech = tech.replace(/"General Anesthesia"/g, '"Abordare Prietenoasa"');
tech = tech.replace(/Dental treatment during sleep, no stress or pain, waking up with a new smile\./g, 'Empatie ?i rabdare deplina pentru a reconstrui increderea in mediul stomatologic.');
tech = tech.replace(/Technologies/g, 'Descopera Metodele Noastre');
tech = tech.replace(/I Want a Perfect Smile/g, 'Programeaza-te Acum');
tech = tech.replace(/Details/g, 'Afla Detalii');
fs.writeFileSync('components/Technology.tsx', tech);

let teamstats = fs.readFileSync('components/TeamStats.tsx', 'utf8');
teamstats = teamstats.replace(/medical excellence, /g, 'excelen?a medicala, ');
teamstats = teamstats.replace(/human care/g, 'grija umana');
teamstats = teamstats.replace(/Average Experience/g, 'Experien?a Medie');
teamstats = teamstats.replace(/Training Countries/g, 'Medici Pediatri ?i Stomatologi');
teamstats = teamstats.replace(/Certifications Obtained/g, 'Pacien?i Fara Frica');
teamstats = teamstats.replace(/Our team of specialists works entirely for you to offer the best possible care\. Together we find the right solution for your smile\./g, 'Suntem exper?i devota?i confortului tau ?i al familiei tale. Eliminam limbajul tehnic rece ?i punem empatia umana pe primul loc.');
teamstats = teamstats.replace(/Join Our Team/g, 'Lista de Pre?uri');
teamstats = teamstats.replace(/Leave Details & We&#39;ll Call You/g, 'Lasa-ne contactul tau ?i sunam noi');
fs.writeFileSync('components/TeamStats.tsx', teamstats);
