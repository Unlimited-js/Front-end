
import { betConfig } from "src/config"
import useRead from "src/hook/useRead"

interface ILottery {
    functionName:string
}
const  useLottery = ({functionName}:ILottery)=>{
    const data = useRead({
        ...betConfig,   
        functionName,
    })
   
   return data
}

export default useLottery