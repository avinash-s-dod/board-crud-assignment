import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardView } from "./pages";

export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardView />} />
      </Routes>
    </BrowserRouter>
  );
};
