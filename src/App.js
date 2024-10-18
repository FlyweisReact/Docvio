/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.defaultLayout.map((item) => (
            <Route
              path={item.path}
              element={item.element}
              key={`defaultRoutes${item.path}`}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
