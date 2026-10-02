"use strict";

// Utechie saluda una vez al cargar la página y cada vez que se le pasa el
// cursor o se activa su botón. El saludo es una animación CSS del brazo
// (.is-waving), así que funciona igual en todos los navegadores.
function initializeMascot() {
  const button = document.querySelector(".mascot-button");
  const arm = button ? button.querySelector(".mascot-arm") : null;

  if (!button || !arm) {
    return;
  }

  const images = Array.from(button.querySelectorAll("img"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let thanksTimer = 0;

  function isIdle() {
    return !button.classList.contains("is-waving");
  }

  function wave() {
    button.classList.add("is-waving");
  }

  function stopWaving() {
    button.classList.remove("is-waving");
  }

  // Respuesta sin movimiento: se ve aunque el sistema pida reducirlo.
  function thank() {
    button.classList.add("is-thanking");
    window.clearTimeout(thanksTimer);
    thanksTimer = window.setTimeout(() => {
      button.classList.remove("is-thanking");
    }, 2500);
  }

  arm.addEventListener("animationend", stopWaving);
  arm.addEventListener("animationcancel", stopWaving);

  // Si el saludo ya empezó (por ejemplo, al pasar el cursor), el clic no lo
  // reinicia a mitad de camino.
  button.addEventListener("click", () => {
    thank();

    if (isIdle()) {
      wave();
    }
  });
  button.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse" && !reducedMotion.matches && isIdle()) {
      wave();
    }
  });

  // El saludo inicial espera a que se carguen el cuerpo y el brazo.
  function greetOnLoad() {
    if (!reducedMotion.matches && isIdle()) {
      wave();
    }
  }

  const pending = images.filter((image) => !image.complete);

  if (pending.length === 0) {
    greetOnLoad();
  } else {
    let remaining = pending.length;
    pending.forEach((image) => {
      const done = () => {
        remaining -= 1;

        if (remaining === 0) {
          greetOnLoad();
        }
      };
      image.addEventListener("load", done, { once: true });
      image.addEventListener("error", done, { once: true });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMascot, { once: true });
} else {
  initializeMascot();
}
