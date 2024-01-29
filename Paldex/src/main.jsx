import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/Camp.css";
import "./styles/Card.css";
import "./styles/ViewCard.css";
import "./styles/MediaQuerys.css";
import { ListPals } from "./views/ListPals";
import { Layout } from "./views/Layout";
import { Drops } from "./views/Drops";
import { Workers } from "./views/Workers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPals />} />
          <Route path="drops" element={<Drops />} />
          <Route path="workers" element={<Workers />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
