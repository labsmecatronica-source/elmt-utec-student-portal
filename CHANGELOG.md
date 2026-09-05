# Historial de Versiones

Este documento registra los cambios, decisiones y funcionalidades incorporadas en cada versión del Portal de Servicios ELMT.

El proyecto utiliza versionado semántico. Las nuevas versiones deben añadirse sin sobrescribir el historial existente.

## Sin publicar

### Modificado

- 2026-09-05: Activación de Talleres y Capacitaciones con su página externa publicada en GitHub Pages: <https://labsmecatronica-source.github.io/elmt-talleres/>.
- 2026-09-05: Ampliación de la documentación para publicar el portal desde `main` y `/(root)` mediante GitHub Desktop y GitHub Pages.
- 2026-09-05: Activación del Buzón de Mejora Continua ELMT con el enlace definitivo: <https://forms.gle/pru5PSTj8Z2nbuSr7>.
- 2026-09-05: Activación de Experiencia y Satisfacción con el enlace definitivo a la encuesta de satisfacción de estudiantes de los Laboratorios del Departamento de Electrónica y Mecatrónica: <https://forms.gle/MguoEYNsqEcxe6Dz7>.

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

## Próxima versión prevista — v0.2.0

La incorporación de los enlaces definitivos de Experiencia y Satisfacción y del Buzón de Mejora Continua se completó el 2026-09-05 y está registrada en «Sin publicar».

Talleres y Capacitaciones se resolvió mediante una página externa, integrada al portal el 2026-09-05 y registrada en «Sin publicar».

### Pendiente

- Diseñar la propuesta funcional de Comunicados y Novedades.
- Definir la futura estructura de Recursos y Documentación Técnica.
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
