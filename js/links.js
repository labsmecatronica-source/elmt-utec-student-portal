"use strict";

/**
 * Configuración única de categorías, servicios y enlaces del portal.
 * Para habilitar un servicio futuro solo se deben actualizar `url`, `active`
 * y `status` en su registro correspondiente.
 */
const SERVICE_CATEGORIES = Object.freeze([
  Object.freeze({ id: "open-labs", title: "Open Labs" }),
  Object.freeze({ id: "servicios", title: "Servicios" }),
  Object.freeze({ id: "comunidad", title: "Comunidad" }),
  Object.freeze({
    id: "participacion-experiencia",
    title: "Participación y Experiencia",
  }),
  Object.freeze({ id: "recursos", title: "Recursos" }),
]);

const SERVICES = Object.freeze([
  Object.freeze({
    id: "horarios",
    category: "open-labs",
    title: "Disponibilidad y Horarios",
    description:
      "Consulta la programación y disponibilidad de los Open Labs.",
    type: "Google Sheets",
    icon: "calendar",
    url: "https://docs.google.com/spreadsheets/d/1Mdkzg8lXQ0fQRrPDvZ_DR3dMAmf7B5mG6yaSI4I1ygU/edit?usp=sharing",
    active: true,
    status: "Activo",
  }),
  Object.freeze({
    id: "registro-open-lab",
    category: "open-labs",
    title: "Registro de Uso de Laboratorio",
    description:
      "Registra tu participación y uso de los espacios Open Lab.",
    type: "Google Forms",
    icon: "clipboard",
    url: "https://forms.gle/QfckCSopiWtbBaPv8",
    active: true,
    status: "Activo",
  }),
  Object.freeze({
    id: "manufactura-digital",
    category: "servicios",
    title: "Manufactura Digital",
    description:
      "Accede a los servicios de fabricación y prototipado disponibles en los laboratorios.",
    type: "Google Forms",
    icon: "cube",
    url: "https://forms.gle/SJmFym5iLZRMy8tx7",
    active: true,
    status: "Activo",
  }),
  Object.freeze({
    id: "prestamos",
    category: "servicios",
    title: "Préstamo de Equipos y Componentes",
    description:
      "Gestiona solicitudes de préstamo de equipos y componentes para actividades académicas.",
    type: "Google Forms",
    icon: "toolbox",
    url: "https://forms.gle/XsWRXcCbcJ6nVHmK7",
    active: true,
    status: "Activo",
  }),
  Object.freeze({
    id: "talleres",
    category: "comunidad",
    title: "Talleres y Capacitaciones",
    description:
      "Consulta actividades de formación y capacitación técnica organizadas por los laboratorios.",
    type: "Por definir",
    icon: "training",
    url: "",
    active: false,
    status: "Próximamente",
  }),
  Object.freeze({
    id: "comunicados",
    category: "comunidad",
    title: "Comunicados y Novedades",
    description:
      "Mantente informado sobre novedades y comunicaciones de los laboratorios.",
    type: "Por definir",
    icon: "megaphone",
    url: "",
    active: false,
    status: "Próximamente",
  }),
  Object.freeze({
    id: "mejora-continua",
    category: "participacion-experiencia",
    title: "Buzón de Mejora Continua",
    description:
      "Comparte sugerencias y propuestas para contribuir a la mejora de los laboratorios y sus servicios.",
    type: "Google Forms",
    icon: "lightbulb",
    url: "",
    active: false,
    status: "Próximamente",
  }),
  Object.freeze({
    id: "satisfaccion",
    category: "participacion-experiencia",
    title: "Experiencia y Satisfacción",
    description:
      "Evalúa tu experiencia con los servicios e instalaciones de los laboratorios.",
    type: "Google Forms",
    icon: "star",
    url: "",
    active: false,
    status: "Próximamente",
  }),
  Object.freeze({
    id: "recursos-documentacion",
    category: "recursos",
    title: "Recursos y Documentación Técnica",
    description:
      "Accede a documentación, guías y recursos técnicos de apoyo.",
    type: "Por definir",
    icon: "book",
    url: "",
    active: false,
    status: "Próximamente",
  }),
]);

window.ELMT_PORTAL_CONFIG = Object.freeze({
  categories: SERVICE_CATEGORIES,
  services: SERVICES,
});
