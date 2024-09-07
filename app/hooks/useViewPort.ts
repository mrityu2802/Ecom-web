import { useState, useEffect } from "react";

export default function useViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    function handleResize(e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
}
