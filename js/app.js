"use strict";

// Contenido SVG constante. Ningún valor procedente de la configuración se
// interpola en estas plantillas.
const ICON_PATHS = Object.freeze({
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 10h18"></path><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"></path>',
  clipboard:
    '<path d="M9 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3"></path><rect x="9" y="2" width="6" height="6" rx="2"></rect><path d="m9 15 2 2 4-4"></path>',
  cube:
    '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path><path d="m4.3 7.7 7.7 4.4 7.7-4.4M12 12.1V21"></path>',
  printer:
    '<path d="M4 21V3h16v18M2 21h20M4 6h16M12 6v3m-2 0 2 3 2-3h-4Z"></path><path d="m8 16 4-2 4 2v4H8v-4Zm0 0 4 2 4-2M12 18v2"></path>',
  toolbox:
    '<path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M3 12h18M10 12v3h4v-3"></path>',
  training:
    '<path d="m3 10 9-5 9 5-9 5-9-5Z"></path><path d="M7 13v4c2.8 2 7.2 2 10 0v-4M21 10v6"></path>',
  megaphone:
    '<path d="M3 11v2a2 2 0 0 0 2 2h3l8 4V5l-8 4H5a2 2 0 0 0-2 2Z"></path><path d="m8 15 1.5 5h3M19 8a5 5 0 0 1 0 8"></path>',
  lightbulb:
    '<path d="M9 18h6M10 22h4"></path><path d="M8.2 14.8A7 7 0 1 1 15.8 14.8C14.7 15.6 14 16.7 14 18h-4c0-1.3-.7-2.4-1.8-3.2Z"></path>',
  star:
    '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>',
  book:
    '<path d="M4 4h5a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H4V4ZM20 4h-5a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h5V4Z"></path>',
});

const EXTERNAL_ARROW_ICON =
  '<svg class="card-action-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m6 14 8-8M8 6h6v6"></path></svg>';

const PROCESS_CHEVRON_ICON =
  '<svg class="process-chevron" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m5 7.5 5 5 5-5"></path></svg>';

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (typeof text === "string") {
    element.textContent = text;
  }

  return element;
}

function createIcon(iconName) {
  const icon = createElement("span", "service-icon");
  const path = ICON_PATHS[iconName] || ICON_PATHS.book;

  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${path}</svg>`;

  return icon;
}

function getExternalUrl(service) {
  if (!service.active || typeof service.url !== "string" || !service.url.trim()) {
    return "";
  }

  try {
    const url = new URL(service.url);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function configureExternalLink(link, service, externalUrl, actionLabel) {
  link.setAttribute("href", externalUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  link.setAttribute(
    "aria-label",
    `${service.title}. ${service.description} ${actionLabel}; se abre en una pestaña nueva.`,
  );
}

function createAction(className, label, isActive) {
  const action = createElement("span", className, label);

  if (isActive) {
    const arrowTemplate = document.createElement("template");
    arrowTemplate.innerHTML = EXTERNAL_ARROW_ICON;
    action.append(arrowTemplate.content.firstElementChild.cloneNode(true));
  }

  return action;
}

function createProcessOption(process) {
  const externalUrl = getExternalUrl(process);
  const isActive = Boolean(externalUrl);
  const option = isActive
    ? createElement("a", "process-option is-active")
    : createElement("div", "process-option is-upcoming");
  const actionLabel = process.action || "Acceder";
  const copy = createElement("span", "process-copy");

  option.dataset.processId = process.id;

  if (isActive) {
    configureExternalLink(option, process, externalUrl, actionLabel);
  } else {
    option.setAttribute("aria-disabled", "true");
  }

  copy.append(
    createElement("span", "process-title", process.title),
    createElement("span", "process-description", process.description),
    createAction(
      "process-action",
      isActive ? actionLabel : process.status,
      isActive,
    ),
  );
  option.append(createIcon(process.icon), copy);

  return option;
}

function createProcessSelector(options) {
  const selector = createElement("details", "process-selector");
  const summary = createElement("summary", "process-summary");
  const list = createElement("ul", "process-list");
  const chevronTemplate = document.createElement("template");

  selector.open = true;
  chevronTemplate.innerHTML = PROCESS_CHEVRON_ICON;
  summary.append(
    createElement("span", "", "Procesos disponibles"),
    createElement("span", "process-count", String(options.length)),
    chevronTemplate.content.firstElementChild.cloneNode(true),
  );

  options.forEach((process) => {
    const item = createElement("li");
    item.append(createProcessOption(process));
    list.append(item);
  });

  selector.append(summary, list);
  return selector;
}

function createCard(service) {
  const isGroup =
    service.active && Array.isArray(service.options) && service.options.length > 0;
  const externalUrl = getExternalUrl(service);
  const isActive = Boolean(externalUrl);
  const card = isGroup
    ? createElement("article", "service-card is-group")
    : isActive
      ? createElement("a", "service-card is-active")
      : createElement("article", "service-card is-upcoming");

  card.dataset.serviceId = service.id;

  if (!isGroup && isActive) {
    configureExternalLink(card, service, externalUrl, "Acceder");
  } else if (!isGroup) {
    card.setAttribute("aria-disabled", "true");
  }

  const cardTop = createElement("div", "card-top");
  const title = createElement("h4", "card-title", service.title);
  const description = createElement(
    "p",
    "card-description",
    service.description,
  );
  cardTop.append(createIcon(service.icon));
  card.append(cardTop, title, description);

  if (isGroup) {
    card.append(createProcessSelector(service.options));
  } else {
    card.append(
      createAction("card-action", isActive ? "Acceder" : service.status, isActive),
    );
  }

  return card;
}

function createCategory(category, services) {
  const section = createElement("section", "service-category");
  const header = createElement("div", "category-header");
  const title = createElement("h3", "category-title", category.title);
  const grid = createElement("div", "service-grid");
  const headingId = `category-${category.id}-title`;

  title.id = headingId;
  section.setAttribute("aria-labelledby", headingId);
  header.append(title);

  services.forEach((service) => {
    grid.append(createCard(service));
  });

  section.append(header, grid);
  return section;
}

function showConfigurationError(container) {
  const message = createElement(
    "p",
    "services-error",
    "No fue posible cargar los servicios. Inténtalo nuevamente más tarde.",
  );
  message.setAttribute("role", "alert");
  container.replaceChildren(message);
}

function initializePortal() {
  const container = document.getElementById("services-container");

  if (!container) {
    return;
  }

  const config = window.ELMT_PORTAL_CONFIG;

  if (
    !config ||
    !Array.isArray(config.categories) ||
    !Array.isArray(config.services)
  ) {
    showConfigurationError(container);
    return;
  }

  const fragment = document.createDocumentFragment();

  config.categories.forEach((category) => {
    const categoryServices = config.services.filter(
      (service) => service.category === category.id,
    );

    if (categoryServices.length > 0) {
      fragment.append(createCategory(category, categoryServices));
    }
  });

  container.replaceChildren(fragment);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePortal, { once: true });
} else {
  initializePortal();
}
