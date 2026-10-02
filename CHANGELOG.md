# Historial de Versiones

Este documento registra los cambios, decisiones y funcionalidades incorporadas en cada versión del Portal de Servicios ELMT.

El proyecto utiliza versionado semántico. Las nuevas versiones deben añadirse sin sobrescribir el historial existente.

## Sin publicar

### Añadido

- 2026-10-02: Utechie en la cabecera, centrado debajo del texto de bienvenida, con el globo «¡Hola, soy Utechie! Haz clic para saludar». Cada saludo son dos movimientos del brazo (1,3 segundos). Saluda una vez al cargar la página y vuelve a saludar al pasar el cursor, al hacer clic o tocarlo, o al activarlo con el teclado; un clic durante un saludo no lo reinicia. Al hacer clic, el globo responde «¡Gracias por saludar!». Respeta la preferencia de reducir el movimiento: en ese caso solo saluda al hacer clic. La animación es CSS y funciona en todos los navegadores, incluidos Safari y los de iPhone o iPad.
- 2026-10-02: Recursos `assets/utechie-cuerpo.webp` (unos 28 KB) y `assets/utechie-brazo.webp` (unos 10 KB), de 560 × 626 px con transparencia, y el script `js/mascot.js`. Se generaron a partir del clip de los segundos 9 a 15: el brazo que saluda del video, borroso y sin contorno, se reemplazó por un reflejo del brazo izquierdo con su contorno redibujado, de modo que ambos brazos son iguales y se ven nítidos.

### Modificado

- 2026-10-02: El texto de la cabecera empieza a la altura del cuadro «Avisos y participación», y Utechie termina a la altura de su borde inferior, para que ambas columnas queden simétricas. El cuadro conserva su altura natural en lugar de estirarse si la otra columna es más alta.

### Corregido

- 2026-10-02: Versionado de las URLs de `css/styles.css`, `js/links.js`, `js/app.js` y `js/mascot.js` mediante `?v=20261002-1` en `index.html`, para evitar la reutilización de estilos o scripts anteriores al publicar cambios. La captura de Utechie sin estilos es compatible con CSS antiguo, aunque los archivos publicados ya coincidían con los locales al revisarlos. Se documenta actualizar los cuatro valores juntos antes de cada nueva publicación con cambios de CSS/JS y utilizar `Ctrl + F5` como diagnóstico temporal.

### Eliminado

- 2026-10-02: `assets/utechie.mp4`, el video original de 25 segundos, que no se utilizaba en el portal.

## [0.2.0] - 2026-10-02

### Añadido

- 2026-10-02: Advertencias en la consola del navegador, con el prefijo `[Portal ELMT]`, cuando un registro de `js/links.js` no se mostrará como se espera: categoría o `noticeGroup` inexistente, servicio o proceso activo sin URL HTTPS válida, catálogo sin procesos ni URL, `notices` que no es un arreglo, aviso sin título, fecha inválida o enlace que no es HTTPS. Los estudiantes no ven estas advertencias, y su revisión se ejecuta después de mostrar la página, sin poder interrumpirla.
- 2026-09-15: Integración de Cloudflare Web Analytics en `index.html` para medir visitas y páginas vistas, sin cambios visuales ni seguimiento específico de clics o respuestas de formularios. La recepción de métricas debe verificarse en Cloudflare después de publicar; se documentan su alcance y las limitaciones de validación local.
- 2026-09-15: Cuadro de avisos en la cabecera con espacios para Departamento ELMT (personal del departamento) y Vocería ELMT (representantes estudiantiles), configurables manualmente desde `noticeGroups` en `js/links.js` e inicialmente sin avisos publicados.
- 2026-09-15: Incorporación del Canal Confidencial de Consultas, Sugerencias y Quejas MT a Participación y Experiencia: <https://forms.gle/s9ozgWQ1koSDEbfGA>.
- 2026-09-07: Incorporación de Fabricación de PCB al catálogo de Manufactura Digital, junto a Impresión 3D, con su formulario de solicitudes: <https://forms.gle/ZCFm7zNAfcNg7VoXA>.

### Modificado

- 2026-10-02: Versión visible actualizada a 0.2.0 en la cabecera y el footer.
- 2026-10-02: El catálogo de Manufactura Digital se muestra plegado al cargar la página, con el mismo tamaño que las demás tarjetas; sus procesos se despliegan al pulsar «Procesos disponibles».
- 2026-10-02: Actualización de la documentación: URL de producción del portal, acceso con el correo institucional a los servicios enlazados de Google, formato de fecha de los avisos entre comillas, efecto de un error de sintaxis en `js/links.js`, permisos de solo lectura de los enlaces de Google que terminan en `/edit?usp=sharing`, carácter descriptivo de `type`, requisitos de los avisos y revisión de advertencias en la consola.
- 2026-09-15: Traslado de los tres formularios de Participación y Experiencia desde el directorio al cuadro «Avisos y participación», con enlace directo a cada uno. Departamento ELMT contiene Buzón de Mejora Continua y Experiencia y Satisfacción; Vocería ELMT contiene únicamente el Canal Confidencial de Consultas, Sugerencias y Quejas MT y se identifica con un icono de megáfono. Los formularios se retiran del directorio para evitar duplicados, por lo que Open Labs vuelve a ser su primera categoría. La ubicación se configura con `placement: "notice-board"` en la categoría y `noticeGroup` en cada servicio; las URLs permanecen centralizadas en `services` de `js/links.js` y los arreglos de avisos se mantienen separados. Ese mismo día se descartaron dos ubicaciones intermedias: Participación y Experiencia como primera categoría del directorio y un bloque independiente encima de ambos espacios.
- 2026-09-15: Activación de Comunicados y Novedades como acceso interno a `#avisos`, sin abrir una nueva pestaña.
- 2026-09-15: Documentación del mantenimiento manual de los avisos, la separación por origen sin roles de edición y la distinción entre comunicaciones públicas y consultas enviadas a formularios externos.
- 2026-09-05: Actualización de la denominación institucional a Laboratorios del Departamento de Electrónica y Mecatrónica de UTEC y uso del plural en los textos vigentes del portal, incluido Registro de Uso de Laboratorios.
- 2026-09-05: Conversión de Manufactura Digital en un catálogo desplegable y ampliable desde `options` en `js/links.js`, con Impresión 3D como único proceso disponible y conservación de su formulario de solicitudes.
- 2026-09-05: Renombrado de Recursos y Documentación Técnica a Manuales y Guías Técnicas de Equipamiento y activación del acceso a las guías de operación y uso de los equipos de los laboratorios en Google Drive: <https://drive.google.com/drive/folders/1fAKZQZ6WRs_3VFLL0njjvD0NcQoZ1Tsg?usp=sharing>.
- 2026-09-05: Activación de Talleres y Capacitaciones con su página externa publicada en GitHub Pages: <https://labsmecatronica-source.github.io/elmt-talleres/>.
- 2026-09-05: Ampliación de la documentación para publicar el portal desde `main` y `/(root)` mediante GitHub Desktop y GitHub Pages.
- 2026-09-05: Activación del Buzón de Mejora Continua ELMT con el enlace definitivo: <https://forms.gle/pru5PSTj8Z2nbuSr7>.
- 2026-09-05: Activación de Experiencia y Satisfacción con el enlace definitivo a la encuesta de satisfacción de estudiantes de los Laboratorios del Departamento de Electrónica y Mecatrónica: <https://forms.gle/MguoEYNsqEcxe6Dz7>.

### Corregido

- 2026-10-02: Si no carga la configuración, el cuadro de avisos muestra un mensaje de error. Antes indicaba «Aún no hay avisos publicados» y ocultaba los formularios de participación.
- 2026-10-02: Un servicio, proceso o formulario sin enlace válido, o un catálogo sin procesos ni URL, ya no se presenta como «Activo»: muestra su estado configurado si es distinto de «Activo» o, en caso contrario, «No disponible». Antes podía aparecer como una tarjeta deshabilitada con el estado «Activo».
- 2026-10-02: Los avisos sin título se omiten y los avisos sin cuerpo ya no generan un párrafo vacío.
- 2026-10-02: Al cargar la página, la tarjeta vecina del catálogo de Manufactura Digital ya no se estira hasta la altura del catálogo abierto, que dejaba un espacio vacío en pantallas anchas.
- 2026-10-02: Los mensajes de error y de «Aún no hay avisos publicados» del cuadro de avisos ocupan todo su ancho cuando los grupos se muestran en dos columnas.
- 2026-10-02: Unificación del tipo de Comunicados y Novedades («Sección del portal») entre `README.md` y `js/links.js`.

### Decisiones relevantes

- La página es pública; los servicios enlazados de Google (Forms, Sheets y Drive) controlan el acceso y solicitan el correo institucional de UTEC.
- Los problemas en registros individuales de `js/links.js` se informan en la consola del navegador para quien mantiene el portal, sin mostrarlos a los estudiantes. Si la configuración no carga, la página muestra un aviso de error.

## [0.1.0] - 2026-09-04

### Añadido

- Estructura inicial del Portal de Servicios ELMT.
- Interfaz principal orientada a estudiantes.
- Organización de servicios por categorías.
- Módulo de Disponibilidad y Horarios.
- Acceso al Google Sheets de horarios de Open Lab.
- Módulo de Registro de Uso de Laboratorio.
- Acceso al formulario de registro de Open Lab.
- Módulo de Manufactura Digital.
- Acceso al formulario de solicitudes de Manufactura Digital.
- Módulo de Préstamo de Equipos y Componentes.
- Acceso al formulario de préstamos.
- Módulo visual de Talleres y Capacitaciones.
- Módulo visual de Comunicados y Novedades.
- Módulo visual de Buzón de Mejora Continua.
- Módulo visual de Experiencia y Satisfacción.
- Módulo visual de Recursos y Documentación Técnica.
- Configuración centralizada de enlaces mediante `js/links.js`.
- Diseño responsive.
- Documentación inicial mediante `README.md`.
- Preparación para GitHub Pages.

### Modificado

- Simplificación de la página principal para priorizar el acceso directo a los servicios.
- Aplicación de la paleta visual de UTEC en encabezado, presentación, tarjetas y footer.
- Incorporación de los logos proporcionados de UTEC y ELMT.
- Reducción de elementos decorativos y eliminación de información visual redundante.

### Corregido

- Actualización del enlace de Disponibilidad y Horarios de Open Lab.
- Actualización de la denominación institucional del laboratorio en el portal y su documentación.

### Decisiones de diseño

- Separación entre el portal estudiantil y futuros sistemas administrativos.
- GitHub Pages se utilizará como capa principal de presentación del portal.
- Google Forms, Google Sheets y Apps Script continuarán funcionando como servicios externos.
- Los servicios externos se abrirán en una nueva pestaña.
- Los módulos todavía no desarrollados permanecerán visibles con estado "Próximamente".
- No se implementará backend propio en esta fase.
- Los enlaces se gestionarán centralizadamente desde `js/links.js`.
- Para horarios se utilizará actualmente Google Sheets en lugar de la Web App de Apps Script.

## Próxima versión prevista — v0.3.0

Los pendientes de v0.2.0 resueltos (enlaces definitivos de los formularios de participación, Talleres y Capacitaciones, Manuales y Guías Técnicas de Equipamiento y Comunicados y Novedades) están registrados en [0.2.0].

### Pendiente

- Incorporar los primeros avisos aprobados del Departamento ELMT y de la Vocería ELMT.
- Evaluar la gestión de los avisos desde Google Sheets mediante Apps Script, para publicarlos sin editar el repositorio.
- Revisar la experiencia de usuario en dispositivos móviles.
- Validar la interfaz con usuarios estudiantes.
- Incorporar ajustes visuales según feedback.
- Evaluar si el módulo de horarios debe continuar utilizando Google Sheets o volver a integrarse con la Web App de Apps Script.
- Evaluar posibles mejoras de navegación.
- Revisar accesibilidad.

## Estructura para futuras versiones

Las próximas entradas deben mantener una estructura como la siguiente e incluir únicamente las secciones que correspondan:

```markdown
## [x.x.x] - YYYY-MM-DD

### Añadido

### Modificado

### Corregido

### Eliminado

### Decisiones relevantes
```
