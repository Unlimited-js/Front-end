import { betGGameAddress } from "src/config"
import betGameAbi from  "src/config/abi/bet.json"
import useWrite from "src/hook/useWrite"

const  usePlay = (num:number)=>{
    const data = useWrite({
        address:betGGameAddress,
        abi:betGameAbi,
        args:[num],
        functionName:"play"
    })
    return data
}

export default usePlay