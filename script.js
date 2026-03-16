const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Plátanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Pasta",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta"},
{nombre:"Huevos",precio:45,categoria:"comida",img:"https://source.unsplash.com/300x300/?eggs"},
{nombre:"Pollo",precio:120,categoria:"comida",img:"https://source.unsplash.com/300x300/?chicken"},
{nombre:"Queso",precio:70,categoria:"comida",img:"https://source.unsplash.com/300x300/?cheese"},
{nombre:"Tomates",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?tomato"},
{nombre:"Lechuga",precio:20,categoria:"comida",img:"https://source.unsplash.com/300x300/?lettuce"},

{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Pepsi",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Jugo naranja",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?orange-juice"},
{nombre:"Café",precio:80,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee"},
{nombre:"Té",precio:40,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?tea"},
{nombre:"Leche",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?milk"}

]

let carrito=[]


function cargarProductos(lista=productos){

const cont=document.getElementById("productos")

if(!cont) return

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

}

function agregarCarrito(i){

carrito.push(productos[i])

actualizarCarrito()

}

function actualizarCarrito(){

const lista=document.getElementById("listaCarrito")

if(!lista) return

lista.innerHTML=""

let total=0

carrito.forEach((p,i)=>{

total+=p.precio

lista.innerHTML+=`
<div>
${p.nombre} - $${p.precio}
<button onclick="eliminar(${i})">x</button>
</div>
`

})

document.getElementById("total").innerText=total
document.getElementById("contador").innerText=carrito.length

}

function eliminar(i){

carrito.splice(i,1)

actualizarCarrito()

}

function toggleCarrito(){
document.getElementById("panelCarrito").classList.toggle("activo")
}

function toggleCuenta(){
document.getElementById("panelCuenta").classList.toggle("activo")
}

function mostrarCategoria(cat){

if(cat==="todos"){
cargarProductos()
return
}

const filtrados=productos.filter(p=>p.categoria===cat)

cargarProductos(filtrados)

}

const buscador=document.getElementById("buscador")

if(buscador){

buscador.addEventListener("keyup",function(){

const texto=this.value.toLowerCase()

const filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

cargarProductos(filtrados)

})

}

/* SLIDER */

const slides=[

"https://source.unsplash.com/1200x400/?supermarket",
"https://source.unsplash.com/1200x400/?groceries",
"https://source.unsplash.com/1200x400/?shopping-cart",
"https://source.unsplash.com/1200x400/?food-store"

]

let slideIndex=0

setInterval(()=>{

slideIndex++

if(slideIndex>=slides.length) slideIndex=0

const img=document.getElementById("slideImg")

if(img){
img.src=slides[slideIndex]
}

},3000)

cargarProductos()
