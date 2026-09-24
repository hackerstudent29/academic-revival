import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface HeaderContextType {
  isHeaderHidden: boolean;
  setHeaderHidden: (hidden: boolean) => void;
  isScrolled: boolean;
  setIsScrolled: (scrolled: boolean) => void;
  hasSecondaryNav: boolean;
  setHasSecondaryNav: (hasNav: boolean) => void;
  isTabSwitching: boolean;
  setIsTabSwitching: (switching: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType>({
  isHeaderHidden: false,
  setHeaderHidden: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
  hasSecondaryNav: false,
  setHasSecondaryNav: () => {},
  isTabSwitching: false,
  setIsTabSwitching: () => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHeaderHidden, setIsHeaderHiddenState] = useState(false);
  const [isScrolled, setIsScrolledState] = useState(false);
  const [hasSecondaryNav, setHasSecondaryNavState] = useState(false);
  const [isTabSwitching, setIsTabSwitchingState] = useState(false);

  const setHeaderHidden = useCallback((hidden: boolean) => {
    setIsHeaderHiddenState((prev) => (prev === hidden ? prev : hidden));
  }, []);

  const setIsScrolled = useCallback((scrolled: boolean) => {
    setIsScrolledState((prev) => (prev === scrolled ? prev : scrolled));
  }, []);

  const setHasSecondaryNav = useCallback((hasNav: boolean) => {
    setHasSecondaryNavState((prev) => (prev === hasNav ? prev : hasNav));
  }, []);

  const setIsTabSwitching = useCallback((switching: boolean) => {
    setIsTabSwitchingState((prev) => (prev === switching ? prev : switching));
  }, []);

  const value = useMemo(
    () => ({
      isHeaderHidden,
      setHeaderHidden,
      isScrolled,
      setIsScrolled,
      hasSecondaryNav,
      setHasSecondaryNav,
      isTabSwitching,
      setIsTabSwitching,
    }),
    [isHeaderHidden, setHeaderHidden, isScrolled, setIsScrolled, hasSecondaryNav, setHasSecondaryNav, isTabSwitching, setIsTabSwitching]
  );

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
