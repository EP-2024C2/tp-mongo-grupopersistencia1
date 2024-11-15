**Agregar lo siguiente al docker-compose antes de presentar:**

tp_persistencia:
    image: tp_persistencia  
    ports:
      - "3000:3000" 
    environment:
      PORT : 3000
      DB_URL: mongodb://admin:admin1234@mongodb:27017
    depends_on:
      - mongodb
#Esto es el contenedor que contiene la aplicación, la saque para poder seguir usando nodemon en el desarrollo.


*crear imagen de la app (node) : 'docker build -t 'nombre_imagen . '
*ejecutar todo: docker compose up -d



# FALTA:
  * pasar el archivo a docker
  * subir imagen a docker hub
  *agregar controllers de eliminar asociaciones.
///

*para ejecutar (sin docker):
1. docker compose up -d | inicia la bd
2. npm run dev | inicia la app 


*para ejecutar (con docker):
1. docker build -t 'nombre_imagen . | crear imagen de la app (node) : #NO usar si la imagen ya está creada
2. docker compose up -d | ejecuta todo (bd y app)


///
