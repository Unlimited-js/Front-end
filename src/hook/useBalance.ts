import { betTokenAddress } from "src/config"
import { useAccount } from "wagmi"
import betTokenAbi from "../config/abi/betTokenAbi.json"
import useRead from "./useRead"

const useBalance = ()=>{
    const {address} = useAccount()
    const {data, ...props} = useRead({     
        address: betTokenAddress,
        abi: betTokenAbi,
        functionName: 'balanceOf',
        args:[address]
    })

    return {
        data:data ? +data.toString()/10**18:"",
        ...props
    }
}


export default useBalance

