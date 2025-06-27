import { createBrowserRouter } from "react-router-dom";
import Root from './layouts/Root.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home />},
    ]
  }
])

export default router

/*
Primero, definimos las rutas de nuestro proyecto en el archivo `routes`. Usando `react-router-dom`, definimos las diferentes rutas que usaremos en el proyecto y cuál componente será renderizado en cada una.

- La ruta raíz (`/`) renderizará el componente `Root`. Este componente mostrará una barra de navegación y el contenido de la página correspondiente a la ruta actual. Esta ruta tendrá a las demás como rutas hijas.

  - La subruta `/` renderizará el componente `Home`. Este componente mostrará la lista de las principales criptomonedas del mercado.

  - La subruta `/coin/:id` renderizará el componente `Coin`. Este componente mostrará información detallada sobre una criptomoneda en particular.

  - La subruta `/favorites` renderizará el componente `Favorites`. Este componente mostrará la lista de criptomonedas favoritas. (Esta se creará como BONUS)
*/