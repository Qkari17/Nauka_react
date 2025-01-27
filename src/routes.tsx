import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { StepperPage } from "./pages/StepperPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationFormRefsHookForm } from "./components";

import { BasketList } from "./components/BasketList/BasketList";
import { ProductPage } from "./pages/ProductPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { CreateProductPage } from "./pages/CreateProductPage";

export const routes = {
  HOME: {
    path: "/",
  },
  COUNTER: {
    path: "/counter",
  },
  GENERATOR: {
    path: "/generator",
  },
  REGISTRATION: {
    path: "/registration",
  },
  STEPPER: {
    path: "/stepper",
  },
  PRODUCT: {
    path: "/product",
  },
  PRODUCT_DETAILS: {
    path: "/products/:id",
  },
  BASKET: {
    path: "/basket",
  },
  CREATE_PRODUCT: {
    path: "/products/create",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout></Layout>,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage></HomePage>,
      },
      {
        path: routes.COUNTER.path,
        element: <CounterPage></CounterPage>,
      },
      {
        path: routes.STEPPER.path,
        element: <StepperPage></StepperPage>,
      },
      {
        path: routes.REGISTRATION.path,
        element: <RegistrationFormRefsHookForm></RegistrationFormRefsHookForm>,
      },
      {
        path: routes.GENERATOR.path,
        element: <GeneratorPage></GeneratorPage>,
      },
      {
        path: routes.PRODUCT.path,
        element: <ProductPage></ProductPage>,
      },
      {
        path: routes.PRODUCT_DETAILS.path,
        element: <ProductDetailsPage></ProductDetailsPage>,
      },
      {
        path: routes.BASKET.path,
        element: <BasketList></BasketList>,
      },
      {
        path: routes.CREATE_PRODUCT.path,
        element: <CreateProductPage></CreateProductPage>,
      },
    ],
  },
]);
