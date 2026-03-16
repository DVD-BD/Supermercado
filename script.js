let productos=[
    // FRUTAS Y VERDURAS
    {nombre:"Manzanas",precio:40,categoria:"frutasVerduras",desc:"Manzanas frescas rojas y jugosas.",img:"https://source.unsplash.com/300x300/?apple"},
    {nombre:"Plátanos",precio:30,categoria:"frutasVerduras",desc:"Plátanos maduros ricos en potasio.",img:"https://source.unsplash.com/300x300/?banana"},
    {nombre:"Naranjas",precio:35,categoria:"frutasVerduras",desc:"Naranjas dulces ideales para jugo.",img:"https://source.unsplash.com/300x300/?orange"},
    {nombre:"Tomate",precio:25,categoria:"frutasVerduras",desc:"Tomates frescos para ensaladas.",img:"https://source.unsplash.com/300x300/?tomato"},
    {nombre:"Lechuga",precio:18,categoria:"frutasVerduras",desc:"Lechuga verde fresca.",img:"https://source.unsplash.com/300x300/?lettuce"},
    {nombre:"Zanahoria",precio:20,categoria:"frutasVerduras",desc:"Zanahorias crujientes y saludables.",img:"https://source.unsplash.com/300x300/?carrot"},
    {nombre:"Papa",precio:22,categoria:"frutasVerduras",desc:"Papas frescas para diferentes platillos.",img:"https://source.unsplash.com/300x300/?potato"},
    
    // CARNES
    {nombre:"Pollo",precio:120,categoria:"carnes",desc:"Pechuga de pollo fresca.",img:"https://source.unsplash.com/300x300/?chicken"},
    {nombre:"Carne de res",precio:180,categoria:"carnes",desc:"Carne de res de alta calidad.",img:"https://source.unsplash.com/300x300/?beef"},
    
    // LACTEOS
    {nombre:"Leche",precio:26,categoria:"lacteos",desc:"Leche fresca rica en calcio.",img:"https://source.unsplash.com/300x300/?milk"},
    {nombre:"Queso",precio:70,categoria:"lacteos",desc:"Queso cremoso ideal para comidas.",img:"https://source.unsplash.com/300x300/?cheese"},
    
    // PANADERIA
    {nombre:"Pan blanco",precio:35,categoria:"panaderia",desc:"Pan suave recién horneado.",img:"https://source.unsplash.com/300x300/?bread"},
    {nombre:"Croissant",precio:28,categoria:"panaderia",desc:"Croissant crujiente estilo francés.",img:"https://source.unsplash.com/300x300/?croissant"},
    
    // BEBIDAS
    {nombre:"Coca Cola",precio:20,categoria:"bebidas",desc:"Refresco clásico refrescante.",img:"https://source.unsplash.com/300x300/?cola"},
    {nombre:"Agua",precio:15,categoria:"bebidas",desc:"Agua purificada.",img:"https://source.unsplash.com/300x300/?water"},
    
    // SNACKS
    {nombre:"Chocolate",precio:30,categoria:"snacks",desc:"Chocolate dulce.",img:"https://source.unsplash.com/300x300/?chocolate"},
    {nombre:"Galletas",precio:28,categoria:"snacks",desc:"Galletas crujientes.",img:"https://source.unsplash.com/300x300/?cookies"},
    
    // LIMPIEZA
    {nombre:"Cloro",precio:25,categoria:"limpieza",desc:"Desinfectante para superficies.",img:"https://source.unsplash.com/300x300/?bleach"},
    
    // HOGAR
    {nombre:"Papel higiénico",precio:60,categoria:"hogar",desc:"Papel higiénico suave.",img:"https://source.unsplash.com/300x300/?toilet-paper"}
];

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

function verProducto(i){
    productoActual=productosMostrados[i]
    document.getElementById("productoImg").src=productoActual.img
    document.getElementById("productoNombre").innerText=productoActual.nombre
    document.getElementById("productoDesc").innerText=productoActual.desc
    document.getElementById("productoPrecio").innerText="$"+productoActual.precio
    document.getElementById("productoVista").style.display="block"
}

function cerrarProducto(){document.getElementById("productoVista").style.display="none"}

function agregarDesdeVista(){agregarCarrito(productosMostrados.findIndex(p=>p.nombre===productoActual.nombre)); cerrarProducto()}

function agregarCarrito(i){
    let prod=productosMostrados[i]
    let item=carrito.find(p=>p.nombre===prod.nombre)
    if(item){ item.cantidad++ }
    else{ carrito.push({...prod,cantidad:1}) }
    actualizarCarrito()
}

function actualizarCarrito(){
    let lista=document.getElementById("listaCarrito")
    lista.innerHTML=""
    let total=0
    carrito.forEach((p,i)=>{
        total+=p.precio*p.cantidad
        lista.innerHTML+=`
        <div>${p.nombre} x${p.cantidad} 
            <button onclick="sumar(${i})">+</button>
            <button onclick="restar(${i})">-</button>
        </div>`
    })
    document.getElementById("total").innerText=total
    document.getElementById("contadorCarrito").innerText=carrito.length
}

function sumar(i){ carrito[i].cantidad++; actualizarCarrito() }
function restar(i){ carrito[i].cantidad--; if(carrito[i].cantidad<=0){ carrito.splice(i,1) } actualizarCarrito() }

function abrirCarrito(){ document.getElementById("carrito").classList.add("abierto") }
function cerrarCarrito(){ document.getElementById("carrito").classList.remove("abierto") }

function irCheckout(){ document.getElementById("checkout").style.display="block"; carrito=[]; actualizarCarrito() }
function finalizarCompra(){ document.getElementById("checkout").style.display="none" }

// SLIDER
let slides=[
    "https://source.unsplash.com/1200x400/?supermarket",
    "https://source.unsplash.com/1200x400/?groceries",
    "https://source.unsplash.com/1200x400/?shopping"
]
let slideIndex=0
function nextSlide(){ slideIndex++; if(slideIndex>=slides.length) slideIndex=0; document.getElementById("slideImg").src=slides[slideIndex] }
function prevSlide(){ slideIndex--; if(slideIndex<0) slideIndex=slides.length-1; document.getElementById("slideImg").src=slides[slideIndex] }
setInterval(nextSlide,4000)
