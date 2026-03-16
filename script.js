const productos=[

// COMIDA

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Plátanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Pasta",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta"},
{nombre:"Huevos",precio:45,categoria:"comida",img:"https://source.unsplash.com/300x300/?eggs"},
{nombre:"Pollo",precio:120,categoria:"comida",img:"https://source.unsplash.com/300x300/?chicken"},
{nombre:"Queso",precio:70,categoria:"comida",img:"https://source.unsplash.com/300x300/?cheese"},
{nombre:"Tomates",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?tomato"},
{nombre:"Lechuga",precio:20,categoria:"comida",img:"https://source.unsplash.com/300x300/?lettuce"},

// BEBIDAS

{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Pepsi",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Jugo naranja",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?orange-juice"},
{nombre:"Café",precio:80,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee"},
{nombre:"Té",precio:40,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?tea"},
{nombre:"Leche",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?milk"},

// SNACKS

{nombre:"Papas fritas",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chips"},
{nombre:"Chocolate",precio:35,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chocolate"},
{nombre:"Galletas",precio:28,categoria:"snacks",img:"https://source.unsplash.com/300x300/?cookies"},
{nombre:"Palomitas",precio:22,categoria:"snacks",img:"https://source.unsplash.com/300x300/?popcorn"},
{nombre:"Nachos",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?nachos"},

// LIMPIEZA

{nombre:"Detergente",precio:90,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Jabón",precio:25,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?soap"},
{nombre:"Esponja",precio:15,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?sponge"},
{nombre:"Desinfectante",precio:45,categoria:"limpieza",img:"https://source.unsplash.com/300x300/?disinfectant"},

// HOGAR

{nombre:"Papel higienico",precio:70,categoria:"hogar",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Escoba",precio:60,categoria:"hogar",img:"https://source.unsplash.com/300x300/?broom"},
{nombre:"Trapeador",precio:65,categoria:"hogar",img:"https://source.unsplash.com/300x300/?mop"},
{nombre:"Cubeta",precio:40,categoria:"hogar",img:"https://source.unsplash.com/300x300/?bucket"},
{nombre:"Velas",precio:30,categoria:"hogar",img:"https://source.unsplash.com/300x300/?candle"}

]

let carrito=[]

// SLIDER

const slides=[
"https://images.unsplash.com/photo-1542838132-92c53300491e",
"https://images.unsplash.com/photo-1604719312566-8912e9227c6a",
"https://images.unsplash.com/photo-1606787366850-de6330128bfc"
]

let slideIndex=0

setInterval(()=>{
slideIndex++
if(slideIndex>=slides.length) slideIndex=0
document.getElementById("slideImg").src=slides[slideIndex]
},3000)



function cargarProductos(lista=productos){

const cont=document.getElementById("productos")

if(!cont) return

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

}

function agregarCarrito(i){

carrito.push(productos[i])

actualizarCarrito()

}

function actualizarCarrito(){

const lista=document.getElementById("listaCarrito")

if(!lista) return

lista.innerHTML=""

let total=0

carrito.forEach((p,i)=>{

total+=p.precio

lista.innerHTML+=`

<div>

${p.nombre} - $${p.precio}

<button onclick="eliminar(${i})">x</button>

</div>

`

})

document.getElementById("total").innerText=total
document.getElementById("contador").innerText=carrito.length

}

function eliminar(i){

carrito.splice(i,1)

actualizarCarrito()

}

function toggleCarrito(){

document.getElementById("panelCarrito").classList.toggle("activo")

}

function toggleCuenta(){

document.getElementById("panelCuenta").classList.toggle("activo")

}

function mostrarCategoria(cat){

if(cat==="todos"){
cargarProductos()
return
}

const filtrados=productos.filter(p=>p.categoria===cat)

cargarProductos(filtrados)

}

const buscador=document.getElementById("buscador")

if(buscador){

buscador.addEventListener("keyup",function(){

const texto=this.value.toLowerCase()

const filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

cargarProductos(filtrados)

})

}

cargarProductos()
