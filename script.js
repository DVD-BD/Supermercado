const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",descripcion:"Manzanas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Pan",precio:30,categoria:"comida",descripcion:"Pan horneado",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",descripcion:"Arroz premium",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Leche",precio:22,categoria:"bebidas",descripcion:"Leche entera",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",descripcion:"Refresco",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Jugo",precio:25,categoria:"bebidas",descripcion:"Jugo natural",img:"https://source.unsplash.com/300x300/?juice"},
{nombre:"Detergente",precio:90,categoria:"limpieza",descripcion:"Detergente ropa",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,categoria:"limpieza",descripcion:"Cloro hogar",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Papel higienico",precio:70,categoria:"hogar",descripcion:"Papel suave",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Escoba",precio:60,categoria:"hogar",descripcion:"Escoba resistente",img:"https://source.unsplash.com/300x300/?broom"}

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

<p>${p.descripcion}</p>

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

const panel=document.getElementById("panelCarrito")

panel.classList.toggle("activo")

}


function toggleCuenta(){

const panel=document.getElementById("panelCuenta")

panel.classList.toggle("activo")

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


const formPago=document.getElementById("formPago")

if(formPago){

formPago.addEventListener("submit",function(e){

e.preventDefault()

alert("Compra realizada con éxito")

window.location.href="index.html"

})

}


cargarProductos()
