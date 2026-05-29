# La Casita - Prácticas de Base de Datos y Proyecto Laravel

## Descripción general

**La Casita** es un proyecto académico desarrollado a partir de las prácticas de la materia de **Base de Datos**. El trabajo inicia con el análisis y diseño de una base de datos para una cadena de supermercados y evoluciona hasta una aplicación web implementada en **Laravel**, con autenticación, roles, vistas protegidas, administración de información y conexión con MySQL.

El repositorio reúne dos partes principales:

1. **Prácticas de Base de Datos**, ubicadas en la carpeta `BD/`.
2. **Proyecto web Laravel**, ubicado en la carpeta `LaCasita/`.

La idea principal del proyecto es mostrar la evolución completa de una solución: primero se diseña el modelo conceptual, después se transforma al modelo relacional, posteriormente se implementa con SQL y finalmente se lleva a una aplicación web funcional.

---

## Demo en línea

La demo puede publicarse en InfinityFree. Cuando el sitio esté activo, reemplazar el siguiente enlace por el dominio real:

```txt
https://TU_DOMINIO.infinityfreeapp.com
```

> GitHub se utiliza para entregar el código y la documentación. InfinityFree se utiliza únicamente como hosting de demostración.

## Guía de despliegue

La guía detallada para subir el proyecto se encuentra en:

```txt
GUIA_GITHUB_INFINITYFREE.md
```

**Importante:** no se debe subir `LaCasita/vendor/`, `LaCasita/.env` ni `LaCasita/node_modules/` a GitHub. Para InfinityFree, `vendor` sí se necesita, pero debe generarse localmente y subirse por FTP.

---

## Contenido del repositorio

```txt
.
├── BD/
│   ├── POSIBLE FONDO.png
│   ├── Práctica 2 Bases de Datos (1).docx
│   ├── Practica 3.docx
│   └── Práctica 4.docx
│
└── LaCasita/
    ├── app/
    │   ├── Http/
    │   │   ├── Controllers/
    │   │   └── Middleware/
    │   └── Models/
    ├── bootstrap/
    ├── config/
    ├── database/
    │   ├── migrations/
    │   └── seeders/
    ├── public/
    │   └── assets/
    │       ├── css/
    │       └── img/
    ├── resources/
    │   └── views/
    ├── routes/
    │   └── web.php
    ├── storage/
    ├── tests/
    ├── composer.json
    ├── composer.lock
    ├── .env.example
    └── artisan
```

---

## Objetivo del proyecto

Desarrollar una aplicación web para la administración de una cadena de supermercados llamada **La Casita**, permitiendo gestionar información relacionada con clientes, empleados, usuarios, productos, categorías, proveedores, sucursales, inventario, promociones, ventas y preguntas frecuentes.

El proyecto también tiene como propósito demostrar cómo un diseño de base de datos puede transformarse en una implementación real dentro de un framework web, usando migraciones, modelos, controladores, rutas, vistas y mecanismos de seguridad.

---

## Tecnologías utilizadas

### Diseño y documentación de base de datos

- Microsoft Word.
- Modelo Entidad-Relación Extendido.
- Modelo Relacional.
- MySQL.
- MySQL Workbench.
- Lenguaje DDL.
- Lenguaje DCL.

### Desarrollo web

- PHP 8.2 o superior.
- Laravel 12.
- Composer.
- MySQL o MariaDB.
- Blade.
- HTML.
- CSS.
- JavaScript.
- XAMPP, Laragon o entorno equivalente.

---

# Parte 1: Prácticas de Base de Datos

## Relación entre las prácticas y Laravel

| Práctica | Archivo | Tema principal | Relación con el proyecto Laravel |
|---|---|---|---|
| Práctica 2 | `BD/Práctica 2 Bases de Datos (1).docx` | Modelo Entidad-Relación Extendido. | Define entidades, atributos, cardinalidades, entidades débiles, herencia y relaciones del supermercado. |
| Práctica 3 | `BD/Practica 3.docx` | Transformación del Modelo EER al Modelo Relacional. | Convierte el diseño conceptual en tablas, claves primarias, claves foráneas y reglas de integridad. |
| Práctica 4 | `BD/Práctica 4.docx` | Implementación con DDL, restricciones y DCL. | Sirve como antecedente para la migración de Laravel y para la estructura física de la base de datos. |
| Proyecto Laravel | `LaCasita/` | Aplicación web funcional. | Implementa el modelo mediante migraciones, seeders, modelos, controladores, rutas y vistas. |

---

## Práctica 2: Modelo Entidad-Relación Extendido

La Práctica 2 amplía el modelo Entidad-Relación básico mediante el uso del **Modelo Entidad-Relación Extendido**, aplicado al caso de estudio de una cadena de supermercados.

### Propósito

Representar de manera más completa las reglas de negocio del supermercado mediante elementos avanzados como cardinalidades mínimas y máximas, entidades débiles, especialización, generalización, atributos compuestos y atributos multivaluados.

### Elementos identificados

En esta práctica se trabajan entidades relacionadas con:

- Cliente.
- Producto.
- Proveedor.
- Empleado.
- Sucursal.
- Venta.
- Detalle de venta.
- Inventario.
- Promoción.
- Método de pago.
- Categoría.

### Cardinalidades principales

| Relación | Cardinalidad | Explicación |
|---|---|---|
| Empleado - trabaja_en - Sucursal | `(1,1):(1,n)` | Cada empleado pertenece a una sucursal y una sucursal puede tener varios empleados. |
| Proveedor - suministra - Producto | `(1,n):(1,1)` | Un proveedor puede suministrar varios productos y cada producto pertenece a un proveedor. |
| Cliente - realiza - Venta | `(1,n):(1,1)` | Un cliente puede realizar varias ventas y cada venta corresponde a un cliente. |
| Venta - incluye - Detalle_Venta | `(1,n):(1,1)` | Una venta incluye uno o más detalles y cada detalle pertenece a una venta. |
| Producto - tiene - Promoción | `(0,n):(0,n)` | Un producto puede tener varias promociones y una promoción puede aplicar a varios productos. |
| Producto - pertenece a - Categoría | `(1,1):(1,n)` | Cada producto pertenece a una categoría y una categoría puede contener varios productos. |

### Entidades débiles

| Entidad débil | Dependencia | Justificación |
|---|---|---|
| `Detalle_Venta` | Depende de `Venta` y se relaciona con `Producto`. | No existe sin una venta asociada y representa los productos vendidos. |
| `Inventario` | Depende de `Producto` y `Sucursal`. | Representa la cantidad de un producto en una sucursal específica. |

### Herencia identificada

La práctica maneja una jerarquía de especialización para la entidad **Empleado**.

| Supertipo | Subtipos |
|---|---|
| `Empleado` | Cajero, Gerente, Personal_Limpieza, Seguridad, Almacenista |

La especialización se considera:

- **Disjunta**, porque un empleado pertenece a un solo subtipo.
- **Total**, porque todo empleado debe pertenecer a algún subtipo.

### Importancia para Laravel

Esta práctica funciona como la base conceptual del proyecto, ya que permite identificar las entidades que después se convierten en modelos y tablas dentro de Laravel.

---

## Práctica 3: Transformación del Modelo EER al Modelo Relacional

La Práctica 3 toma el modelo conceptual de la práctica anterior y lo transforma en un **modelo relacional**, listo para ser implementado en un sistema gestor de base de datos.

### Propósito

Convertir entidades, atributos y relaciones del modelo EER en tablas, columnas, claves primarias, claves foráneas y restricciones.

### Aspectos trabajados

- Transformación de entidades fuertes.
- Transformación de entidades débiles.
- Transformación de relaciones uno a muchos.
- Transformación de relaciones muchos a muchos.
- Transformación de relaciones uno a uno.
- Manejo de atributos compuestos.
- Manejo de atributos multivaluados.
- Transformación de jerarquías de herencia.
- Consolidación del esquema relacional.
- Elaboración del diccionario de datos.
- Validación de la semántica del modelo.

### Ejemplos de transformación

| Elemento del modelo EER | Transformación relacional |
|---|---|
| Entidad fuerte `Cliente` | Tabla `cliente` con clave primaria `id_cliente`. |
| Entidad fuerte `Producto` | Tabla `producto` con clave primaria `id_producto`. |
| Relación Producto-Categoría | Clave foránea `id_categoria` en la tabla `producto`. |
| Relación Proveedor-Producto | Clave foránea `id_proveedor` en la tabla `producto`. |
| Relación Producto-Promoción | Tabla intermedia `producto_promocion`. |
| Entidad débil `Detalle_Venta` | Tabla `detalle_venta` relacionada con `venta` y `producto`. |
| Entidad débil `Inventario` | Tabla `inventario` relacionada con `producto` y `sucursal`. |

### Importancia para Laravel

Esta práctica se conecta directamente con las migraciones del proyecto Laravel, ya que las tablas y relaciones fueron implementadas en el archivo:

```txt
LaCasita/database/migrations/2026_05_22_000001_create_lacasita_schema.php
```

---

## Práctica 4: Implementación con DDL y DCL

La Práctica 4 implementa la base de datos en **MySQL**, aplicando restricciones de dominio, integridad referencial y administración de permisos.

### Propósito

Crear físicamente la base de datos, definir tablas, establecer restricciones y aplicar permisos mediante sentencias SQL.

### Elementos trabajados

- Creación de base de datos.
- Uso de MySQL Community Server y MySQL Workbench.
- Creación de tablas mediante DDL.
- Definición de tipos de datos.
- Restricciones `NOT NULL`.
- Restricciones `DEFAULT`.
- Restricciones `UNIQUE`.
- Restricciones `CHECK`.
- Claves primarias.
- Claves foráneas.
- Acciones referenciales.
- Inserción de datos de prueba.
- Consultas de verificación.
- Creación de usuarios.
- Asignación de permisos con `GRANT`.
- Revocación de permisos con `REVOKE`.
- Matriz de permisos.
- Pruebas de integridad y seguridad.

### Base de datos usada

En la práctica se utiliza el nombre:

```sql
CREATE DATABASE lacasita
CHARACTER SET utf8mb4
COLLATE utf8mb4_spanish_ci;
```

### Importancia para Laravel

La Práctica 4 representa la implementación SQL previa. En Laravel, esta implementación se traslada a migraciones para que la estructura pueda crearse automáticamente con:

```bash
php artisan migrate:fresh --seed
```

---

# Parte 2: Proyecto Laravel La Casita

## Descripción de la aplicación

La versión Laravel implementa una aplicación web con rutas públicas, registro de clientes, inicio de sesión, dashboard por rol, operaciones CRUD, consulta de inventario, consulta de ventas, catálogo para clientes y protección de rutas privadas.

El proyecto utiliza el patrón MVC propio de Laravel:

| Capa | Implementación en Laravel |
|---|---|
| Modelo | Archivos dentro de `app/Models/`. |
| Vista | Plantillas Blade dentro de `resources/views/`. |
| Controlador | Archivos dentro de `app/Http/Controllers/`. |
| Rutas | Archivo `routes/web.php`. |
| Base de datos | Migraciones y seeders dentro de `database/`. |
| Seguridad | Middleware `auth`, middleware personalizado `role` y validaciones. |

---

## Funcionalidades principales

### Funcionalidades públicas

- Página principal del supermercado.
- Visualización de categorías.
- Visualización de productos activos.
- Visualización de promociones vigentes.
- Visualización de sucursales activas.
- Visualización de preguntas frecuentes visibles.
- Inicio de sesión.
- Registro de clientes.

### Funcionalidades privadas

- Dashboard según el rol del usuario.
- Administración de productos.
- Administración de categorías.
- Administración de clientes.
- Administración de empleados.
- Administración de proveedores.
- Administración de sucursales.
- Administración de promociones.
- Administración de preguntas frecuentes.
- Consulta de inventario.
- Consulta de ventas.
- Catálogo del cliente.
- Historial de compras del cliente.
- Compra rápida de productos desde el catálogo del cliente.

---

## Roles del sistema

| Rol | Acceso | Funciones principales |
|---|---|---|
| Administrador | Acceso completo a las secciones administrativas. | Gestionar productos, categorías, clientes, empleados, proveedores, sucursales, promociones, FAQ, inventario y ventas. |
| Empleado | Acceso operativo limitado. | Gestionar productos y consultar ventas e inventario. |
| Cliente | Acceso al panel de cliente. | Consultar catálogo, comprar productos disponibles y revisar compras registradas. |

---

## Rutas principales

El proyecto registra rutas públicas, rutas para usuarios invitados, rutas protegidas por sesión y rutas protegidas por rol.

### Rutas públicas

| Método | Ruta | Nombre | Controlador |
|---|---|---|---|
| GET | `/` | `home` | `PublicController@home` |

### Rutas de autenticación

| Método | Ruta | Nombre | Controlador |
|---|---|---|---|
| GET | `/login` | `login` | `AuthController@showLogin` |
| POST | `/login` | `login.store` | `AuthController@login` |
| GET | `/registro` | `register` | `AuthController@showRegister` |
| POST | `/registro` | `register.store` | `AuthController@register` |
| POST | `/logout` | `logout` | `AuthController@logout` |

### Rutas protegidas por sesión

| Método | Ruta | Nombre | Descripción |
|---|---|---|---|
| GET | `/dashboard` | `dashboard` | Muestra el panel correspondiente según el rol. |

### Rutas de administrador y empleado

| Recurso | Ruta base | Acceso |
|---|---|---|
| Productos | `/productos` | Administrador y empleado. |
| Ventas | `/ventas` | Administrador y empleado. |
| Inventario | `/inventario` | Administrador y empleado. |

### Rutas solo de administrador

| Recurso | Ruta base |
|---|---|
| Categorías | `/categorias` |
| Clientes | `/clientes` |
| Empleados | `/empleados` |
| Proveedores | `/proveedores` |
| Sucursales | `/sucursales` |
| Promociones | `/promociones` |
| Preguntas frecuentes | `/faqs` |

### Rutas de cliente

| Método | Ruta | Nombre | Descripción |
|---|---|---|---|
| GET | `/cliente/catalogo` | `cliente.catalogo` | Muestra productos activos y promociones vigentes. |
| GET | `/cliente/compras` | `cliente.compras` | Muestra el historial de ventas asociadas al cliente. |
| POST | `/cliente/compras/{producto}` | `cliente.compras.store` | Realiza una compra rápida y descuenta stock del producto. |

---

## Controladores principales

| Controlador | Función dentro del proyecto |
|---|---|
| `PublicController` | Carga la página principal con categorías, productos, promociones, sucursales y FAQ. |
| `AuthController` | Controla login, registro, validación de credenciales, creación de clientes y cierre de sesión. |
| `DashboardController` | Redirige a la vista correspondiente según el rol autenticado. |
| `ProductoController` | Administra el CRUD de productos. |
| `CategoriaController` | Administra el CRUD de categorías. |
| `ClienteController` | Administra el CRUD de clientes. |
| `EmpleadoController` | Administra el CRUD de empleados. |
| `ProveedorController` | Administra el CRUD de proveedores. |
| `SucursalController` | Administra el CRUD de sucursales. |
| `PromocionController` | Administra el CRUD de promociones. |
| `FaqController` | Administra el CRUD de preguntas frecuentes. |
| `InventarioController` | Muestra inventario por producto y sucursal. |
| `VentaController` | Muestra ventas con cliente, empleado, sucursal, método de pago y detalles. |
| `ClientePanelController` | Controla el catálogo, compras del cliente y compra rápida de productos. |

---

## Modelos principales

| Modelo | Tabla relacionada |
|---|---|
| `User` | `usuario` |
| `Cliente` | `cliente` |
| `Empleado` | `empleado` |
| `Producto` | `producto` |
| `Categoria` | `categoria` |
| `Proveedor` | `proveedor` |
| `Sucursal` | `sucursal` |
| `Inventario` | `inventario` |
| `MetodoPago` | `metodo_pago` |
| `Promocion` | `promocion` |
| `Venta` | `venta` |
| `DetalleVenta` | `detalle_venta` |
| `Faq` | `faq` |
| `Puesto` | `puesto` |

---

## Vistas principales

| Carpeta o vista | Uso |
|---|---|
| `resources/views/home.blade.php` | Página pública principal. |
| `resources/views/auth/login.blade.php` | Formulario de inicio de sesión. |
| `resources/views/auth/register.blade.php` | Formulario de registro. |
| `resources/views/layouts/app.blade.php` | Layout privado de la aplicación. |
| `resources/views/layouts/public.blade.php` | Layout público. |
| `resources/views/panel/admin.blade.php` | Dashboard del administrador. |
| `resources/views/panel/empleado.blade.php` | Dashboard del empleado. |
| `resources/views/panel/cliente.blade.php` | Dashboard del cliente. |
| `resources/views/panel/catalogo.blade.php` | Catálogo visible para cliente autenticado. |
| `resources/views/panel/compras.blade.php` | Historial de compras del cliente. |
| `resources/views/admin/*` | Vistas administrativas de CRUD. |

---

## Base de datos implementada

La migración principal crea tablas del framework y tablas del negocio.

### Tablas de soporte Laravel

```txt
sessions
cache
cache_locks
jobs
```

### Tablas del negocio

```txt
cliente
sucursal
puesto
empleado
usuario
categoria
proveedor
producto
inventario
metodo_pago
promocion
producto_promocion
venta
detalle_venta
faq
```

### Descripción de tablas del negocio

| Tabla | Descripción |
|---|---|
| `cliente` | Guarda datos de clientes registrados. |
| `sucursal` | Guarda sucursales, dirección, teléfono, ciudad, estado y coordenadas. |
| `puesto` | Define puestos de empleados. |
| `empleado` | Guarda empleados y los relaciona con puesto y sucursal. |
| `usuario` | Guarda credenciales, rol, estado y relación con cliente o empleado. |
| `categoria` | Clasifica productos. |
| `proveedor` | Guarda información de proveedores. |
| `producto` | Guarda catálogo, precio, stock, código de barras, imagen, categoría y proveedor. |
| `inventario` | Controla stock por producto y sucursal. |
| `metodo_pago` | Guarda métodos de pago disponibles. |
| `promocion` | Guarda promociones, descuentos, fechas, vigencia e imagen. |
| `producto_promocion` | Relaciona productos con promociones. |
| `venta` | Registra ventas, cliente, empleado, sucursal, método de pago, fecha, hora, estado y total. |
| `detalle_venta` | Registra los productos incluidos en cada venta. |
| `faq` | Guarda preguntas frecuentes visibles en la página pública. |

---

## Relaciones importantes implementadas

| Relación | Implementación |
|---|---|
| Cliente - Usuario | `usuario.id_cliente` referencia a `cliente.id_cliente`. |
| Empleado - Usuario | `usuario.id_empleado` referencia a `empleado.id_empleado`. |
| Empleado - Puesto | `empleado.id_puesto` referencia a `puesto.id_puesto`. |
| Empleado - Sucursal | `empleado.id_sucursal` referencia a `sucursal.id_sucursal`. |
| Producto - Categoría | `producto.id_categoria` referencia a `categoria.id_categoria`. |
| Producto - Proveedor | `producto.id_proveedor` referencia a `proveedor.id_proveedor`. |
| Inventario - Producto | `inventario.id_producto` referencia a `producto.id_producto`. |
| Inventario - Sucursal | `inventario.id_sucursal` referencia a `sucursal.id_sucursal`. |
| Venta - Cliente | `venta.id_cliente` referencia a `cliente.id_cliente`. |
| Venta - Empleado | `venta.id_empleado` referencia a `empleado.id_empleado`. |
| Venta - Sucursal | `venta.id_sucursal` referencia a `sucursal.id_sucursal`. |
| Venta - Método de pago | `venta.id_metodo` referencia a `metodo_pago.id_metodo`. |
| Detalle venta - Venta | `detalle_venta.id_venta` referencia a `venta.id_venta`. |
| Detalle venta - Producto | `detalle_venta.id_producto` referencia a `producto.id_producto`. |
| Producto - Promoción | Tabla puente `producto_promocion`. |

---

## Seguridad implementada

El proyecto no depende únicamente de ocultar botones o enlaces. Las rutas privadas están protegidas desde Laravel.

Medidas principales:

- Login con validación de correo y contraseña.
- Contraseñas almacenadas con `Hash::make()`.
- Validación de cuenta activa antes de permitir el acceso.
- Middleware `auth` para rutas que requieren sesión.
- Middleware personalizado `role` para restringir por rol.
- Protección CSRF en formularios.
- Regeneración de sesión al iniciar sesión.
- Regeneración de sesión al registrarse.
- Invalidación de sesión al cerrar sesión.
- Regeneración del token CSRF al cerrar sesión.
- Bloqueo de rutas para usuarios sin permisos.
- Error 403 cuando un usuario intenta entrar a una sección no autorizada.
- Encabezados de no caché en rutas privadas.
- Validaciones del lado del servidor.
- Uso de Eloquent para consultas y relaciones.

---

## Cuentas de prueba

Después de ejecutar los seeders, se pueden usar estas cuentas iniciales:

| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | `admin@lacasita.com` | `123456` |
| Empleado | `empleado@lacasita.com` | `123456` |
| Cliente | `cliente@lacasita.com` | `123456` |

También existen otros usuarios de tipo empleado cargados por el seeder, como `diana@lacasita.com` y `raul@lacasita.com`, con contraseña `123456`.

---

# Instalación local

## 1. Requisitos previos

Antes de ejecutar el proyecto se requiere tener instalado:

- PHP 8.2 o superior.
- Composer.
- MySQL o MariaDB.
- XAMPP, Laragon o similar.
- Git, opcional.

---

## 2. Entrar a la carpeta del proyecto Laravel

```bash
cd LaCasita
```

---

## 3. Instalar dependencias

```bash
composer install
```

Si el ZIP ya incluye la carpeta `vendor`, el proyecto puede funcionar sin volver a instalar dependencias, pero para una instalación limpia se recomienda ejecutar `composer install`.

---

## 4. Crear archivo `.env`

En Windows:

```bash
copy .env.example .env
```

En Linux o macOS:

```bash
cp .env.example .env
```

---

## 5. Generar llave de Laravel

```bash
php artisan key:generate
```

---

## 6. Configurar base de datos

Abrir el archivo `.env` y configurar la conexión.

Ejemplo para XAMPP:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lacasita
DB_USERNAME=root
DB_PASSWORD=
```

Después crear la base de datos vacía en MySQL:

```sql
CREATE DATABASE lacasita CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
```

---

## 7. Ejecutar migraciones y seeders

```bash
php artisan migrate:fresh --seed
```

Este comando crea todas las tablas y carga datos iniciales de sucursales, puestos, clientes, empleados, usuarios, categorías, proveedores, productos, inventario, métodos de pago, promociones, ventas, detalles de venta y FAQ.

---

## 8. Ejecutar el servidor local

```bash
php artisan serve
```

Abrir en el navegador:

```txt
http://127.0.0.1:8000
```

---

# Comandos útiles

## Ver rutas registradas

```bash
php artisan route:list
```

## Limpiar cachés

```bash
php artisan optimize:clear
```

## Reiniciar la base de datos con datos de prueba

```bash
php artisan migrate:fresh --seed
```

## Ejecutar servidor local

```bash
php artisan serve
```

## Crear enlace simbólico de storage, si se usa almacenamiento público

```bash
php artisan storage:link
```

---

# Pruebas recomendadas

## Prueba de autenticación

1. Entrar a `/login`.
2. Iniciar sesión con `admin@lacasita.com` y contraseña `123456`.
3. Verificar que se muestre el dashboard de administrador.
4. Cerrar sesión.
5. Repetir con empleado y cliente.

## Prueba de roles

1. Iniciar sesión como cliente.
2. Intentar entrar manualmente a `/productos` o `/empleados`.
3. Verificar que el sistema bloquee el acceso.
4. Iniciar sesión como administrador.
5. Verificar que sí se puede acceder a las secciones administrativas.

## Prueba de rutas protegidas

1. Iniciar sesión.
2. Copiar la URL del dashboard.
3. Cerrar sesión.
4. Pegar la URL en una ventana de incógnito.
5. Verificar que el sistema redirige al login o bloquea el acceso.

## Prueba de catálogo del cliente

1. Iniciar sesión como cliente.
2. Entrar a `/cliente/catalogo`.
3. Verificar que se muestran productos activos y promociones vigentes.
4. Comprar un producto disponible.
5. Verificar que el stock del producto disminuye.

---

# Notas importantes sobre el alcance actual

- El proyecto sí cuenta con autenticación, roles, CRUD administrativo y catálogo de cliente.
- La compra rápida del cliente descuenta stock del producto.
- El historial de compras consulta registros existentes en la tabla `venta` relacionados con el cliente.
- El flujo de compra puede mejorarse agregando carrito formal, generación completa de venta y detalle de venta en cada compra.
- El inventario se consulta desde la tabla `inventario`, relacionada con productos y sucursales.
- Las sucursales incluyen coordenadas y enlaces de Google Maps mediante el campo `url_maps`.

---

# Archivos importantes

| Archivo o carpeta | Descripción |
|---|---|
| `routes/web.php` | Define rutas públicas, de autenticación, de cliente, de administrador y de empleado. |
| `app/Http/Controllers/AuthController.php` | Maneja login, registro y logout. |
| `app/Http/Controllers/DashboardController.php` | Carga el panel según el rol. |
| `app/Http/Middleware/RoleMiddleware.php` | Restringe rutas según el rol y agrega encabezados contra caché. |
| `app/Models/User.php` | Modelo autenticable de la tabla `usuario`. |
| `database/migrations/2026_05_22_000001_create_lacasita_schema.php` | Migración principal de la base de datos. |
| `database/seeders/DatabaseSeeder.php` | Inserta datos iniciales. |
| `resources/views/` | Contiene vistas Blade. |
| `public/assets/css/` | Contiene hojas de estilo. |
| `public/assets/img/` | Contiene imágenes de productos, promociones y diseño. |
| `composer.json` | Define dependencias PHP del proyecto. |
| `.env.example` | Plantilla de configuración del entorno. |

---

# Recomendaciones para subir a GitHub

No se recomienda subir archivos sensibles ni dependencias generadas automáticamente.

## No subir

```txt
.env
/vendor
/node_modules
/storage/*.key
```

## Sí subir

```txt
app/
bootstrap/
config/
database/
public/assets/
resources/
routes/
composer.json
composer.lock
.env.example
README.md
```

---

# Problemas comunes y solución

## El comando `php` no se reconoce

En Windows con XAMPP, usar la ruta completa:

```bash
C:\xampp\php\php.exe artisan serve
```

O agregar PHP al PATH del sistema.

## Error de conexión a base de datos

Revisar que MySQL esté encendido en XAMPP y que el archivo `.env` tenga los datos correctos.

## Error porque no existe la base de datos

Crear la base antes de ejecutar migraciones:

```sql
CREATE DATABASE lacasita;
```

## Error de dependencias

Ejecutar:

```bash
composer install
```

## Cambios no aparecen en rutas o vistas

Limpiar caché:

```bash
php artisan optimize:clear
```

---

# Posibles mejoras futuras

- Implementar carrito de compras completo.
- Registrar automáticamente una venta y sus detalles al comprar desde el catálogo.
- Agregar reportes de ventas por fecha, sucursal o producto.
- Agregar filtros avanzados para inventario.
- Implementar subida de imágenes desde el panel administrador.
- Agregar recuperación de contraseña.
- Agregar control de permisos por operación específica.
- Agregar exportación de reportes en PDF o Excel.
- Preparar despliegue en un hosting compatible con Laravel.
- Mejorar la adaptación del proyecto a servidores gratuitos que no soportan completamente Laravel.

---

# Conclusión

El proyecto **La Casita** integra el proceso completo de diseño e implementación de una base de datos. Las prácticas permiten justificar el modelo conceptual, su transformación al modelo relacional y su implementación mediante SQL. Posteriormente, Laravel permite llevar ese diseño a una aplicación web organizada mediante rutas, controladores, modelos, vistas, migraciones, seeders y middleware.

De esta manera, el trabajo demuestra la relación entre los fundamentos de bases de datos y el desarrollo web moderno, incorporando autenticación, roles, seguridad de sesión y administración de información para una cadena de supermercados.
