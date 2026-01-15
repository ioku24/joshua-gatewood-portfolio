import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MinimalPortfolio from './components/MinimalPortfolio';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MinimalPortfolio />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
