
import { betConfig } from "src/config"
import useRead from "src/hook/useRead"


const  useBetStarted = ()=>{
    // console.log(betConfig)
    const {data, ...props} = useRead({
        ...betConfig,   
        functionName:"betStarted"
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

export default useBetStarted