import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teclados from "./routes/teclados"
import Mouses from "./routes/mouses"
import Smartphones from "./routes/smartphones";
import NotFound from "./routes/notfund";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teclados" element={<Teclados/>}></Route>
        <Route path="/mouses" element={<Mouses/>}></Route>
        <Route path="/smartphones" element={<Smartphones/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
