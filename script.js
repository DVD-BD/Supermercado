let productos = [
{nombre:"Manzanas",precio:40,categoria:"comida",desc:"Manzanas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Platanos",precio:30,categoria:"comida",desc:"Plátanos maduros",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",desc:"Pan fresco",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",desc:"Refresco",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Agua",precio:15,categoria:"bebidas",desc:"Agua purificada",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Chocolate",precio:30,categoria:"snacks",desc:"Chocolate",img:"https://source.unsplash.com/300x300/?chocolate"}
];

let productosMostrados = [...productos];
let carrito = [];


function mostrarProductos(lista){

let cont = document.getElementById("productos");

if(!cont) return;

cont.innerHTML = "";

lista.forEach((p,i)=>{

cont.innerHTML += `
<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<p>${p.desc}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>
`;

});

productosMostrados = lista;

}

mostrarProductos(productos);


function buscarProducto(){

let input = document.getElementById("buscador");

if(!input) return;

let texto = input.value.toLowerCase();

let filtrados = productos.filter(p =>
p.nombre.toLowerCase().includes(texto)
);

mostrarProductos(filtrados);

}


function filtrar(cat){

if(cat==="todos"){

mostrarProductos(productos);

}else{

let filtrados = productos.filter(p => p.categoria === cat);

mostrarProductos(filtrados);

}

}


function agregarCarrito(i){

let prod = productosMostrados[i];

let item = carrito.find(p => p.nombre === prod.nombre);

if(item){

item.cantidad++;

}else{

carrito.push({...prod,cantidad:1});

}

actualizarCarrito();

}


function actualizarCarrito(){

let lista = document.getElementById("listaCarrito");

if(!lista) return;

lista.innerHTML = "";

let total = 0;

carrito.forEach((p,i)=>{

total += p.precio * p.cantidad;

lista.innerHTML += `
<div>

${p.nombre} x${p.cantidad}

<button onclick="sumar(${i})">+</button>

<button onclick="restar(${i})">-</button>

</div>
`;

});

let totalHTML = document.getElementById("total");
let contador = document.getElementById("contadorCarrito");

if(totalHTML) totalHTML.innerText = total;

if(contador) contador.innerText = carrito.length;

}


function sumar(i){

carrito[i].cantidad++;

actualizarCarrito();

}


function restar(i){

carrito[i].cantidad--;

if(carrito[i].cantidad <= 0){

carrito.splice(i,1);

}

actualizarCarrito();

}


function abrirCarrito(){

let c = document.getElementById("carrito");

if(c) c.style.display = "block";

}


function cerrarCarrito(){

let c = document.getElementById("carrito");

if(c) c.style.display = "none";

}


function pagar(){

alert("Compra realizada");

carrito = [];

actualizarCarrito();

}
