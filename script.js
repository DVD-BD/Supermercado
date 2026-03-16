let productos=[

// FRUTAS

{nombre:"Manzanas",precio:40,categoria:"frutas",desc:"Manzanas frescas rojas y jugosas.",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Plátanos",precio:30,categoria:"frutas",desc:"Plátanos maduros ricos en potasio.",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Naranjas",precio:35,categoria:"frutas",desc:"Naranjas dulces ideales para jugo.",img:"https://source.unsplash.com/300x300/?orange"},
{nombre:"Uvas",precio:60,categoria:"frutas",desc:"Uvas frescas perfectas para snack.",img:"https://source.unsplash.com/300x300/?grapes"},


// VERDURAS

{nombre:"Tomate",precio:25,categoria:"verduras",desc:"Tomates frescos para ensaladas.",img:"https://source.unsplash.com/300x300/?tomato"},
{nombre:"Lechuga",precio:18,categoria:"verduras",desc:"Lechuga verde fresca.",img:"https://source.unsplash.com/300x300/?lettuce"},
{nombre:"Zanahoria",precio:20,categoria:"verduras",desc:"Zanahorias crujientes y saludables.",img:"https://source.unsplash.com/300x300/?carrot"},
{nombre:"Papa",precio:22,categoria:"verduras",desc:"Papas frescas para diferentes platillos.",img:"https://source.unsplash.com/300x300/?potato"},


// CARNES

{nombre:"Pollo",precio:120,categoria:"carnes",desc:"Pechuga de pollo fresca.",img:"https://source.unsplash.com/300x300/?chicken"},
{nombre:"Carne de res",precio:180,categoria:"carnes",desc:"Carne de res de alta calidad.",img:"https://source.unsplash.com/300x300/?beef"},
{nombre:"Chuleta",precio:140,categoria:"carnes",desc:"Chuletas frescas para asar.",img:"https://source.unsplash.com/300x300/?pork"},
{nombre:"Salchichas",precio:55,categoria:"carnes",desc:"Salchichas listas para cocinar.",img:"https://source.unsplash.com/300x300/?sausage"},


// LACTEOS

{nombre:"Leche",precio:26,categoria:"lacteos",desc:"Leche fresca rica en calcio.",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Queso",precio:70,categoria:"lacteos",desc:"Queso cremoso ideal para comidas.",img:"https://source.unsplash.com/300x300/?cheese"},
{nombre:"Yogurt",precio:22,categoria:"lacteos",desc:"Yogurt natural saludable.",img:"https://source.unsplash.com/300x300/?yogurt"},
{nombre:"Mantequilla",precio:38,categoria:"lacteos",desc:"Mantequilla cremosa para cocinar.",img:"https://source.unsplash.com/300x300/?butter"},


// PANADERIA

{nombre:"Pan blanco",precio:35,categoria:"panaderia",desc:"Pan suave recién horneado.",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Croissant",precio:28,categoria:"panaderia",desc:"Croissant crujiente estilo francés.",img:"https://source.unsplash.com/300x300/?croissant"},
{nombre:"Donas",precio:20,categoria:"panaderia",desc:"Donas dulces con azúcar.",img:"https://source.unsplash.com/300x300/?donut"},
{nombre:"Pan dulce",precio:18,categoria:"panaderia",desc:"Pan dulce tradicional.",img:"https://source.unsplash.com/300x300/?sweet-bread"},


// BEBIDAS

{nombre:"Coca Cola",precio:20,categoria:"bebidas",desc:"Refresco clásico refrescante.",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Agua",precio:15,categoria:"bebidas",desc:"Agua purificada.",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Jugo de naranja",precio:32,categoria:"bebidas",desc:"Jugo natural rico en vitamina C.",img:"https://source.unsplash.com/300x300/?orange-juice"},
{nombre:"Café",precio:80,categoria:"bebidas",desc:"Café molido de aroma intenso.",img:"https://source.unsplash.com/300x300/?coffee"},


// SNACKS

{nombre:"Chocolate",precio:30,categoria:"snacks",desc:"Chocolate dulce.",img:"https://source.unsplash.com/300x300/?chocolate"},
{nombre:"Galletas",precio:28,categoria:"snacks",desc:"Galletas crujientes.",img:"https://source.unsplash.com/300x300/?cookies"},
{nombre:"Papas fritas",precio:25,categoria:"snacks",desc:"Botana crujiente.",img:"https://source.unsplash.com/300x300/?chips"},
{nombre:"Palomitas",precio:22,categoria:"snacks",desc:"Palomitas ligeras.",img:"https://source.unsplash.com/300x300/?popcorn"},


// LIMPIEZA

{nombre:"Cloro",precio:25,categoria:"limpieza",desc:"Desinfectante para superficies.",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Detergente",precio:45,categoria:"limpieza",desc:"Detergente para ropa.",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Esponjas",precio:18,categoria:"limpieza",desc:"Esponjas para cocina.",img:"https://source.unsplash.com/300x300/?sponge"},
{nombre:"Trapeador",precio:95,categoria:"limpieza",desc:"Trapeador para limpiar pisos.",img:"https://source.unsplash.com/300x300/?mop"},


// HOGAR

{nombre:"Papel higiénico",precio:60,categoria:"hogar",desc:"Papel higiénico suave.",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Servilletas",precio:22,categoria:"hogar",desc:"Servilletas absorbentes.",img:"https://source.unsplash.com/300x300/?napkins"},
{nombre:"Velas",precio:35,categoria:"hogar",desc:"Velas aromáticas.",img:"https://source.unsplash.com/300x300/?candle"},
{nombre:"Focos LED",precio:50,categoria:"hogar",desc:"Focos ahorradores.",img:"https://source.unsplash.com/300x300/?light-bulb"}

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

<img src="${p.img}" onclick="verProducto(${i})">

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

let filtrados=productos.filter(p=>
p.nombre.toLowerCase().includes(texto)
)

mostrarProductos(filtrados)

}


function filtrar(cat){

if(cat==="todos"){
mostrarProductos(productos)
}else{
let filtrados=productos.filter(p=>p.categoria===cat)
mostrarProductos(filtrados)
}

}


function verProducto(i){

let p=productosMostrados[i]

productoActual=p

document.getElementById("vistaImg").src=p.img
document.getElementById("vistaNombre").innerText=p.nombre
document.getElementById("vistaDesc").innerText=p.desc
document.getElementById("vistaPrecio").innerText=p.precio

document.getElementById("productoVista").style.display="block"

}

function cerrarVista(){
document.getElementById("productoVista").style.display="none"
}

function agregarDesdeVista(){

let index=productosMostrados.findIndex(p=>p.nombre===productoActual.nombre)

agregarCarrito(index)

cerrarVista()

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


function pagar(){

document.getElementById("checkout").style.display="block"

carrito=[]
actualizarCarrito()

}

function cerrarCheckout(){
document.getElementById("checkout").style.display="none"
}


let slides=[
"https://source.unsplash.com/1200x400/?supermarket",
"https://source.unsplash.com/1200x400/?groceries",
"https://source.unsplash.com/1200x400/?shopping"
]

let slideIndex=0

function nextSlide(){

slideIndex++

if(slideIndex>=slides.length){
slideIndex=0
}

document.getElementById("slideImg").src=slides[slideIndex]

}

function prevSlide(){

slideIndex--

if(slideIndex<0){
slideIndex=slides.length-1
}

document.getElementById("slideImg").src=slides[slideIndex]

}

setInterval(nextSlide,4000)
