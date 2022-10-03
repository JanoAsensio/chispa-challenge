import { useEffect, useState } from "react";
import { RESIZE } from "../constants/eventListeners";

interface WindowSize {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  width: number | undefined;
  height: number | undefined;
  isMobile: () => boolean;
  isTablet: () => boolean;
  isDesktop: () => boolean;
}

type PureWindowSize = Pick<WindowSize, "width" | "height">;

// Hook
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<PureWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener(RESIZE, handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener(RESIZE, handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const parsedWidth = windowSize?.width || 0;

  const isMobile = (): boolean => parsedWidth < 768;
  const isTablet = (): boolean => parsedWidth >= 768 && parsedWidth < 1024;
  const isDesktop = (): boolean => parsedWidth >= 1024;

  return {
    width: windowSize?.width,
    height: windowSize?.height,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useWindowSize;
