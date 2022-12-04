
import {  spinnerConfig } from "src/config"
import useRead from "src/hook/useRead"

interface ILottery {
    functionName:string
}
const  useSpinner = ({functionName}:ILottery)=>{
    const data = useRead({
        ...spinnerConfig,   
        functionName,
    })
   
   return data
}

export default useSpinner