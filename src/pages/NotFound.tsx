import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center panel px-10 py-10">
        <p className="eyebrow justify-center mb-3">
          <span className="status-dot bg-sig-crit" />
          404 — route not found
        </p>
        <h1 className="font-display text-5xl font-semibold text-paper mb-3">/dev/null</h1>
        <p className="text-paper-dim mb-6">
          <span className="font-mono text-xs">{location.pathname}</span> isn't a registered service.
        </p>
        <a href="/" className="btn-console border-sig-info/50 bg-sig-info/10 text-sig-info hover:bg-sig-info/20 inline-flex">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
