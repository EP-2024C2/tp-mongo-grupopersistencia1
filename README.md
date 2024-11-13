[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QBnwEJ5z)
# Estrategias de Persistencia - TP 2 2024 - Documental

## Instrucciones para correr la app:
Posicionarse en el directorio donde se encuentra la aplicacion y ejecutar los siguientes comandos:
1. 'docker build -t <nombre_imagen> .' | Crea una imagen de la aplicación.
2. 'docker compose up -d' | Ejecuta la aplicación y la base de datos desde el archivo 'docker-compose.yml'.
   
**Importante:** 
- Solo hay que crear la imágen de la app si es que esta no está creada. Es decir que el comando 1. solo debe ejecutarse una vez.
- En caso de que se realicen cambios en el código, la imagen debera eliminarse con 'docker rmi <nombre_imagen>' y luego volver a crearse con el comando 1.


## Endpoints:
| Verbo  | Recurso                    | Status code   | Descripción                                           |
| ------ | -------------------------- | ------------- | ----------------------------------------------------- |
| GET    | /productos                 | 200           | Obtener todos los productos                           |
| GET    | /productos/:id             | 200, 404      | Obtener un producto en particular                     |
| POST   | /productos                 | 201, 400      | Crear un producto                                     |
| PUT    | /productos/:id             | 200, 404      | Modificar los datos de un producto en particular      |
| DELETE | /productos/:id             | 200, 404, 500 | Borrar un producto en particular                      |
| POST   | /productos/:id/fabricantes | 201, 404, 400 | Crear la asociación de producto con 1 o N fabricantes |
| GET    | /productos/:id/fabricantes | 200, 404      | Obtener todos los fabricantes de un producto          |
| POST   | /productos/:id/componentes | 201, 404, 400 | Crear la asociación de producto con 1 o N componentes |
| GET    | /productos/:id/componentes | 200, 404      | Obtener todos los componentes de un producto          |
| GET    | /fabricantes               | 200           | Obtener todos los fabricantes                         |
| GET    | /fabricantes/:id           | 200, 404      | Obtener un fabricante en particular                   |
| POST   | /fabricantes               | 201, 400      | Crear un fabricante                                   |
| PUT    | /fabricantes/:id           | 200, 404      | Modificar los datos de un fabricante en particular    |
| DELETE | /fabricantes/:id           | 200, 404, 500 | Borrar un fabricante en particular                    |
| GET    | /fabricantes/:id/productos | 200, 404      | Obtener todos los productos de un fabricante          |
| GET    | /componentes               | 200           | Obtener todos los componentes                         |
| GET    | /componentes/:id           | 200, 404      | Obtener un componente en particular                   |
| POST   | /componentes               | 201, 400      | Crear un componente                                   |
| PUT    | /componentes/:id           | 200, 404      | Modificar los datos de un componente en particular    |
| DELETE | /componentes/:id           | 200, 404, 500 | Borrar un componente en particular                    |
| GET    | /componentes/:id/productos | 200, 404      | Obtener todos los productos de un componente          |

## Ejemplos

A modo de ejemplo se muestra el resultado de algunas respuesta de los endpoind detallado en la tabla de la sección anterior.

Recurso: **_/fabricantes/1/productos_**

Obtiene los datos del fabricante registrado con el id 1, con todos los productos que fabrica, incluyendo los atributos de cada producto y los componentes asociados a esos productos.

```
{
    "id": 1,
    "nombre": "TechCorp",
    "direccion": "1234 Elm St, Ciudad",
    "contacto": "+123456789",
    "pathImgPerfil": "/images/fabricantes/techcorp.jpg",
    "productos": [
        {
            "id": 1,
            "nombre": "Laptop X200",
            "descripcion": "Una laptop de alto rendimiento",
            "precio": 1200.99,
            "pathImg": "/images/productos/laptop-x200.jpg",
            "componentes": [
                {
                    "id": 1,
                    "nombre": "Procesador Intel i7",
                    "descripcion": "Procesador de octava generación"
                },
                {
                    "id": 2,
                    "nombre": "SSD 1TB",
                    "descripcion": "Disco sólido de 1TB de capacidad"
                }
            ]
        },
        {
            "id": 2,
            "nombre": "Smartphone S5",
            "descripcion": "Teléfono inteligente con pantalla OLED",
            "precio": 799.99,
            "pathImg": "/images/productos/smartphone-s5.jpg",
            "componentes": [
                {
                    "id": 3,
                    "nombre": "Pantalla OLED 6.5 pulgadas",
                    "descripcion": "Pantalla de alta definición"
                },
                {
                    "id": 4,
                    "nombre": "Batería 4000mAh",
                    "descripcion": "Batería de larga duración"
                }
            ]
        }
    ]
}
```

Recurso: **_/productos/1/fabricantes_**

Obtiene los datos del producto registrado con el id 1, con todos los fabricantes que lo producen, incluyendo los atributos de cada fabricante.

```
{
    "id": 1,
    "nombre": "Laptop X200",
    "descripcion": "Una laptop de alto rendimiento",
    "precio": 1200.99,
    "pathImg": "/images/productos/laptop-x200.jpg",
    "fabricantes": [
        {
            "id": 1,
            "nombre": "TechCorp",
            "direccion": "1234 Elm St, Ciudad",
            "contacto": "+123456789",
            "pathImgPerfil": "/images/fabricantes/techcorp.jpg"
        },
        {
            "id": 2,
            "nombre": "Innovatech",
            "direccion": "4567 Oak Ave, Ciudad",
            "contacto": "+987654321",
            "pathImgPerfil": "/images/fabricantes/innovatech.jpg"
        }
    ]
}
```

## Consideraciones Finales sobre la Entrega

- Deberán fundamentar las decisiones tomadas respecto de enfoque utilizado en cada relación dentro del archvivo README.md
- El equipo debera entegar un repositorio de github con todas las instrucciones necesarias para correr la api.
- Deberán detallar los commandos necesarios para la instalación y ejecución de la api.
- El puerto de listener deberá ser configurable por variable de entorno

## BONUS

- Investigar como dockerizar la aplicación en node, es decir, generar una imagen de su aplicacion, versionarla y luego poder por a correr la apliación en un contendor.
