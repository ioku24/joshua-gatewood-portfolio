import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Nav from "./components/Nav";
import MinimalPortfolio from "./components/MinimalPortfolio";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Resume from "./components/Resume";
import RouteHead from "./components/RouteHead";
import { Analytics } from "@vercel/analytics/react";

// The router lives outside App: BrowserRouter in index.tsx, StaticRouter in entry-server.tsx.
function App() {
  return (
    <ErrorBoundary>
      <RouteHead />
      <Nav />
      <Routes>
        <Route path="/" element={<MinimalPortfolio />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Analytics />
    </ErrorBoundary>
  );
}

export default App;
