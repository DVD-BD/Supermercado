let productos = [

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Platanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Pasta",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta"},

{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Pepsi",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Jugo",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?juice"},
{nombre:"Cafe",precio:80,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee"}

]

let productosMostrados = productos

window.onload = function(){

mostrarProductos(productos)

}

function mostrarProductos(lista){

let cont = document.getElementById("productos")

cont.innerHTML = ""

lista.forEach((p,i)=>{

cont.innerHTML += `

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button>Agregar</button>

</div>

`

})

}
