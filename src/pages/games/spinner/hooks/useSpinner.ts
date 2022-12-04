
import {  spinnerConfig } from "src/config"
import useRead from "src/hook/useRead"
import useWrite from "src/hook/useWrite"

interface ILottery {
    functionName:string
    args?:any[]
}
const  useSpinner = ({functionName, args}:ILottery)=>{
    const data = useRead({
        ...spinnerConfig,   
        functionName,
        args
    })
   
   return data
}

export const  useSpinnerWrite = ({functionName, args=[]}:ILottery)=>{
    const data = useWrite({
        ...spinnerConfig,   
        functionName,
        args
    })
   
   return data
}

export default useSpinner