import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { orderLoader } from "./features/order/Order";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";

// Where we define our Routes
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        // maintenant des qu'on a une submission sur ce path l'actio vas etre executé
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
