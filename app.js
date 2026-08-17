/* ======================================================
   Ricky – Francouzská lilie
   App JS: i18n, dark mode, mobile nav, lightbox, scroll reveal, form
   ====================================================== */
 
/* ---- Translations ---- */
const i18n = {
  cs: {
    nav_about:       'O mně',
    nav_gallery:     'Galerie',
    nav_awards:      'Ocenění',
    nav_contact:     'Kontakt',
    hero_badge:      'Belgický Griffonek',
    hero_subtitle:   'Francouzská lilie',
    hero_tagline:    'Malý pes. Velká osobnost. Šampion.',
    hero_cta:        'Poznat Rickyho',
    about_title:     'Ahoj, já jsem Ricky!',
    about_intro:     'Jmenuji se <strong>Ricky, Francouzská lilie</strong> a jsem hrdý Belgický Griffonek plný energie, lásky a šampionského ducha. Narodil jsem se <strong>1. ledna 2024</strong> a od prvního dne dobývám výstavní ringy i srdce všech, kdo mě potkají.',
    about_body:      'Jsem chovný pes s výborným zdravím — pately 0/0, zuby 6/6, výborné kardiologické vyšetření včetně zátěžového, a genetické vyšetření bez nálezu. Moje majitelka je <strong>Věra Bartůňková</strong>, která mě připravuje na ty největší výstavy.',
    stat_born:       'Datum narození',
    stat_class:      'Třída',
    stat_breeding:   'Status',
    stat_breeding_value: 'Chovný',
    health_title:    'Zdravotní vyšetření',
    health_patella:  'Pately 0/0',
    health_teeth:    'Zuby 6/6',
    health_cardio:   'Výborné kardiologické vyšetření vč. zátěžového',
    health_genetic:  'Genetické vyšetření',
    pedigree_button: 'Rodokmen',
    gallery_title:   'Moje fotky',
    gallery_subtitle:'Od výstavního ringu až po pohodičku doma — to jsem já.',
    gallery_cap1:    'Na výstavě',
    gallery_cap2:    'Na zahradě',
    gallery_cap3:    'Moje oblíbené místo',
    gallery_cap4:    'Doma',
    gallery_cap5:    'Moje sbírka trofejí',
    gallery_cap6:    'Dávám pac!',
    gallery_cap7:    'S majitelkou po výhře',
    gallery_cap8:    'Připraven na ring',
    awards_title:    'Má ocenění',
    awards_subtitle: 'Každá stuha, každý pohár — výsledek tvrdé práce a radosti ze života v ringu.',
    awards_titles_heading: 'Šampionské tituly',
    awards_results_heading:'Výstavní výsledky',
    title_european:       'Evropský Klubový Vítěz Mladých',
    title_czech_junior:   'Český Juniorský Šampion',
    title_czech_champion: 'Český Šampion',
    title_austrian:       'Rakouský Šampion',
    award_national:  'Národní vítěz',
    contact_title:   'Napište nám',
    contact_subtitle:'Máte zájem o bližší informace o Rickym nebo chovných možnostech? Napište nám!',
    form_first_name: 'Jméno',
    form_last_name:  'Příjmení',
    form_email:      'E-mail',
    form_message:    'Zpráva',
    form_submit:     'Odeslat zprávu',
    form_required:   'Toto pole je povinné',
    form_email_invalid: 'Zadejte platnou e-mailovou adresu',
    form_success_msg:'Děkujeme! Vaše zpráva byla odeslána.',
    form_first_name_ph: 'Vaše jméno',
    form_last_name_ph:  'Vaše příjmení',
    form_email_ph:      'vas@email.cz',
    form_message_ph:    'Vaše zpráva...',
    footer_subtitle: 'Francouzská lilie · Belgický Griffonek',
    footer_owner:    'Majitel:',
    footer_copy:     '© 2026 Ricky Francouzská lilie. Všechna práva vyhrazena.',
  },
  de: {
    nav_about:       'Über mich',
    nav_gallery:     'Galerie',
    nav_awards:      'Auszeichnungen',
    nav_contact:     'Kontakt',
    hero_badge:      'Belgischer Griffon',
    hero_subtitle:   'Francouzská lilie',
    hero_tagline:    'Kleiner Hund. Große Persönlichkeit. Champion.',
    hero_cta:        'Ricky kennenlernen',
    about_title:     'Hallo, ich bin Ricky!',
    about_intro:     'Mein Name ist <strong>Ricky, Francouzská lilie</strong> und ich bin ein stolzer Belgischer Griffon voller Energie, Liebe und Championgeist. Ich wurde am <strong>1. Januar 2024</strong> geboren und erobere seitdem Ausstellungsringe und Herzen.',
    about_body:      'Ich bin ein Zuchtrüde mit ausgezeichneter Gesundheit — Patellae 0/0, Zähne 6/6, hervorragende kardiologische Untersuchung inkl. Belastungstest und genetische Untersuchung. Meine Besitzerin ist <strong>Věra Bartůňková</strong>, die mich auf die größten Ausstellungen vorbereitet.',
    stat_born:       'Geburtsdatum',
    stat_class:      'Klasse',
    stat_breeding:   'Status',
    stat_breeding_value: 'Zuchtrüde',
    health_title:    'Gesundheitsuntersuchungen',
    health_patella:  'Patellae 0/0',
    health_teeth:    'Zähne 6/6',
    health_cardio:   'Hervorragende kardiologische Untersuchung inkl. Belastungstest',
    health_genetic:  'Genetische Untersuchung',
    pedigree_button: 'Ahnentafel',
    gallery_title:   'Meine Fotos',
    gallery_subtitle:'Vom Ausstellungsring bis zur Gemütlichkeit zu Hause — das bin ich.',
    gallery_cap1:    'Bei der Ausstellung',
    gallery_cap2:    'Im Garten',
    gallery_cap3:    'Mein Lieblingsplatz',
    gallery_cap4:    'Zu Hause',
    gallery_cap5:    'Meine Trophäensammlung',
    gallery_cap6:    'Pfötchen geben!',
    gallery_cap7:    'Mit der Besitzerin nach dem Sieg',
    gallery_cap8:    'Bereit für den Ring',
    awards_title:    'Meine Auszeichnungen',
    awards_subtitle: 'Jedes Band, jeder Pokal — Ergebnis harter Arbeit und Freude am Ring.',
    awards_titles_heading: 'Champion-Titel',
    awards_results_heading:'Ausstellungsergebnisse',
    title_european:       'Europäischer Klubjugendsieger',
    title_czech_junior:   'Tschechischer Jugendchampion',
    title_czech_champion: 'Tschechischer Champion',
    title_austrian:       'Österreichischer Champion',
    award_national:  'Nationaler Sieger',
    contact_title:   'Schreiben Sie uns',
    contact_subtitle:'Interesse an Ricky oder Zuchtmöglichkeiten? Wir freuen uns auf Ihre Nachricht!',
    form_first_name: 'Vorname',
    form_last_name:  'Nachname',
    form_email:      'E-Mail',
    form_message:    'Nachricht',
    form_submit:     'Nachricht senden',
    form_required:   'Dieses Feld ist erforderlich',
    form_email_invalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    form_success_msg:'Danke! Ihre Nachricht wurde gesendet.',
    form_first_name_ph: 'Ihr Vorname',
    form_last_name_ph:  'Ihr Nachname',
    form_email_ph:      'ihre@email.de',
    form_message_ph:    'Ihre Nachricht...',
    footer_subtitle: 'Francouzská lilie · Belgischer Griffon',
    footer_owner:    'Besitzer:',
    footer_copy:     '© 2026 Ricky Francouzská lilie. Alle Rechte vorbehalten.',
  },
  en: {
    nav_about:       'About Me',
    nav_gallery:     'Gallery',
    nav_awards:      'Awards',
    nav_contact:     'Contact',
    hero_badge:      'Belgian Griffon',
    hero_subtitle:   'Francouzská lilie',
    hero_tagline:    'Small dog. Big personality. Champion.',
    hero_cta:        'Meet Ricky',
    about_title:     'Hello, I\'m Ricky!',
    about_intro:     'My name is <strong>Ricky, Francouzská lilie</strong> and I am a proud Belgian Griffon full of energy, love and champion spirit. I was born on <strong>1 January 2024</strong> and from day one I have been conquering show rings and hearts alike.',
    about_body:      'I am a breeding dog with excellent health — patellas 0/0, teeth 6/6, excellent cardiac examination including stress test, and genetic testing clear. My owner is <strong>Věra Bartůňková</strong>, who prepares me for the biggest shows.',
    stat_born:       'Date of birth',
    stat_class:      'Class',
    stat_breeding:   'Status',
    stat_breeding_value: 'Breeding stud',
    health_title:    'Health Examinations',
    health_patella:  'Patellas 0/0',
    health_teeth:    'Teeth 6/6',
    health_cardio:   'Excellent cardiac examination incl. stress test',
    health_genetic:  'Genetic testing clear',
    pedigree_button: 'Pedigree',
    gallery_title:   'My Photos',
    gallery_subtitle:'From the show ring to cosy moments at home — that\'s me.',
    gallery_cap1:    'At the show',
    gallery_cap2:    'In the garden',
    gallery_cap3:    'My favourite spot',
    gallery_cap4:    'At home',
    gallery_cap5:    'My trophy collection',
    gallery_cap6:    'Giving a paw!',
    gallery_cap7:    'With my owner after a win',
    gallery_cap8:    'Ready for the ring',
    awards_title:    'My Awards',
    awards_subtitle: 'Every ribbon, every trophy — the result of hard work and joy in the ring.',
    awards_titles_heading: 'Champion Titles',
    awards_results_heading:'Show Results',
    title_european:       'European Club Youth Winner',
    title_czech_junior:   'Czech Junior Champion',
    title_czech_champion: 'Czech Champion',
    title_austrian:       'Austrian Champion',
    award_national:  'National Winner',
    contact_title:   'Contact Us',
    contact_subtitle:'Interested in learning more about Ricky or breeding opportunities? Drop us a message!',
    form_first_name: 'First name',
    form_last_name:  'Last name',
    form_email:      'Email',
    form_message:    'Message',
    form_submit:     'Send message',
    form_required:   'This field is required',
    form_email_invalid: 'Please enter a valid email address',
    form_success_msg:'Thank you! Your message has been sent.',
    form_first_name_ph: 'Your first name',
    form_last_name_ph:  'Your last name',
    form_email_ph:      'you@email.com',
    form_message_ph:    'Your message...',
    footer_subtitle: 'Francouzská lilie · Belgian Griffon',
    footer_owner:    'Owner:',
    footer_copy:     '© 2026 Ricky Francouzská lilie. All rights reserved.',
  }
};
 
/* ---- i18n Engine ---- */
let currentLang = 'cs';

/* Content loaded from content.json. Declared here because applyTranslation
   runs on page init, before the fetch block further down is evaluated. */
let siteContent = null;
 
function applyTranslation(lang) {
  currentLang = lang;
  const t = i18n[lang];
  if (!t) return;
 
  // Set html lang
  const langMap = { cs: 'cs', de: 'de', en: 'en' };
  document.documentElement.lang = langMap[lang] || 'cs';
 
  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
 
  // Translate placeholders
  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.getAttribute('data-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });
 
  // Update form hidden subject line
  const subjectInput = document.querySelector('input[name="_subject"]');
  if (subjectInput) {
    const subjects = {
      cs: 'Zpráva z webu – Ricky Francouzská lilie',
      de: 'Nachricht von der Website – Ricky Francouzská lilie',
      en: 'Message from website – Ricky Francouzská lilie'
    };
    subjectInput.value = subjects[lang];
  }
 
  // Redraw CMS-driven gallery in the new language.
  // Guarded because this runs before content.json has loaded.
  if (typeof renderGalerie === 'function') renderGalerie();

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}
 
/* ---- Dark mode ---- */
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
 
  const sunSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moonSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
 
  if (toggle) {
    toggle.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Přepnout světlý režim' : 'Přepnout tmavý režim');
    });
  }
})();
 
/* ---- Language switcher ---- */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyTranslation(btn.dataset.lang);
  });
});
 
/* Initial language */
applyTranslation('cs');
 
/* ---- Mobile nav ---- */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
 
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const isOpen = mobileNav.style.display === 'flex';
    mobileNav.style.display = isOpen ? 'none' : 'flex';
    mobileNav.hidden = isOpen;
    burger.setAttribute('aria-expanded', String(!isOpen));
  });
 
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      mobileNav.hidden = true;
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
 
/* ---- Scroll reveal ---- */
const revealEls = document.querySelectorAll(
  '.section-title, .section-subtitle, .about-text, .about-media, ' +
  '.gallery-item, .title-card, .award-count-item, .contact-form, ' +
  '.trophy-photo-wrap, .stat-card, .about-health-card, .stats-row'
);
 
revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  // Stagger children in groups
  const mod = i % 4;
  if (mod === 1) el.classList.add('reveal-delay-1');
  if (mod === 2) el.classList.add('reveal-delay-2');
  if (mod === 3) el.classList.add('reveal-delay-3');
});
 
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
 
revealEls.forEach(el => revealObserver.observe(el));
 
/* ---- Gallery lightbox ---- */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.innerHTML = '<button class="lightbox-close" aria-label="Zavřít">✕</button><img src="" alt="" />';
document.body.appendChild(lightbox);
 
const lbImg = lightbox.querySelector('img');
const lbClose = lightbox.querySelector('.lightbox-close');
 
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.parentElement.style.cursor = 'zoom-in';
  img.parentElement.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  });
});
 
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
 
/* ---- Contact form client-side validation ---- */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
 
if (form) {
  form.addEventListener('submit', function (e) {
    let valid = true;
 
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('invalid');
      if (!field.value.trim()) {
        field.classList.add('invalid');
        valid = false;
      }
    });
 
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.classList.add('invalid');
      valid = false;
    }
 
    if (!valid) {
      e.preventDefault();
      form.querySelector('.invalid')?.focus();
    }
  });
 
  // Remove invalid class on input
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('invalid'));
  });
}
 
/* ---- Load dynamic content from content.json ---- */

/* Pick a field in the current language, falling back to Czech.
   Stored flat: popis / popis_de / popis_en */
function langField(obj, base) {
  if (!obj) return '';
  if (currentLang === 'cs') return obj[base] || '';
  return obj[base + '_' + currentLang] || obj[base] || '';
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* Redraw the gallery from content.json. Called after the fetch resolves
   and again on every language switch. Guarded at the call site so the
   language switcher can call it before content.json has loaded. */
function renderGalerie() {
  const data = siteContent;
  if (!data) return;
  const grid = document.querySelector('.gallery-grid');
  if (!grid || !Array.isArray(data.galerie) || !data.galerie.length) return;

  grid.innerHTML = data.galerie.map(f => {
    const mod = f.velikost && f.velikost !== 'normal'
      ? ' gallery-item--' + esc(f.velikost) : '';
    const popis = esc(langField(f, 'popis'));
    return `
      <figure class="gallery-item${mod}">
        <img src="${esc(f.soubor)}" alt="${popis}" loading="lazy" />
        <figcaption>${popis}</figcaption>
      </figure>`;
  }).join('');
}

fetch('/content.json')
  .then(r => r.json())
  .then(data => {
    siteContent = data;

    // Pedigree (rodokmen) link — shown only when a URL is set in the CMS.
    const rod = document.getElementById('rodokmen-odkaz');
    if (rod) {
      const url = ((data.rodokmen && data.rodokmen.url) || '').trim();
      rod.hidden = !url;
      if (url) rod.href = url;
    }

    // Text blocks edited in the CMS override the built-in dictionary.
    if (data.texty) {
      Object.keys(data.texty).forEach(key => {
        const blok = data.texty[key];
        ['cs', 'de', 'en'].forEach(l => {
          if (i18n[l] && blok[l]) i18n[l][key] = blok[l];
        });
      });
      applyTranslation(currentLang);
    }

    renderGalerie();

    // Update award counts. Matched on data-count-key rather than DOM order, so
    // a new counter can be added to the HTML without shifting the others.
    const v = data.vystavni_vysledky || {};
    document.querySelectorAll('.award-count-item[data-count-key]').forEach(item => {
      const num = item.querySelector('.award-count-number');
      const val = v[item.dataset.countKey];
      if (num && val !== undefined) num.textContent = val + '\u00d7';
      item.hidden = !val;   // hide counters that are missing or zero
    });

    // Rebuild title cards from content.json
    const titleCards = document.querySelector('.title-cards');
    if (titleCards && data.tituly && data.tituly.length) {
      titleCards.innerHTML = data.tituly.map(t => `
        <a href="${t.diplom || '#'}" target="_blank"
           class="title-card title-card--${t.stupen} title-card--clickable"
           rel="noopener" ${!t.diplom ? 'onclick="return false"' : ''}>
          <div class="title-icon">${t.ikona}</div>
          <div class="title-info">
            <div class="title-name"${t.i18n_key ? ` data-i18n="${t.i18n_key}"` : ''}>${t.nazev}</div>
            <div class="title-org">${t.organizace}</div>
          </div>
          ${t.diplom ? '<div class="title-diploma-hint">Zobrazit diplom →</div>' : ''}
        </a>`).join('');
 
      // Re-apply current language so newly built cards are translated immediately
      applyTranslation(currentLang);
    }
  })
  .catch(() => {}); // Silently fall back to hardcoded HTML
 
/* ---- Header shadow on scroll ---- */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(30,26,18,0.10)'
      : '';
  }
}, { passive: true });
 
