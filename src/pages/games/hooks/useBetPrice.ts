
import { betGGameAddress } from "src/config"
import betGameAbi from  "src/config/abi/bet.json"
import useWrite from "src/hook/useWrite"
import useRead from "src/hook/useRead"

const  useBetPrice = ()=>{
    const {data, ...props} = useRead({
        address:betGGameAddress,
        abi:betGameAbi,   
        functionName:"betPrice"
    })
    return {
        data:data ? +data.toString()/10**18 : "", 
        ...props}
}

export default useBetPrice