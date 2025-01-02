"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ApplicationContext = createContext(undefined);

const ApplicationProvider = ({ children }) => {
  const [crendential, setCrendential] = useState({
    username: "",
    password: "",
  });
  const [newUserCrendential, setnewUserCrendential] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ApplicationContext.Provider
      value={{
        crendential,
        setCrendential,
        isLoading,
        setIsLoading,
        newUserCrendential,
        setnewUserCrendential,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext };

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplicationContext must be used within an ApplicationProvider"
    );
  }
  return context;
};
