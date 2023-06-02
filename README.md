# vdg-front
Front para interactuar con el Modelo Predictivo


Requerimiento 🔧
    
    NodeJs
    Vite

Instalación 🔧

1- Para ello debes clonar el repositorio, ingresando a una terminal y ejecutando:

     git clone https://github.com/larammolina/vdg-front.git
    
    
2 - En la carpeta donde se encuentra "package.json" ejecutar en la terminal:

     npm install
      
      
4 - Instalar vite: en la carpeta donde se encuentra "package.json" ejecutar en la terminal:


     npm init vite@latest
      
      
5- Una vez finalizado, para abrir el proyecto ejecutar:

     npm run dev

Dependencias utilizadas 🔧

    NPM
    VITE


---------------------------------------------------------------------------------------------------------------------------

Endpoints

        ${url}/servicios:
            Trae una lista de los servicios disponibles en OM.
            Ejemplo: [nombreServicio : descripcion, nombreServicio2 : descripcion2, …]
        ${url}/servicios/pronosticables:
            Trae una lista de los servicios disponibles para realizar pronósticos.
        ${url}/circuitos:
            Trae lista de los circuitos en OM.
        ${url}/pronosticos/total/${nombreServicio}&days=xx:
            Trae % de disponibilidad a xx periodo de tiempo del servicio indicado.
        ${url}/pronosticos/errores/${nombreServicio}&days=xx:
            Trae % de probabilidad de tipo-error a xx periodo de tiempo del servicio indicado.


