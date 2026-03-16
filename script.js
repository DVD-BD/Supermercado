let carrito=[];
let contador=0;

let productos=[

{nombre:"Tenis Nike",precio:1200,categoria:"tenis",img:"https://picsum.photos/200?1"},
{nombre:"Sudadera Adidas",precio:850,categoria:"ropa",img:"https://picsum.photos/200?2"},
{nombre:"Playera Puma",precio:400,categoria:"ropa",img:"https://picsum.photos/200?3"},
{nombre:"Tenis Jordan",precio:2000,categoria:"tenis",img:"https://picsum.photos/200?4"},
{nombre:"Gorra Nike",precio:350,categoria:"accesorios",img:"https://picsum.photos/200?5"},
{nombre:"Mochila Adidas",precio:900,categoria:"accesorios",img:"https://picsum.photos/200?6"}

];


function cargarProductos(lista){

let contenedor=document.getElementById("productos");

contenedor.innerHTML="";

lista.forEach((p,i)=>{

contenedor.innerHTML+=`

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

contador++;

document.getElementById("contador").innerText=contador;

actualizarCarrito();

}


function actualizarCarrito(){

let lista=document.getElementById("listaCarrito");

let total=0;

lista.innerHTML="";

carrito.forEach(p=>{

lista.innerHTML+=`

<div class="itemCarrito">

${p.nombre} - $${p.precio}

</div>

`;

total+=p.precio;

});

document.getElementById("total").innerText=total;

}


function toggleCarrito(){

let panel=document.getElementById("panelCarrito");

panel.classList.toggle("activo");

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


cargarProductos(productos);



/* SLIDER */

let banners=[
"https://picsum.photos/1200/300?1",
"https://picsum.photos/1200/300?2",
"https://picsum.photos/1200/300?3"
];

let indice=0;

function cambiarBanner(){

indice++;

if(indice>=banners.length){
indice=0;
}

document.getElementById("bannerImg").src=banners[indice];

}

setInterval(cambiarBanner,3000);
