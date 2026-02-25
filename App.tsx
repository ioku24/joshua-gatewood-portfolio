import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MinimalPortfolio from './components/MinimalPortfolio';
import AIBusinessTeam from './components/AIBusinessTeam';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MinimalPortfolio />} />
        <Route path="/ai-business-team" element={<AIBusinessTeam />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
