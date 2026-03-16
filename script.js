let carrito = 0;

let productos = [
{nombre:"Tenis Nike",precio:1200,img:"https://picsum.photos/200?1"},
{nombre:"Sudadera Adidas",precio:850,img:"https://picsum.photos/200?2"},
{nombre:"Playera Puma",precio:400,img:"https://picsum.photos/200?3"},
{nombre:"Tenis Jordan",precio:2000,img:"https://picsum.photos/200?4"},
{nombre:"Gorra Nike",precio:350,img:"https://picsum.photos/200?5"},
{nombre:"Mochila Adidas",precio:900,img:"https://picsum.photos/200?6"},
{nombre:"Pants Puma",precio:700,img:"https://picsum.photos/200?7"},
{nombre:"Camisa Nike",precio:500,img:"https://picsum.photos/200?8"}
];

function cargarProductos(){

let contenedor = document.getElementById("productos");

productos.forEach(p => {

contenedor.innerHTML += `
<div class="producto">
<img src="${p.img}">
<h3>${p.nombre}</h3>
<p class="precio">$${p.precio}</p>
<button onclick="agregarCarrito()">Agregar</button>
</div>
`;

});

}

function agregarCarrito(){

carrito++;

document.getElementById("contador").innerText = carrito;

}

cargarProductos();


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
