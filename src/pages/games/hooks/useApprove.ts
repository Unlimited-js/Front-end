import {ethers} from "ethers"
import { betGGameAddress, betTokenAddress } from "src/config"
import tokenAbi from "src/config/abi/betTokenAbi.json"
import betGameAbi from  "src/config/abi/bet.json"
import useWrite from "src/hook/useWrite"

const  useApprove = ()=>{
    const amount =  ethers.utils.parseEther("10000000");
    const data = useWrite({
        abi:tokenAbi,
        address:betTokenAddress,       
        args:[betGGameAddress,amount],
        functionName:"approve",
       
    })
    return data
}

export default useApprove