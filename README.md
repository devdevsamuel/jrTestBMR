#  Prueba Técnica – Desarrollador Jr. Frontend de Samuel Osorio para BMR

 ### Objetivo
 Desarrollar una pequeña **SPA** que consuma una API pública para mostrar un listado de usuarios, permitiendo consultar información más detallada en un **modal**.
 
---

## Pasos de instalación
```bash
mkdir directorioPruebaSamuel

git clone https://github.com/devdevsamuel/jrTestBMR.git

cd directorioPruebaSamuel

npm install

npm run dev
```
---

## Decisiones técnicas
Opté por React.js en lugar de Vue.js, ya que durante la entrevista y en un email de confirmacion se me indicó que podía utilizar la herramienta con la que me sintiera más cómodo.

Use ReactJs + Vite + react para acelerar la creacion del entorno de desarrollo, empaquetado, estructura mínima y DX.

ReactRouter para crear la SPA, usa react-router-dom para manejar las rutas sin recargar la página, 



Tailwind por su prototipado rapido y al ser una implementacion pequeña tener claridad de los estilos de cada contenedor y evitar la sobre-modularizacion de archivos de css para componentes sencillos que debian ser responsivos y accesibles, tambien fue util en el desarrollo de la logica del modal y su animacion de CSS.

Adicionalmente agregue funciones de accesibilidad (a11y) para un mvp de producto de software, la app es accesible para lectores de pantalla y navegación por teclado con el tabulador para el acceso de la funcionalidad principal asi como para describir por medio del asistente la informacion del usuario del modal; Utilice roles, etiquetas ARIA y un control de enfoque para el entrypoint del voice reader antes de inciar con el input de busqueda.

## Entrega 
Indicador de carga simulado mientras se obtiene la informacion al abrir el modal y al cargar la informacion de los usuarios, Animacion en la aparicion del modal, Separacion de servicios; en userService.js para el fetch, contiene una estructura clara con un contexto de carga global LoaderContext, un layout global y una página principal y otra con el video de la prueba de a11, todos los componentes estan tipados con prop-types para validar las props de cada componente, finalmente el despliegue, el build y el hosting estan automatizados en Netlify.

### Link de produccion de la app: 
#### https://jrtestbmr.netlify.app/

### Link de la ruta de la app con el video capturando la pantalla usando el voice reader 
#### https://jrtestbmr.netlify.app/a11Demo

![screenshot app desplegada](https://firebasestorage.googleapis.com/v0/b/portfolio-bedf9.firebasestorage.app/o/projects_assets%2FWhatsApp%20Image%202025-06-18%20at%2000.42.32.jpeg?alt=media&token=ec53517e-83f6-44bb-8ed2-499e1f20a78d)

## :) <3 
