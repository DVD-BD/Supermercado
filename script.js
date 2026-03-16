let productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",img:"https://source.unsplash.com/300x300/?apple",desc:"Manzanas frescas"},
{nombre:"Platanos",precio:30,categoria:"comida",img:"https://source.unsplash.com/300x300/?banana",desc:"Plátanos maduros"},
{nombre:"Pan",precio:35,categoria:"comida",img:"https://source.unsplash.com/300x300/?bread",desc:"Pan fresco"},
{nombre:"Arroz",precio:28,categoria:"comida",img:"https://source.unsplash.com/300x300/?rice",desc:"Arroz premium"},
{nombre:"Pasta",precio:25,categoria:"comida",img:"https://source.unsplash.com/300x300/?pasta",desc:"Pasta italiana"},

{nombre:"Coca Cola",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?cola",desc:"Refresco"},
{nombre:"Pepsi",precio:20,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?pepsi",desc:"Refresco"},
{nombre:"Agua",precio:15,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?water",desc:"Agua purificada"},
{nombre:"Jugo",precio:25,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?juice",desc:"Jugo natural"},
{nombre:"Cafe",precio:80,categoria:"bebidas",img:"https://source.unsplash.com/300x300/?coffee",desc:"Café premium"},

{nombre:"Papas fritas",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chips",desc:"Snack"},
{nombre:"Chocolate",precio:35,categoria:"snacks",img:"https://source.unsplash.com/300x300/?chocolate",desc:"Chocolate"},
{nombre:"Galletas",precio:28,categoria:"snacks",img:"https://source.unsplash.com/300x300/?cookies",desc:"Galletas"},
{nombre:"Palomitas",precio:22,categoria:"snacks",img:"https://source.unsplash.com/300x300/?popcorn",desc:"Palomitas"},
{nombre:"Nachos",precio:30,categoria:"snacks",img:"https://source.unsplash.com/300x300/?nachos",desc:"Nachos"}

]

let productosMostrados=[...productos]
let carrito=[]
let productoActual=null

function mostrarProductos(lista){

let cont=document.getElementById("productos")

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}" onclick="verProductoPagina(${i})">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

productosMostrados=lista

}

mostrarProductos(productos)

function buscarProducto(){

let texto=document.getElementById("buscador").value.toLowerCase()

let filtrados=productos.filter(p=>p.nombre.toLowerCase().includes(texto))

mostrarProductos(filtrados)

}

function filtrar(cat){

if(cat==="todos"){

mostrarProductos(productos)

}else{

mostrarProductos(productos.filter(p=>p.categoria===cat))

}

}

function agregarCarrito(i){

let prod=productosMostrados[i]

let item=carrito.find(p=>p.nombre===prod.nombre)

if(item){

item.cantidad++

}else{

carrito.push({...prod,cantidad:1})

}

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

if(carrito[i].cantidad<=0){
carrito.splice(i,1)
}

actualizarCarrito()

}

function abrirCarrito(){
document.getElementById("carrito").classList.add("abierto")
}

function cerrarCarrito(){
document.getElementById("carrito").classList.remove("abierto")
}

function verProductoPagina(i){

let producto = productosMostrados[i]

localStorage.setItem("productoSeleccionado", JSON.stringify(producto))

window.location.href = "producto.html"

}
