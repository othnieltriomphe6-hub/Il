/* =========================================================
   MIRA QUE COCHÉ — script.js
   Nav toggle, i18n, carousels, visit counter, contact form
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- Logo fallback ----------------
     If logo.png hasn't been added yet (or the filename differs),
     hide the broken image icon instead of showing it.
  ------------------------------------------------- */
  document.querySelectorAll(".brand-logo").forEach((img) => {
    img.addEventListener("error", () => { img.style.display = "none"; }, { once: true });
  });

  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- i18n ---------------- */
  const translations = {
    es: {
      nav_home: "Inicio", nav_vehicles: "Vehículos", nav_process: "Cómo comprar",
      nav_about: "Nosotros", nav_contact: "Contacto",
      hero_kicker: "Alemania → toda Europa",
      hero_title: "Coches premium, importados<br>con confianza desde Alemania.",
      hero_sub: "Seleccionamos vehículos de baja kilometraje, gestionamos el cambio de matrícula y entregamos en toda Europa. Reserva con solo un 20% de entrada.",
      hero_cta1: "Ver vehículos disponibles", hero_cta2: "Escribir por WhatsApp",
      stat_deposit: "Entrada por vehículo", stat_finance: "Financiación desde",
      stat_delivery_num: "DE", stat_delivery: "Con entrega en toda Europa",
      process_title: "Comprar tu coche, en tres pasos",
      step1_title: "Reserva con el 20%", step1_text: "Aseguras tu vehículo con un depósito del 20% de su valor. El resto se abona antes de la entrega.",
      step2_title: "Financia desde 200€/mes", step2_text: "Planes de financiación disponibles a 200€, 250€ o 300€ al mes, adaptados a cada vehículo.",
      step3_title: "Matrícula y entrega", step3_text: "Nos encargamos del cambio de matriculación y de la entrega del vehículo, allá donde estés.",
      vehicles_title: "Vehículos disponibles", vehicles_sub: "Desliza cada galería con el dedo para ver todas las fotos.",
      order_btn: "Comprar por WhatsApp",
      spec_first_reg: "Primera matriculación", spec_mileage: "Kilometraje", spec_body: "Carrocería",
      spec_gearbox: "Transmisión", gearbox_auto: "Automática", spec_fuel: "Combustible", fuel_diesel: "Diésel",
      spec_power: "Potencia", spec_engine: "Motor", spec_drive: "Tracción", spec_year: "Año",
      spec_owners: "Propietarios", owner_single: "Único propietario", spec_location: "Ubicación",
      spec_tech: "Tecnología", kia_tech: "Turbohíbrido — hasta 231 CV",
      kia_note: "Mayor ahorro y menor consumo. Espacio, confort y tecnología hasta el último detalle.",
      spec_equip: "Equipamiento", full_equip: "Totalmente equipado", tag2: "unidad 2",
      about_title: "Con sede en Alemania, entregamos en toda Europa",
      about_p1: "MIRA QUE COCHÉ selecciona e importa vehículos de ocasión de baja kilometraje directamente desde Alemania. Cada coche se revisa antes de la entrega y gestionamos por ti el cambio de matriculación.",
      about_p2: "Reserva con un 20% de entrada, elige tu plan de financiación y recibe tu vehículo allá donde estés.",
      badge1: "Sede en Alemania", badge2: "Entrega en toda Europa", badge3: "Cambio de matrícula incluido",
      contact_title: "Solicita información",
      contact_sub: "Rellena el formulario y te contactamos lo antes posible. También puedes escribirnos directamente por WhatsApp.",
      contact_wa_btn: "Contactar por WhatsApp",
      form_name: "Nombre completo", form_email: "Correo electrónico", form_phone: "Teléfono",
      form_vehicle: "Vehículo de interés", form_other: "Otro / consulta general", form_message: "Mensaje",
      form_submit: "Enviar solicitud",
      form_note: "Al enviar, recibiremos tus datos por correo electrónico y te contactaremos a la mayor brevedad.",
      footer_tagline: "Vehículos premium desde Alemania, entregados en toda Europa.",
      footer_contact: "Contacto", footer_stats: "Estadísticas del sitio",
      footer_visits: "Visitas totales", footer_today: "Visitas hoy", footer_rights: "Todos los derechos reservados",
      form_sending: "Enviando…", form_success: "¡Gracias! Hemos recibido tu solicitud, te contactaremos pronto.",
      form_error: "No se pudo enviar. Escríbenos por WhatsApp o al correo directamente."
    },
    de: {
      nav_home: "Start", nav_vehicles: "Fahrzeuge", nav_process: "Ablauf",
      nav_about: "Über uns", nav_contact: "Kontakt",
      hero_kicker: "Deutschland → ganz Europa",
      hero_title: "Premium-Fahrzeuge, vertrauensvoll<br>importiert aus Deutschland.",
      hero_sub: "Wir wählen laufleistungsarme Fahrzeuge aus, kümmern uns um die Ummeldung und liefern in ganz Europa. Reservierung mit nur 20% Anzahlung.",
      hero_cta1: "Verfügbare Fahrzeuge ansehen", hero_cta2: "Per WhatsApp schreiben",
      stat_deposit: "Anzahlung pro Fahrzeug", stat_finance: "Finanzierung ab",
      stat_delivery_num: "DE", stat_delivery: "Lieferung in ganz Europa",
      process_title: "In drei Schritten zum Auto",
      step1_title: "Reservierung mit 20%", step1_text: "Sie sichern Ihr Fahrzeug mit einer Anzahlung von 20% des Werts. Der Rest wird vor der Lieferung bezahlt.",
      step2_title: "Finanzierung ab 200€/Monat", step2_text: "Finanzierungspläne ab 200€, 250€ oder 300€ im Monat, passend zu jedem Fahrzeug.",
      step3_title: "Ummeldung & Lieferung", step3_text: "Wir kümmern uns um die Ummeldung und die Lieferung des Fahrzeugs, egal wo Sie sind.",
      vehicles_title: "Verfügbare Fahrzeuge", vehicles_sub: "Mit dem Finger durch jede Galerie wischen, um alle Fotos zu sehen.",
      order_btn: "Per WhatsApp bestellen",
      spec_first_reg: "Erstzulassung", spec_mileage: "Kilometerstand", spec_body: "Karosserie",
      spec_gearbox: "Getriebe", gearbox_auto: "Automatik", spec_fuel: "Kraftstoff", fuel_diesel: "Diesel",
      spec_power: "Leistung", spec_engine: "Motor", spec_drive: "Antrieb", spec_year: "Baujahr",
      spec_owners: "Vorbesitzer", owner_single: "Ein Vorbesitzer", spec_location: "Standort",
      spec_tech: "Technologie", kia_tech: "Turbo-Hybrid — bis zu 231 PS",
      kia_note: "Mehr Ersparnis, geringerer Verbrauch. Platz, Komfort und Technologie bis ins letzte Detail.",
      spec_equip: "Ausstattung", full_equip: "Vollausstattung", tag2: "Einheit 2",
      about_title: "Mit Sitz in Deutschland, Lieferung in ganz Europa",
      about_p1: "MIRA QUE COCHÉ wählt und importiert laufleistungsarme Gebrauchtfahrzeuge direkt aus Deutschland. Jedes Fahrzeug wird vor der Lieferung geprüft, die Ummeldung übernehmen wir für Sie.",
      about_p2: "Reservieren Sie mit 20% Anzahlung, wählen Sie Ihren Finanzierungsplan und erhalten Sie Ihr Fahrzeug, egal wo Sie sind.",
      badge1: "Sitz in Deutschland", badge2: "Lieferung in ganz Europa", badge3: "Ummeldung inklusive",
      contact_title: "Informationen anfordern",
      contact_sub: "Füllen Sie das Formular aus, wir melden uns so schnell wie möglich. Sie können uns auch direkt per WhatsApp schreiben.",
      contact_wa_btn: "Per WhatsApp kontaktieren",
      form_name: "Vollständiger Name", form_email: "E-Mail-Adresse", form_phone: "Telefon",
      form_vehicle: "Interessantes Fahrzeug", form_other: "Sonstiges / allgemeine Anfrage", form_message: "Nachricht",
      form_submit: "Anfrage senden",
      form_note: "Nach dem Absenden erhalten wir Ihre Daten per E-Mail und melden uns so schnell wie möglich.",
      footer_tagline: "Premium-Fahrzeuge aus Deutschland, geliefert in ganz Europa.",
      footer_contact: "Kontakt", footer_stats: "Website-Statistiken",
      footer_visits: "Besuche insgesamt", footer_today: "Besuche heute", footer_rights: "Alle Rechte vorbehalten",
      form_sending: "Wird gesendet…", form_success: "Danke! Wir haben Ihre Anfrage erhalten und melden uns bald.",
      form_error: "Senden fehlgeschlagen. Schreiben Sie uns per WhatsApp oder direkt per E-Mail."
    },
    pt: {
      nav_home: "Início", nav_vehicles: "Veículos", nav_process: "Como comprar",
      nav_about: "Sobre nós", nav_contact: "Contacto",
      hero_kicker: "Alemanha → toda a Europa",
      hero_title: "Carros premium, importados<br>com confiança desde a Alemanha.",
      hero_sub: "Selecionamos veículos de baixa quilometragem, tratamos da mudança de matrícula e entregamos em toda a Europa. Reserve com apenas 20% de entrada.",
      hero_cta1: "Ver veículos disponíveis", hero_cta2: "Escrever no WhatsApp",
      stat_deposit: "Entrada por veículo", stat_finance: "Financiamento desde",
      stat_delivery_num: "DE", stat_delivery: "Com entrega em toda a Europa",
      process_title: "Comprar o seu carro, em três passos",
      step1_title: "Reserve com 20%", step1_text: "Garante o seu veículo com um depósito de 20% do valor. O restante é pago antes da entrega.",
      step2_title: "Financie desde 200€/mês", step2_text: "Planos de financiamento disponíveis a 200€, 250€ ou 300€ por mês, adaptados a cada veículo.",
      step3_title: "Matrícula e entrega", step3_text: "Tratamos da mudança de matrícula e da entrega do veículo, onde quer que esteja.",
      vehicles_title: "Veículos disponíveis", vehicles_sub: "Deslize cada galeria com o dedo para ver todas as fotos.",
      order_btn: "Comprar pelo WhatsApp",
      spec_first_reg: "Primeira matrícula", spec_mileage: "Quilometragem", spec_body: "Carroçaria",
      spec_gearbox: "Transmissão", gearbox_auto: "Automática", spec_fuel: "Combustível", fuel_diesel: "Diesel",
      spec_power: "Potência", spec_engine: "Motor", spec_drive: "Tração", spec_year: "Ano",
      spec_owners: "Proprietários", owner_single: "Único proprietário", spec_location: "Localização",
      spec_tech: "Tecnologia", kia_tech: "Turbo-híbrido — até 231 CV",
      kia_note: "Maior poupança e menor consumo. Espaço, conforto e tecnologia até ao último detalhe.",
      spec_equip: "Equipamento", full_equip: "Totalmente equipado", tag2: "unidade 2",
      about_title: "Sediados na Alemanha, entregamos em toda a Europa",
      about_p1: "A MIRA QUE COCHÉ seleciona e importa veículos usados de baixa quilometragem diretamente da Alemanha. Cada carro é revisto antes da entrega e tratamos da mudança de matrícula por si.",
      about_p2: "Reserve com 20% de entrada, escolha o seu plano de financiamento e receba o seu veículo onde quer que esteja.",
      badge1: "Sede na Alemanha", badge2: "Entrega em toda a Europa", badge3: "Mudança de matrícula incluída",
      contact_title: "Peça informações",
      contact_sub: "Preencha o formulário e entraremos em contacto o mais rápido possível. Também pode escrever-nos diretamente pelo WhatsApp.",
      contact_wa_btn: "Contactar pelo WhatsApp",
      form_name: "Nome completo", form_email: "E-mail", form_phone: "Telefone",
      form_vehicle: "Veículo de interesse", form_other: "Outro / dúvida geral", form_message: "Mensagem",
      form_submit: "Enviar pedido",
      form_note: "Ao enviar, receberemos os seus dados por e-mail e entraremos em contacto o mais breve possível.",
      footer_tagline: "Veículos premium desde a Alemanha, entregues em toda a Europa.",
      footer_contact: "Contacto", footer_stats: "Estatísticas do site",
      footer_visits: "Visitas totais", footer_today: "Visitas hoje", footer_rights: "Todos os direitos reservados",
      form_sending: "A enviar…", form_success: "Obrigado! Recebemos o seu pedido, entraremos em contacto em breve.",
      form_error: "Não foi possível enviar. Escreva-nos pelo WhatsApp ou diretamente por e-mail."
    },
    ar: {
      nav_home: "الرئيسية", nav_vehicles: "السيارات", nav_process: "خطوات الشراء",
      nav_about: "من نحن", nav_contact: "تواصل معنا",
      hero_kicker: "ألمانيا ← كل أوروبا",
      hero_title: "سيارات فاخرة، مستوردة بثقة<br>من ألمانيا.",
      hero_sub: "نختار سيارات بعدد كيلومترات منخفض، نتكفل بتغيير رقم اللوحة، ونوصّل إلى كل أوروبا. احجز بدفعة أولى 20% فقط.",
      hero_cta1: "عرض السيارات المتاحة", hero_cta2: "تواصل عبر واتساب",
      stat_deposit: "دفعة أولى لكل سيارة", stat_finance: "التمويل يبدأ من",
      stat_delivery_num: "DE", stat_delivery: "التوصيل إلى كل أوروبا",
      process_title: "اشترِ سيارتك في ثلاث خطوات",
      step1_title: "احجز بدفعة 20%", step1_text: "تؤمّن سيارتك بدفعة أولى تعادل 20% من قيمتها، ويُدفع الباقي قبل التسليم.",
      step2_title: "تمويل يبدأ من 200€ شهريًا", step2_text: "خطط تمويل متاحة بـ 200€ أو 250€ أو 300€ شهريًا، حسب كل سيارة.",
      step3_title: "تغيير اللوحة والتسليم", step3_text: "نتكفل بتغيير رقم اللوحة وتسليم السيارة أينما كنت.",
      vehicles_title: "السيارات المتاحة", vehicles_sub: "مرر بإصبعك في كل معرض صور لرؤية جميع الصور.",
      order_btn: "اطلب عبر واتساب",
      spec_first_reg: "أول تسجيل", spec_mileage: "عدد الكيلومترات", spec_body: "نوع الهيكل",
      spec_gearbox: "ناقل الحركة", gearbox_auto: "أوتوماتيك", spec_fuel: "نوع الوقود", fuel_diesel: "ديزل",
      spec_power: "القوة", spec_engine: "المحرك", spec_drive: "نظام الدفع", spec_year: "سنة الصنع",
      spec_owners: "عدد الملاك", owner_single: "مالك واحد فقط", spec_location: "الموقع",
      spec_tech: "التقنية", kia_tech: "هجين توربو — حتى 231 حصان",
      kia_note: "توفير أكبر واستهلاك أقل للوقود. مساحة وراحة وتقنية في أدق التفاصيل.",
      spec_equip: "التجهيزات", full_equip: "مجهزة بالكامل", tag2: "الوحدة 2",
      about_title: "مقرنا في ألمانيا، ونوصّل إلى كل أوروبا",
      about_p1: "تختار MIRA QUE COCHÉ وتستورد سيارات مستعملة بعدد كيلومترات منخفض مباشرة من ألمانيا. تُفحص كل سيارة قبل التسليم ونتكفل بتغيير رقم اللوحة نيابة عنك.",
      about_p2: "احجز بدفعة أولى 20%، اختر خطة التمويل المناسبة، واستلم سيارتك أينما كنت.",
      badge1: "المقر في ألمانيا", badge2: "التوصيل إلى كل أوروبا", badge3: "تغيير اللوحة مشمول",
      contact_title: "اطلب معلومات",
      contact_sub: "املأ النموذج وسنتواصل معك في أقرب وقت. يمكنك أيضًا مراسلتنا مباشرة عبر واتساب.",
      contact_wa_btn: "تواصل عبر واتساب",
      form_name: "الاسم الكامل", form_email: "البريد الإلكتروني", form_phone: "رقم الهاتف",
      form_vehicle: "السيارة المطلوبة", form_other: "أخرى / استفسار عام", form_message: "الرسالة",
      form_submit: "إرسال الطلب",
      form_note: "بعد الإرسال، سنستلم بياناتك عبر البريد الإلكتروني ونتواصل معك في أقرب وقت.",
      footer_tagline: "سيارات فاخرة من ألمانيا، تُسلَّم في كل أوروبا.",
      footer_contact: "تواصل معنا", footer_stats: "إحصائيات الموقع",
      footer_visits: "إجمالي الزيارات", footer_today: "زيارات اليوم", footer_rights: "جميع الحقوق محفوظة",
      form_sending: "جارٍ الإرسال…", form_success: "شكرًا لك! استلمنا طلبك وسنتواصل معك قريبًا.",
      form_error: "تعذّر الإرسال. راسلنا عبر واتساب أو بالبريد الإلكتروني مباشرة."
    }
  };

  const langButtons = document.querySelectorAll(".lang-btn");
  const htmlEl = document.documentElement;

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    langButtons.forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
    try { localStorage.setItem("mqc_lang", lang); } catch (e) {}
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  let savedLang = "es";
  try { savedLang = localStorage.getItem("mqc_lang") || "es"; } catch (e) {}
  applyLanguage(savedLang);

  /* ---------------- Carousels (swipe + drag + dots) ---------------- */
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-track]");
    const dotsWrap = carousel.querySelector("[data-dots]");
    const slides = Array.from(track.children);

    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => {
        track.scrollTo({ left: slides[i].offsetLeft, behavior: "smooth" });
      });
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function updateActiveDot() {
      const trackLeft = track.scrollLeft;
      let closest = 0;
      let min = Infinity;
      slides.forEach((slide, i) => {
        const diff = Math.abs(slide.offsetLeft - trackLeft);
        if (diff < min) { min = diff; closest = i; }
      });
      dots.forEach((d, i) => d.classList.toggle("is-active", i === closest));
    }

    let scrollTimeout;
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveDot, 80);
    });

    /* Mouse drag-to-scroll for desktop users */
    let isDown = false, startX = 0, startScroll = 0;
    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.classList.add("is-dragging");
      startX = e.pageX;
      startScroll = track.scrollLeft;
    });
    window.addEventListener("mouseup", () => {
      isDown = false;
      track.classList.remove("is-dragging");
    });
    window.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft = startScroll - (e.pageX - startX);
    });
  });

  /* ---------------- Visit counter ----------------
     Uses the free CountAPI service (no signup) so the owner can see
     approximate traffic. If the request fails (offline, blocked, etc.)
     it falls back to a local, device-only counter so the widget never
     breaks. For accurate, complete analytics across all visitors,
     pair this site with Google Analytics / Google Search Console.
  ------------------------------------------------- */
  const visitEl = document.getElementById("visitCount");
  const visitTodayEl = document.getElementById("visitCountToday");
  const NAMESPACE = "mira-que-coche-site";
  const todayKey = "visits-" + new Date().toISOString().slice(0, 10);

  function localFallbackCount(key, el) {
    try {
      const stored = Number(localStorage.getItem(key) || 0) + 1;
      localStorage.setItem(key, stored);
      if (el) el.textContent = stored + " *";
    } catch (e) {
      if (el) el.textContent = "—";
    }
  }

  function hit(key, el) {
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${key}`)
      .then((r) => r.json())
      .then((data) => { if (el) el.textContent = data.value; })
      .catch(() => localFallbackCount(key, el));
  }

  hit("total-visits", visitEl);
  hit(todayKey, visitTodayEl);

  /* ---------------- Contact form (AJAX submit via FormSubmit) ---------------- */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  const defaultNote = formNote.textContent;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type=submit]");
    const lang = htmlEl.getAttribute("lang") || "es";
    const dict = translations[lang] || translations.es;

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = dict.form_sending;

    const action = form.getAttribute("action").replace("formsubmit.co/", "formsubmit.co/ajax/");
    const formData = new FormData(form);

    fetch(action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    })
      .then((res) => {
        if (!res.ok) throw new Error("submit failed");
        formNote.textContent = dict.form_success;
        form.reset();
      })
      .catch(() => {
        formNote.textContent = dict.form_error;
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        setTimeout(() => { formNote.textContent = defaultNote; }, 8000);
      });
  });

  /* ---------------- Misc ---------------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Header shadow on scroll */
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.style.borderBottomColor = window.scrollY > 10 ? "#454a54" : "#33373f";
  });
})();