import {ethers} from "ethers"
import { betGGameAddress, betTokenConfig } from "src/config"
import useWrite from "src/hook/useWrite"

const  useApprove = (spenderAddress=betGGameAddress)=>{
    const amount =  ethers.utils.parseEther("10000000");
    const data = useWrite({
        ...betTokenConfig,    
        args:[spenderAddress, amount],
        functionName:"approve",
       
    })
    return data
}

export default useApprove