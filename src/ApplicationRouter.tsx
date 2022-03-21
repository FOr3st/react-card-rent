import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ViewCardPage,
} from "./containers";
import { ModelContextProvider } from "./data";

export const ApplicationRouter = () => {
  return (
    <Router>
      <ModelContextProvider>
        <Routes>
          <Route path="/" element={<ViewCardPage />} />
        </Routes>
      </ModelContextProvider>
    </Router>
  );
};
