import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface HeaderContextType {
  isHeaderHidden: boolean;
  setHeaderHidden: (hidden: boolean) => void;
  isScrolled: boolean;
  setIsScrolled: (scrolled: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType>({
  isHeaderHidden: false,
  setHeaderHidden: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHeaderHidden, setIsHeaderHiddenState] = useState(false);
  const [isScrolled, setIsScrolledState] = useState(false);

  const setHeaderHidden = useCallback((hidden: boolean) => {
    setIsHeaderHiddenState((prev) => (prev === hidden ? prev : hidden));
  }, []);

  const setIsScrolled = useCallback((scrolled: boolean) => {
    setIsScrolledState((prev) => (prev === scrolled ? prev : scrolled));
  }, []);

  const value = useMemo(
    () => ({
      isHeaderHidden,
      setHeaderHidden,
      isScrolled,
      setIsScrolled,
    }),
    [isHeaderHidden, setHeaderHidden, isScrolled, setIsScrolled]
  );

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
