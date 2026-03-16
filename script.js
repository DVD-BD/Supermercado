const productos = [

{nombre:"Manzanas",precio:40,categoria:"comida",descripcion:"Manzanas rojas frescas ideales para snacks.",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Plátanos",precio:30,categoria:"comida",descripcion:"Plátanos maduros ricos en potasio.",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",descripcion:"Pan blanco suave perfecto para desayunos.",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Leche",precio:25,categoria:"bebidas",descripcion:"Leche entera nutritiva.",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Huevos",precio:50,categoria:"comida",descripcion:"Huevos frescos de granja.",img:"https://source.unsplash.com/300x300/?eggs"},
{nombre:"Arroz",precio:28,categoria:"comida",descripcion:"Arroz blanco de alta calidad.",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Frijoles",precio:30,categoria:"comida",descripcion:"Frijoles negros nutritivos.",img:"https://source.unsplash.com/300x300/?beans"},
{nombre:"Pasta",precio:22,categoria:"comida",descripcion:"Pasta italiana clásica.",img:"https://source.unsplash.com/300x300/?pasta"},
{nombre:"Cereal",precio:60,categoria:"comida",descripcion:"Cereal crujiente para el desayuno.",img:"https://source.unsplash.com/300x300/?cereal"},
{nombre:"Yogurt",precio:20,categoria:"bebidas",descripcion:"Yogurt natural saludable.",img:"https://source.unsplash.com/300x300/?yogurt"}

];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito(){
localStorage.setItem("carrito",JSON.stringify(carrito));
}

function cargarProductos(lista = productos){

const cont = document.getElementById("productos");
if(!cont) return;

cont.innerHTML="";

lista.forEach((p,i)=>{

cont.innerHTML += `

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p>${p.descripcion}</p>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar al carrito</button>

</div>

`;

});

}

function agregarCarrito(i){

carrito.push(productos[i]);

guardarCarrito();

actualizarCarrito();

}

function actualizarCarrito(){

const lista = document.getElementById("listaCarrito");
const totalElemento = document.getElementById("total");
const contador = document.getElementById("contador");

if(!lista) return;

lista.innerHTML="";

let total = 0;

carrito.forEach((p,index)=>{

lista.innerHTML += `

<div class="itemCarrito">

<div>
<strong>${p.nombre}</strong>
<p>$${p.precio}</p>
</div>

<button onclick="eliminarProducto(${index})">X</button>

</div>

`;

total += p.precio;

});

if(totalElemento) totalElemento.innerText = total;
if(contador) contador.innerText = carrito.length;

}

function eliminarProducto(i){

carrito.splice(i,1);

guardarCarrito();

actualizarCarrito();

}

function toggleCarrito(){

const panel = document.getElementById("panelCarrito");

if(panel) panel.classList.toggle("activo");

}

function mostrarCategoria(cat){

if(cat === "todos"){

cargarProductos(productos);

return;

}

const filtrados = productos.filter(p => p.categoria === cat);

cargarProductos(filtrados);

}

function iniciarBuscador(){

const buscador = document.getElementById("buscador");

if(!buscador) return;

buscador.addEventListener("keyup",function(){

const texto = this.value.toLowerCase();

const filtrados = productos.filter(p =>
p.nombre.toLowerCase().includes(texto)
);

cargarProductos(filtrados);

});

}

function comprar(){

alert("Compra realizada (simulación)");

carrito=[];

guardarCarrito();

actualizarCarrito();

}

document.addEventListener("DOMContentLoaded",()=>{

cargarProductos();

actualizarCarrito();

iniciarBuscador();

});
