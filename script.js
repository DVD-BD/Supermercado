let productos=[

{nombre:"Manzana",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple",desc:"Manzanas rojas frescas"},
{nombre:"Plátano",precio:20,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana",desc:"Plátanos maduros"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread",desc:"Pan recién horneado"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice",desc:"Arroz blanco"},
{nombre:"Pasta",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta",desc:"Pasta italiana"},
{nombre:"Leche",precio:24,categoria:"comida",img:"https://source.unsplash.com/300x300/?milk",desc:"Leche entera"},
{nombre:"Huevos",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?eggs",desc:"Huevos frescos"},
{nombre:"Queso",precio:50,categoria:"comida",img:"https://source.unsplash.com/300x300/?cheese",desc:"Queso natural"},

{nombre:"Coca Cola",precio:22,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola",desc:"Refresco"},
{nombre:"Pepsi",precio:22,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi",desc:"Refresco"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water",desc:"Agua natural"},
{nombre:"Jugo",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?juice",desc:"Jugo natural"},
{nombre:"Café",precio:60,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee",desc:"Café molido"},
{nombre:"Té",precio:40,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?tea",desc:"Té natural"},

{nombre:"Chocolate",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chocolate",desc:"Chocolate dulce"},
{nombre:"Galletas",precio:28,categoria:"snacks",img:"https://source.unsplash.com/300x300/?cookies",desc:"Galletas"},
{nombre:"Papas fritas",precio:32,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chips",desc:"Botana"},
{nombre:"Palomitas",precio:22,categoria:"snacks",img:"https://source.unsplash.com/300x300/?popcorn",desc:"Palomitas"},
{nombre:"Dulces",precio:18,categoria:"snacks",img:"https://source.unsplash.com/300x300/?candy",desc:"Dulces surtidos"},

{nombre:"Detergente",precio:75,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?detergent",desc:"Detergente ropa"},
{nombre:"Cloro",precio:35,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?bleach",desc:"Cloro limpieza"},
{nombre:"Jabón",precio:25,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?soap",desc:"Jabón hogar"},
{nombre:"Suavizante",precio:55,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?softener",desc:"Suavizante"},
{nombre:"Esponjas",precio:15,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?sponge",desc:"Esponjas cocina"},
{nombre:"Desinfectante",precio:45,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?cleaning",desc:"Desinfectante"}

]

let carrito=[]

let productoActual=null

function mostrarProductos(lista){

let cont=document.getElementById("productos")

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}" onclick="abrirModal(${i})">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

}

mostrarProductos(productos)

function buscarProducto(){

let texto=document.getElementById("buscador").value.toLowerCase()

let filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

mostrarProductos(filtrados)

}

function filtrar(cat){

if(cat==="todos") mostrarProductos(productos)

else{

let filtrados=productos.filter(p=>p.categoria===cat)

mostrarProductos(filtrados)

}

}

/* MODAL */

function abrirModal(i){

let p=productos[i]

productoActual=p

document.getElementById("modalImg").src=p.img
document.getElementById("modalNombre").innerText=p.nombre
document.getElementById("modalDesc").innerText=p.desc
document.getElementById("modalPrecio").innerText="$"+p.precio

document.getElementById("modalProducto").style.display="flex"

}

function cerrarModal(){

document.getElementById("modalProducto").style.display="none"

}

function agregarDesdeModal(){

carrito.push(productoActual)

actualizarCarrito()

cerrarModal()

}

/* CARRITO */

function agregarCarrito(i){

carrito.push(productos[i])

actualizarCarrito()

}

function actualizarCarrito(){

let lista=document.getElementById("listaCarrito")

lista.innerHTML=""

let total=0

carrito.forEach(p=>{

lista.innerHTML+=`<div>${p.nombre} - $${p.precio}</div>`

total+=p.precio

})

document.getElementById("total").innerText=total
document.getElementById("contadorCarrito").innerText=carrito.length

}

function abrirCarrito(){

document.getElementById("carrito").classList.add("abierto")

}

function cerrarCarrito(){

document.getElementById("carrito").classList.remove("abierto")

}

/* SLIDER */

const slides=[

"https://source.unsplash.com/1200x300/?supermarket",
"https://source.unsplash.com/1200x300/?groceries",
"https://source.unsplash.com/1200x300/?shopping"

]

let slideIndex=0

document.getElementById("slideImg").src=slides[0]

function nextSlide(){

slideIndex++

if(slideIndex>=slides.length) slideIndex=0

document.getElementById("slideImg").src=slides[slideIndex]

}

function prevSlide(){

slideIndex--

if(slideIndex<0) slideIndex=slides.length-1

document.getElementById("slideImg").src=slides[slideIndex]

}

setInterval(nextSlide,4000)
