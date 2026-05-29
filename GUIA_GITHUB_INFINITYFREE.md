# Guía rápida para subir La Casita a GitHub e InfinityFree

Esta guía considera dos entregas diferentes:

- **GitHub:** se sube el código fuente, documentación y prácticas de Base de Datos. No se sube `vendor` ni `.env`.
- **InfinityFree:** se sube una copia preparada para producción. En este caso sí se necesita `vendor`, pero debe generarse y subirse por FTP, no como ZIP grande.

---

## 1. Subir el repositorio a GitHub

Abre Git Bash dentro de la carpeta raíz de este paquete, donde están `README.md`, `BD/` y `LaCasita/`.

```bash
git init
git add .
git commit -m "Proyecto La Casita con practicas BD y Laravel"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/LaCasita.git
git push -u origin main
```

Si GitHub marca error porque el repositorio ya tenía archivos, usa:

```bash
git pull origin main --allow-unrelated-histories --no-rebase
git push -u origin main
```

Revisa que no se haya subido:

```txt
LaCasita/vendor/
LaCasita/.env
LaCasita/node_modules/
```

---

## 2. Preparar Laravel localmente antes de InfinityFree

Entra a la carpeta del proyecto Laravel:

```bash
cd LaCasita
```

Instala dependencias de producción. No uses `--optimize-autoloader` porque en InfinityFree algunos archivos PHP grandes de Composer pueden ser bloqueados.

```bash
composer install --no-dev --prefer-dist
composer dump-autoload
php artisan key:generate
php artisan migrate:fresh --seed
```

Después entra a phpMyAdmin local y exporta la base de datos `lacasita_laravel` como archivo `.sql`. Ese archivo se importará en InfinityFree.

---

## 3. Crear base de datos en InfinityFree

1. Entra al panel de InfinityFree.
2. Abre **MySQL Databases**.
3. Crea una base de datos.
4. Copia estos datos:
   - `DB_HOST`, por ejemplo `sqlXXX.infinityfree.com`.
   - `DB_DATABASE`, por ejemplo `if0_XXXXXXX_lacasita`.
   - `DB_USERNAME`, por ejemplo `if0_XXXXXXX`.
   - `DB_PASSWORD`, la contraseña de MySQL.
5. Abre phpMyAdmin de InfinityFree.
6. Importa el `.sql` exportado desde local.

---

## 4. Configurar `.env` para InfinityFree

Dentro de `LaCasita/`, copia el archivo:

```txt
.env.infinityfree.example
```

Renómbralo como:

```txt
.env
```

Edita estos valores:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://TU_DOMINIO.infinityfreeapp.com
APP_KEY=base64:TU_KEY_GENERADA_EN_LOCAL
DB_HOST=sqlXXX.infinityfree.com
DB_DATABASE=if0_XXXXXXX_lacasita
DB_USERNAME=if0_XXXXXXX
DB_PASSWORD=TU_PASSWORD_DE_MYSQL
```

---

## 5. Subir archivos a InfinityFree

No subas el ZIP completo si pesa más de 10 MB. Usa FileZilla y sube carpetas/archivos por FTP.

Sube el contenido de `LaCasita/` dentro de:

```txt
/htdocs/
```

Debe quedar así:

```txt
/htdocs/app
/htdocs/bootstrap
/htdocs/config
/htdocs/database
/htdocs/public
/htdocs/resources
/htdocs/routes
/htdocs/storage
/htdocs/vendor
/htdocs/.env
/htdocs/.htaccess
/htdocs/artisan
/htdocs/composer.json
```

La carpeta `vendor` debe subirse por FTP con FileZilla, no comprimida como ZIP grande.

---

## 6. Si `vendor` no se deja subir

Haz esto en local y vuelve a intentar subir `vendor`:

```bash
cd LaCasita
rmdir /s /q vendor
composer install --no-dev --prefer-dist
composer dump-autoload
```

Además, este paquete ya trae en `composer.json`:

```json
"optimize-autoloader": false
```

Esto ayuda a evitar archivos PHP autogenerados demasiado grandes. Si FileZilla marca errores, revisa la pestaña **Failed transfers** y vuelve a subir solo esos archivos.

---

## 7. Probar la demo

Abre:

```txt
https://TU_DOMINIO.infinityfreeapp.com
```

Cuentas de prueba:

| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | admin@lacasita.com | 123456 |
| Empleado | empleado@lacasita.com | 123456 |
| Cliente | cliente@lacasita.com | 123456 |

---

## 8. Agregar el link de InfinityFree al README

Cuando la demo funcione, edita el `README.md` y cambia:

```txt
https://TU_DOMINIO.infinityfreeapp.com
```

por tu enlace real. Después sube el cambio:

```bash
git add README.md
git commit -m "Agrega enlace de demo en InfinityFree"
git push
```
