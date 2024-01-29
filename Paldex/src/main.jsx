import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/TableCamp.css";
import "./styles/App.css";
import "./styles/Card.css";
import "./styles/ViewCard.css";
import "./styles/MediaQuerys.css";
import { ListPals } from "./views/ListPals";
import { Layout } from "./views/Layout";
import { Drops } from "./views/Drops";
import { CampBase } from "./views/CampBase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPals />} />
          <Route path="drops" element={<Drops />} />
          <Route path="camp-base" element={<CampBase />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
