import { IThemeContext } from "@/interfaces/contexts";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<IThemeContext>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    const theme = isDarkMode ? "light" : "dark";
    localStorage.setItem("isDarkMode", theme);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
