let productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://picsum.photos/200?food1"},
{nombre:"Pan de caja",precio:35,categoria:"comida",img:"https://picsum.photos/200?food2"},
{nombre:"Leche",precio:25,categoria:"bebidas",img:"https://picsum.photos/200?milk"},
{nombre:"Refresco",precio:20,categoria:"bebidas",img:"https://picsum.photos/200?soda"},
{nombre:"Detergente",precio:80,categoria:"limpieza",img:"https://picsum.photos/200?clean1"},
{nombre:"Cloro",precio:30,categoria:"limpieza",img:"https://picsum.photos/200?clean2"},
{nombre:"Papel higiénico",precio:70,categoria:"hogar",img:"https://picsum.photos/200?home1"},
{nombre:"Servilletas",precio:25,categoria:"hogar",img:"https://picsum.photos/200?home2"}

];

let carrito=JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito(){
localStorage.setItem("carrito",JSON.stringify(carrito));
}

function cargarProductos(lista){

let cont=document.getElementById("productos");

cont.innerHTML="";

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

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

let lista=document.getElementById("listaCarrito");

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

if(cat=="todos"){
cargarProductos(productos);
return;
}

let filtrados=productos.filter(p=>p.categoria==cat);

cargarProductos(filtrados);

}

/* BUSCADOR */

document.getElementById("buscador").addEventListener("keyup",function(){

let texto=this.value.toLowerCase();

let filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto));

cargarProductos(filtrados);

});

/* SLIDER */

let banners=[
"https://picsum.photos/1200/300?random=1",
"https://picsum.photos/1200/300?random=2",
"https://picsum.photos/1200/300?random=3"
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

actualizarCarrito();
