# Portal de Servicios ELMT

Portal web para centralizar el acceso de los estudiantes a servicios, recursos, formularios y herramientas de los Laboratorios del Departamento de Electrónica y Mecatrónica de UTEC.

Esta versión corresponde exclusivamente al portal de estudiantes. El futuro sistema administrativo de los laboratorios será una aplicación independiente.

## Objetivo

El Portal de Servicios ELMT proporciona un único punto de acceso a los servicios estudiantiles de los laboratorios. La plataforma busca:

- simplificar el acceso a las herramientas disponibles;
- centralizar los servicios en una interfaz clara y consistente;
- facilitar la búsqueda de formularios, horarios y recursos; y
- permitir la incorporación progresiva de nuevas funcionalidades.

## Funcionamiento de la plataforma

```text
Estudiante
    ↓
Portal de Servicios ELMT
    ↓
Google Sheets / Google Forms / Apps Script / futuros servicios
```

GitHub Pages funciona actualmente como la capa de presentación y acceso centralizado. El portal no almacena los datos de los servicios ni requiere un backend propio: cada acceso externo activo se abre en una pestaña nueva y continúa operando en la plataforma correspondiente. La página es pública, pero los servicios enlazados de Google solicitan iniciar sesión con el correo institucional de UTEC: el control de acceso lo realiza cada servicio, no el portal. Manufactura Digital despliega un catálogo de procesos dentro del portal; actualmente contiene Impresión 3D y Fabricación de PCB.

La cabecera incluye el cuadro «Avisos y participación», organizado en dos espacios que reúnen sus propios accesos directos a Google Forms y avisos. Departamento ELMT, correspondiente al personal del departamento, contiene Buzón de Mejora Continua y Experiencia y Satisfacción. Vocería ELMT, correspondiente a los representantes estudiantiles e identificada con un icono de megáfono, contiene únicamente el Canal Confidencial de Consultas, Sugerencias y Quejas MT. No hay un bloque independiente de Participación y Experiencia encima de estos espacios. Comunicados y Novedades conduce a este cuadro dentro de la misma página, sin abrir otra pestaña. Los formularios no se duplican en el directorio, que comienza con Open Labs.

## Servicios

| Categoría | Servicio | Tipo | Estado |
|---|---|---|---|
| Participación y Experiencia | Buzón de Mejora Continua | Google Forms | Activo |
| Participación y Experiencia | Experiencia y Satisfacción | Google Forms | Activo |
| Participación y Experiencia | Canal Confidencial de Consultas, Sugerencias y Quejas MT | Google Forms | Activo |
| Open Labs | Disponibilidad y Horarios | Google Sheets | Activo |
| Open Labs | Registro de Uso de Laboratorios | Google Forms | Activo |
| Servicios | Manufactura Digital | Catálogo de procesos | Activo |
| Servicios | Préstamo de Equipos y Componentes | Google Forms | Activo |
| Comunidad | Talleres y Capacitaciones | Página web (GitHub Pages) | Activo |
| Comunidad | Comunicados y Novedades | Sección del portal | Activo |
| Recursos | Manuales y Guías Técnicas de Equipamiento | Google Drive | Activo |

## Enlaces de acceso rápido

### Buzón de Mejora Continua

<https://forms.gle/pru5PSTj8Z2nbuSr7>

### Experiencia y Satisfacción

Encuesta de satisfacción de estudiantes de los Laboratorios del Departamento de Electrónica y Mecatrónica.

<https://forms.gle/MguoEYNsqEcxe6Dz7>

### Canal Confidencial de Consultas, Sugerencias y Quejas MT

<https://forms.gle/s9ozgWQ1koSDEbfGA>

### Disponibilidad y Horarios

<https://docs.google.com/spreadsheets/d/1Mdkzg8lXQ0fQRrPDvZ_DR3dMAmf7B5mG6yaSI4I1ygU/edit?usp=sharing>

### Registro de Uso de Laboratorios

<https://forms.gle/QfckCSopiWtbBaPv8>

### Manufactura Digital

Formulario de solicitudes de Impresión 3D, disponible en el catálogo de Manufactura Digital.

<https://forms.gle/SJmFym5iLZRMy8tx7>

Formulario de solicitudes de Fabricación de PCB, disponible en el catálogo de Manufactura Digital.

<https://forms.gle/ZCFm7zNAfcNg7VoXA>

### Préstamo de Equipos y Componentes

<https://forms.gle/XsWRXcCbcJ6nVHmK7>

### Talleres y Capacitaciones

<https://labsmecatronica-source.github.io/elmt-talleres/>

### Comunicados y Novedades

Acceso interno al cuadro de avisos: [`index.html#avisos`](./index.html#avisos).

### Manuales y Guías Técnicas de Equipamiento

Consulta las guías de operación y uso de los equipos de los laboratorios.

<https://drive.google.com/drive/folders/1fAKZQZ6WRs_3VFLL0njjvD0NcQoZ1Tsg?usp=sharing>

### Web App de horarios — referencia técnica

<https://script.google.com/a/macros/utec.edu.pe/s/AKfycbx7WDZW0HvAEZ79w5z7VSRUh18phu_7eljeTzXnvofZW8Tnb1gY7zXYA9Cj8_F6m-gO/exec>

Web App anterior / referencia técnica del sistema de horarios.

Esta Web App corresponde a una implementación anterior/alternativa para la visualización de horarios de Open Lab. En la versión actual del portal se utiliza como acceso principal el Google Sheets de horarios.

La referencia se mantiene porque la Web App podría utilizarse nuevamente en versiones futuras. Cambiar entre ambas alternativas no debe requerir modificaciones en la estructura HTML del portal.

## Estructura del proyecto

```text
elmt-utec-student-portal/
├── index.html              → estructura principal del portal
├── css/
│   └── styles.css          → estilos visuales y diseño responsive
├── js/
│   ├── links.js            → configuración centralizada de servicios, enlaces y avisos
│   ├── app.js              → lógica de interacción de la interfaz
│   └── mascot.js           → saludo interactivo de Utechie
├── assets/
│   ├── utec-logo.png       → identidad visual de UTEC
│   ├── elmt-logo.png       → identidad visual de ELMT
│   ├── utechie-cuerpo.webp → Utechie sin el brazo que saluda
│   ├── utechie-brazo.webp  → brazo que saluda (capa animada)
│   └── ...                 → iconos del navegador
├── README.md               → documentación del proyecto
└── CHANGELOG.md            → historial de versiones y próximas mejoras
```

El proyecto utiliza HTML5, CSS3 y JavaScript vanilla. Todas las rutas internas son relativas para mantener la compatibilidad con la publicación del repositorio mediante GitHub Pages.

La interfaz utiliza la paleta institucional observada en el sitio oficial de UTEC y recursos gráficos almacenados localmente en `assets/`; no depende de imágenes o fuentes externas durante su ejecución.

## Utechie en la cabecera

Debajo del texto de bienvenida aparece Utechie, centrado, con un globo que invita a interactuar: «¡Hola, soy Utechie! Haz clic para saludar». En pantallas anchas, el texto empieza a la altura del cuadro «Avisos y participación» y los pies de Utechie coinciden con su borde inferior; en pantallas angostas, Utechie se ubica entre el texto y el cuadro.

- Cada saludo son dos movimientos del brazo (1,3 segundos), que empiezan y terminan con la mano levantada.
- Saluda una vez al cargar la página y vuelve a saludar al pasar el cursor sobre él, al hacer clic o tocarlo, o al activarlo con el teclado (es un botón). Un clic durante un saludo no lo reinicia.
- Al hacer clic, el globo responde «¡Gracias por saludar!» durante unos segundos.
- Si el sistema tiene activada la opción de reducir el movimiento, no saluda solo: únicamente al hacer clic o activarlo con el teclado.
- La animación es CSS, así que funciona igual en todos los navegadores, incluidos Safari y los de iPhone o iPad.

Utechie se compone de dos imágenes WebP con transparencia del mismo tamaño (560 × 626 px), superpuestas en `.mascot-figure`:

- `assets/utechie-cuerpo.webp` (unos 28 KB): el personaje sin el brazo que saluda.
- `assets/utechie-brazo.webp` (unos 10 KB, sin pérdida): el brazo que saluda, colocado detrás del cuerpo para que el hombro quede oculto bajo el casco. Es un reflejo del brazo izquierdo, con su contorno redibujado (`#2d5e7a`), así que los dos brazos son iguales.

La animación `mascot-wave` gira el brazo 26° alrededor del hombro, que está en el punto (372, 380) de las imágenes (`transform-origin: 66.43% 60.7%`). Si cambias el tamaño de las imágenes, el pivote o la pose del brazo, actualiza también `width` y `height` en `index.html`, y `aspect-ratio`, `transform-origin` y `@keyframes mascot-wave` en `css/styles.css`; con otras proporciones, los pies dejarían de coincidir con el borde del cuadro.

Las imágenes se generaron a partir del clip de los segundos 9 a 15 del video de Utechie, con transparencia, mediante scripts de Python (numpy) y FFmpeg. El clip original y los scripts se conservan fuera del repositorio, en la carpeta `ELMT-videos/utechie-render`, cuyo `LEEME.txt` explica los pasos para volver a generarlas.

Para probarlo localmente, abre `index.html` directamente o usa un servidor local (`py -m http.server 8000 --bind 127.0.0.1` desde la carpeta del proyecto y luego <http://127.0.0.1:8000>; se detiene con `Ctrl + C`). Recarga con `Ctrl + F5` después de reemplazar las imágenes, porque conservan el mismo nombre. Si Windows tiene desactivados los «Efectos de animación» (Configuración → Accesibilidad → Efectos visuales), el navegador pide reducir el movimiento: Utechie no saluda solo al cargar ni al pasar el cursor, únicamente al hacer clic.

## Actualización de enlaces

Todos los enlaces utilizados por las tarjetas del portal deben administrarse desde [`js/links.js`](./js/links.js), que es la fuente principal de configuración de los servicios. No se deben distribuir ni duplicar innecesariamente URLs de Google Forms, Google Sheets u otros servicios dentro de `index.html`.

Para activar un servicio futuro, actualiza sus propiedades en `js/links.js`:

```js
url: "NUEVA_URL",
active: true,
status: "Activo"
```

Mientras un servicio no esté disponible, debe conservar una URL vacía, `active: false` y el estado `"Próximamente"`.

La propiedad `type` es descriptiva: documenta la plataforma de cada servicio, pero no se muestra en la interfaz.

Un servicio, proceso o formulario solo se presenta como acceso si tiene `active: true` y una URL HTTPS válida (o `"#avisos"` en Comunicados y Novedades). La excepción es un servicio con procesos en `options`, como Manufactura Digital: se presenta como catálogo y no necesita `url`. Un registro sin enlace válido nunca aparece como «Activo»: muestra su `status` si es distinto de «Activo» (por ejemplo, «Próximamente») o, en caso contrario, «No disponible».

Al revisar los cambios localmente, abre la consola del navegador (F12 → Console). El portal escribe allí advertencias que comienzan con `[Portal ELMT]` cuando un registro no se mostrará como se espera: una categoría o un `noticeGroup` que no existe, un servicio o proceso activo sin URL válida, un catálogo sin procesos ni URL, una propiedad `notices` que no es un arreglo o un aviso sin título, con una fecha inválida o con un enlace que no es HTTPS. Los estudiantes no ven estas advertencias.

Un error de sintaxis en `js/links.js` (por ejemplo, una coma o una comilla faltante) impide cargar toda la configuración: la consola muestra un `SyntaxError`, no una advertencia `[Portal ELMT]`, y la página indica que no fue posible cargar los avisos ni los servicios. Revisa siempre la página localmente antes de publicar.

La categoría `participacion-experiencia` tiene `placement: "notice-board"` para mostrar sus accesos en el cuadro superior. Cada formulario usa `noticeGroup` para indicar el espacio que lo contiene: `"departamento"` para Buzón de Mejora Continua y Experiencia y Satisfacción, o `"voceria"` para el Canal Confidencial de Consultas, Sugerencias y Quejas MT. Sus enlaces siguen configurándose en `services`, dentro de `js/links.js`; no deben copiarse a los arreglos de avisos ni al HTML. Los accesos se presentan de forma compacta dentro de su grupo y abren directamente cada formulario en una pestaña nueva.

### Procesos de Manufactura Digital

El módulo con `id: "manufactura-digital"` contiene un arreglo `options` en `js/links.js`. Su tarjeta despliega las opciones disponibles y cada proceso tiene su propio enlace y estado. Actualmente se ofrecen Impresión 3D y Fabricación de PCB. Este es un ejemplo de configuración de un proceso:

```js
{
  id: "impresion-3d",
  title: "Impresión 3D",
  description: "Solicita la fabricación de piezas mediante impresión 3D.",
  type: "Google Forms",
  icon: "printer",
  action: "Solicitar impresión",
  url: "https://forms.gle/SJmFym5iLZRMy8tx7",
  active: true,
  status: "Activo"
}
```

Para añadir un proceso, agrega otro registro con estas mismas propiedades dentro de `options`, usando un `id` único, su nombre, descripción, tipo de servicio, icono disponible y enlace. El catálogo se genera automáticamente sin editar el HTML. Se muestra plegado, con el mismo tamaño que las demás tarjetas, y sus procesos se despliegan al pulsar «Procesos disponibles». Los demás servicios conservan su configuración habitual; `js/links.js` sigue siendo la única fuente de enlaces utilizada por la interfaz.

La propiedad opcional `action` personaliza el texto de acceso de cada proceso; si se omite, se muestra «Acceder».

## Actualización del cuadro de avisos

Los avisos se administran manualmente en [`js/links.js`](./js/links.js), mediante los grupos de la propiedad `noticeGroups` de la configuración del portal:

- `departamento`: Departamento ELMT, integrado por el personal del departamento.
- `voceria`: Vocería ELMT, integrada por los representantes de los estudiantes ELMT.

Cada grupo contiene `id`, `title`, `description`, `icon` y un arreglo `notices`. Ambos arreglos empiezan vacíos; la interfaz muestra que no hay avisos publicados, sin inventar comunicados.

Para publicar, añade un registro al arreglo `notices` del grupo correspondiente. Esta es una plantilla de edición, no un aviso real; sustituye el título y el contenido antes de utilizarla:

```js
{
  title: "Título del aviso aprobado",
  body: "Contenido del aviso aprobado para su publicación."
}
```

`title` es obligatorio: un aviso sin título se omite. `body` es recomendable, pero un aviso puede publicarse solo con su título. Opcionalmente, agrega `date` con una fecha en formato `YYYY-MM-DD` escrita entre comillas, `url` con un enlace HTTPS y `action` con el texto de ese enlace:

```js
{
  title: "Título del aviso aprobado",
  body: "Contenido del aviso aprobado para su publicación.",
  date: "2026-10-02",
  url: "https://www.utec.edu.pe/",
  action: "Ver detalle"
}
```

Los avisos pueden publicarse sin fecha ni enlace; una fecha inválida o un enlace que no sea HTTPS se omiten y generan una advertencia en la consola del navegador. Una fecha sin comillas, como `date: 2026-10-02`, puede provocar un error de sintaxis que impide cargar todo el portal. El orden dentro de `notices` determina el orden de presentación; para retirar un aviso, elimina su registro.

Revisa los cambios localmente y sigue los pasos de Publicación cuando estén aprobados. No hay panel de edición, inicio de sesión, sincronización automática ni roles de administración dentro del portal: los dos grupos distinguen el origen de las comunicaciones, no conceden permisos. La edición se controla mediante los permisos del repositorio y los avisos publicados son visibles para todos los visitantes.

Los accesos a formularios del cuadro superior son independientes de los avisos públicos. No publiques respuestas, datos personales ni contenido de los formularios de participación. «Canal Confidencial de Consultas, Sugerencias y Quejas MT» conserva el nombre del formulario proporcionado; el portal solo enlaza al servicio externo y no garantiza anonimato ni modifica sus condiciones de acceso o tratamiento de datos.

## Analítica de visitas

El portal incorpora Cloudflare Web Analytics mediante un script al final de `index.html`, asociado al hostname `labsmecatronica-source.github.io`. La analítica utiliza un recurso externo; la interfaz y los accesos del portal siguen funcionando si ese recurso no carga. No se añade un contador ni un panel visible a la página.

Para consultar las métricas, publica los cambios y abre **Web Analytics** en la cuenta de Cloudflare donde registraste el sitio. Tras recibir visitas en la página publicada, revisa allí las visitas y las páginas vistas. La medición comienza con la instalación: no recupera visitas anteriores ni ofrece un listado de estudiantes.

Esta integración no añade seguimiento de clics a los servicios ni al Canal Confidencial, y no recibe respuestas de Google Forms. Los informes son agregados. Los bloqueadores de contenido pueden impedir la medición, por lo que las cifras no representan necesariamente todos los accesos. Una prueba local mediante `file://` o `localhost` no confirma la recepción de datos del hostname configurado; debe comprobarse en Cloudflare después de publicar.

El identificador incluido en `data-cf-beacon` es un token público de instalación, no una credencial para acceder a la cuenta de Cloudflare. Se mantiene únicamente en el snippet de `index.html`; no debe confundirse con tokens de acceso privados.

Referencias: [instalación de Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/get-started/) y [preguntas frecuentes](https://developers.cloudflare.com/web-analytics/faq/).

## Seguridad

El repositorio puede contener URLs públicas o institucionales destinadas al acceso estudiantil, pero no debe contener:

- contraseñas;
- tokens de acceso u otros tokens secretos;
- API keys;
- credenciales;
- enlaces administrativos privados;
- enlaces de edición de Google Forms;
- enlaces de edición de Google Sheets; ni
- ningún otro secreto.

Los controles de acceso institucional se realizan desde Google u otros servicios externos. Ocultar una URL en GitHub no constituye un mecanismo de seguridad.

Los enlaces para compartir de Google pueden terminar en `/edit?usp=sharing` aunque el archivo esté compartido como solo lectura: el permiso depende de la configuración para compartir del archivo, no de la forma de la URL. El Google Sheets de Disponibilidad y Horarios está compartido como solo lectura. Antes de añadir otro enlace de Sheets o Drive, confirma en **Compartir** que los estudiantes tengan el rol de lector.

## Publicación

El proyecto está preparado para ejecutarse como un sitio estático mediante GitHub Pages. Los archivos se publican directamente desde la raíz de la rama `main`; no requiere instalar dependencias, ejecutar un build local ni mantener un servidor de aplicación.

Cuando decidas publicar los cambios:

Si modificaste CSS o JavaScript, antes de cada nueva publicación actualiza **juntos los cuatro valores `v`** de `index.html`: los de `css/styles.css`, `js/links.js`, `js/app.js` y `js/mascot.js`. Usa fecha y revisión, por ejemplo, `?v=20261002-1`; para otra publicación del mismo día, `?v=20261002-2`. Esto cambia las URLs de los recursos para evitar que el HTML nuevo reutilice estilos o scripts anteriores guardados en caché; no cambia la versión visible del portal.

Si tras publicar aparece una interfaz desordenada, `Ctrl + F5` sirve como comprobación temporal para forzar la recarga. La captura de Utechie con el brazo separado y un botón gris es compatible con CSS anterior aplicado al HTML nuevo; en la revisión del 2026-10-02, los archivos publicados ya coincidían con los locales. El versionado de recursos evita depender de que cada visitante recargue manualmente.

1. En GitHub Desktop, selecciona el repositorio `elmt-utec-student-portal` y confirma que **Current branch** sea `main`.
2. Revisa los archivos en **Changes** y selecciona los cambios que deseas publicar. Escribe un resumen, por ejemplo, `Activa talleres y actualiza servicios del portal`, y pulsa **Commit to main**. Esto guarda los cambios en el repositorio local.
3. Pulsa **Push origin** para subir los commits a GitHub.
4. Abre el repositorio [labsmecatronica-source/elmt-utec-student-portal](https://github.com/labsmecatronica-source/elmt-utec-student-portal) y entra a **Settings → Pages**.
5. En **Build and deployment**, elige **Source → Deploy from a branch**. En **Branch**, selecciona `main` y la carpeta `/(root)`, y pulsa **Save**. Esta configuración normalmente solo se realiza una vez.
6. Revisa la pestaña **Actions** y espera a que el despliegue de GitHub Pages termine correctamente. Si falla, abre la ejecución para consultar el error.
7. Vuelve a **Settings → Pages**, abre **Visit site** cuando esté disponible y comprueba la carga de la página, los logos y los enlaces de los servicios desde la dirección publicada.

Para configurar Pages necesitas permisos de administración o mantenimiento del repositorio. GitHub Pages está disponible para repositorios públicos con GitHub Free; su uso en repositorios privados depende del plan de la cuenta.

Una vez configurado, cada nuevo push a `main` actualizará el sitio mediante un despliegue de GitHub Pages. Publicar cambios locales requiere hacer tanto el commit como el push; el commit por sí solo no actualiza la página.

Estos pasos siguen la [guía oficial de GitHub para configurar la fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

El portal está publicado en <https://labsmecatronica-source.github.io/elmt-utec-student-portal/>.
