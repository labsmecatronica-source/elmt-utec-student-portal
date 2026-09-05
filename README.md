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

GitHub Pages funciona actualmente como la capa de presentación y acceso centralizado. El portal no almacena los datos de los servicios ni requiere un backend propio: cada acceso externo activo se abre en una pestaña nueva y continúa operando en la plataforma correspondiente. Manufactura Digital despliega un catálogo de procesos dentro del portal; actualmente contiene únicamente Impresión 3D.

## Servicios

| Categoría | Servicio | Tipo | Estado |
|---|---|---|---|
| Open Labs | Disponibilidad y Horarios | Google Sheets | Activo |
| Open Labs | Registro de Uso de Laboratorios | Google Forms | Activo |
| Servicios | Manufactura Digital | Catálogo de procesos | Activo |
| Servicios | Préstamo de Equipos y Componentes | Google Forms | Activo |
| Comunidad | Talleres y Capacitaciones | Página web (GitHub Pages) | Activo |
| Comunidad | Comunicados y Novedades | Por definir | Próximamente |
| Participación y Experiencia | Buzón de Mejora Continua | Google Forms | Activo |
| Participación y Experiencia | Experiencia y Satisfacción | Google Forms | Activo |
| Recursos | Manuales y Guías Técnicas de Equipamiento | Google Drive | Activo |

## Enlaces de acceso rápido

### Disponibilidad y Horarios

<https://docs.google.com/spreadsheets/d/1Mdkzg8lXQ0fQRrPDvZ_DR3dMAmf7B5mG6yaSI4I1ygU/edit?usp=sharing>

### Registro de Uso de Laboratorios

<https://forms.gle/QfckCSopiWtbBaPv8>

### Manufactura Digital

Formulario de solicitudes de Impresión 3D, disponible en el catálogo de Manufactura Digital.

<https://forms.gle/SJmFym5iLZRMy8tx7>

### Préstamo de Equipos y Componentes

<https://forms.gle/XsWRXcCbcJ6nVHmK7>

### Talleres y Capacitaciones

<https://labsmecatronica-source.github.io/elmt-talleres/>

### Buzón de Mejora Continua

<https://forms.gle/pru5PSTj8Z2nbuSr7>

### Experiencia y Satisfacción

Encuesta de satisfacción de estudiantes de los Laboratorios del Departamento de Electrónica y Mecatrónica.

<https://forms.gle/MguoEYNsqEcxe6Dz7>

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
├── index.html          → estructura principal del portal
├── css/
│   └── styles.css      → estilos visuales y diseño responsive
├── js/
│   ├── links.js        → configuración centralizada de servicios y enlaces
│   └── app.js          → lógica de interacción de la interfaz
├── assets/
│   ├── utec-logo.png   → identidad visual de UTEC
│   ├── elmt-logo.png   → identidad visual de ELMT
│   └── ...             → iconos del navegador
├── README.md           → documentación del proyecto
└── CHANGELOG.md        → historial de versiones y próximas mejoras
```

El proyecto utiliza HTML5, CSS3 y JavaScript vanilla. Todas las rutas internas son relativas para mantener la compatibilidad con la publicación del repositorio mediante GitHub Pages.

La interfaz utiliza la paleta institucional observada en el sitio oficial de UTEC y recursos gráficos almacenados localmente en `assets/`; no depende de imágenes o fuentes externas durante su ejecución.

## Actualización de enlaces

Todos los enlaces utilizados por las tarjetas del portal deben administrarse desde [`js/links.js`](./js/links.js), que es la fuente principal de configuración de los servicios. No se deben distribuir ni duplicar innecesariamente URLs de Google Forms, Google Sheets u otros servicios dentro de `index.html`.

Para activar un servicio futuro, actualiza sus propiedades en `js/links.js`:

```js
url: "NUEVA_URL",
active: true,
status: "Activo"
```

Mientras un servicio no esté disponible, debe conservar una URL vacía, `active: false` y el estado `"Próximamente"`.

### Procesos de Manufactura Digital

El módulo con `id: "manufactura-digital"` contiene un arreglo `options` en `js/links.js`. Su tarjeta despliega las opciones disponibles y cada proceso tiene su propio enlace y estado. Actualmente solo se ofrece Impresión 3D:

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

Para añadir un proceso, agrega otro registro con estas mismas propiedades dentro de `options`, usando un `id` único, su nombre, descripción, tipo de servicio, icono disponible y enlace. El catálogo se genera automáticamente sin editar el HTML. Los demás servicios conservan su configuración habitual; `js/links.js` sigue siendo la única fuente de enlaces utilizada por la interfaz.

La propiedad opcional `action` personaliza el texto de acceso de cada proceso; si se omite, se muestra «Acceder».

## Seguridad

El repositorio puede contener URLs públicas o institucionales destinadas al acceso estudiantil, pero no debe contener:

- contraseñas;
- tokens;
- API keys;
- credenciales;
- enlaces administrativos privados;
- enlaces de edición de Google Forms;
- enlaces de edición de Google Sheets; ni
- ningún otro secreto.

Los controles de acceso institucional se realizan desde Google u otros servicios externos. Ocultar una URL en GitHub no constituye un mecanismo de seguridad.

## Publicación

El proyecto está preparado para ejecutarse como un sitio estático mediante GitHub Pages. Los archivos se publican directamente desde la raíz de la rama `main`; no requiere instalar dependencias, ejecutar un build local ni mantener un servidor de aplicación.

Cuando decidas publicar los cambios:

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

No se documenta una URL de producción hasta que la publicación haya sido habilitada y verificada.
