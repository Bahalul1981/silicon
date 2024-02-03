import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "../../Main/Contact/ContactPage";
import ErrorPage from "../../Main/Error/ErrorPage";
import FeaturePage from "../../Main/Features/FeaturePage";
import Overview from "../../Main/Overview/Overview";
import HomePage from "../../Main/Home/HomePage";
function RouterPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
          <Route path="/features" element={<FeaturePage />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterPage;
