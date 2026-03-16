const productos = [

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apples"},
{nombre:"Plátanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Leche",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Huevos",precio:50,categoria:"comida",img:"https://source.unsplash.com/300x300/?eggs"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Frijoles",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?beans"},
{nombre:"Pasta",precio:22,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta"},
{nombre:"Cereal",precio:60,categoria:"comida",img:"https://source.unsplash.com/300x300/?cereal"},
{nombre:"Yogurt",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?yogurt"},

{nombre:"Coca-Cola",precio:22,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coca-cola"},
{nombre:"Pepsi",precio:21,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?soda"},
{nombre:"Jugo de naranja",precio:30,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?orange-juice"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water-bottle"},
{nombre:"Café",precio:85,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee"},

{nombre:"Azúcar",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?sugar"},
{nombre:"Sal",precio:10,categoria:"comida",img:"https://source.unsplash.com/300x300/?salt"},
{nombre:"Aceite",precio:70,categoria:"comida",img:"https://source.unsplash.com/300x300/?cooking-oil"},
{nombre:"Mantequilla",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?butter"},
{nombre:"Queso",precio:65,categoria:"comida",img:"https://source.unsplash.com/300x300/?cheese"},

{nombre:"Jamón",precio:60,categoria:"comida",img:"https://source.unsplash.com/300x300/?ham"},
{nombre:"Salchichas",precio:45,categoria:"comida",img:"https://source.unsplash.com/300x300/?sausages"},
{nombre:"Pollo",precio:90,categoria:"comida",img:"https://source.unsplash.com/300x300/?chicken"},
{nombre:"Carne",precio:120,categoria:"comida",img:"https://source.unsplash.com/300x300/?beef"},
{nombre:"Pescado",precio:110,categoria:"comida",img:"https://source.unsplash.com/300x300/?fish"},

{nombre:"Detergente",precio:90,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Suavizante",precio:75,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?fabric-softener"},
{nombre:"Esponjas",precio:20,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?sponges"},
{nombre:"Jabón",precio:18,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?soap"},

{nombre:"Shampoo",precio:80,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?shampoo"},
{nombre:"Pasta dental",precio:45,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?toothpaste"},
{nombre:"Cepillo dental",precio:25,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?toothbrush"},
{nombre:"Papel higiénico",precio:70,categoria:"hogar",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Servilletas",precio:30,categoria:"hogar",img:"https://source.unsplash.com/300x300/?napkins"},

{nombre:"Bolsas de basura",precio:50,categoria:"hogar",img:"https://source.unsplash.com/300x300/?trash-bag"},
{nombre:"Velas",precio:20,categoria:"hogar",img:"https://source.unsplash.com/300x300/?candles"},
{nombre:"Foco",precio:35,categoria:"hogar",img:"https://source.unsplash.com/300x300/?light-bulb"},
{nombre:"Escoba",precio:60,categoria:"hogar",img:"https://source.unsplash.com/300x300/?broom"},
{nombre:"Trapeador",precio:80,categoria:"hogar",img:"https://source.unsplash.com/300x300/?mop"},

{nombre:"Galletas",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?cookies"},
{nombre:"Chocolate",precio:32,categoria:"comida",img:"https://source.unsplash.com/300x300/?chocolate"},
{nombre:"Papas fritas",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?chips"},
{nombre:"Helado",precio:65,categoria:"comida",img:"https://source.unsplash.com/300x300/?ice-cream"},
{nombre:"Miel",precio:55,categoria:"comida",img:"https://source.unsplash.com/300x300/?honey"},

{nombre:"Avena",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?oatmeal"},
{nombre:"Granola",precio:45,categoria:"comida",img:"https://source.unsplash.com/300x300/?granola"},
{nombre:"Mayonesa",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?mayonnaise"},
{nombre:"Ketchup",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?ketchup"},
{nombre:"Mostaza",precio:32,categoria:"comida",img:"https://source.unsplash.com/300x300/?mustard"}

];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito(){
localStorage.setItem("carrito",JSON.stringify(carrito));
}

function cargarProductos(lista = productos){

const cont = document.getElementById("productos");
if(!cont) return;

cont.innerHTML = "";

lista.forEach((p,i)=>{

cont.innerHTML += `

<div class="producto">

<a href="producto.html?id=${i}">
<img src="${p.img}">
<h3>${p.nombre}</h3>
</a>

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

const lista = document.getElementById("listaCarrito");
if(!lista) return;

lista.innerHTML="";
let total = 0;

carrito.forEach((p,index)=>{

lista.innerHTML += `

<div class="itemCarrito">

${p.nombre} $${p.precio}

<button onclick="eliminarProducto(${index})">X</button>

</div>

`;

total += p.precio;

});

document.getElementById("total").innerText = total;
document.getElementById("contador").innerText = carrito.length;

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

if(cat === "todos"){
cargarProductos(productos);
return;
}

const filtrados = productos.filter(p => p.categoria === cat);
cargarProductos(filtrados);

}

const buscador = document.getElementById("buscador");

if(buscador){

buscador.addEventListener("keyup",function(){

const texto = this.value.toLowerCase();

const filtrados = productos.filter(p =>
p.nombre.toLowerCase().includes(texto)
);

cargarProductos(filtrados);

});

}

function cargarProductoIndividual(){

const cont = document.getElementById("productoIndividual");
if(!cont) return;

const params = new URLSearchParams(location.search);
const id = params.get("id");

const p = productos[id];

cont.innerHTML = `

<img src="${p.img}">

<div>

<h2>${p.nombre}</h2>

<p>$${p.precio}</p>

<button onclick="agregarCarrito(${id})">Agregar al carrito</button>

</div>

`;

}

function comprar(){

alert("Compra realizada (simulación)");

localStorage.removeItem("carrito");

}

cargarProductos();
actualizarCarrito();
cargarProductoIndividual();
