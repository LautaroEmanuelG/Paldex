import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './styles/index.css'
import "./styles/App.css";
import "./styles/Card.css";
import "./styles/ViewCard.css";
import { ListPals } from "./views/ListPals";
import { Layout } from "./views/Layout";
import { AlternativeForm } from "./views/AlternativeForm";
import { Boss } from "./views/Boss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPals />} />
          <Route path="alternative-form" element={<AlternativeForm />} />
          <Route path="boss" element={<Boss />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
