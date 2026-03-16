let productos=[
{nombre:"Manzanas",precio:40,categoria:"comida",desc:"Manzanas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Platanos",precio:30,categoria:"comida",desc:"Plátanos maduros",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",desc:"Pan recién horneado",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",desc:"Arroz premium",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",desc:"Refresco",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Agua",precio:15,categoria:"bebidas",desc:"Agua purificada",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Cafe",precio:80,categoria:"bebidas",desc:"Café premium",img:"https://source.unsplash.com/300x300/?coffee"},
{nombre:"Chocolate",precio:30,categoria:"snacks",desc:"Chocolate dulce",img:"https://source.unsplash.com/300x300/?chocolate"},
{nombre:"Galletas",precio:28,categoria:"snacks",desc:"Galletas crujientes",img:"https://source.unsplash.com/300x300/?cookies"},
{nombre:"Papas",precio:25,categoria:"snacks",desc:"Papas fritas",img:"https://source.unsplash.com/300x300/?chips"}
]

let productosMostrados=[...productos]
let carrito=[]
let productoActual=null


function mostrarProductos(lista){

let cont=document.getElementById("productos")

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}" onclick="verProducto(${i})">

<h3>${p.nombre}</h3>

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

let filtrados=productos.filter(p=>
p.nombre.toLowerCase().includes(texto)
)

mostrarProductos(filtrados)

}


function filtrar(cat){

if(cat==="todos"){
mostrarProductos(productos)
}else{
let filtrados=productos.filter(p=>p.categoria===cat)
mostrarProductos(filtrados)
}

}


function verProducto(i){

let p=productosMostrados[i]

productoActual=p

document.getElementById("vistaImg").src=p.img
document.getElementById("vistaNombre").innerText=p.nombre
document.getElementById("vistaDesc").innerText=p.desc
document.getElementById("vistaPrecio").innerText=p.precio

document.getElementById("productoVista").style.display="block"

}

function cerrarVista(){
document.getElementById("productoVista").style.display="none"
}

function agregarDesdeVista(){

let index=productosMostrados.findIndex(p=>p.nombre===productoActual.nombre)

agregarCarrito(index)

cerrarVista()

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

carrito.forEach((p,i)=>{

total+=p.precio*p.cantidad

lista.innerHTML+=`

<div>
${p.nombre} x${p.cantidad}
<button onclick="sumar(${i})">+</button>
<button onclick="restar(${i})">-</button>
</div>

`

})

document.getElementById("total").innerText=total
document.getElementById("contadorCarrito").innerText=carrito.length

}


function sumar(i){
carrito[i].cantidad++
actualizarCarrito()
}

function restar(i){

carrito[i].cantidad--

if(carrito[i].cantidad<=0){
carrito.splice(i,1)
}

actualizarCarrito()

}


function abrirCarrito(){
document.getElementById("carrito").classList.add("abierto")
}

function cerrarCarrito(){
document.getElementById("carrito").classList.remove("abierto")
}


function pagar(){

document.getElementById("checkout").style.display="block"

carrito=[]
actualizarCarrito()

}

function cerrarCheckout(){
document.getElementById("checkout").style.display="none"
}


/* SLIDER */

let slides=[
"https://source.unsplash.com/1200x400/?supermarket",
"https://source.unsplash.com/1200x400/?groceries",
"https://source.unsplash.com/1200x400/?shopping"
]

let slideIndex=0

function nextSlide(){

slideIndex++

if(slideIndex>=slides.length){
slideIndex=0
}

document.getElementById("slideImg").src=slides[slideIndex]

}

function prevSlide(){

slideIndex--

if(slideIndex<0){
slideIndex=slides.length-1
}

document.getElementById("slideImg").src=slides[slideIndex]

}

setInterval(nextSlide,4000)
