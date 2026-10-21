# Galería de Arte hecha e inspirada por mujeres

Aplicación web para explorar obras de arte del [Art Institute of Chicago](https://www.artic.edu/). Permite navegar la colección completa, buscar obras por palabra clave y explorar por tipo de obra (pintura, escultura y fotografía).

 **Demo:** https://karenm-git.github.io/my-art-gallery-frontend

> ⚠️ **Nota sobre las imágenes:** el servidor de imágenes del museo (`www.artic.edu/iiif`) bloquea actualmente la carga de sus imágenes desde otros sitios (error `ERR_BLOCKED_BY_RESPONSE.NotSameOrigin`). Esto depende del servidor del museo y no del código de este proyecto, por lo que en la versión desplegada las imágenes de las obras pueden no mostrarse.

## Características

- **Colección:** listado de obras con scroll infinito.
- **Búsqueda:** búsqueda de obras por palabra clave.
- **Explorar:** filtro de obras por tipo (Sculpture, Painting, Photograph).
- **Tarjetas** con título, artista, fecha y técnica de cada obra.
- Indicador de carga mientras se consulta la API.

## Tecnologías

- [React](https://react.dev/) 18
- [React Router](https://reactrouter.com/) 6
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
- CSS (metodología BEM)
- [Art Institute of Chicago API](https://api.artic.edu/docs/)
- GitHub Actions + GitHub Pages para el despliegue

## Estructura del proyecto

```
src/
├── components/
│   ├── About/          # Sección "Sobre el proyecto"
│   ├── App/            # Componente principal y rutas
│   ├── Artwork/        # Colección con scroll infinito
│   ├── Card/           # Tarjeta de una obra
│   ├── Explorer/       # Selector de tipo de obra
│   ├── ExplorerPage/   # Resultados por tipo
│   ├── Footer/
│   ├── Header/
│   ├── Main/           # Página de inicio
│   ├── Navigation/
│   ├── Preloader/
│   ├── Search/         # Página de búsqueda
│   └── SearchBar/
├── images/
├── utils/
│   └── ArticApi.js     # Llamadas a la API del museo
└── index.js
```

## Rutas

| Ruta        | Descripción                         |
| ----------- | ----------------------------------- |
| `/`         | Inicio, explorador y sección About  |
| `/artwork`  | Colección completa                  |
| `/search`   | Búsqueda de obras                   |
| `/explorer` | Obras filtradas por tipo            |

## Instalación y uso local

Requisitos: [Node.js](https://nodejs.org/) 16 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/karenm-git/my-art-gallery-frontend.git
cd my-art-gallery-frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo
npm start
```

La app se abre en [http://localhost:3000](http://localhost:3000).

### Otros comandos

| Comando         | Descripción                                |
| --------------- | ------------------------------------------ |
| `npm start`     | Servidor de desarrollo                     |
| `npm run build` | Genera la versión de producción en `build` |
| `npm test`      | Ejecuta las pruebas                        |

## Despliegue

El proyecto se despliega automáticamente en GitHub Pages mediante GitHub Actions (`.github/workflows/deploy.yml`) cada vez que se hace push a la rama `stage-react-api`.

Para que funcione, en **Settings → Pages → Source** debe estar seleccionada la opción **GitHub Actions**.

## API

Los datos provienen de la API pública del [Art Institute of Chicago](https://api.artic.edu/docs/), que no requiere clave de acceso. Se usan principalmente los endpoints `/artworks/search` con los campos `id`, `image_id`, `title`, `artist_display`, `date_display` y `medium_display`.

## Autora

**Karen** — [@karenm-git](https://github.com/karenm-git)

## Créditos

- Datos e imágenes: [Art Institute of Chicago](https://www.artic.edu/)



