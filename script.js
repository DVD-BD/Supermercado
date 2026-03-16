const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://picsum.photos/200?food1"},
{nombre:"Pan Bimbo",precio:35,categoria:"comida",img:"https://picsum.photos/200?food2"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://picsum.photos/200?food3"},
{nombre:"Leche",precio:25,categoria:"bebidas",img:"https://picsum.photos/200?drink1"},
{nombre:"Refresco Coca-Cola",precio:22,categoria:"bebidas",img:"https://picsum.photos/200?drink2"},
{nombre:"Jugo",precio:30,categoria:"bebidas",img:"https://picsum.photos/200?drink3"},
{nombre:"Detergente Ariel",precio:80,categoria:"limpieza",img:"https://picsum.photos/200?clean1"},
{nombre:"Cloro",precio:35,categoria:"limpieza",img:"https://picsum.photos/200?clean2"},
{nombre:"Esponjas",precio:18,categoria:"limpieza",img:"https://picsum.photos/200?clean3"},
{nombre:"Papel higiénico",precio:70,categoria:"hogar",img:"https://picsum.photos/200?home1"},
{nombre:"Servilletas",precio:25,categoria:"hogar",img:"https://picsum.photos/200?home2"},
{nombre:"Bolsas de basura",precio:45,categoria:"hogar",img:"https://picsum.photos/200?home3"}

];

let carrito=JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito(){
localStorage.setItem("carrito",JSON.stringify(carrito));
}

function cargarProductos(lista){

const cont=document.getElementById("productos");

cont.innerHTML="";

lista.forEach((p,index)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${index})">Agregar</button>

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

const lista=document.getElementById("listaCarrito");

let total=0;

lista.innerHTML="";

carrito.forEach((p,index)=>{

lista.innerHTML+=`

<div class="itemCarrito">

${p.nombre} $${p.precio}

<button onclick="eliminarProducto(${index})">X</button>

</div>

`;

total+=p.precio;

});

document.getElementById("total").innerText=total;

document.getElementById("contador").innerText=carrito.length;

}

function eliminarProducto(i){

carrito.splice(i,1);

guardarCarrito();

actualizarCarrito();

}

function toggleCarrito(){

document.getElementById("panelCarrito").classList.toggle("activo");

}

function cerrarCarrito(){

document.getElementById("panelCarrito").classList.remove("activo");

}

function mostrarCategoria(cat){

if(cat==="todos"){

cargarProductos(productos);

return;

}

const filtrados=productos.filter(p=>p.categoria===cat);

cargarProductos(filtrados);

}

/* BUSCADOR */

document.getElementById("buscador").addEventListener("keyup",function(){

const texto=this.value.toLowerCase();

const filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto));

cargarProductos(filtrados);

});

/* BANNER */

const banners=[

"https://picsum.photos/1200/300?1",
"https://picsum.photos/1200/300?2",
"https://picsum.photos/1200/300?3"

];

let i=0;

function cambiarBanner(){

i++;

if(i>=banners.length){

i=0;

}

document.getElementById("bannerImg").src=banners[i];

}

setInterval(cambiarBanner,3000);

cargarProductos(productos);

actualizarCarrito();iarBanner,3000);

cargarProductos(productos);

actualizarCarrito();
