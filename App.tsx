import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Nav from "./components/Nav";
import MinimalPortfolio from "./components/MinimalPortfolio";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Resume from "./components/Resume";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MinimalPortfolio />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
