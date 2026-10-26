import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const isBlog = pathname.startsWith("/blog");
  const isResume = pathname.startsWith("/resume");

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAF8]/80 backdrop-blur-sm border-b border-slate-200/40">
      <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link
          to="/"
          className={`font-mono text-[0.72rem] transition-colors ${
            pathname === "/"
              ? "text-slate-900"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          joshuagatewood
        </Link>
        <div className="flex items-center gap-5">
          <Link
            to="/resume"
            className={`font-mono text-[0.72rem] transition-colors ${
              isResume
                ? "text-slate-900"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            resume
          </Link>
          <Link
            to="/blog"
            className={`font-mono text-[0.72rem] transition-colors ${
              isBlog ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            writing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
