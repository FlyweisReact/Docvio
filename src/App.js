/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/Index";
import DefaultLayout from "./Layouts/DefaultLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
