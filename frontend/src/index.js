import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Layout/About/About";
import Contact from "./Components/Layout/Contact/Contact";
import Login from "./Components/User/Login";
import Registration from "./Components/User/Registration";
import Home from "./Components/Layout/Home/Home";
import NotFound from "./Components/Common/NotFound/NotFound";
import "./i18n";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
