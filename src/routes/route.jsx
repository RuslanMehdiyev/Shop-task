import DashboardLayout from "../layouts/DashboardLayout";
import Basket from "../pages/basket/Basket";
import ProductListComponent from "../pages/products";
import Signin from "../pages/signIn/Signin";
import PrivateRoute from "./privateRoute";

const routes = [
  {
    path: "sign-in",
    element: <Signin />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <ProductListComponent />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];

export default routes;
