import React from "react";

//Pages
const Error404 = React.lazy(() => import("Pages/errors/Error404/Error404"));
const Error500 = React.lazy(() => import("Pages/errors/Error500"));
const Homepage = React.lazy(() => import("Pages/Home/home"));

interface RouteObject {
  path: string;
  name?: string;
  component: JSX.Element;
}
const AllRoutes: RouteObject[] = [
  { path: "/", name: "Home", component: <Homepage /> },
  { path: "error-500", name: "Error 500", component: <Error500 /> },
  { path: "*", name: "Error 404", component: <Error404 /> },
];
export {AllRoutes};


import Loader from "Components/Loader/Loader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AllRoutes } from "Routes/Routes";
import "./assets/scss/Theme.scss";

const App = () => {
  const menu = AllRoutes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        element={route.component }
      />
    ) : null;
  });
  return (
    <>
        <Suspense fallback={<Loader />}>
          <Routes>
            {menu}
          </Routes>
        </Suspense>
    </>
  );
};

export default App;
