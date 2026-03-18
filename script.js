// LISTA DE PRODUCTOS
const productos = [

    // Frutas y Verduras
    {nombre:"Manzanas", precio:40, categoria:"frutasverduras", img:"./imagenes/manzana.jpg", desc:"Manzanas frescas y jugosas"},
    {nombre:"Plátanos", precio:30, categoria:"frutasverduras", img:"./imagenes/platanos.jpg", desc:"Plátanos maduros y dulces"},
    {nombre:"Lechuga", precio:15, categoria:"frutasverduras", img:"./imagenes/lechuga.jpg", desc:"Lechuga fresca y crujiente"},
    {nombre:"Tomates", precio:20, categoria:"frutasverduras", img:"./imagenes/tomate.jpg", desc:"Tomates rojos y jugosos"},
    {nombre:"Zanahorias", precio:18, categoria:"frutasverduras", img:"./imagenes/zanahoria.jpg", desc:"Zanahorias frescas para tus recetas"},

    // Bebidas
    {nombre:"Coca Cola", precio:20, categoria:"bebidas", img:"./imagenes/cocacola.jpg", desc:"Refresco clásico"},
    {nombre:"Pepsi", precio:20, categoria:"bebidas", img:"./imagenes/pepsi.jpg", desc:"Refresco dulce"},
    {nombre:"Agua", precio:15, categoria:"bebidas", img:"./imagenes/agua.jpg", desc:"Agua purificada"},
    {nombre:"Jugo de Naranja", precio:25, categoria:"bebidas", img:"./imagenes/jugodenaranja.jpg", desc:"Jugo natural"},
    {nombre:"Café", precio:80, categoria:"bebidas", img:"./imagenes/cafe.jpg", desc:"Café premium para despertar"},

    // Snacks
    {nombre:"Papas Fritas", precio:30, categoria:"snacks", img:"./imagenes/papasfritas.jpg", desc:"Snack crujiente"},
    {nombre:"Chocolate", precio:35, categoria:"snacks", img:"./imagenes/chocolate.jpg", desc:"Chocolate delicioso"},
    {nombre:"Galletas", precio:28, categoria:"snacks", img:"./imagenes/galletas.jpg", desc:"Galletas dulces"},
    {nombre:"Palomitas", precio:22, categoria:"snacks", img:"./imagenes/palomitas.jpg", desc:"Palomitas saladas"},
    {nombre:"Nachos", precio:30, categoria:"snacks", img:"./imagenes/nachos.jpg", desc:"Nachos para compartir"},

    // Limpieza
    {nombre:"Detergente", precio:50, categoria:"limpieza", img:"./imagenes/detergente.jpg", desc:"Detergente para ropa"},
    {nombre:"Jabón", precio:25, categoria:"limpieza", img:"./imagenes/jabon.jpg", desc:"Jabón de limpieza"},
    {nombre:"Escoba", precio:60, categoria:"limpieza", img:"./imagenes/escoba.jpg", desc:"Escoba resistente"},
    {nombre:"Trapeador", precio:70, categoria:"limpieza", img:"./imagenes/trapeador.jpg", desc:"Trapeador limpio"},
    {nombre:"Limpiador Multiusos", precio:55, categoria:"limpieza", img:"./imagenes/limpiadormultiusos.jpg", desc:"Para limpiar toda la casa"},

    // Hogar
    {nombre:"Cojín", precio:35, categoria:"hogar", img:"./imagenes/cojin.jpg", desc:"Cojín cómodo"},
    {nombre:"Sábanas", precio:80, categoria:"hogar", img:"./imagenes/sabanas.jpg", desc:"Sábanas suaves"},
    {nombre:"Manta", precio:60, categoria:"hogar", img:"./imagenes/mantacobija.jpg", desc:"Manta cálida"},
    {nombre:"Lámpara", precio:120, categoria:"hogar", img:"./imagenes/lampara.jpg", desc:"Lámpara de escritorio"},
    {nombre:"Reloj de Pared", precio:50, categoria:"hogar", img:"./imagenes/relojdepared.jpg", desc:"Reloj moderno"}

];

// VARIABLES GLOBALES
let productosMostrados = [...productos];
let carrito = [];
let productoActual = null;

// MOSTRAR PRODUCTOS
function mostrarProductos(lista){
    let cont = document.getElementById("productos");
    cont.innerHTML = "";
    lista.forEach((p,i)=>{
        cont.innerHTML += `
        <div class="producto">
            <img src="${p.img}" onclick="verProducto(${i})">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <button onclick="agregarCarrito(${i})">Agregar</button>
        </div>
        `;
    });
    productosMostrados = lista;
}

// BUSCAR PRODUCTO
function buscarProducto(){
    let texto = document.getElementById("buscador").value.toLowerCase();
    mostrarProductos(productos.filter(p=>p.nombre.toLowerCase().includes(texto)));
}

// FILTRAR CATEGORÍA
function filtrar(cat){
    if(cat==="todos"){ mostrarProductos(productos); }
    else{ mostrarProductos(productos.filter(p=>p.categoria===cat)); }
}

// CARRITO
function agregarCarrito(i){
    let prod = productosMostrados[i];
    let item = carrito.find(p=>p.nombre===prod.nombre);
    if(item){ item.cantidad++; } else { carrito.push({...prod, cantidad:1}); }
    actualizarCarrito();
}

function actualizarCarrito(){
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";
    let total=0;
    carrito.forEach((p,i)=>{
        total += p.precio*p.cantidad;
        lista.innerHTML += `<div>${p.nombre} x${p.cantidad} <button onclick="sumar(${i})">+</button> <button onclick="restar(${i})">-</button></div>`;
    });
    document.getElementById("total").innerText=total;
    document.getElementById("contadorCarrito").innerText=carrito.length;
}

function sumar(i){ carrito[i].cantidad++; actualizarCarrito(); }
function restar(i){ carrito[i].cantidad--; if(carrito[i].cantidad<=0){ carrito.splice(i,1);} actualizarCarrito(); }
function abrirCarrito(){ document.getElementById("carrito").classList.add("abierto"); }
function cerrarCarrito(){ document.getElementById("carrito").classList.remove("abierto"); }

// VISTA PRODUCTO
function verProducto(i){
    productoActual = productosMostrados[i];
    document.getElementById("productoImg").src = productoActual.img;
    document.getElementById("productoNombre").innerText = productoActual.nombre;
    document.getElementById("productoDesc").innerText = productoActual.desc;
    document.getElementById("productoPrecio").innerText = "$"+productoActual.precio;
    document.getElementById("productoVista").style.display="block";
}

function cerrarProducto(){ document.getElementById("productoVista").style.display="none"; }
function agregarDesdeVista(){
    let item = carrito.find(p=>p.nombre===productoActual.nombre);
    if(item){ item.cantidad++; } else { carrito.push({...productoActual, cantidad:1}); }
    actualizarCarrito();
}

// CHECKOUT
function irCheckout(){ document.getElementById("checkout").style.display="block"; }
function finalizarCompra(){ carrito=[]; actualizarCarrito(); document.getElementById("checkout").style.display="none"; }

// SLIDER
const slides = [
    "https://source.unsplash.com/1200x400/?supermarket",
    "https://source.unsplash.com/1200x400/?groceries",
    "https://source.unsplash.com/1200x400/?shopping"
];
let slideIndex = 0;
function nextSlide(){ slideIndex++; if(slideIndex>=slides.length) slideIndex=0; document.getElementById("slideImg").src=slides[slideIndex]; }
function prevSlide(){ slideIndex--; if(slideIndex<0) slideIndex=slides.length-1; document.getElementById("slideImg").src=slides[slideIndex]; }
setInterval(nextSlide,4000);

// MOSTRAR TODOS AL INICIO
mostrarProductos(productos);
