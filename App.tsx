import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PortfolioOverview from './pages/PortfolioOverview';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-light-bg dark:bg-background min-h-screen text-slate-900 dark:text-slate-50 selection:bg-indigo-500 selection:text-white font-sans transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<PortfolioOverview />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
