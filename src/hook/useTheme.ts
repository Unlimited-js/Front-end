import {useState, useEffect} from "react"

function useCurrentTheme() {

   const ft = ()=>{
        const item = window.localStorage.getItem('theme');
        const val =  item ===('isDark' || 'blue') ? true : false;
        setIsDark(val)
      }

      const [isDark, setIsDark] = useState<Boolean>(false);
      
      useEffect(()=>{
        ft()
      })
      return {currentTheme:isDark, ft,}
    }


    export default useCurrentTheme