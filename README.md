#  Prueba Técnica – Desarrollador Jr. Frontend de Samuel Osorio

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
Decisiones técnicas
Opté por React.js en lugar de Vue.js, ya que durante la entrevista se me indicó que podía utilizar cualquier herramienta con la que me sintiera más cómodo.

Use ReactJs + Vite + react para acelerar la creacion del entorno de desarrollo, estructura mínima y DX .
Tailwind por su prototipado rapido y al ser una implementacion pequeña  tener claridad de los estilos de cada contenedor y evitar la sobre-modularizacion de archivos de css para estilos sencillos que debian ser responsivos y accesibles.

ReactRouterTu para crear una SPA funcional, usa react-router-dom para manejar las rutas sin recargar la página, y tiene una estructura clara con un contexto de carga global LoaderContext, un layout global y una página principal.

Adicionalmente agregue funciones de accesibilidad (a11y), quedo accesible para lectores de pantalla y navegación por teclado con tabulador suficiente para el uso basico. Utilice roles, etiquetas ARIA y un control  de enfoque para el input de busqueda; que es la funcionalidad principal asi como el SR de la informacion del usuario en el modal.

