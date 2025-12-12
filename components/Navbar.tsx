import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're on the homepage, scroll to section
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // If it's a hash link but we're not on homepage, navigate to homepage first then scroll
    else if (href.startsWith('#') && !isHomePage) {
      e.preventDefault();
      setMobileMenuOpen(false);
      navigate('/' + href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on homepage, the Link will navigate to /
  };

  // Navigation links - Work now links to /work page
  const navLinks = [
    { name: 'Work', href: '/work', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto transition-all duration-500 rounded-full border border-white/10 backdrop-blur-xl ${
            isScrolled || mobileMenuOpen
              ? 'bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-2 py-2' 
              : 'bg-white/5 px-3 py-3'
          }`}
        >
          <div className="flex items-center gap-2 md:gap-8">
            
            {/* Logo */}
            <Link 
              to="/" 
              onClick={handleLogoClick} 
              className="pl-4 pr-2 font-serif text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
            >
              JG<span className="text-indigo-500">.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-1.5 py-1.5 border border-white/5">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block pr-1">
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-indigo-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <span>View Resume</span>
                <Download size={16} />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-3 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
             <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-serif text-4xl text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsResumeOpen(true);
                }}
                className="mt-8 flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View Resume
                <Download size={20} />
              </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
