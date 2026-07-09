'use client';

import React, { createContext, useContext, useState } from 'react';

interface StickyCtaVisibilityContextValue {
  stickyCtaVisible: boolean;
  setStickyCtaVisible: (visible: boolean) => void;
}

const StickyCtaVisibilityContext = createContext<StickyCtaVisibilityContextValue>({
  stickyCtaVisible: false,
  setStickyCtaVisible: () => undefined,
});

export const StickyCtaVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stickyCtaVisible, setStickyCtaVisible] = useState(false);
  return (
    <StickyCtaVisibilityContext.Provider value={{ stickyCtaVisible, setStickyCtaVisible }}>
      {children}
    </StickyCtaVisibilityContext.Provider>
  );
};

export const useStickyCtaVisibility = () => useContext(StickyCtaVisibilityContext);
