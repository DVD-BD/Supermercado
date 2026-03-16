const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",descripcion:"Manzanas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Pan",precio:30,categoria:"comida",descripcion:"Pan blanco",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",descripcion:"Arroz blanco",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Frijoles",precio:25,categoria:"comida",descripcion:"Frijoles negros",img:"https://source.unsplash.com/300x300/?beans"},
{nombre:"Cereal",precio:55,categoria:"comida",descripcion:"Cereal para desayuno",img:"https://source.unsplash.com/300x300/?cereal"},

{nombre:"Leche",precio:22,categoria:"bebidas",descripcion:"Leche entera",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",descripcion:"Refresco cola",img:"https://source.unsplash.com/300x300/?coca-cola"},
{nombre:"Jugo",precio:25,categoria:"bebidas",descripcion:"Jugo natural",img:"https://source.unsplash.com/300x300/?juice"},
{nombre:"Agua",precio:15,categoria:"bebidas",descripcion:"Agua purificada",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Café",precio:80,categoria:"bebidas",descripcion:"Café molido",img:"https://source.unsplash.com/300x300/?coffee"},

{nombre:"Detergente",precio:90,categoria:"limpieza",descripcion:"Detergente ropa",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,categoria:"limpieza",descripcion:"Cloro para limpieza",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Jabón",precio:18,categoria:"limpieza",descripcion:"Jabón de baño",img:"https://source.unsplash.com/300x300/?soap"},
{nombre:"Shampoo",precio:75,categoria:"limpieza",descripcion:"Shampoo cabello",img:"https://source.unsplash.com/300x300/?shampoo"},
{nombre:"Pasta dental",precio:40,categoria:"limpieza",descripcion:"Pasta dental",img:"https://source.unsplash.com/300x300/?toothpaste"},

{nombre:"Papel higiénico",precio:70,categoria:"hogar",descripcion:"Papel higiénico",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Servilletas",precio:25,categoria:"hogar",descripcion:"Servilletas",img:"https://source.unsplash.com/300x300/?napkins"},
{nombre:"Escoba",precio:60,categoria:"hogar",descripcion:"Escoba",img:"https://source.unsplash.com/300x300/?broom"},
{nombre:"Trapeador",precio:75,categoria:"hogar",descripcion:"Trapeador",img:"https://source.unsplash.com/300x300/?mop"},
{nombre:"Bolsas basura",precio:45,categoria:"hogar",descripcion:"Bolsas para basura",img:"https://source.unsplash.com/300x300/?trash-bag"}

]

let carrito=[]

function cargarProductos(lista=productos){

const cont=document.getElementById("productos")

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

const producto=productos[i]

const existe=carrito.find(p=>p.nombre===producto.nombre)

if(existe){

existe.cantidad++

}else{

carrito.push({...producto,cantidad:1})

}

actualizarCarrito()

}

function actualizarCarrito(){

const lista=document.getElementById("listaCarrito")

lista.innerHTML=""

let total=0

carrito.forEach((p,i)=>{

total+=p.precio*p.cantidad

lista.innerHTML+=`

<div class="itemCarrito">

<strong>${p.nombre}</strong>

<p>$${p.precio}</p>

<p>Cantidad: ${p.cantidad}</p>

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

if(carrito[i].cantidad<=0){

carrito.splice(i,1)

}

actualizarCarrito()

}

function eliminar(i){

carrito.splice(i,1)

actualizarCarrito()

}

function toggleCarrito(){

document.getElementById("panelCarrito").classList.toggle("activo")

}

function mostrarCategoria(cat){

if(cat==="todos"){

cargarProductos(productos)

return

}

const filtrados=productos.filter(p=>p.categoria===cat)

cargarProductos(filtrados)

}

document.getElementById("buscador").addEventListener("keyup",function(){

const texto=this.value.toLowerCase()

const filtrados=productos.filter(p=>
p.nombre.toLowerCase().includes(texto)
)

cargarProductos(filtrados)

})

function comprar(){

alert("Compra realizada (simulación)")

carrito=[]

actualizarCarrito()

}

cargarProductos()
