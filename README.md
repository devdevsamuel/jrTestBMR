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

ReactRouter para crear la SPA, usa react-router-dom para manejar las rutas sin recargar la página, y tiene una estructura clara con un contexto de carga global LoaderContext, un layout global y una página principal.

Tailwind por su prototipado rapido y al ser una implementacion pequeña tener claridad de los estilos de cada contenedor y evitar la sobre-modularizacion de archivos de css para estilos sencillos que debian ser responsivos y accesibles, tambien fue util en el desarrollo de la logica del modal y su animacion de css.

Adicionalmente agregue funciones de accesibilidad (a11y) para un SWP, la app es accesible para lectores de pantalla y navegación por teclado con el tabulador y uso de la funcionalidad principal asi como para describir por medio de un asistente de voz la informacion del usuario del modal. Utilice roles, etiquetas ARIA y un control de enfoque para el entrypoint del voice reader antes de inciar con el input de busqueda.

## Entrega 
Indicador de carga simulado mientras se obtiene la informacion al abrir el modal y al cargar la informacion de los usuarios
Animacion en la aparicion del modal
Separacion de servicios, en userService.js para el fetch
deploy en GithubPage

Link de captura del voice over y capturas :) <3 

