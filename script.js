const productos=[

{nombre:"Manzanas",precio:40,img:"https://source.unsplash.com/300x300/?apples"},
{nombre:"Plátanos",precio:30,img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan Bimbo",precio:38,img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Leche",precio:25,img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Huevos",precio:45,img:"https://source.unsplash.com/300x300/?eggs"},
{nombre:"Arroz",precio:28,img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Frijoles",precio:32,img:"https://source.unsplash.com/300x300/?beans"},
{nombre:"Pasta",precio:20,img:"https://source.unsplash.com/300x300/?pasta"},
{nombre:"Cereal",precio:55,img:"https://source.unsplash.com/300x300/?cereal"},
{nombre:"Yogurt",precio:18,img:"https://source.unsplash.com/300x300/?yogurt"},

{nombre:"Coca-Cola",precio:22,img:"https://source.unsplash.com/300x300/?coca-cola"},
{nombre:"Pepsi",precio:21,img:"https://source.unsplash.com/300x300/?soda"},
{nombre:"Jugo de naranja",precio:30,img:"https://source.unsplash.com/300x300/?orange-juice"},
{nombre:"Agua",precio:15,img:"https://source.unsplash.com/300x300/?water-bottle"},
{nombre:"Café",precio:80,img:"https://source.unsplash.com/300x300/?coffee"},

{nombre:"Azúcar",precio:24,img:"https://source.unsplash.com/300x300/?sugar"},
{nombre:"Sal",precio:10,img:"https://source.unsplash.com/300x300/?salt"},
{nombre:"Aceite",precio:65,img:"https://source.unsplash.com/300x300/?cooking-oil"},
{nombre:"Mantequilla",precio:42,img:"https://source.unsplash.com/300x300/?butter"},
{nombre:"Queso",precio:60,img:"https://source.unsplash.com/300x300/?cheese"},

{nombre:"Jamón",precio:58,img:"https://source.unsplash.com/300x300/?ham"},
{nombre:"Salchichas",precio:40,img:"https://source.unsplash.com/300x300/?sausages"},
{nombre:"Pollo",precio:90,img:"https://source.unsplash.com/300x300/?chicken-meat"},
{nombre:"Carne",precio:120,img:"https://source.unsplash.com/300x300/?beef"},
{nombre:"Pescado",precio:110,img:"https://source.unsplash.com/300x300/?fish"},

{nombre:"Detergente",precio:85,img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Suavizante",precio:70,img:"https://source.unsplash.com/300x300/?fabric-softener"},
{nombre:"Esponjas",precio:20,img:"https://source.unsplash.com/300x300/?sponges"},
{nombre:"Jabón",precio:18,img:"https://source.unsplash.com/300x300/?soap"},

{nombre:"Shampoo",precio:75,img:"https://source.unsplash.com/300x300/?shampoo"},
{nombre:"Pasta dental",precio:40,img:"https://source.unsplash.com/300x300/?toothpaste"},
{nombre:"Cepillo dental",precio:25,img:"https://source.unsplash.com/300x300/?toothbrush"},
{nombre:"Papel higiénico",precio:70,img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Servilletas",precio:30,img:"https://source.unsplash.com/300x300/?napkins"},

{nombre:"Bolsas de basura",precio:45,img:"https://source.unsplash.com/300x300/?trash-bag"},
{nombre:"Velas",precio:20,img:"https://source.unsplash.com/300x300/?candles"},
{nombre:"Foco",precio:35,img:"https://source.unsplash.com/300x300/?light-bulb"},
{nombre:"Escoba",precio:60,img:"https://source.unsplash.com/300x300/?broom"},
{nombre:"Trapeador",precio:75,img:"https://source.unsplash.com/300x300/?mop"},

{nombre:"Galletas",precio:28,img:"https://source.unsplash.com/300x300/?cookies"},
{nombre:"Chocolate",precio:32,img:"https://source.unsplash.com/300x300/?chocolate"},
{nombre:"Papas fritas",precio:22,img:"https://source.unsplash.com/300x300/?chips"},
{nombre:"Helado",precio:65,img:"https://source.unsplash.com/300x300/?ice-cream"},
{nombre:"Miel",precio:55,img:"https://source.unsplash.com/300x300/?honey"},

{nombre:"Avena",precio:34,img:"https://source.unsplash.com/300x300/?oatmeal"},
{nombre:"Granola",precio:45,img:"https://source.unsplash.com/300x300/?granola"},
{nombre:"Mayonesa",precio:38,img:"https://source.unsplash.com/300x300/?mayonnaise"},
{nombre:"Ketchup",precio:32,img:"https://source.unsplash.com/300x300/?ketchup"},
{nombre:"Mostaza",precio:30,img:"https://source.unsplash.com/300x300/?mustard"}

];

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

function guardar(){
localStorage.setItem("carrito",JSON.stringify(carrito));
}

function cargarProductos(){

const cont=document.getElementById("productos");

if(!cont)return;

productos.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<a href="producto.html?id=${i}">
<img src="${p.img}">
<h3>${p.nombre}</h3>
</a>

<p>$${p.precio}</p>

<button onclick="agregar(${i})">Agregar</button>

</div>

`;

});

}

function agregar(i){

carrito.push(productos[i]);

guardar();

alert("Producto agregado");

}

function cargarProductoIndividual(){

const cont=document.getElementById("productoIndividual");

if(!cont)return;

const params=new URLSearchParams(location.search);

const id=params.get("id");

const p=productos[id];

cont.innerHTML=`

<img src="${p.img}">

<div>

<h2>${p.nombre}</h2>

<p>$${p.precio}</p>

<button onclick="agregar(${id})">Agregar al carrito</button>

</div>

`;

}

function comprar(){

alert("Compra realizada (simulación)");

localStorage.removeItem("carrito");

}

cargarProductos();

cargarProductoIndividual();
