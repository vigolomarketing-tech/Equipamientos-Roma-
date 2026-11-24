(() => {
  const C = CONFIG, $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = n => "$ " + Number(n).toLocaleString("es-AR", { maximumFractionDigits: 0 });

  // WhatsApp: con número real arma wa.me con texto; mientras no esté, usa el link de respaldo
  const wa = text => C.contacto.whatsapp
    ? `https://wa.me/${C.contacto.whatsapp}?text=${encodeURIComponent(text)}`
    : C.contacto.waLinkRespaldo;
  const bindWa = root => root.querySelectorAll("[data-wa]").forEach(a => {
    a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener";
  });

  const icons = {
    shield: '<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    box: '<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>',
    card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0-5.2 5.2L3.5 17.5a2 2 0 0 0 3 3l5.8-5.8a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z"/>',
  };

  // --- Hero ---
  $("#hero-bajada").textContent = C.negocio.bajada;
  $("#hero-stats").innerHTML = [
    [C.negocio.seguidores, "seguidores en Instagram"],
    ["6 meses", "de garantía en planchas"],
    ["6 cuotas", "con tarjeta de crédito"],
  ].map(([a, b]) => `<li><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join("");

  // --- Marquee ---
  const mq = ["Planchas lomiteras", "Cocinas industriales", "Freidoras", "Tostadores", "Campanas", "Mesadas de acero", "Mayorista y minorista"];
  $("#marquee").innerHTML = [...mq, ...mq].map(t => `<span>${t}</span>`).join("");

  // --- Catálogo ---
  let cat = "Todos";
  const cats = ["Todos", ...C.categorias];
  const filters = $("#filters"), grid = $("#grid");
  filters.innerHTML = cats.map(c => `<button role="tab" aria-selected="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const card = p => `
    <article class="card rv">
      <div class="card__media">
        ${p.etiqueta ? `<span class="tag">${esc(p.etiqueta)}</span>` : ""}
        <img class="${p.fit || "cover"}" src="${p.foto}" width="${p.w}" height="${p.h}" alt="${esc(p.nombre)}" loading="lazy"${p.pos ? ` style="object-position:${p.pos}"` : ""}>
      </div>
      <div class="card__body">
        <span class="card__cat">${esc(p.categoria)}</span>
        <h3>${esc(p.nombre)}</h3>
        <p>${esc(p.descripcion)}</p>
        <ul class="specs">${p.specs.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
        ${p.precio ? `<div class="price">${money(p.precio)}</div>` : ""}
        <a class="btn btn--wa" data-wa="${esc(`¡Hola! Vi en la web de Equipamientos Roma: ${p.nombre}. Quería consultar precio y disponibilidad.`)}">Consultar precio</a>
      </div>
    </article>`;
  function renderGrid() {
    const list = C.productos.filter(p => cat === "Todos" || p.categoria === cat);
    grid.innerHTML = list.map(card).join("");
    bindWa(grid); reveal(grid);
  }
  filters.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    cat = b.dataset.c;
    filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-selected", x === b));
    renderGrid();
  });
  $("#more").innerHTML = `<strong>Y mucho más:</strong>${C.masEquipos.map(m => `<span>${esc(m)}</span>`).join("")}
    <a class="btn btn--ghost" data-wa="¡Hola! Quería consultar por otros equipos de cocina que tengan en stock.">Consultar stock</a>`;

  // --- Rubros ---
  const tabs = $("#rubro-tabs"), panel = $("#rubro-panel");
  tabs.innerHTML = C.rubros.map((r, i) => `<button role="tab" aria-selected="${i === 0}" data-i="${i}">${esc(r.nombre)}</button>`).join("");
  function renderRubro(i) {
    const r = C.rubros[i];
    panel.innerHTML = `
      <div><h3>${esc(r.nombre)}</h3>
        <p>Estos son los equipos que más suelen hacer falta para arrancar. Contanos tu proyecto y armamos el pedido a medida.</p>
        <a class="btn btn--wa btn--lg" data-wa="${esc(`¡Hola! Quiero armar una ${r.nombre.toLowerCase()} y necesito que me asesoren con los equipos.`)}">Armá tu pedido</a></div>
      <ul>${r.equipos.map((e, k) => `<li><b>0${k + 1}</b>${esc(e)}</li>`).join("")}</ul>`;
    bindWa(panel);
  }
  tabs.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    tabs.querySelectorAll("button").forEach(x => x.setAttribute("aria-selected", x === b));
    renderRubro(+b.dataset.i);
  });
  renderRubro(0);

  // --- Beneficios, pasos, pagos ---
  $("#benef").innerHTML = C.beneficios.map(b => `
    <div class="bf rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[b.icono]}</svg>
    <h3>${esc(b.titulo)}</h3><p>${esc(b.texto)}</p></div>`).join("");
  $("#steps").innerHTML = C.pasos.map(s => `<li class="rv"><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p></li>`).join("");
  $("#pagos").innerHTML = C.pagos.map(p => `<li>${esc(p)}</li>`).join("");

  // --- Instagram ---
  $("#ig-user").textContent = C.contacto.instagramUsuario;
  $("#ig-seg").textContent = C.negocio.seguidores;
  $("#ig-btn").href = C.contacto.instagram;
  $("#insta-tiles").innerHTML = [["img/cocinas.webp", "Cocinas industriales de Equipamientos Roma"], ["img/tostador.webp", "Tostador doble con plancha profesional"], ["img/plancha.webp", "Plancha a gas con mesa de acero"]]
    .map(([s, a]) => `<a href="${C.contacto.instagram}" target="_blank" rel="noopener" aria-label="${esc(a)} en Instagram"><img src="${s}" alt="${esc(a)}" loading="lazy"></a>`).join("");

  // --- Ubicación y horarios ---
  $("#addr").textContent = C.contacto.direccion;
  $("#map").src = C.contacto.mapsEmbed;
  $("#como-llegar").href = C.contacto.mapsLink;
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const orden = [1, 2, 3, 4, 5, 6, 0];
  const fmt = h => h.replace(/^0/, "").replace(":00", "");
  const ahora = () => {
    const p = new Intl.DateTimeFormat("en-US", { timeZone: "America/Argentina/Buenos_Aires", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
    const g = t => p.find(x => x.type === t).value;
    const d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday"));
    return { d, m: (+g("hour") % 24) * 60 + +g("minute") };
  };
  const mins = h => { const [a, b] = h.split(":"); return +a * 60 + +b; };
  function pintarHorarios() {
    const { d, m } = ahora();
    $("#hours").insertAdjacentHTML("beforeend", orden.map(i => {
      const t = C.horarios[i];
      return `<tr class="${i === d ? "hoy" : ""}"><td>${dias[i]}</td><td>${t.length ? t.map(([a, b]) => `${fmt(a)} a ${fmt(b)}`).join(" y ") + " hs" : "Cerrado"}</td></tr>`;
    }).join(""));
    const turno = C.horarios[d].find(([a, b]) => m >= mins(a) && m < mins(b));
    const el = $("#open");
    if (turno) { el.className = "open on"; el.textContent = `Abierto ahora · hasta las ${fmt(turno[1])} hs`; }
    else { el.className = "open off"; el.textContent = "Cerrado ahora · escribinos y te respondemos apenas abramos"; }
  }
  pintarHorarios();

  // --- Footer ---
  $("#foot-links").innerHTML = `<a href="${C.contacto.instagram}" target="_blank" rel="noopener">Instagram ${esc(C.contacto.instagramUsuario)}</a>
    <a data-wa="${esc(C.contacto.mensajeWhatsapp)}">WhatsApp</a>
    <a href="${C.contacto.mapsLink}" target="_blank" rel="noopener">${esc(C.contacto.direccion)}</a>`;
  $("#year").textContent = new Date().getFullYear();

  // --- SEO estructurado ---
  const hs = [];
  const dn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  Object.entries(C.horarios).forEach(([d, t]) => t.forEach(([a, b]) => hs.push({ "@type": "OpeningHoursSpecification", dayOfWeek: dn[d], opens: a, closes: b })));
  $("#ld-json").textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": C.seo.tipoSchema, name: C.negocio.nombre,
    description: C.seo.descripcion, image: C.seo.ogImage, logo: C.negocio.logo,
    address: { "@type": "PostalAddress", streetAddress: "Falucho 793", addressCountry: "AR" },
    openingHoursSpecification: hs, sameAs: [C.contacto.instagram],
    ...(C.contacto.telefono ? { telephone: C.contacto.telefono } : {}),
  });

  // --- Menú móvil ---
  const nav = $("#nav"), burger = $("#burger");
  const setMenu = o => { nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", e => e.target.closest("a") && setMenu(false));

  // --- Reveal on scroll ---
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }) : null;
  function reveal(root = document) { root.querySelectorAll(".rv:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in")); }

  renderGrid();
  bindWa(document);
  reveal();
})();
