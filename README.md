# Challenge Zara Marvel

Se trata de una aplicación web donde podemos ver inicialmente un listado de 50 personajes de Marvel. Y si pulsamos en el icono del corazón que hay a la derecha en el Header podemos ver los personajes que tenemos guardados en favoritos en caso de tener guardados.

Además tenemos una segunda vista en la que si hacemos click en la imagen de cualquier tarjeta, podemos ver la información de dicho personaje, y un listado de máximo 20 cómic en los que aparece ordenados por fecha de salida.

## Stack tecnológico

- React 18.2.0
- TypeScript
- Vite
- Vitest
- React testing library
- Gestion de estado con ContexAPI

## Instrucciones

Clonamos y accedemos al repositorio

> ```console
>  $ git clone https://github.com/Jommartinez/challenge-flat101.git
>  $ cd challenge-flat101
> ```

Instalamos dependencias e iniciamos el proyecto

> ```console
> $ npm install
> $ npm run dev
> ```

Para ejecutar los test utilizamos el siguiente comando

> ```console
> $ npm run test
> ```

## Demo del challenge

El proyecto ha sido desplegado en la siguiente url para fines de demostración : https://challenge-zara-marvel.vercel.app/

## Jerarquía de carpetas

La jerarquía de carpetas que se ha utilizado para el proyecto ha sido la siguiente:

- Dentro de la carpeta dist encontramos el código minificado listo para subir a un servidor

- Dentro de src encontramos todo lo necesario para el desarrollo del proyecto. Encontramos las siguientes carpetas:

📂 api : Aqui nos encontramos con todo lo relacionado con la API de Marvel (conexión y endpoint necesarios)

📂 assets: Aquí se encuentran las imágenes estáticas que utilizamos para el proyecto.

📂 components: En esta carpeta se encuentran todos los componentes de la aplicación y los estilos relacionados a cada componente. (Cada componente está dentro de una carpeta propia)

📂 context: Aqui nos encontramos todo el estado gobal de la aplicación, en este caso dado los requisitos, se ha empleado ContexAPI. Desde aqui se controla la lista de heroes y de favoritos.

📂 hook: Aqui encontramos algunos hooks que se han creado personalizados para favoritos, heroes y comics.

📂 pages: Se encuentras las 2 vistas principales de la aplicación

📂 style: Aqui tenemos algunas variables genericas de CSS y el reset.

📂 test: Aqui tenemos los test que se han realizado con vitest y react testing library

📂 types: aqui encontramso algunas interfaces que se han reutilizado durante el proyecto.

Además de estas carpeta, en la raiz del proyecto tenemos estos archivos a destacar:

📜 .prettierrc al cual le damso las reglas de formateo

📜 .eslintrc.cjs cuenta con las reglas para el linter

## Problemas en el desarrollo

La API de Marvel parece que está inestable y los tiempos de respuesta son muy elevados. He probado tanto desde POSTMAN como desde su propia API interactiva y estoy obteniendo el mismo problema. Los tiempos de espera son de aproximadamente 2 minutos para characters y de 20-30 segundos para comics, y además, cuando supera los 2 minutos de tiempo corta la conexión con el siguiente error:

 <image src="src/assets/error.png">
 <image src="src/assets/time.png">
