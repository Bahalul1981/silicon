import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "../../Main/Contact/ContactPage";
import FeaturePage from "../../Main/Features/FeaturePage";
import Overview from "../../Main/Overview/Overview";
import NewsPage from "../../Main/News/NewsPage";
import HomePage from "../../Main/Home/HomePage";
function RouterPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/features" element={<FeaturePage />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterPage;
