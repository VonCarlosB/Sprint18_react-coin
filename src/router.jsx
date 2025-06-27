import { createBrowserRouter } from "react-router-dom";
import Root from './layouts/Root.jsx';
import Home from './pages/Home.jsx';
import Coin from './pages/Coin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home />},
      { path: "/coin/:id", element: <Coin />}
    ]
  }
])

export default router