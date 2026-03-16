let productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple",desc:"Manzanas frescas"},
{nombre:"Platanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana",desc:"Plátanos maduros"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread",desc:"Pan fresco"},

{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola",desc:"Refresco"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water",desc:"Agua purificada"},

{nombre:"Chocolate",precio:35,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chocolate",desc:"Chocolate"},
{nombre:"Galletas",precio:28,categoria:"snacks",img:"https://source.unsplash.com/300x300/?cookies",desc:"Galletas"}

]

let productosMostrados=[...productos]

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function mostrarProductos(lista){

let cont=document.getElementById("productos")

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}" onclick="verProductoPagina(${i})">

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

let filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

window.onload = function(){

mostrarProductos(productos)
actualizarCarrito()

}

function agregarCarrito(i){

let prod=productosMostrados[i]

let item=carrito.find(p=>p.nombre===prod.nombre)

if(item){
item.cantidad++
}else{
carrito.push({...prod,cantidad:1})
}

localStorage.setItem("carrito", JSON.stringify(carrito))

}

function verProductoPagina(i){

let producto = productosMostrados[i]

localStorage.setItem("productoSeleccionado", JSON.stringify(producto))

window.location.href = "producto.html"

}
