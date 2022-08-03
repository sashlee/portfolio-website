import React, { useState, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(true);
  const toogleTheme = () => {
    setTheme(!theme);
    console.log("clicked");
  };
  return (
    <ThemeContext.Provider value={[theme, toogleTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
