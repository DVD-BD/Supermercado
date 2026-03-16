const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",descripcion:"Manzanas frescas y crujientes",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Pan",precio:30,categoria:"comida",descripcion:"Pan blanco suave",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",descripcion:"Arroz premium",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Leche",precio:22,categoria:"bebidas",descripcion:"Leche entera",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",descripcion:"Refresco clásico",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Jugo",precio:25,categoria:"bebidas",descripcion:"Jugo natural",img:"https://source.unsplash.com/300x300/?juice"},
{nombre:"Detergente",precio:90,categoria:"limpieza",descripcion:"Detergente para ropa",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,categoria:"limpieza",descripcion:"Cloro multiusos",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Papel higienico",precio:70,categoria:"hogar",descripcion:"Papel suave",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Escoba",precio:60,categoria:"hogar",descripcion:"Escoba resistente",img:"https://source.unsplash.com/300x300/?broom"}

]

let carrito=[]

function cargarProductos(lista=productos){

const cont=document.getElementById("productos")
if(!cont)return

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<a href="producto.html?id=${i}">
<img src="${p.img}">
</a>

<h3>${p.nombre}</h3>

<p>${p.descripcion}</p>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

}

function agregarCarrito(i){

const prod=productos[i]

const existe=carrito.find(p=>p.nombre===prod.nombre)

if(existe){

existe.cantidad++

}else{

carrito.push({...prod,cantidad:1})

}

actualizarCarrito()

}

function actualizarCarrito(){

const lista=document.getElementById("listaCarrito")
if(!lista)return

lista.innerHTML=""

let total=0

carrito.forEach((p,i)=>{

total+=p.precio*p.cantidad

lista.innerHTML+=`

<div class="itemCarrito">

<strong>${p.nombre}</strong>

<p>$${p.precio}</p>

<p>Cantidad ${p.cantidad}</p>

<button onclick="sumar(${i})">+</button>
<button onclick="restar(${i})">-</button>
<button onclick="eliminar(${i})">x</button>

</div>

`

})

document.getElementById("total").innerText=total
document.getElementById("contador").innerText=carrito.length

}

function sumar(i){
carrito[i].cantidad++
actualizarCarrito()
}

function restar(i){
carrito[i].cantidad--
if(carrito[i].cantidad<=0)carrito.splice(i,1)
actualizarCarrito()
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

const filtrados=productos.filter(p=>
p.nombre.toLowerCase().includes(texto)
)

cargarProductos(filtrados)

})

}

function cargarProductoVista(){

const cont=document.getElementById("productoVista")
if(!cont)return

const params=new URLSearchParams(location.search)
const id=params.get("id")

const p=productos[id]

cont.innerHTML=`

<img src="${p.img}">

<div>

<h1>${p.nombre}</h1>

<p>${p.descripcion}</p>

<h2>$${p.precio}</h2>

<button onclick="agregarCarrito(${id})">Agregar al carrito</button>

</div>

`

}

cargarProductos()
cargarProductoVista()
