import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // Detects if it's a PUSH (new link) or POP (back button)

  useEffect(() => {
    // If the navigation type is NOT 'POP' (which means Back Button), scroll to top.
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;