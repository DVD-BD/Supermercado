let productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",desc:"Manzanas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Platanos",precio:30,categoria:"comida",desc:"Plátanos maduros",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:35,categoria:"comida",desc:"Pan recién horneado",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Coca Cola",precio:20,categoria:"bebidas",desc:"Refresco",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Agua",precio:15,categoria:"bebidas",desc:"Agua purificada",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Chocolate",precio:30,categoria:"snacks",desc:"Chocolate dulce",img:"https://source.unsplash.com/300x300/?chocolate"}

]

let productosMostrados=[...productos]
let carrito=[]


function mostrarProductos(lista){

let cont=document.getElementById("productos")
cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<img src="${p.img}">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button onclick="verDetalle(${i})">Ver</button>

</div>

`

})

productosMostrados=lista

}

mostrarProductos(productos)



function verDetalle(i){

let p=productosMostrados[i]

alert(
p.nombre+
"\n\n"+p.desc+
"\n\nPrecio: $"+p.precio
)

agregarCarrito(i)

}



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
document.getElementById("carrito").style.display="block"
}



function cerrarCarrito(){
document.getElementById("carrito").style.display="none"
}



function pagar(){

alert("Compra realizada")

carrito=[]

actualizarCarrito()

}
