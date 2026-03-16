let carrito = 0;

let productos = [

{nombre:"Tenis Nike",precio:1200,categoria:"tenis",img:"https://picsum.photos/200?1",rating:5,oferta:true},

{nombre:"Sudadera Adidas",precio:850,categoria:"ropa",img:"https://picsum.photos/200?2",rating:4},

{nombre:"Playera Puma",precio:400,categoria:"ropa",img:"https://picsum.photos/200?3",rating:4},

{nombre:"Tenis Jordan",precio:2000,categoria:"tenis",img:"https://picsum.photos/200?4",rating:5,oferta:true},

{nombre:"Gorra Nike",precio:350,categoria:"accesorios",img:"https://picsum.photos/200?5",rating:3},

{nombre:"Mochila Adidas",precio:900,categoria:"accesorios",img:"https://picsum.photos/200?6",rating:4}

];


function generarEstrellas(num){

let estrellas="";

for(let i=0;i<num;i++){

estrellas+="★";

}

return estrellas;

}


function cargarProductos(lista){

let contenedor=document.getElementById("productos");

contenedor.innerHTML="";

lista.forEach(p=>{

contenedor.innerHTML+=`

<div class="producto">

${p.oferta ? '<div class="oferta">OFERTA</div>' : ''}

<img src="${p.img}">

<h3>${p.nombre}</h3>

<div class="estrellas">${generarEstrellas(p.rating)}</div>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito()">Agregar</button>

</div>

`;

});

}


function agregarCarrito(){

carrito++;

document.getElementById("contador").innerText=carrito;

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
