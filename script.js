let productos=[

// COMIDA
{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple",desc:"Manzanas frescas"},
{nombre:"Platanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana",desc:"Plátanos maduros"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread",desc:"Pan recién horneado"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice",desc:"Arroz premium"},
{nombre:"Pasta",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta",desc:"Pasta italiana"},
{nombre:"Huevos",precio:45,categoria:"comida",img:"https://source.unsplash.com/300x300/?eggs",desc:"Huevos frescos"},
{nombre:"Pollo",precio:120,categoria:"comida",img:"https://source.unsplash.com/300x300/?chicken",desc:"Pollo fresco"},
{nombre:"Queso",precio:70,categoria:"comida",img:"https://source.unsplash.com/300x300/?cheese",desc:"Queso natural"},
{nombre:"Tomate",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?tomato",desc:"Tomate fresco"},
{nombre:"Lechuga",precio:20,categoria:"comida",img:"https://source.unsplash.com/300x300/?lettuce",desc:"Lechuga fresca"},
{nombre:"Zanahoria",precio:18,categoria:"comida",img:"https://source.unsplash.com/300x300/?carrot",desc:"Zanahorias"},
{nombre:"Papa",precio:22,categoria:"comida",img:"https://source.unsplash.com/300x300/?potato",desc:"Papas frescas"},
{nombre:"Cebolla",precio:20,categoria:"comida",img:"https://source.unsplash.com/300x300/?onion",desc:"Cebolla"},
{nombre:"Pepino",precio:19,categoria:"comida",img:"https://source.unsplash.com/300x300/?cucumber",desc:"Pepino"},
{nombre:"Ajo",precio:15,categoria:"comida",img:"https://source.unsplash.com/300x300/?garlic",desc:"Ajo fresco"},

// BEBIDAS
{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola",desc:"Refresco clásico"},
{nombre:"Pepsi",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi",desc:"Refresco"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water",desc:"Agua purificada"},
{nombre:"Jugo Naranja",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?orange-juice",desc:"Jugo natural"},
{nombre:"Leche",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?milk",desc:"Leche entera"},
{nombre:"Café",precio:80,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee",desc:"Café premium"},
{nombre:"Té",precio:40,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?tea",desc:"Té natural"},
{nombre:"Chocolate caliente",precio:35,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?hot-chocolate",desc:"Bebida caliente"},
{nombre:"Agua mineral",precio:18,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?sparkling-water",desc:"Agua mineral"},
{nombre:"Smoothie",precio:30,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?smoothie",desc:"Bebida de fruta"},

// SNACKS
{nombre:"Papas fritas",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chips",desc:"Snack crujiente"},
{nombre:"Chocolate",precio:35,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chocolate",desc:"Chocolate dulce"},
{nombre:"Galletas",precio:28,categoria:"snacks",img:"https://source.unsplash.com/300x300/?cookies",desc:"Galletas"},
{nombre:"Palomitas",precio:22,categoria:"snacks",img:"https://source.unsplash.com/300x300/?popcorn",desc:"Palomitas"},
{nombre:"Nachos",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?nachos",desc:"Nachos"},
{nombre:"Barra cereal",precio:20,categoria:"snacks",img:"https://source.unsplash.com/300x300/?granola-bar",desc:"Barra energética"},
{nombre:"Dulces",precio:18,categoria:"snacks",img:"https://source.unsplash.com/300x300/?candy",desc:"Dulces"},
{nombre:"Pretzels",precio:25,categoria:"snacks",img:"https://source.unsplash.com/300x300/?pretzel",desc:"Pretzels"},
{nombre:"Helado",precio:45,categoria:"snacks",img:"https://source.unsplash.com/300x300/?ice-cream",desc:"Helado"},
{nombre:"Yogurt",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?yogurt",desc:"Yogurt"},

// LIMPIEZA
{nombre:"Detergente",precio:90,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?detergent",desc:"Detergente"},
{nombre:"Cloro",precio:35,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?bleach",desc:"Cloro"},
{nombre:"Jabon",precio:25,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?soap",desc:"Jabón"},
{nombre:"Esponja",precio:15,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?sponge",desc:"Esponja"},
{nombre:"Desinfectante",precio:45,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?disinfectant",desc:"Desinfectante"},
{nombre:"Suavizante",precio:60,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?softener",desc:"Suavizante"},
{nombre:"Limpiador",precio:40,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?cleaning",desc:"Limpiador multiusos"},
{nombre:"Trapo",precio:10,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?cleaning-cloth",desc:"Trapo"},
{nombre:"Guantes",precio:20,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?rubber-gloves",desc:"Guantes"},
{nombre:"Cepillo",precio:18,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?cleaning-brush",desc:"Cepillo"},

// HOGAR
{nombre:"Papel higienico",precio:70,categoria:"hogar",img:"https://source.unsplash.com/300x300/?toilet-paper",desc:"Papel higiénico"},
{nombre:"Escoba",precio:60,categoria:"hogar",img:"https://source.unsplash.com/300x300/?broom",desc:"Escoba"},
{nombre:"Trapeador",precio:65,categoria:"hogar",img:"https://source.unsplash.com/300x300/?mop",desc:"Trapeador"},
{nombre:"Cubeta",precio:40,categoria:"hogar",img:"https://source.unsplash.com/300x300/?bucket",desc:"Cubeta"},
{nombre:"Velas",precio:30,categoria:"hogar",img:"https://source.unsplash.com/300x300/?candle",desc:"Velas"},
{nombre:"Servilletas",precio:20,categoria:"hogar",img:"https://source.unsplash.com/300x300/?napkins",desc:"Servilletas"},
{nombre:"Bolsa basura",precio:25,categoria:"hogar",img:"https://source.unsplash.com/300x300/?trash-bag",desc:"Bolsas de basura"},
{nombre:"Aluminio",precio:35,categoria:"hogar",img:"https://source.unsplash.com/300x300/?aluminum-foil",desc:"Papel aluminio"},
{nombre:"Encendedor",precio:15,categoria:"hogar",img:"https://source.unsplash.com/300x300/?lighter",desc:"Encendedor"},
{nombre:"Fosforos",precio:10,categoria:"hogar",img:"https://source.unsplash.com/300x300/?matches",desc:"Fósforos"}

]


let carrito=[]
let productoActual=null

function mostrarProductos(lista){

let cont=document.getElementById("productos")
cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}" onclick="verProducto(${i})">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

}

mostrarProductos(productos)

function buscarProducto(){

let texto=document.getElementById("buscador").value.toLowerCase()

let filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

mostrarProductos(filtrados)

}

function filtrar(cat){

if(cat=="todos") mostrarProductos(productos)
else mostrarProductos(productos.filter(p=>p.categoria==cat))

}

function agregarCarrito(i){

let prod=productos[i]

let item=carrito.find(p=>p.nombre==prod.nombre)

if(item)item.cantidad++
else carrito.push({...prod,cantidad:1})

actualizarCarrito()

}

function actualizarCarrito(){

let lista=document.getElementById("listaCarrito")
lista.innerHTML=""

let total=0

carrito.forEach((p,i)=>{

total+=p.precio*p.cantidad

lista.innerHTML+=`

<div>

${p.nombre} x${p.cantidad}

<button onclick="sumar(${i})">+</button>

<button onclick="restar(${i})">-</button>

</div>

`

})

document.getElementById("total").innerText=total

document.getElementById("contadorCarrito").innerText=carrito.length

}

function sumar(i){

carrito[i].cantidad++
actualizarCarrito()

}

function restar(i){

carrito[i].cantidad--

if(carrito[i].cantidad<=0) carrito.splice(i,1)

actualizarCarrito()

}

function abrirCarrito(){

document.getElementById("carrito").classList.add("abierto")

}

function cerrarCarrito(){

document.getElementById("carrito").classList.remove("abierto")

}

function verProducto(i){

productoActual=productos[i]

document.getElementById("productoImg").src=productoActual.img
document.getElementById("productoNombre").innerText=productoActual.nombre
document.getElementById("productoDesc").innerText=productoActual.desc
document.getElementById("productoPrecio").innerText="$"+productoActual.precio

document.getElementById("productoVista").style.display="block"

}

function cerrarProducto(){

document.getElementById("productoVista").style.display="none"

}

function agregarDesdeVista(){

agregarCarrito(productos.indexOf(productoActual))

}

function irCheckout(){

document.getElementById("checkout").style.display="block"

}

function finalizarCompra(){

carrito=[]
actualizarCarrito()

document.getElementById("checkout").style.display="none"

alert("Compra realizada")

}

const slides=[

"https://source.unsplash.com/1200x400/?supermarket",
"https://source.unsplash.com/1200x400/?groceries",
"https://source.unsplash.com/1200x400/?shopping"

]

let slideIndex=0

function nextSlide(){

slideIndex++

if(slideIndex>=slides.length) slideIndex=0

document.getElementById("slideImg").src=slides[slideIndex]

}

function prevSlide(){

slideIndex--

if(slideIndex<0) slideIndex=slides.length-1

document.getElementById("slideImg").src=slides[slideIndex]

}

setInterval(nextSlide,4000)
