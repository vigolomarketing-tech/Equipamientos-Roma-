// CONFIG — Equipamientos Roma (demo Vigolo Web Studio)
// Todo el contenido editable vive acá. Lo marcado "PENDIENTE CLIENTE" hay que confirmarlo con ellos.

const CONFIG = {
  negocio: {
    nombre: "Equipamientos Roma",
    rubro: "Equipamiento gastronómico",
    eslogan: "Tenemos TODO para tu emprendimiento gastronómico",
    bajada: "Planchas, cocinas industriales, freidoras y tostadores profesionales. Distribuidora mayorista, venta minorista.",
    logo: "img/logo.webp",
    seguidores: "+5.800",
  },

  colores: {
    cobre: "#e0a35a",
    rojo: "#d23b2f",
    celeste: "#5eb0ee",
    fondo: "#08080b",
  },

  contacto: {
    whatsapp: "", // 549 + área + número, sin + ni espacios. PENDIENTE CLIENTE (mientras tanto se usa su link wa.link)
    waLinkRespaldo: "https://wa.link/q4tedg",
    mensajeWhatsapp: "¡Hola! Vi la web de Equipamientos Roma y quería hacer una consulta.",
    telefono: "", // PENDIENTE CLIENTE
    instagram: "https://instagram.com/equipamientosroma",
    instagramUsuario: "@equipamientosroma",
    direccion: "Falucho 793, esquina Frione", // PENDIENTE CLIENTE: confirmar localidad
    mapsEmbed: "https://www.google.com/maps?q=Equipamientos+Roma+Falucho+793+Frione&output=embed", // PENDIENTE CLIENTE: verificar pin con la localidad
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Equipamientos+Roma+Falucho+793+Frione",
  },

  // 0 = domingo ... 6 = sábado. Varios turnos por día permitidos.
  // Sábados: el perfil de Instagram dice 8–12 y una historia dice 8–13. PENDIENTE CLIENTE
  horarios: {
    0: [],
    1: [["08:00", "12:00"], ["13:00", "17:00"]],
    2: [["08:00", "12:00"], ["13:00", "17:00"]],
    3: [["08:00", "12:00"], ["13:00", "17:00"]],
    4: [["08:00", "12:00"], ["13:00", "17:00"]],
    5: [["08:00", "12:00"], ["13:00", "17:00"]],
    6: [["08:00", "12:00"]],
  },

  beneficios: [
    { icono: "shield", titulo: "6 meses de garantía", texto: "En nuestras planchas lomiteras. Comprás tranquilo." },
    { icono: "box", titulo: "Mayorista y minorista", texto: "Para el que arranca y para el que equipa varios locales." },
    { icono: "card", titulo: "Hasta 6 cuotas", texto: "Efectivo, transferencia, débito y crédito." },
    { icono: "wrench", titulo: "Te asesoramos", texto: "Contanos tu emprendimiento y armamos el equipo justo." },
  ],

  pasos: [
    { titulo: "Contanos qué necesitás", texto: "Escribinos por WhatsApp con el equipo o el tipo de negocio que vas a armar." },
    { titulo: "Te asesoramos y cotizamos", texto: "Te recomendamos el modelo ideal y te pasamos precio y disponibilidad." },
    { titulo: "Retirás o te lo enviamos", texto: "Retiro en el local. Si lo querés en tu casa, pasás la dirección y cotizamos el envío (a cargo del comprador)." },
  ],

  pagos: ["Efectivo", "Transferencia", "Débito", "Crédito hasta 6 cuotas"],

  categorias: ["Planchas", "Tostadores", "Cocinas", "Freidoras"],

  // Sin precios publicados: PENDIENTE CLIENTE (si los quieren mostrar, agregar "precio" y se renderiza solo)
  productos: [
    {
      id: "lomitera-110x60", categoria: "Planchas", etiqueta: "Alto volumen",
      nombre: "Plancha lomitera hamburguesera 110×60",
      descripcion: "La grande para locales con mucha salida: 6 quemadores y dos comandos para manejar dos zonas de calor.",
      specs: ["Plancha 110×60 cm · 5 mm de espesor", "6 quemadores · 2 comandos", "Base sin cargo", "Apto gas natural o envasado", "6 meses de garantía"],
      foto: "img/lomitera-110x60.webp", w: 537, h: 439, fit: "contain",
    },
    {
      id: "lomitera-90x45-5mm", categoria: "Planchas", etiqueta: "Más pedida",
      nombre: "Plancha lomitera hamburguesera 90×45 · 5 mm",
      descripcion: "El tamaño clásico, con grasero incluido y chapa gruesa que retiene el calor.",
      specs: ["Plancha 90×45 cm · 5 mm de espesor", "4 quemadores · grasero · 1 comando", "Base sin cargo", "Apto gas natural o envasado", "6 meses de garantía"],
      foto: "img/lomitera-90x45-5mm.webp", w: 584, h: 476, fit: "contain",
    },
    {
      id: "lomitera-90x45-36mm", categoria: "Planchas",
      nombre: "Plancha lomitera hamburguesera 90×45 · 3,6 mm",
      descripcion: "La opción más económica para arrancar tu emprendimiento sin resignar calidad.",
      specs: ["Plancha 90×45 cm · 3,6 mm de espesor", "4 quemadores · 1 comando", "Base sin cargo", "Apto gas natural o envasado", "6 meses de garantía"],
      foto: "img/lomitera-90x45-36mm.webp", w: 588, h: 550, fit: "contain",
    },
    {
      id: "plancha-mesa", categoria: "Planchas",
      nombre: "Plancha a gas con mesa de acero",
      descripcion: "Frente de acero inoxidable y estructura reforzada, lista para instalar en tu cocina.",
      specs: ["Frente de acero inoxidable", "2 comandos", "Consultá medidas y espesores"],
      foto: "img/plancha.webp", w: 1000, h: 656, fit: "cover",
    },
    {
      id: "tostador-doble", categoria: "Tostadores", etiqueta: "Todo en uno",
      nombre: "Tostador doble con plancha profesional",
      descripcion: "Todo resuelto en un solo equipo: tostás y planchás al mismo tiempo.",
      specs: ["Tostador doble con plancha integrada", "Plancha de 90×45 cm", "Espesor de 3,2 mm o 5 mm"],
      foto: "img/tostador.webp", w: 750, h: 543, fit: "cover",
    },
    {
      id: "cocinas-industriales", categoria: "Cocinas",
      nombre: "Cocinas industriales con horno",
      descripcion: "Cocinas de acero de alto rendimiento, con horno y termómetro, combinables con campana.",
      specs: ["Hornallas de alto rendimiento", "Horno con termómetro", "Varios modelos y medidas"],
      foto: "img/cocinas.webp", w: 720, h: 625, fit: "cover", pos: "50% 60%",
    },
    {
      id: "freidoras", categoria: "Freidoras",
      nombre: "Freidoras con canasto",
      descripcion: "Para papas, milanesas y todas las frituras de tu menú.",
      specs: ["Con canasto", "Varios modelos", "Consultá capacidad y disponibilidad"],
      foto: "img/freidora.webp", w: 960, h: 404, fit: "cover",
    },
  ],

  // "Armá tu emprendimiento": sugerencias por rubro (se arma el WhatsApp con el rubro elegido)
  rubros: [
    { nombre: "Hamburguesería", equipos: ["Plancha lomitera hamburguesera", "Freidora con canasto", "Campana de extracción", "Mesadas de acero"] },
    { nombre: "Pizzería y rotisería", equipos: ["Cocina industrial con horno", "Bandejas y pizzeras", "Campana de extracción", "Mesadas de acero"] },
    { nombre: "Sandwichería y parrilla", equipos: ["Tostador doble con plancha", "Plancha a gas", "Freidora con canasto", "Cocina industrial"] },
    { nombre: "Cafetería y panadería", equipos: ["Tostador doble con plancha", "Cocina industrial con horno", "Mesadas de acero", "Aros y cortadores"] },
  ],

  masEquipos: ["Campanas de extracción", "Salamandras", "Mesadas de acero", "Bandejas y pizzeras", "Aros y cortadores", "Accesorios de cocina"], // PENDIENTE CLIENTE: confirmar stock

  resenas: [
    // { autor: "Nombre A.", texto: "…", estrellas: 5 }  PENDIENTE CLIENTE
  ],

  seo: {
    titulo: "Equipamiento gastronómico | Equipamientos Roma",
    descripcion: "Equipamientos Roma: planchas lomiteras, cocinas industriales, freidoras y tostadores. Mayorista y minorista, 6 meses de garantía y hasta 6 cuotas.",
    ogImage: "img/og.jpg",
    tipoSchema: "Store",
  },
};
