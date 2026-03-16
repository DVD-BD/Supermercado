// PRODUCTOS
let productos = [
    // FRUTAS Y VERDURAS
    {nombre:"Manzanas", precio:40, categoria:"frutasVerduras", img:"https://source.unsplash.com/300x300/?apple", desc:"Manzanas frescas y jugosas"},
    {nombre:"Plátanos", precio:30, categoria:"frutasVerduras", img:"https://source.unsplash.com/300x300/?banana", desc:"Plátanos maduros"},
    {nombre:"Lechuga", precio:20, categoria:"frutasVerduras", img:"https://source.unsplash.com/300x300/?lettuce", desc:"Lechuga fresca"},
    {nombre:"Zanahorias", precio:25, categoria:"frutasVerduras", img:"https://source.unsplash.com/300x300/?carrot", desc:"Zanahorias orgánicas"},

    // BEBIDAS
    {nombre:"Coca Cola", precio:20, categoria:"bebidas", img:"https://source.unsplash.com/300x300/?cola", desc:"Refresco clásico"},
    {nombre:"Pepsi", precio:20, categoria:"bebidas", img:"https://source.unsplash.com/300x300/?pepsi", desc:"Refresco Pepsi"},
    {nombre:"Agua", precio:15, categoria:"bebidas", img:"https://source.unsplash.com/300x300/?water", desc:"Agua purificada"},
    {nombre:"Jugo", precio:25, categoria:"bebidas", img:"https://source.unsplash.com/300x300/?juice", desc:"Jugo natural"},

    // SNACKS
    {nombre:"Papas fritas", precio:30, categoria:"snacks", img:"https://source.unsplash.com/300x300/?chips", desc:"Snack crujiente"},
    {nombre:"Chocolate", precio:35, categoria:"snacks", img:"https://source.unsplash.com/300x300/?chocolate", desc:"Chocolate delicioso"},
    {nombre:"Galletas", precio:28, categoria:"snacks", img:"https://source.unsplash.com/300x300/?cookies", desc:"Galletas dulces"},
    {nombre:"Palomitas", precio:22, categoria:"snacks", img:"https://source.unsplash.com/300x300/?popcorn", desc:"Palomitas saladas"},

    // LIMPIEZA
    {nombre:"Detergente", precio:50, categoria:"limpieza", img:"https://source.unsplash.com/300x300/?detergent", desc:"Detergente para ropa"},
    {nombre:"Jabón líquido", precio:35, categoria:"limpieza", img:"https://source.unsplash.com/300x300/?soap", desc:"Jabón para manos"},
    
    // HOGAR
    {nombre:"Escoba", precio:40, categoria:"hogar", img:"https://source.unsplash.com/300x300/?broom", desc:"Escoba de calidad"},
    {nombre:"Trapeador", precio:50, categoria:"hogar", img:"https://source.unsplash.com/300x300/?mop", desc:"Trapeador para limpieza"},

    // PANADERÍA
    {nombre:"Pan", precio:35, categoria:"panaderia", img:"https://source.unsplash.com/300x300/?bread", desc:"Pan fresco"},
    {nombre:"Baguette", precio:30, categoria:"panaderia", img:"https://source.unsplash.com/300x300/?baguette", desc:"Baguette recién horneada"},

    // CARNES
    {nombre:"Pollo", precio:80, categoria:"carnes", img:"https://source.unsplash.com/300x300/?chicken", desc:"Pollo fresco"},
    {nombre:"Res", precio:120, categoria:"carnes", img:"https://source.unsplash.com/300x300/?beef", desc:"Carne de res premium"},

    // LÁCTEOS
    {nombre:"Leche", precio:25, categoria:"lacteos", img:"https://source.unsplash.com/300x300/?milk", desc:"Leche entera"},
    {nombre:"Queso", precio:60, categoria:"lacteos", img:"https://source.unsplash.com/300x300/?cheese", desc:"Queso fresco"}
];

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

// FILTRO POR CATEGORÍA
function filtrar(cat){
    if(cat==="todos"){
        mostrarProductos(productos);
    } else {
        mostrarProductos(productos.filter(p=>p.categoria===cat));
    }
}

// BUSCADOR
function buscarProducto(){
    let texto = document.getElementById("buscador").value.toLowerCase();
    let filtrados = productos.filter(p=>p.nombre.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
}

// AGREGAR AL CARRITO
function agregarCarrito(i){
    let prod = productosMostrados[i];
    let item = carrito.find(p=>p.nombre===prod.nombre);
    if(item){
        item.cantidad++;
    } else {
        carrito.push({...prod,cantidad:1});
    }
    actualizarCarrito();
}

// ACTUALIZAR CARRITO
function actualizarCarrito(){
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";
    let total = 0;
    carrito.forEach((p,i)=>{
        total += p.precio*p.cantidad;
        lista.innerHTML += `
        <div>
            ${p.nombre} x${p.cantidad}
            <button onclick="sumar(${i})">+</button> 
            <button onclick="restar(${i})">-</button>
        </div>
        `;
    });
    document.getElementById("total").innerText = total;
    document.getElementById("contadorCarrito").innerText = carrito.length;
}

function sumar(i){ carrito[i].cantidad++; actualizarCarrito(); }
function restar(i){ 
    carrito[i].cantidad--; 
    if(carrito[i].cantidad<=0) carrito.splice(i,1);
    actualizarCarrito(); 
}

// ABRIR/CERRAR CARRITO
function abrirCarrito(){ document.getElementById("carrito").classList.add("abierto"); }
function cerrarCarrito(){ document.getElementById("carrito").classList.remove("abierto"); }

// VISTA PRODUCTO
function verProducto(i){
    productoActual = productosMostrados[i];
    document.getElementById("productoImg").src = productoActual.img;
    document.getElementById("productoNombre").innerText = productoActual.nombre;
    document.getElementById("productoDesc").innerText = productoActual.desc;
    document.getElementById("productoPrecio").innerText = "$"+productoActual.precio;
    document.getElementById("productoVista").style.display = "block";
}

function cerrarProducto(){ document.getElementById("productoVista").style.display = "none"; }
function agregarDesdeVista(){
    let item = carrito.find(p=>p.nombre===productoActual.nombre);
    if(item){ item.cantidad++; } 
    else{ carrito.push({...productoActual,cantidad:1}); }
    actualizarCarrito();
}

// CHECKOUT
function irCheckout(){ document.getElementById("checkout").style.display = "block"; }
function finalizarCompra(){ carrito=[]; actualizarCarrito(); document.getElementById("checkout").style.display = "none"; }

// SLIDER
const slides=[
    "https://source.unsplash.com/1200x400/?supermarket",
    "https://source.unsplash.com/1200x400/?groceries",
    "https://source.unsplash.com/1200x400/?shopping"
];

let slideIndex = 0;
function nextSlide(){ slideIndex++; if(slideIndex>=slides.length) slideIndex=0; document.getElementById("slideImg").src = slides[slideIndex]; }
function prevSlide(){ slideIndex--; if(slideIndex<0) slideIndex=slides.length-1; document.getElementById("slideImg").src = slides[slideIndex]; }
setInterval(nextSlide,4000);
