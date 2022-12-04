
import { betConfig } from "src/config"
import useRead from "src/hook/useRead"


const  useBetEnded = ()=>{
    const {data, ...props} = useRead({
        ...betConfig,   
        functionName:"betEnded"
    })

    // return {
    //     data:data ? +data.toString()/10**18 : "", 
    //     ...props}
    console.log(data)
    return {
        data,
        ...props
    }
}

export default useBetEnded