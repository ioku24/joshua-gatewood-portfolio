import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routeMeta, SITE } from "../data/seo";

// Keeps the tab title, description and canonical in step with in-app navigation.
// Crawlers load each URL fresh and get these values from the prerendered HTML instead.
const RouteHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta.find((r) => r.path === pathname);
    if (!meta) return;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${SITE}${meta.path}`);
  }, [pathname]);

  return null;
};

export default RouteHead;
