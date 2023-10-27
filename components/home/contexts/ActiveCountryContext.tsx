"use client";

import { createContext, useState } from "react";

interface ActiveCountryContextInterface {
  activeCountry: Country | null;
  setActiveCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

export const ActiveCountryContext =
  createContext<ActiveCountryContextInterface | null>(null);

export default function ActiveCountryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);

  return (
    <ActiveCountryContext.Provider value={{ activeCountry, setActiveCountry }}>
      {children}
    </ActiveCountryContext.Provider>
  );
}
