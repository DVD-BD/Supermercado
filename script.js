const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",descripcion:"Manzanas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Pan",precio:30,categoria:"comida",descripcion:"Pan blanco",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",descripcion:"Arroz blanco",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Frijoles",precio:25,categoria:"comida",descripcion:"Frijoles negros",img:"https://source.unsplash.com/300x300/?beans"},
{nombre:"Cereal",precio:55,categoria:"comida",descripcion:"Cereal desayuno",img:"https://source.unsplash.com/300x300/?cereal"},

{nombre:"Leche",precio:22,categoria:"bebidas",descripcion:"Leche entera",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",descripcion:"Refresco cola",img:"https://source.unsplash.com/300x300/?coca-cola"},
{nombre:"Jugo",precio:25,categoria:"bebidas",descripcion:"Jugo natural",img:"https://source.unsplash.com/300x300/?juice"},
{nombre:"Agua",precio:15,categoria:"bebidas",descripcion:"Agua purificada",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Café",precio:80,categoria:"bebidas",descripcion:"Café molido",img:"https://source.unsplash.com/300x300/?coffee"}

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

function toggleCuenta(){
document.getElementById("panelCuenta").classList.toggle("activo")
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

cargarProductos()
