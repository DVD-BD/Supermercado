const productos=[

{nombre:"Manzanas",precio:40,categoria:"comida",descripcion:"Manzanas rojas frescas",img:"https://source.unsplash.com/300x300/?apple"},
{nombre:"Plátanos",precio:25,categoria:"comida",descripcion:"Plátanos dulces",img:"https://source.unsplash.com/300x300/?banana"},
{nombre:"Pan",precio:30,categoria:"comida",descripcion:"Pan recién horneado",img:"https://source.unsplash.com/300x300/?bread"},
{nombre:"Arroz",precio:28,categoria:"comida",descripcion:"Arroz premium",img:"https://source.unsplash.com/300x300/?rice"},
{nombre:"Pasta",precio:26,categoria:"comida",descripcion:"Pasta italiana",img:"https://source.unsplash.com/300x300/?pasta"},
{nombre:"Huevos",precio:45,categoria:"comida",descripcion:"Docena de huevos",img:"https://source.unsplash.com/300x300/?eggs"},
{nombre:"Pollo",precio:120,categoria:"comida",descripcion:"Pollo fresco",img:"https://source.unsplash.com/300x300/?chicken"},
{nombre:"Queso",precio:70,categoria:"comida",descripcion:"Queso cheddar",img:"https://source.unsplash.com/300x300/?cheese"},
{nombre:"Tomates",precio:35,categoria:"comida",descripcion:"Tomates frescos",img:"https://source.unsplash.com/300x300/?tomato"},
{nombre:"Lechuga",precio:18,categoria:"comida",descripcion:"Lechuga verde",img:"https://source.unsplash.com/300x300/?lettuce"},

{nombre:"Coca Cola",precio:20,categoria:"bebidas",descripcion:"Refresco clásico",img:"https://source.unsplash.com/300x300/?cola"},
{nombre:"Pepsi",precio:19,categoria:"bebidas",descripcion:"Refresco Pepsi",img:"https://source.unsplash.com/300x300/?pepsi"},
{nombre:"Agua",precio:12,categoria:"bebidas",descripcion:"Agua embotellada",img:"https://source.unsplash.com/300x300/?water"},
{nombre:"Jugo naranja",precio:25,categoria:"bebidas",descripcion:"Jugo natural",img:"https://source.unsplash.com/300x300/?orange-juice"},
{nombre:"Café",precio:80,categoria:"bebidas",descripcion:"Café molido",img:"https://source.unsplash.com/300x300/?coffee"},
{nombre:"Té",precio:35,categoria:"bebidas",descripcion:"Té natural",img:"https://source.unsplash.com/300x300/?tea"},
{nombre:"Leche",precio:22,categoria:"bebidas",descripcion:"Leche entera",img:"https://source.unsplash.com/300x300/?milk"},
{nombre:"Chocolate caliente",precio:30,categoria:"bebidas",descripcion:"Bebida chocolate",img:"https://source.unsplash.com/300x300/?hot-chocolate"},

{nombre:"Detergente",precio:90,categoria:"limpieza",descripcion:"Detergente ropa",img:"https://source.unsplash.com/300x300/?detergent"},
{nombre:"Cloro",precio:35,categoria:"limpieza",descripcion:"Cloro multiusos",img:"https://source.unsplash.com/300x300/?bleach"},
{nombre:"Suavizante",precio:60,categoria:"limpieza",descripcion:"Suavizante ropa",img:"https://source.unsplash.com/300x300/?softener"},
{nombre:"Jabón",precio:25,categoria:"limpieza",descripcion:"Jabón antibacterial",img:"https://source.unsplash.com/300x300/?soap"},
{nombre:"Esponja",precio:12,categoria:"limpieza",descripcion:"Esponja cocina",img:"https://source.unsplash.com/300x300/?sponge"},
{nombre:"Limpiador",precio:40,categoria:"limpieza",descripcion:"Limpiador multiusos",img:"https://source.unsplash.com/300x300/?cleaning"},
{nombre:"Desinfectante",precio:50,categoria:"limpieza",descripcion:"Desinfectante hogar",img:"https://source.unsplash.com/300x300/?disinfectant"},

{nombre:"Papel higienico",precio:70,categoria:"hogar",descripcion:"Papel suave",img:"https://source.unsplash.com/300x300/?toilet-paper"},
{nombre:"Escoba",precio:60,categoria:"hogar",descripcion:"Escoba resistente",img:"https://source.unsplash.com/300x300/?broom"},
{nombre:"Trapeador",precio:65,categoria:"hogar",descripcion:"Trapeador microfibra",img:"https://source.unsplash.com/300x300/?mop"},
{nombre:"Cubeta",precio:40,categoria:"hogar",descripcion:"Cubeta plástico",img:"https://source.unsplash.com/300x300/?bucket"},
{nombre:"Velas",precio:30,categoria:"hogar",descripcion:"Velas aromáticas",img:"https://source.unsplash.com/300x300/?candle"},
{nombre:"Servilletas",precio:20,categoria:"hogar",descripcion:"Servilletas papel",img:"https://source.unsplash.com/300x300/?napkins"}

]

let carrito=[]

function cargarProductos(lista=productos){

const cont=document.getElementById("productos")

if(!cont) return

cont.innerHTML=""

lista.forEach((p,i)=>{

cont.innerHTML+=`

<div class="producto">

<a href="producto.html?id=${i}">
<img src="${p.img}">
</a>

<h3>${p.nombre}</h3>

<p>${p.descripcion}</p>

<p class="precio">$${p.precio}</p>

<button onclick="agregarCarrito(${i})">Agregar</button>

</div>

`

})

}

document.getElementById("buscador").addEventListener("keyup",function(){

const texto=this.value.toLowerCase()

const filtrados=productos.filter(p=>

p.nombre.toLowerCase().includes(texto) ||

p.descripcion.toLowerCase().includes(texto) ||

p.categoria.toLowerCase().includes(texto)

)

cargarProductos(filtrados)

})

function mostrarCategoria(cat){

if(cat==="todos"){

cargarProductos()

return

}

const filtrados=productos.filter(p=>p.categoria===cat)

cargarProductos(filtrados)

}

cargarProductos()
