# parcial2

## Instalación y ejecución

1. Instale este proyecto en la ubicación que desee: *git clone https://github.com/Wilton2612/parcial2.git*
2. Instale el proyecto del Back-end en la ubicación que desee: *git clone url https://github.com/isis3710-uniandes/Parcial2_BE_S2.git*
  - Recuerde ejecutar el comando *npm install* 
  - Para que las peticiones al Back-end sea exitosas escriba lo siguiente en el archivo main.ts: app.enableCors(); 
  - Ejecute el proyecto
3. En el proyecto de Front-end ejecute el siguiente comando: *npm install*. Adicionalmente, instale los siguientes librerías:
  - npm install react-router-dom --save
  - npm install react-intl --save
  - npm install bootstrap
  - npm install react-bootstrap bootstrap
4. Luego, para el Fron-end ejecute el comando *SET PORT=#* y luego *npm start*.

## Decisiones y explicación del desarrollo
Dentro de la carpeta src puede encontrar 3 carpetas:
  - **assets**: se guarda la foto que va el login.
  - **components**: allí se almacenan todos los componentes creados:
    - **Card**: en este se divide en dos partes: la grilla de books y la sección donde se muestra el detail del libro. Por simplicidad de dejaron los dos subcomponentes unidos. Sin embargo, en escenarios más reales deben estar completamente separados.
    - **ChaneValue**: allí se muestra el detail para cuando el rol del usuario logeado es "Administrador"
    - **FormLogin**: en este se contruyo la interfaz y se agrego el useEffect para realizar el proceso de inicio de sesión. 
    - **Protected**: este componente se construyo para protejer las rutas, es decir, para no permitir que el usuario ingrese algun endpoint aún cuando no esta logueado y para que una vez esté logueado no pueda devolverse al inicio de sesión a menos de que oprima el botón **cerrar sesión**. 


