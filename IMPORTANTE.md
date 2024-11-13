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


///
