# Procedimiento para publicar la página web **Supermercado**

**Integrantes:** Camargo Cantellan Didier Isaac, Rivera Armenta Diego Salatiel, Rojas Hernandez Valeria  

## 1. Investigación y planificación

1. Se revisó la **documentación de GitHub Pages** para conocer los requisitos y el flujo de publicación de un sitio web estático.  
2. Se definió la estructura del proyecto:
   - **index.html** → página principal.  
   - **estilos.css** → estilos de la página (colores, layout, slider, carrito, botones, categorías).  
   - **script.js** → funcionalidades de JavaScript (slider, carrito, búsqueda, filtrado de categorías, vista de productos).  
   - **imagenes/** → carpeta con imágenes locales de productos (opcional si se usan URLs externas).  

---

## 2. Creación del proyecto en la computadora

1. Se creó una carpeta local llamada **Supermercado**.  
2. Dentro de la carpeta se colocaron los archivos principales:
   - `index.html`
   - `estilos.css`
   - `script.js`
   - Carpeta de imágenes (si se requería).  

Se organizo de la siguiente manera:
              Supermercado/
                  │─ index.html
                  │─ estilos.css
                  │─ script.js
                  │─ img/
                      ├─ manzana.jpg
                      ├─ platano.jpg
                      └─ ...

## 3. Instalación y configuración de Git
Se descargó e instaló Git en la computadora mediante su instalador oficial. Se configuraron los datos de usuario

## 4. Inicialización del repositorio local
Se abrió la terminal o CMD en la carpeta Supermercado y se inicializó el repositorio

## 5. Creación del repositorio en GitHub
Se ingresó a GitHub y se creó un repositorio llamado Supermercado. Se vinculó el repositorio local con el remoto:
git init
git add .
git commit -m "Primer commit del proyecto Supermercado"

## 5. Creación del repositorio en GitHub
Se ingresó a GitHub y se creó un repositorio llamado Supermercado. Se vinculó el repositorio local con el remoto:
git remote add origin https://github.com/DVD-BD/Supermercado.git
git branch -M main
git push -u origin main

## 6. Evolución de la página web
- Creación inicial: slider, menú de categorías y diseño básico.
- Funcionalidad del carrito: agregar, quitar, contar productos y pagar.
- Vista de producto individual: modal con información y opción de agregar al carrito.
- Búsqueda y filtrado: buscador en tiempo real y filtrado por categorías.
- Mejoras de diseño: ajuste de slider, centrado y separación de categorías, colores, botones y sombras.
- Ampliación de productos: al menos 5 productos por categoría con nombre, precio, imagen y descripción.

## 7. Publicación con GitHub Pages
Se activó GitHub Pages desde la configuración del repositorio:
- Fuente: main branch → carpeta raíz.
- GitHub generó la URL pública: https://dvd-bd.github.io/Supermercado/
Se verificó que el slider, las categorías, el carrito y la vista de producto funcionen correctamente y que el diseño se mantenga consistente.

## 8. Últimos ajustes
- Corrección de márgenes y altura del header.
- Centrado de las categorías debajo del header.
- Ajuste del slider para ocupar todo el ancho y altura proporcional.
- Verificación de carga correcta de imágenes (locales o URLs externas).

Con esto, el repositorio refleja todo el proceso de desarrollo y publicación de la página web Supermercado.
