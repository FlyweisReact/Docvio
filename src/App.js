/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import NotFound from "./pages/NotFound/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routeGroup, index) => {
          const Layout = routeGroup.layout || React.Fragment;
          return (
            <Route element={<Layout />} key={`layoutRoute${index}`}>
              {routeGroup.routes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={`route${route.path}`}
                />
              ))}
            </Route>
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
