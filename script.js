let productos=[

{nombre:"Manzana",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple",desc:"Manzanas frescas"},
{nombre:"Plátano",precio:22,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana",desc:"Plátanos maduros"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread",desc:"Pan recién horneado"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice",desc:"Arroz premium"},
{nombre:"Pasta",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta",desc:"Pasta italiana"},

{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola",desc:"Refresco clásico"},
{nombre:"Pepsi",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi",desc:"Refresco popular"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water",desc:"Agua purificada"},
{nombre:"Jugo",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?juice",desc:"Jugo natural"},
{nombre:"Café",precio:80,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee",desc:"Café premium"},

{nombre:"Doritos",precio:32,categoria:"snacks",img:"https://source.unsplash.com/300x300/?nachos",desc:"Botana de maíz"},
{nombre:"Chocolate",precio:35,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chocolate",desc:"Chocolate dulce"},
{nombre:"Galletas",precio:28,categoria:"snacks",img:"https://source.unsplash.com/300x300/?cookies",desc:"Galletas crujientes"},
{nombre:"Palomitas",precio:22,categoria:"snacks",img:"https://source.unsplash.com/300x300/?popcorn",desc:"Palomitas de maíz"},
{nombre:"Cacahuates",precio:25,categoria:"snacks",img:"https://source.unsplash.com/300x300/?peanuts",desc:"Cacahuates tostados"},

{nombre:"Detergente",precio:75,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?detergent",desc:"Detergente para ropa"},
{nombre:"Cloro",precio:35,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?bleach",desc:"Cloro desinfectante"},
{nombre:"Jabón",precio:25,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?soap",desc:"Jabón multiusos"},
{nombre:"Esponjas",precio:18,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?sponge",desc:"Esponjas de cocina"},
{nombre:"Desinfectante",precio:45,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?disinfectant",desc:"Desinfectante hogar"}

]

let productosMostrados=[...productos]
let carrito=[]

function mostrarProductos(lista){

let cont=document.getElementById("productos")

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}" onclick="verProductoPagina(${i})">

<h3>${p.nombre}</h3>

<p>${p.desc}</p>

<p>$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

productosMostrados=lista

}

mostrarProductos(productos)

function buscarProducto(){

let texto=document.getElementById("buscador").value.toLowerCase()

let filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

mostrarProductos(filtrados)

}

function filtrar(cat){

if(cat==="todos"){

mostrarProductos(productos)

}else{

mostrarProductos(productos.filter(p=>p.categoria===cat))

}

}

function verProductoPagina(i){

localStorage.setItem("productoSeleccionado", JSON.stringify(productosMostrados[i]))

window.location.href="producto.html"

}

function agregarCarrito(i){

let prod=productosMostrados[i]

let item=carrito.find(p=>p.nombre===prod.nombre)

if(item){

item.cantidad++

}else{

carrito.push({...prod,cantidad:1})

}

actualizarCarrito()

}

function actualizarCarrito(){

let lista=document.getElementById("listaCarrito")

lista.innerHTML=""

let total=0

carrito.forEach(p=>{

total+=p.precio*p.cantidad

lista.innerHTML+=`<div>${p.nombre} x${p.cantidad}</div>`

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
