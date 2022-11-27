import React, { createContext, useState } from 'react';
import { useTheme as nextUseTheme  } from 'next-themes'
import useCurrentTheme from 'src/hook/useTheme';

enum Theme {
  dark="dark",
  light="blue"
}

export const ThemeContext = createContext([] as any);

 const ThemeProvider = ({children}:any) => {
  const {currentTheme} = useCurrentTheme()

  const { setTheme:setNextTheme, resolvedTheme} = nextUseTheme()
 
  const [theme, setTheme] = useState<any>(currentTheme)

  const handleTheme = ()=>{
    setTheme((val:boolean)=> !val)
    const value =  theme ? Theme.dark : Theme.light; 
    setNextTheme(value)
    return value
  }

  return (
    <ThemeContext.Provider value={[theme, handleTheme,  resolvedTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider