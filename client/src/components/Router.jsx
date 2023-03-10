import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ArticleListPage from "../pages/ArticleListPage";
import ArticlePage from "../pages/ArticlePage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
  return (<>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default Router