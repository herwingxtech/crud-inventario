# Sistema de Gestión de Inventario

Este proyecto es un sistema de gestión de inventario de pila completa, utilizando:

-   **Backend:** Aplicación Express.js (Node.js)
-   **Frontend:** (detalles por determinar del directorio frontend)
-   **Base de Datos:** MySQL
-   **Orquestación:** Docker Compose

## Requisitos Previos

Asegúrate de tener instalado Docker y Docker Compose en tu sistema.

-   [Instalar Docker](https://docs.docker.com/get-docker/)
-   [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto:

1.  Clona este repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd crud-inventario
    ```

2.  Construye y levanta los contenedores Docker:

    ```bash
    docker-compose up --build -d
    ```

    Esto construirá las imágenes del backend y frontend (si es necesario) y iniciará los servicios (base de datos, backend, frontend) en segundo plano (`-d`).

3.  La base de datos se inicializará con los datos especificados en `docker-compose.yml`.

## Acceso a la Aplicación

-   El frontend estará disponible en `http://localhost:8080`.
-   El backend API estará disponible en `http://localhost:3000`.

## Configuración (Opcional)

Las variables de entorno para la base de datos y JWT están configuradas en el archivo `docker-compose.yml`. Puedes modificarlas si es necesario.

-   `DB_HOST`: `db` (nombre del servicio de base de datos en Docker Compose)
-   `DB_USER`: `root`
-   `DB_PASSWORD`: `User`
-   `DB_NAME`: `Database`
-   `JWT_SECRET`: `mysecretkey`
-   `JWT_EXPIRES_IN`: `3600`

Para detener los servicios:

```bash
docker-compose down
``` 