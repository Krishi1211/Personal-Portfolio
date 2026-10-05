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
    <div className="min-h-dvh flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="label mb-4">404</p>
        <h1 className="font-display text-6xl sm:text-8xl text-gold mb-4">Lost in space</h1>
        <p className="text-paper-dim mb-8">
          <span className="text-paper">{location.pathname}</span> doesn&apos;t exist here.
        </p>
        <a href="/" className="pill">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
